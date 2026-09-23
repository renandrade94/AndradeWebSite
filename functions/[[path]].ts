/**
 * Andrade Serviços de Tecnologia - Cloudflare Pages Catch-All Middleware/Function
 * Handles Markdown content negotiation and real HTTP 404s for Cloudflare Pages.
 */

import { handleRequest } from '../src/worker.ts';

interface PagesContext {
  request: Request;
  env: {
    ASSETS: {
      fetch: (request: Request | string) => Promise<Response>;
    };
  };
  next: () => Promise<Response>;
}

export async function onRequest(context: PagesContext): Promise<Response> {
  return handleRequest(context.request, context.env);
}
