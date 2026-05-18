# IronFurniture - Deploy en VPS (Node.js + PM2 + Nginx)

## Cambios realizados en la refactorización

1. **Removidas dependencias Cloudflare:**
   - `@cloudflare/vite-plugin`
   - `@lovable.dev/vite-tanstack-config`

2. **Nuevos archivos:**
   - `server.cjs` - Servidor HTTP Node.js (entry point de producción)
   - `index.html` - Punto de entrada para Vite build
   - `src/main.tsx` - Entry point del cliente (reemplaza `src/start.ts`)

3. **Archivos modificados:**
   - `package.json` - Scripts actualizados para Node.js
   - `vite.config.ts` - Configuración estándar de Vite (sin Cloudflare)
   - `src/server.ts` - Simplificado (ya no se usa en producción, `server.cjs` es el entry point)

## Arquitectura final

- **Cliente:** SPA React con Vite (build → `dist/client/`)
- **Servidor:** Node.js HTTP nativo (`server.cjs`) sirve archivos estáticos + SPA fallback
- **Runtime:** Node.js estándar (sin Workers, sin Wrangler)

## Requisitos del VPS

- Node.js 18+ (recomendado 20 LTS)
- npm o pnpm
- PM2 (gestión de procesos)
- Nginx (reverse proxy + SSL)

## Instrucciones de deploy

### 1. Clonar y preparar

```bash
ssh usuario@vps-ip
cd /var/www
git clone https://github.com/CreativeGenius123/ironfurniture.git
cd ironfurniture
npm install
```

### 2. Build

```bash
npm run build
```

Esto genera `dist/client/` con todos los assets estáticos.

### 3. PM2 (gestión de procesos)

```bash
npm install -g pm2

# Iniciar con PM2
pm2 start server.cjs --name ironfurniture

# O con variables de entorno
PORT=3000 pm2 start server.cjs --name ironfurniture

# Guardar configuración
pm2 save
pm2 startup systemd
```

### 4. Nginx (reverse proxy)

```bash
sudo nano /etc/nginx/sites-available/ironfurniture
```

Contenido:

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Archivos estáticos (opcional, para mejor performance)
    location /assets/ {
        alias /var/www/ironfurniture/dist/client/assets/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /fonts/ {
        alias /var/www/ironfurniture/dist/client/fonts/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Activar:

```bash
sudo ln -s /etc/nginx/sites-available/ironfurniture /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. SSL con Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

## Comandos de gestión

```bash
# Ver logs
pm2 logs ironfurniture

# Restart
pm2 restart ironfurniture

# Stop
pm2 stop ironfurniture

# Monitoreo
pm2 monit

# Actualizar después de cambios
cd /var/www/ironfurniture
git pull
npm install
npm run build
pm2 restart ironfurniture
```

## Variables de entorno

| Variable | Default | Descripción |
|----------|---------|-------------|
| `PORT` | `3000` | Puerto del servidor Node.js |

## Notas importantes

- El servidor es una **SPA (Single Page Application)** con client-side routing
- Todas las rutas no estáticas redirigen a `index.html`
- No hay SSR server-side real; la hidratación ocurre en el cliente
- Los meta tags SEO deben manejarse con react-helmet o similar si se requiere
- Las fuentes personalizadas se sirven desde `dist/client/fonts/`
