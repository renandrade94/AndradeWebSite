/**
 * Andrade Serviços de Tecnologia - Cloudflare Worker Entry Point
 * Implements:
 * 1. Agent-friendly HTTP 404s with Markdown & HTML bodies
 * 2. Markdown Content Negotiation (acceptmarkdown.com) with Vary: Accept
 * 3. Static Assets Passthrough
 */

import {
  HOMEPAGE_MARKDOWN,
  ABOUT_MARKDOWN,
  CONTACT_MARKDOWN,
  PRIVACY_MARKDOWN,
  NOT_FOUND_MARKDOWN,
} from './server/markdownPages.ts';

export interface Env {
  ASSETS?: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

export const KNOWN_ROUTES = new Set([
  '/',
  '/servicos',
  '/servicos/ai-systems-platforms',
  '/servicos/geo-seo-optimization',
  '/servicos/ai-web-applications',
  '/servicos/ai-agents-automation',
  '/servicos/ai-consulting-acceleration',
  '/cases',
  '/clientes',
  '/sobre',
  '/about',
  '/contato',
  '/contact',
  '/privacy',
  '/privacidade',
]);

export function isStaticAsset(pathname: string): boolean {
  if (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/.well-known/')
  ) {
    return true;
  }
  return /\.(ico|svg|png|jpg|jpeg|webp|gif|txt|xml|json|md|webmanifest|css|js|map)$/i.test(pathname);
}

export function getMarkdownForRoute(pathname: string): string | null {
  if (pathname === '/') return HOMEPAGE_MARKDOWN;
  if (pathname === '/about' || pathname === '/sobre') return ABOUT_MARKDOWN;
  if (pathname === '/contact' || pathname === '/contato') return CONTACT_MARKDOWN;
  if (pathname === '/privacy' || pathname === '/privacidade') return PRIVACY_MARKDOWN;
  if (pathname === '/servicos' || pathname.startsWith('/servicos/')) return HOMEPAGE_MARKDOWN;
  if (pathname === '/cases' || pathname === '/clientes') return HOMEPAGE_MARKDOWN;
  return null;
}

export function generate404Html(requestedPath: string): string {
  return `<!doctype html>
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
    <p>O recurso solicitado (<code>${requestedPath}</code>) não existe ou foi movido para outro endereço.</p>
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
}

export async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/+$/, '') || '/';
  const acceptHeader = request.headers.get('accept') || '';
  const wantsMarkdown = /text\/markdown/i.test(acceptHeader);

  // 1. Static asset requests pass through directly to assets binding
  if (isStaticAsset(pathname)) {
    if (env.ASSETS) {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.status === 200) {
        const headers = new Headers(assetRes.headers);
        headers.set('Vary', 'Accept');
        return new Response(assetRes.body, {
          status: assetRes.status,
          statusText: assetRes.statusText,
          headers,
        });
      }
      return assetRes;
    }
  }

  // 2. Check if route is known
  const isKnownRoute = KNOWN_ROUTES.has(pathname);

  // 3. Handle Markdown content negotiation
  if (wantsMarkdown) {
    if (isKnownRoute) {
      const mdContent = getMarkdownForRoute(pathname) || HOMEPAGE_MARKDOWN;
      return new Response(mdContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // 404 for unknown route with Accept: text/markdown
    return new Response(NOT_FOUND_MARKDOWN(pathname), {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }

  // 4. Handle HTML requests:
  if (!isKnownRoute && !isStaticAsset(pathname)) {
    // Nonexistent path returns real HTTP 404 status
    return new Response(generate404Html(pathname), {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }

  // 5. Valid route requested in HTML -> serve index.html via ASSETS binding or fallback
  if (env.ASSETS) {
    // Fetch index.html
    const assetRequest = new Request(new URL('/', request.url).toString(), {
      method: request.method,
      headers: request.headers,
    });
    const res = await env.ASSETS.fetch(assetRequest);
    const headers = new Headers(res.headers);
    headers.set('Vary', 'Accept');
    return new Response(res.body, {
      status: 200,
      headers,
    });
  }

  return new Response('OK', { status: 200 });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return handleRequest(request, env);
  },
};
