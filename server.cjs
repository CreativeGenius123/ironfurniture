const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, "dist/client");

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".otf": "font/otf",
  ".ttf": "font/ttf",
};

function serveStaticFile(filePath, res) {
  try {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = req.url || "/";
    const pathname = new URL(url, `http://${req.headers.host}`).pathname;

    // Archivos estáticos
    if (pathname.startsWith("/assets/") || pathname.startsWith("/fonts/")) {
      const filePath = path.resolve(DIST_DIR, pathname.slice(1));
      if (fs.existsSync(filePath)) {
        serveStaticFile(filePath, res);
        return;
      }
    }

    // Favicon
    if (pathname === "/favicon.svg" || pathname === "/favicon.png") {
      const filePath = path.resolve(DIST_DIR, pathname.slice(1));
      if (fs.existsSync(filePath)) {
        serveStaticFile(filePath, res);
        return;
      }
    }

    // SPA fallback: servir index.html para rutas no estáticas
    const indexPath = path.resolve(DIST_DIR, "index.html");
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
    } else {
      res.writeHead(500);
      res.end("Build not found. Run npm run build first.");
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
