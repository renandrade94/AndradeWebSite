import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// List of routes to pre-generate index.html for
const routes = [
  'servicos',
  'servicos/ai-systems-platforms',
  'servicos/geo-seo-optimization',
  'servicos/ai-web-applications',
  'servicos/ai-agents-automation',
  'servicos/ai-consulting-acceleration',
  'cases',
  'clientes',
  'sobre',
  'about',
  'contato',
  'contact',
  'privacy',
  'privacidade',
];

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml, 'utf8');
}

console.log(`Pre-rendered ${routes.length} route files successfully.`);

// Generate 404.html in dist
const notFoundHtml = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 - Página Não Encontrada | Andrade Serviços de Tecnologia</title>
  <meta name="robots" content="noindex, follow" />
  <style>
    body {
      margin: 0;
      background-color: #07090e;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
      padding: 1.5rem;
      box-sizing: border-box;
    }
    .card {
      max-width: 580px;
      background: #0e131f;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 3rem 2rem;
    }
    .code {
      font-size: 5rem;
      font-weight: 900;
      color: #2dd4bf;
      line-height: 1;
      margin-bottom: 1rem;
      font-family: monospace;
    }
    h1 {
      font-size: 1.8rem;
      margin: 0 0 1rem 0;
      color: #ffffff;
    }
    p {
      color: #94a3b8;
      font-size: 1.05rem;
      line-height: 1.6;
      margin: 0 0 2rem 0;
    }
    .links {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    a.btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .btn-primary {
      background-color: #2dd4bf;
      color: #090a0f;
    }
    .btn-secondary {
      background-color: rgba(255, 255, 255, 0.06);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .agent-note {
      margin-top: 2rem;
      font-size: 0.85rem;
      color: #64748b;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 1.25rem;
    }
    .agent-note a {
      color: #2dd4bf;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="code">404</div>
    <h1>Página Não Encontrada</h1>
    <p>O recurso solicitado não existe ou foi movido para outro endereço.</p>
    <div class="links">
      <a href="/" class="btn btn-primary">Voltar ao Início</a>
      <a href="/servicos" class="btn btn-secondary">Ver Serviços</a>
      <a href="/contact" class="btn btn-secondary">Contato</a>
    </div>
    <div class="agent-note">
      AI Agents / Crawlers: Consult <a href="/llms.txt">llms.txt</a>, <a href="/.well-known/agent-instructions.md">agent-instructions</a> or <a href="/sitemap.xml">sitemap.xml</a>.
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
console.log('Generated dist/404.html successfully.');
