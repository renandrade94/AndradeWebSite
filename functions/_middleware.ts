/**
 * Andrade Serviços de Tecnologia - Cloudflare Pages Global Middleware
 * Implements:
 * 1. Markdown Content Negotiation (acceptmarkdown.com) with Vary: Accept on homepage and all pages
 * 2. Real HTTP 404s for unknown routes (Markdown for agents, HTML for browsers)
 * 3. Static Assets & HTML Passthrough with Vary: Accept header
 */

import {
  KNOWN_ROUTES,
  isStaticAsset,
  getMarkdownForRoute,
  generate404Html,
} from '../src/worker.ts';
import {
  HOMEPAGE_MARKDOWN,
  NOT_FOUND_MARKDOWN,
} from '../src/server/markdownPages.ts';

export interface PagesContext {
  request: Request;
  env?: Record<string, any>;
  next: (request?: Request | string) => Promise<Response>;
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url);
  const pathname = url.pathname.replace(/\/+$/, '') || '/';
  const acceptHeader = context.request.headers.get('accept') || '';
  const wantsMarkdown = /text\/markdown/i.test(acceptHeader);

  // 1. Static assets pass through directly to static server
  if (isStaticAsset(pathname)) {
    const res = await context.next();
    const headers = new Headers(res.headers);
    headers.set('Vary', 'Accept');
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  }

  const isKnownRoute = KNOWN_ROUTES.has(pathname);

  // 2. Markdown content negotiation
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

  // 3. HTML requests for unknown routes -> return real HTTP 404
  if (!isKnownRoute) {
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

  // 4. HTML requests for known routes -> pass to static asset (index.html) and add Vary: Accept
  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set('Vary', 'Accept');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
