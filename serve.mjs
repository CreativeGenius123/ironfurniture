import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { resolve, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PORT = process.env.PORT || 3000;
const CLIENT_DIR = resolve(__dirname, "dist/client");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".otf": "font/otf",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".webp": "image/webp",
};

// Load the TanStack Start SSR handler
const { default: handler } = await import("./dist/server/server.js");

function serveStatic(filePath, res) {
  const content = readFileSync(filePath);
  const ext = extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(content);
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Serve static assets from dist/client
  const staticPath = join(CLIENT_DIR, pathname === "/" ? "" : pathname);
  if (pathname !== "/" && existsSync(staticPath) && !staticPath.endsWith("/")) {
    try {
      serveStatic(staticPath, res);
      return;
    } catch {}
  }

  // Forward all other requests to TanStack Start SSR handler
  try {
    const headers = {};
    for (const [k, v] of Object.entries(req.headers)) {
      if (v) headers[k] = Array.isArray(v) ? v.join(", ") : v;
    }

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length ? Buffer.concat(chunks) : undefined;

    const request = new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers,
      body: body?.length ? body : undefined,
    });

    const response = await handler.fetch(request, {}, {});

    const resHeaders = {};
    response.headers.forEach((v, k) => { resHeaders[k] = v; });
    res.writeHead(response.status, resHeaders);

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Iron Furniture running on http://localhost:${PORT}`);
});
