const http = require('http');
const fs = require('fs');
const path = require('path');

// MIME types mapping
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  
  // Serve index.html for root requests
  if (filePath === './') {
    filePath = './index.html';
  }

  // Get file extension
  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read and serve the file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found - try to serve index.html for SPA routing
        fs.readFile('./index.html', (error, content) => {
          if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            });
            res.end(content, 'utf8');
          }
        });
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
    } else {
      // Set appropriate cache headers
      const cacheHeaders = {
        'Content-Type': contentType
      };
      
      // For static assets (images, CSS, JS), allow some caching but make it revalidate
      if (['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.avif'].includes(extname)) {
        cacheHeaders['Cache-Control'] = 'public, max-age=300, must-revalidate'; // 5 minutes with revalidation
      } else {
        // For HTML files, prevent caching to ensure updates are visible
        cacheHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        cacheHeaders['Pragma'] = 'no-cache';
        cacheHeaders['Expires'] = '0';
      }

      res.writeHead(200, cacheHeaders);
      res.end(content);
    }
  });
});

const PORT = 5000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`GlowOnCall website running at http://${HOST}:${PORT}/`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});