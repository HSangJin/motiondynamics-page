import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5500;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let pathname = req.url.split('?')[0];
  
  // 루트 경로
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  let filePath = path.join(__dirname, pathname);
  
  // 보안: 경로 벗어나기 방지
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  
  // 파일 확인
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 파일이 없으면 index.html로 처리 (SPA 라우팅)
      filePath = path.join(__dirname, 'index.html');
    }
    
    // 파일 읽기
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`✓ SPA Server running at http://127.0.0.1:${PORT}/`);
  console.log(`✓ All routes redirect to index.html for React Router`);
  console.log(`✓ Press Ctrl+C to stop`);
});
