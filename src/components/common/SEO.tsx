import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
}: SEOProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Synchronize HTML lang attribute
    const langCode = language === 'en' ? 'en' : language === 'es' ? 'es' : 'pt-BR';
    document.documentElement.lang = langCode;

    // 2. Set Page Title
    const brandSuffix = language === 'en' ? 'Andrade Serviços de Tecnologia | AI Software Engineering' : language === 'es' ? 'Andrade Serviços de Tecnologia | Ingeniería de Software con IA' : 'Andrade Serviços de Tecnologia';
    document.title = `${title} | ${brandSuffix}`;

    // 3. Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 4. Set Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${title} | Andrade Serviços de Tecnologia`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Set Open Graph & Twitter Image
    const ogImageUrl = `${window.location.origin}/og-image.png`;
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (!ogImg) {
      ogImg = document.createElement('meta');
      ogImg.setAttribute('property', 'og:image');
      document.head.appendChild(ogImg);
    }
    ogImg.setAttribute('content', ogImageUrl);

    let twitterImg = document.querySelector('meta[property="twitter:image"]');
    if (!twitterImg) {
      twitterImg = document.createElement('meta');
      twitterImg.setAttribute('property', 'twitter:image');
      document.head.appendChild(twitterImg);
    }
    twitterImg.setAttribute('content', ogImageUrl);

    // 5. Set Canonical Link
    const currentUrl = canonicalUrl || window.location.href.split('?')[0];
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 6. Set Hreflang Alternates for Google & AI engines
    const hreflangs = [
      { lang: 'pt-BR', url: currentUrl },
      { lang: 'en', url: `${currentUrl}?lang=en` },
      { lang: 'es', url: `${currentUrl}?lang=es` },
      { lang: 'x-default', url: currentUrl },
    ];

    hreflangs.forEach(({ lang, url }) => {
      let alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang);
        document.head.appendChild(alternateLink);
      }
      alternateLink.setAttribute('href', url);
    });

    // 7. Set Keywords
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // 8. Injected JSON-LD Structured Data (Organization + Service / WebSite + BreadcrumbList)
    const scriptId = 'json-ld-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Organization', 'Corporation', 'ProfessionalService'],
          '@id': `${window.location.origin}/#organization`,
          name: 'Andrade Serviços de Tecnologia',
          alternateName: ['Andrade Tech', 'Andrade Tecnologia'],
          legalName: 'Andrade Serviços de Tecnologia',
          taxID: '35.395.058/0001-66',
          vatID: 'BR35395058000166',
          url: window.location.origin,
          logo: `${window.location.origin}/favicon.svg`,
          image: `${window.location.origin}/favicon.svg`,
          description: 'Engenharia de Software com Inteligência Artificial, GEO (Generative Engine Optimization), SEO de Alta Performance e Conformidade LGPD/GDPR para Empresas Globais.',
          telephone: '+55 11 94975-2588',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+55 11 94975-2588',
              contactType: 'customer service',
              areaServed: ['BR', 'US', 'EU', 'LATAM'],
              availableLanguage: ['Portuguese', 'English', 'Spanish'],
            },
          ],
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Global' },
            { '@type': 'Country', name: 'Brazil' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'AdministrativeArea', name: 'Latin America' },
            { '@type': 'AdministrativeArea', name: 'Europe' },
          ],
          currenciesAccepted: 'BRL, USD, EUR',
          priceRange: '$$$',
          availableLanguage: ['Portuguese', 'English', 'Spanish'],
          knowsAbout: [
            'Artificial Intelligence',
            'Generative Engine Optimization (GEO)',
            'Search Engine Optimization (SEO)',
            'Full Stack Software Engineering',
            'React',
            'TypeScript',
            'PostgreSQL',
            'AI Agents & Automation',
            'Large Language Models (LLM)',
            'LGPD & GDPR Compliance',
            'Cybersecurity & OWASP',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Soluções em Engenharia de Software & IA',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Sistemas & Plataformas Corporativas com IA',
                  url: `${window.location.origin}/servicos/ai-systems-platforms`,
                  description: 'Arquitetura e desenvolvimento de sistemas inteligentes, portais B2B/B2C e plataformas escaláveis.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Otimização para GEO & SEO Técnico',
                  url: `${window.location.origin}/servicos/geo-seo-optimization`,
                  description: 'Indexação estruturada para topo do Google e citação em motores de IA generativa (ChatGPT, Perplexity, Gemini).',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Aplicações Web & PWA de Alto Desempenho',
                  url: `${window.location.origin}/servicos/ai-web-applications`,
                  description: 'Web apps ultrarrápidos, Progressive Web Apps (PWA) e interfaces reativas de alto impacto.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Agentes Autônomos de IA & Automação de Processos',
                  url: `${window.location.origin}/servicos/ai-agents-automation`,
                  description: 'Agentes inteligentes, fluxos RAG e automação de operações de ponta a ponta.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Consultoria em Engenharia & Aceleração com IA',
                  url: `${window.location.origin}/servicos/ai-consulting-acceleration`,
                  description: 'Modernização de arquiteturas legadas e capacitação de times com ferramentas de IA.',
                },
              },
            ],
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            addressCountry: 'BR',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${window.location.origin}/#website`,
          url: window.location.origin,
          name: 'Andrade Serviços de Tecnologia',
          alternateName: 'Andrade Tech',
          publisher: {
            '@id': `${window.location.origin}/#organization`,
          },
          inLanguage: langCode,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: (() => {
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            const items = [
              {
                '@type': 'ListItem',
                position: 1,
                name: language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Início',
                item: window.location.origin,
              },
            ];

            if (pathSegments.length > 0) {
              let accumulatedPath = '';
              pathSegments.forEach((segment, index) => {
                accumulatedPath += `/${segment}`;
                let itemName = segment;
                if (segment === 'servicos') {
                  itemName = language === 'en' ? 'Services' : language === 'es' ? 'Servicios' : 'Serviços';
                } else if (segment === 'cases' || segment === 'clientes') {
                  itemName = language === 'en' ? 'Case Studies' : language === 'es' ? 'Casos de Éxito' : 'Cases de Sucesso';
                } else if (segment === 'sobre') {
                  itemName = language === 'en' ? 'About' : language === 'es' ? 'Sobre' : 'Sobre Nós';
                } else if (segment === 'contato') {
                  itemName = language === 'en' ? 'Contact' : language === 'es' ? 'Contacto' : 'Contato';
                } else {
                  itemName = title.split('|')[0].trim();
                }

                items.push({
                  '@type': 'ListItem',
                  position: index + 2,
                  name: itemName,
                  item: `${window.location.origin}${accumulatedPath}`,
                });
              });
            }
            return items;
          })(),
        },
        ...(structuredData ? [structuredData] : []),
      ],
    };

    script.textContent = JSON.stringify(defaultSchema);
  }, [title, description, keywords, canonicalUrl, structuredData, language]);

  return null;
};
