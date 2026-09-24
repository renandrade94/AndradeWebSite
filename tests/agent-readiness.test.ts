import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleRequest, KNOWN_ROUTES } from '../src/worker.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Priority 1: Agent-Friendly 404s', () => {
  it('should return HTTP 404 with Markdown body for unknown paths when Accept: text/markdown', async () => {
    const request = new Request('https://tecnologiandrade.com.br/some-path-that-does-not-exist', {
      headers: { Accept: 'text/markdown' },
    });
    const response = await handleRequest(request, {});

    assert.equal(response.status, 404, 'Status must be HTTP 404');
    const contentType = response.headers.get('content-type') || '';
    assert.match(contentType, /text\/markdown/, 'Content-Type must be text/markdown');
    assert.equal(response.headers.get('vary'), 'Accept', 'Vary header must be Accept');

    const body = await response.text();
    assert.ok(body.length >= 20, 'Markdown error body must be at least 20 characters');
    assert.match(body, /404/i, 'Body should explain 404 error');
    assert.match(body, /llms\.txt/, 'Body must point agents to llms.txt');
    assert.match(body, /sitemap\.xml/, 'Body must point agents to sitemap.xml');
  });

  it('should return HTTP 404 with HTML body for unknown paths when Accept: text/html', async () => {
    const request = new Request('https://tecnologiandrade.com.br/random-nonexistent-route', {
      headers: { Accept: 'text/html' },
    });
    const response = await handleRequest(request, {});

    assert.equal(response.status, 404, 'Status must be HTTP 404');
    const contentType = response.headers.get('content-type') || '';
    assert.match(contentType, /text\/html/, 'Content-Type must be text/html');
    assert.equal(response.headers.get('vary'), 'Accept', 'Vary header must be Accept');

    const body = await response.text();
    assert.match(body, /404/, 'HTML body must contain 404');
    assert.match(body, /llms\.txt/, 'HTML body should mention agent resources');
  });
});

describe('Priority 2: Content Available Without JavaScript', () => {
  it('should have at least 500 characters of meaningful content in raw index.html without JS', () => {
    const htmlPath = path.join(rootDir, 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    const start = html.indexOf('<div id="root">');
    const end = html.lastIndexOf('</div>');
    assert.ok(start !== -1 && end !== -1, 'Root container must exist in index.html');

    const innerContent = html.substring(start, end).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    assert.ok(
      innerContent.length >= 500,
      `Raw HTML text content must be at least 500 characters (found ${innerContent.length})`
    );

    assert.match(html, /<h1[^>]*>.*?<\/h1>/s, 'Must contain a clear H1');
    assert.match(html, /<h2[^>]*>.*?<\/h2>/s, 'Must contain sequential H2');
    assert.match(html, /<h3[^>]*>.*?<\/h3>/s, 'Must contain sequential H3');
  });
});

describe('Priority 3 & 4: Agent Crawler Reachability & Bot Detection', () => {
  it('should explicitly allow major AI crawlers in robots.txt', () => {
    const robotsPath = path.join(rootDir, 'public', 'robots.txt');
    const robots = fs.readFileSync(robotsPath, 'utf8');

    const requiredBots = [
      'GPTBot',
      'ChatGPT-User',
      'ClaudeBot',
      'Claude-Web',
      'Google-Extended',
      'DeepSeekBot',
      'PerplexityBot',
      'ora-agent',
      'Applebot',
    ];

    for (const bot of requiredBots) {
      assert.ok(
        robots.includes(`User-agent: ${bot}`),
        `robots.txt must include User-agent: ${bot}`
      );
    }
  });

  it('should declare Vary: Accept and allow Cloudflare Insights in public/_headers', () => {
    const headersPath = path.join(rootDir, 'public', '_headers');
    const headers = fs.readFileSync(headersPath, 'utf8');
    assert.match(headers, /Vary:\s*Accept/, '_headers must include Vary: Accept');
    assert.match(headers, /static\.cloudflareinsights\.com/, 'CSP must allow static.cloudflareinsights.com in script-src');
    assert.match(headers, /cloudflareinsights\.com/, 'CSP must allow cloudflareinsights.com in connect-src');
  });
});

describe('Priority 5: Markdown Content Negotiation (acceptmarkdown.com)', () => {
  it('should return Markdown with Vary: Accept on homepage when Accept: text/markdown is sent', async () => {
    const request = new Request('https://tecnologiandrade.com.br/', {
      headers: { Accept: 'text/markdown' },
    });
    const response = await handleRequest(request, {});

    assert.equal(response.status, 200, 'Status must be 200');
    const contentType = response.headers.get('content-type') || '';
    assert.match(contentType, /text\/markdown/, 'Content-Type must be text/markdown');
    assert.equal(response.headers.get('vary'), 'Accept', 'Vary header must be Accept');

    const body = await response.text();
    assert.ok(body.length > 100, 'Markdown body must be non-empty');
    assert.match(body, /Andrade Serviços de Tecnologia/, 'Markdown body must contain company name');
    assert.match(body, /When to Use This/, 'Markdown body must include when-to-use guidance');
  });

  it('should serve HTML with Vary: Accept on homepage when Accept: text/html is sent', async () => {
    // Mock env.ASSETS to return dummy HTML
    const mockEnv = {
      ASSETS: {
        fetch: async () =>
          new Response('<html><body>Andrade</body></html>', {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          }),
      },
    };

    const request = new Request('https://tecnologiandrade.com.br/', {
      headers: { Accept: 'text/html' },
    });
    const response = await handleRequest(request, mockEnv);

    assert.equal(response.status, 200, 'Status must be 200');
    assert.equal(response.headers.get('vary'), 'Accept', 'Vary header must be Accept');
  });

  it('should have public/_routes.json including /* so Cloudflare Pages routes / to functions', () => {
    const routesPath = path.join(rootDir, 'public', '_routes.json');
    assert.ok(fs.existsSync(routesPath), '_routes.json must exist in public directory');
    const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
    assert.ok(Array.isArray(routes.include) && routes.include.includes('/*'), 'include must include /*');
    assert.ok(Array.isArray(routes.exclude) && routes.exclude.includes('/assets/*'), 'exclude must contain /assets/*');
  });

  it('should verify functions/_middleware.ts handles Markdown negotiation and 404s for Cloudflare Pages', async () => {
    const { onRequest } = await import('../functions/_middleware.ts');

    // 1. Homepage Markdown negotiation
    const mdReq = new Request('https://tecnologiandrade.com.br/', {
      headers: { Accept: 'text/markdown' },
    });
    const mdRes = await onRequest({
      request: mdReq,
      next: async () => new Response('<html></html>', { status: 200 }),
    });
    assert.equal(mdRes.status, 200);
    assert.match(mdRes.headers.get('content-type') || '', /text\/markdown/);
    assert.equal(mdRes.headers.get('vary'), 'Accept');
    const mdBody = await mdRes.text();
    assert.ok(mdBody.includes('Andrade Serviços de Tecnologia'));

    // 2. Homepage HTML passthrough with Vary: Accept
    const htmlReq = new Request('https://tecnologiandrade.com.br/', {
      headers: { Accept: 'text/html' },
    });
    const htmlRes = await onRequest({
      request: htmlReq,
      next: async () => new Response('<!doctype html><html></html>', {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }),
    });
    assert.equal(htmlRes.status, 200);
    assert.equal(htmlRes.headers.get('vary'), 'Accept');

    // 3. Unknown route with Markdown
    const unknownMdReq = new Request('https://tecnologiandrade.com.br/random-unknown-agent-probe', {
      headers: { Accept: 'text/markdown' },
    });
    const unknownMdRes = await onRequest({
      request: unknownMdReq,
      next: async () => new Response('should not be called', { status: 200 }),
    });
    assert.equal(unknownMdRes.status, 404);
    assert.match(unknownMdRes.headers.get('content-type') || '', /text\/markdown/);
    assert.equal(unknownMdRes.headers.get('vary'), 'Accept');

    // 4. Unknown route with HTML
    const unknownHtmlReq = new Request('https://tecnologiandrade.com.br/random-unknown-browser-probe', {
      headers: { Accept: 'text/html' },
    });
    const unknownHtmlRes = await onRequest({
      request: unknownHtmlReq,
      next: async () => new Response('should not be called', { status: 200 }),
    });
    assert.equal(unknownHtmlRes.status, 404);
    assert.match(unknownHtmlRes.headers.get('content-type') || '', /text\/html/);
    assert.equal(unknownHtmlRes.headers.get('vary'), 'Accept');
  });
});

describe('Priority 6 & 8: JSON-LD Structured Data & Organization Completeness', () => {
  it('should contain complete static JSON-LD Organization schema in index.html', () => {
    const htmlPath = path.join(rootDir, 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    assert.ok(jsonLdMatch, 'Static JSON-LD script must be present in index.html');

    const schema = JSON.parse(jsonLdMatch[1]);
    assert.ok(schema['@graph'], 'Schema must have @graph');

    const org = schema['@graph'].find((item: any) =>
      Array.isArray(item['@type']) ? item['@type'].includes('Organization') : item['@type'] === 'Organization'
    );
    assert.ok(org, 'Organization entity must be present in @graph');
    assert.equal(org.name, 'Andrade Serviços de Tecnologia');
    assert.ok(org.taxID, 'taxID / CNPJ must be present');
    assert.ok(org.telephone, 'telephone must be present');
    assert.equal(org.email, undefined, 'no non-existent email should be present');

    // Address check
    assert.ok(org.address, 'address must be present');
    assert.equal(org.address['@type'], 'PostalAddress', 'address must be PostalAddress');
    assert.equal(org.address.addressLocality, 'São Paulo');

    // ContactPoint check
    assert.ok(Array.isArray(org.contactPoint) && org.contactPoint.length > 0, 'contactPoint must be an array');
    const cp = org.contactPoint[0];
    assert.equal(cp['@type'], 'ContactPoint');
    assert.ok(cp.telephone, 'contactPoint must have telephone');
    assert.ok(cp.url, 'contactPoint must have contact url');
    assert.equal(cp.contactType, 'customer service', 'contactPoint must have contactType');
    assert.equal(cp.email, undefined, 'contactPoint should not have non-existent email');
  });
});

describe('Priority 7: Agent Instruction / When-to-Use', () => {
  it('should include a dedicated When to Use This section in llms.txt', () => {
    const llmsPath = path.join(rootDir, 'public', 'llms.txt');
    const content = fs.readFileSync(llmsPath, 'utf8');

    assert.match(content, /## When to Use This/i, 'llms.txt must have When to Use This section');
    assert.match(content, /Casos de Uso Ideais|Best-Fit Use Cases/i, 'Must define best-fit use cases');
    assert.match(content, /Quando N[ÃA]O Acionar|When NOT to Use/i, 'Must define when not to use');
    assert.match(content, /Como um Agente Deve|Calling Instructions/i, 'Must define calling instructions');
  });

  it('should provide .well-known/agent-instructions.md and agent.json', () => {
    const mdPath = path.join(rootDir, 'public', '.well-known', 'agent-instructions.md');
    assert.ok(fs.existsSync(mdPath), 'agent-instructions.md must exist');
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    assert.match(mdContent, /When to Use This/i, 'agent-instructions.md must have When to Use');

    const jsonPath = path.join(rootDir, 'public', '.well-known', 'agent.json');
    assert.ok(fs.existsSync(jsonPath), 'agent.json must exist');
    const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    assert.ok(jsonContent.when_to_use, 'agent.json must have when_to_use field');
    assert.ok(jsonContent.when_not_to_use, 'agent.json must have when_not_to_use field');
  });
});

describe('Priority 9: Trust Anchor Pages (About, Contact, Privacy)', () => {
  it('should have real /about, /contact, /privacy routes and pages with >500 characters', () => {
    const trustRoutes = ['/about', '/contact', '/privacy'];
    for (const route of trustRoutes) {
      assert.ok(KNOWN_ROUTES.has(route), `Route ${route} must be registered in KNOWN_ROUTES`);
    }

    const privacyPath = path.join(rootDir, 'src', 'pages', 'PrivacyPage.tsx');
    assert.ok(fs.existsSync(privacyPath), 'PrivacyPage.tsx must exist');
    const privacyContent = fs.readFileSync(privacyPath, 'utf8');
    assert.ok(
      privacyContent.length >= 500,
      `PrivacyPage must contain substantive content (found ${privacyContent.length} chars)`
    );
    assert.match(privacyContent, /LGPD/, 'PrivacyPage must cover LGPD');
  });

  it('should include trust anchors in sitemap.xml', () => {
    const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');

    assert.match(sitemap, /https:\/\/tecnologiandrade\.com\.br\/about/, 'sitemap must include /about');
    assert.match(sitemap, /https:\/\/tecnologiandrade\.com\.br\/contact/, 'sitemap must include /contact');
    assert.match(sitemap, /https:\/\/tecnologiandrade\.com\.br\/privacy/, 'sitemap must include /privacy');
  });
});

describe('Priority 10 & 11: Brand Name Discoverability & Metadata Completeness', () => {
  it('should have all 4 critical metadata signals on the homepage', () => {
    const htmlPath = path.join(rootDir, 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    // 1. <link rel="canonical" href="...">
    assert.match(
      html,
      /<link[^>]*rel="canonical"[^>]*href="https:\/\/tecnologiandrade\.com\.br\/"[^>]*>/,
      'Must have exact canonical URL pointing to apex domain'
    );

    // 2. <html lang="...">
    assert.match(html, /<html[^>]*lang="pt-BR"[^>]*>/, 'Must specify html lang attribute');

    // 3. <meta property="og:image" content="...">
    assert.match(html, /<meta[^>]*property="og:image"[^>]*content="https:\/\/tecnologiandrade\.com\.br\/og-image\.png"/, 'Must have og:image');

    // 4. <meta property="og:type" content="...">
    assert.match(html, /<meta[^>]*property="og:type"[^>]*content="website"/, 'Must have og:type');

    // Brand Name presence
    assert.match(html, /Andrade Serviços de Tecnologia/, 'Must include full official brand name');
  });

  it('should verify case studies integrity (Agtemp as Website/SEO e CMS and no email)', () => {
    const casesPath = path.join(rootDir, 'src', 'data', 'cases.ts');
    const casesContent = fs.readFileSync(casesPath, 'utf8');

    // Agtemp case verification
    assert.match(casesContent, /id:\s*'agtemp'/, 'agtemp case must exist');
    assert.match(casesContent, /badge:\s*'Website\/SEO e CMS'/, 'agtemp badge must be Website/SEO e CMS');
    assert.match(casesContent, /value:\s*'Website\/SEO e CMS'/, 'agtemp metric solution must be Website/SEO e CMS');

    // Instituto Cestari verification
    assert.match(casesContent, /id:\s*'instituto-cestari'/, 'instituto-cestari case must exist');
    assert.match(casesContent, /logoUrl:\s*'\/images\/clients\/instituto-cestari-logo\.png'/, 'instituto-cestari must have logoUrl');
    assert.ok(fs.existsSync(path.join(rootDir, 'public', 'images', 'clients', 'instituto-cestari-logo.png')), 'Logo must exist in public/images/clients');
    assert.ok(fs.existsSync(path.join(rootDir, 'src', 'assets', 'images', 'instituto-cestari-logo.png')), 'Logo must exist in src/assets/images');

    // Total zero company email across public text and files
    assert.doesNotMatch(casesContent, /contato@tecnologiandrade\.com\.br/);
    const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
    assert.doesNotMatch(indexHtml, /contato@tecnologiandrade\.com\.br/);
    const llmsTxt = fs.readFileSync(path.join(rootDir, 'public', 'llms.txt'), 'utf8');
    assert.doesNotMatch(llmsTxt, /contato@tecnologiandrade\.com\.br/);
  });
});

