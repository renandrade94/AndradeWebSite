import type { Language } from '../context/LanguageContext';

export interface ServiceLocalized {
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  deliverables: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceItem {
  id: string;
  iconName: 'BrainCircuit' | 'Search' | 'Code2' | 'Bot' | 'Sparkles' | 'ShieldCheck' | 'Workflow' | 'Cpu';
  tags: string[];
  featured?: boolean;
  technologiesDetailed: {
    category: string;
    items: string[];
  }[];
  locales: {
    pt: ServiceLocalized;
    en: ServiceLocalized;
    es: ServiceLocalized;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-systems-platforms",
    iconName: "Code2",
    featured: true,
    tags: ["React / Next.js", "TypeScript", "Node.js / Python", "APIs de IA", "Modelos Fundamentais & LLMs", "Arquitetura Modular"],
    technologiesDetailed: [
      { category: "Frontend & Web", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
      { category: "Backend & IA", items: ["Node.js", "FastAPI (Python)", "NestJS", "LangChain", "APIs de LLMs", "Modelos de IA de Ponta"] },
      { category: "Bancos de Dados", items: ["PostgreSQL", "Supabase", "pgvector (Embeddings)", "Redis", "MongoDB"] },
      { category: "Padrões & Qualidade", items: ["Clean Code", "SOLID", "OWASP Security", "LGPD / GDPR Ready", "Testes Automatizados"] }
    ],
    locales: {
      pt: {
        title: "Sistemas & Plataformas com Inteligência Artificial",
        shortDescription: "Desenvolvimento sob medida de softwares corporativos, plataformas SaaS e portais inteligentes entregues até 3x mais rápido.",
        fullDescription: "Construímos sistemas empresariais, ERPs/CRMs personalizados e plataformas digitais de alta performance com Inteligência Artificial nativa integrada. Aliamos arquitetura de software limpa, segurança por design (LGPD) e aceleração de desenvolvimento com IA para entregar soluções robustas em tempo recorde.",
        badge: "Alta Demanda",
        metaTitle: "Desenvolvimento de Sistemas e Plataformas com Inteligência Artificial",
        metaDescription: "Criação de softwares e plataformas digitais com IA integrada. Entregas até 3x mais rápidas, código limpo e total conformidade com LGPD.",
        deliverables: [
          "Plataformas Web e Softwares Corporativos Sob Medida",
          "Integração Nativa de Modelos de Linguagem e IA Generativa",
          "Painéis Administrativos e Dashboards Interativos em Tempo Real",
          "Arquitetura Segura, Escalável e Modular (Clean Code)",
          "APIs RESTful e Integrações com Sistemas Existentes",
          "Testes Automatizados, Documentação e Código 100% Proprietário"
        ],
        benefits: [
          {
            title: "Entregas em Tempo Recorde",
            description: "Utilizamos IA em todo o ciclo de engenharia de software, reduzindo os prazos de desenvolvimento em até 60% comparado a agências convencionais."
          },
          {
            title: "Resultados Práticos e Palpáveis",
            description: "Foco absoluto em resolver gargalos reais da sua empresa, aumentando a produtividade da equipe e a lucratividade operacional."
          },
          {
            title: "Segurança & Conformidade LGPD",
            description: "Sistemas blindados contra invasões, proteção de dados confidenciais e aderência estrita às normas de privacidade."
          },
          {
            title: "Escala Global",
            description: "Soluções projetadas para operar internacionalmente, com suporte multilíngue, alta disponibilidade e baixíssima latência."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Imersão & Arquitetura de IA",
            description: "Mapeamento dos processos e definição de onde a IA trará o maior retorno financeiro e de produtividade."
          },
          {
            step: "02",
            title: "Desenvolvimento Acelerado por IA",
            description: "Sprints ágeis com protótipos funcionais entregues quinzenalmente para validação contínua."
          },
          {
            step: "03",
            title: "Auditoria de Segurança & LGPD",
            description: "Revisão rigorosa de vulnerabilidades de código, sanitização de dados e testes de estresse."
          },
          {
            step: "04",
            title: "Go-Live & Transferência Completa",
            description: "Entrega do software em produção, documentação e transferência total do código-fonte."
          }
        ],
        faqs: [
          {
            question: "Quanto tempo leva para desenvolver uma plataforma sob medida com IA?",
            answer: "Graças aos nossos fluxos de engenharia acelerados por IA, protótipos funcionais são entregues em até 3 a 5 semanas, e plataformas completas em até 8 a 12 semanas."
          },
          {
            question: "O código-fonte pertence à minha empresa?",
            answer: "Sim! 100% dos repositórios, direitos autorais e propriedade intelectual são transferidos integralmente para a sua empresa."
          }
        ]
      },
      en: {
        title: "AI-Powered Systems & Digital Platforms",
        shortDescription: "Custom enterprise software, SaaS platforms, and smart digital portals delivered up to 3x faster with AI.",
        fullDescription: "We build bespoke enterprise software, custom business portals, and high-performance digital platforms with native Artificial Intelligence. Combining clean architecture, security-by-design (GDPR/LGPD), and AI-accelerated development to ship robust software in record time.",
        badge: "High Demand",
        metaTitle: "Custom AI-Powered Software & Platform Development",
        metaDescription: "Bespoke systems and digital platforms with native AI integration. Up to 3x faster delivery, clean code, and enterprise GDPR compliance.",
        deliverables: [
          "Custom Web Platforms and Enterprise Software",
          "Native Integration with Advanced LLMs & Generative AI",
          "Real-Time Interactive Admin Panels and Dashboards",
          "Secure, Modular and Scalable Architecture (Clean Code)",
          "RESTful APIs and Integrations with Existing Legacy Systems",
          "Automated Testing, Full Documentation and 100% Owned Source Code"
        ],
        benefits: [
          {
            title: "Record-Breaking Time-to-Market",
            description: "We leverage AI across the entire software engineering lifecycle, slashing delivery timelines by up to 60% compared to traditional dev shops."
          },
          {
            title: "Tangible Business Results",
            description: "Laser-focused on solving real corporate bottlenecks, boosting team output, and driving tangible bottom-line growth."
          },
          {
            title: "Security & Privacy by Design",
            description: "Hardened against OWASP vulnerabilities, strictly compliant with international standards and data privacy laws (GDPR/LGPD)."
          },
          {
            title: "Global Scalability",
            description: "Architected for worldwide operations with multi-language support, ultra-low latency, and high concurrency."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Immersion & AI Architecture",
            description: "Process mapping and technical blueprint to determine where AI delivers the highest ROI."
          },
          {
            step: "02",
            title: "AI-Accelerated Sprints",
            description: "Rapid agile development with functional bi-weekly releases for continuous stakeholder feedback."
          },
          {
            step: "03",
            title: "Security & Compliance Review",
            description: "Rigorous static code analysis, vulnerability scanning, and data anonymization tests."
          },
          {
            step: "04",
            title: "Go-Live & Full Handover",
            description: "Smooth production deployment, documentation, and 100% source code transfer."
          }
        ],
        faqs: [
          {
            question: "How long does it take to develop a custom AI platform?",
            answer: "Thanks to our AI-accelerated workflows, functional MVPs are shipped in 3-5 weeks, and comprehensive enterprise platforms in 8-12 weeks."
          },
          {
            question: "Does our company own the complete source code?",
            answer: "Yes! 100% of the Git repositories, code, architecture, and intellectual property belong exclusively to your company upon delivery."
          }
        ]
      },
      es: {
        title: "Sistemas y Plataformas con Inteligencia Artificial",
        shortDescription: "Desarrollo a medida de software empresarial, plataformas SaaS y portales inteligentes entregados hasta 3x más rápido.",
        fullDescription: "Construimos sistemas empresariales, plataformas SaaS y portales de alto rendimiento con Inteligencia Artificial nativa integrada. Unimos arquitectura limpia, seguridad por diseño (LGPD/GDPR) y desarrollo acelerado con IA para entregar soluciones robustas en tiempo récord.",
        badge: "Alta Demanda",
        metaTitle: "Desarrollo de Sistemas y Plataformas con Inteligencia Artificial",
        metaDescription: "Creación de software y plataformas digitales con IA integrada. Entregas hasta 3x más rápidas, código limpio y cumplimiento LGPD/GDPR.",
        deliverables: [
          "Plataformas Web y Software Empresarial a Medida",
          "Integración Nativa de Modelos de Lenguaje e IA Generativa",
          "Paneles Administrativos y Dashboards en Tiempo Real",
          "Arquitectura Segura, Escalable y Modular (Clean Code)",
          "APIs RESTful e Integraciones con Sistemas Existentes",
          "Pruebas Automatizadas, Documentación y Código 100% Propietario"
        ],
        benefits: [
          {
            title: "Entregas en Tiempo Récord",
            description: "Utilizamos IA en todo el ciclo de ingeniería de software, reduciendo los plazos de entrega hasta un 60% frente al modelo tradicional."
          },
          {
            title: "Resultados Prácticos y Palpables",
            description: "Enfoque total en resolver cuellos de botella reales de su empresa, aumentando la productividad y las ventas."
          },
          {
            title: "Seguridad y Cumplimiento Normativo",
            description: "Sistemas blindados contra vulnerabilidades, protección estricta de datos confidenciales y adecuación a LGPD/GDPR."
          },
          {
            title: "Alcance y Escala Global",
            description: "Soluciones diseñadas para operar internacionalmente, con soporte multilingüe y rendimiento instantáneo."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Inmersión y Arquitectura de IA",
            description: "Mapeo de procesos y definición de dónde la IA aportará el mayor retorno de inversión."
          },
          {
            step: "02",
            title: "Desarrollo Ágil Acelerado",
            description: "Sprints quincenales con entregas funcionales para validación continua."
          },
          {
            step: "03",
            title: "Auditoría de Seguridad y Datos",
            description: "Revisión estricta de código, protección contra inyecciones y pruebas de privacidad."
          },
          {
            step: "04",
            title: "Lanzamiento y Transferencia Total",
            description: "Puesta en producción, documentación técnica y entrega del 100% del código fuente."
          }
        ],
        faqs: [
          {
            question: "¿Cuánto tiempo toma desarrollar una plataforma a medida con IA?",
            answer: "Gracias a nuestros flujos de desarrollo potenciados con IA, entregamos prototipos funcionales en 3-5 semanas y plataformas completas en 8-12 semanas."
          },
          {
            question: "¿El código fuente pertenece a mi empresa?",
            answer: "¡Sí! El 100% del repositorio, derechos de autor y propiedad intelectual pertenecen exclusivamente a su empresa."
          }
        ]
      }
    }
  },
  {
    id: "geo-seo-optimization",
    iconName: "Search",
    featured: true,
    tags: ["GEO (Generative Engine Optimization)", "SEO Técnico Avançado", "Schema.org / JSON-LD", "Motores de Busca por IA", "Google Core Web Vitals"],
    technologiesDetailed: [
      { category: "Motores de IA (GEO)", items: ["Motores de Busca com IA", "Google AI Overviews", "Assistentes Generativos", "Indexação Semântica LLM"] },
      { category: "SEO Tradicional", items: ["Google Search Console", "Schema.org Markup", "Semântica HTML5", "Core Web Vitals", "Sitemaps Dinâmicos"] },
      { category: "Performance Web", items: ["Server-Side Rendering (SSR)", "Static Generation (SSG)", "Otimização de Imagens Next-Gen", "Edge Caching"] },
      { category: "Auditoria & Métricas", items: ["PageSpeed Insights", "Lighthouse 100/100", "Ahrefs / SEMrush", "Google Analytics 4"] }
    ],
    locales: {
      pt: {
        title: "Otimização para IAs e Buscas (GEO & SEO)",
        shortDescription: "Posicione seu site no topo do Google e seja citado como fonte oficial nos principais motores de busca por IA.",
        fullDescription: "O futuro das buscas mudou: seus clientes utilizam tanto os buscadores tradicionais quanto assistentes de Inteligência Artificial. Nossa engenharia de GEO (Generative Engine Optimization) e SEO Técnico estrutura todo o seu conteúdo, schemas e arquitetura web para que sua empresa seja a resposta número 1 recomendada pelas inteligências artificiais e buscadores.",
        badge: "Pioneirismo & IA",
        metaTitle: "GEO (Generative Engine Optimization) & SEO para Buscas por IA | Andrade",
        metaDescription: "Estruture seu site e sistema para ser citado nos motores de busca por IA e ranquear no topo do Google. Consultoria de GEO e SEO de alta performance.",
        deliverables: [
          "Arquitetura Semântica Completa para IAs de Busca (GEO)",
          "Implementação Profunda de Schema.org JSON-LD e Rich Snippets",
          "Otimização Avançada de Core Web Vitals e Performance",
          "Estratégia de Posicionamento para Citação por Modelos de IA",
          "Auditoria Técnica Completa de SEO On-Page e Indexabilidade",
          "Estrutura Otimizada para Motores de Resposta Direta (AEO)"
        ],
        benefits: [
          {
            title: "Citação como Referência nos Motores de Busca por IA (GEO)",
            description: "Quando clientes em potencial pesquisarem por soluções no seu setor em ferramentas de IA, sua empresa será recomendada como fonte oficial com link direto."
          },
          {
            title: "Tráfego Orgânico Qualificado e Gratuito",
            description: "Reduza sua dependência de anúncios pagos (Google Ads) atraindo clientes de alta intenção de compra organicamente."
          },
          {
            title: "Carregamento Instantâneo (Menos de 1 segundo)",
            description: "Sites ultra-otimizados que retêm visitantes e nunca perdem conversões por lentidão."
          },
          {
            title: "Autoridade de Marca Duradoura",
            description: "Construção de presença digital à prova de futuro, imune às constantes mudanças de algoritmo dos buscadores tradicionais."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Auditoria Semântica & Diagnóstico GEO",
            description: "Análise de como as IAs e o Google enxergam a sua empresa hoje e mapeamento de oportunidades de palavras-chave e intenções."
          },
          {
            step: "02",
            title: "Reestruturação de Dados Estruturados",
            description: "Injeção de metadados ricos (Schema.org), categorização semântica e correção de erros de rastreabilidade."
          },
          {
            step: "03",
            title: "Otimização de Performance e Core Web Vitals",
            description: "Refatoração de código frontend para atingir tempos de carregamento instantâneos em dispositivos móveis e desktop."
          },
          {
            step: "04",
            title: "Monitoramento de Citações e Indexação",
            description: "Acompanhamento contínuo da indexação no Google e das respostas geradas por motores de busca com IA."
          }
        ],
        faqs: [
          {
            question: "O que é GEO (Generative Engine Optimization)?",
            answer: "GEO é a evolução do SEO para a era da Inteligência Artificial. Trata-se de estruturar a autoridade, semântica e clareza do seu site para que os motores de busca generativa e assistentes de IA escolham a sua empresa como resposta recomendada."
          },
          {
            question: "Em quanto tempo começo a ver resultados?",
            answer: "Melhorias técnicas de indexação e carregamento refletem em poucas semanas. O ganho consistente de autoridade orgânica e citações em IAs consolida-se entre 2 a 4 meses de implementação contínua."
          }
        ]
      },
      en: {
        title: "AI Search & Search Engine Optimization (GEO & SEO)",
        shortDescription: "Rank #1 on Google and get cited as the official answer across AI search engines and assistants.",
        fullDescription: "Search has fundamentally evolved: customers query both traditional search engines and AI assistants. Our GEO (Generative Engine Optimization) and Advanced Technical SEO engineering structures your semantic data, schemas, and web architecture so your brand becomes the top recommended citation across all AI engines and search platforms.",
        badge: "Pioneering AI Search",
        metaTitle: "GEO (Generative Engine Optimization) & Advanced Technical SEO | Andrade",
        metaDescription: "Structure your web platform to get cited across AI search engines and rank at the top of Google. High-performance GEO and technical SEO.",
        deliverables: [
          "Complete Semantic Architecture for AI Search Engines (GEO)",
          "Deep JSON-LD Schema.org Implementation and Rich Snippets",
          "Advanced Core Web Vitals and Performance Optimization",
          "LLM Knowledge Graph & Citation Positioning Strategy",
          "Full Technical SEO On-Page and Crawlability Audit",
          "Content Engineered for Answer Engine Optimization (AEO)"
        ],
        benefits: [
          {
            title: "Get Cited by Leading AI Search Engines (GEO)",
            description: "When high-intent prospects query AI search tools for solutions in your industry, your company is presented as the authoritative source with a direct link."
          },
          {
            title: "High-Intent Organic Traffic",
            description: "Slash your reliance on paid media ads by capturing qualified, conversion-ready organic visitors."
          },
          {
            title: "Sub-Second Page Load Speeds",
            description: "Ultra-fast, responsive web interfaces that eliminate bounce rates and maximize user retention."
          },
          {
            title: "Future-Proof Digital Presence",
            description: "Stay ahead of search algorithm shifts by aligning with the next era of semantic AI discovery."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Semantic Audit & GEO Diagnostics",
            description: "Analyzing how search crawlers and LLMs currently perceive your brand, identifying key gaps and high-value query targets."
          },
          {
            step: "02",
            title: "Structured Data Implementation",
            description: "Deploying comprehensive Schema.org markups and entity relationships to feed AI knowledge models."
          },
          {
            step: "03",
            title: "Performance & Core Web Vitals",
            description: "Code refactoring for instant mobile/desktop render times and pristine technical health."
          },
          {
            step: "04",
            title: "Citations & Search Monitoring",
            description: "Continuous tracking of Google indexation, keyword ranking, and AI response citations."
          }
        ],
        faqs: [
          {
            question: "What is GEO (Generative Engine Optimization)?",
            answer: "GEO is the next generation of SEO tailored for AI. It involves optimizing your website's content, structure, and verifiable data so generative search engines and AI assistants select your business as the definitive answer."
          },
          {
            question: "How fast will we see results?",
            answer: "Technical speed and indexation improvements take effect within weeks. Compounding organic traffic gains and AI engine citations typically solidify within 2 to 4 months."
          }
        ]
      },
      es: {
        title: "Optimización para Motores de IA y Búsqueda (GEO & SEO)",
        shortDescription: "Posicione su empresa en Google y sea citado como fuente de referencia en los principales motores de búsqueda por IA.",
        fullDescription: "La forma en que la gente busca ha cambiado: sus clientes consultan tanto buscadores tradicionales como asistentes de Inteligencia Artificial. Nuestra ingeniería de GEO (Generative Engine Optimization) y SEO Técnico estructura su sitio y metadatos para que las IAs y Google reconozcan a su empresa como la respuesta número uno.",
        badge: "Pioneros en Búsqueda IA",
        metaTitle: "GEO (Generative Engine Optimization) & SEO Avanzado | Andrade",
        metaDescription: "Estructure su plataforma web para ser citado por motores de IA y liderar en Google. Consultoría especializada en GEO y SEO.",
        deliverables: [
          "Arquitectura Semántica Integral para Motores de IA (GEO)",
          "Implementación Completa de Schemas JSON-LD y Rich Snippets",
          "Optimización Avanzada de Core Web Vitals y Rendimiento",
          "Estrategia de Citación en Bases de Conocimiento de LLMs",
          "Auditoría Técnica Completa de SEO On-Page e Indexación",
          "Estructura Optimizada para Motores de Respuestas (AEO)"
        ],
        benefits: [
          {
            title: "Citado como Referencia en Motores de Búsqueda por IA (GEO)",
            description: "Cuando potenciales clientes busquen soluciones en su sector mediante IA, su empresa será la recomendada con enlace directo."
          },
          {
            title: "Tráfico Orgánico Altamente Calificado",
            description: "Reduzca su gasto en publicidad paga atrayendo clientes con alta intención de compra de forma orgánica."
          },
          {
            title: "Carga Ultrarrápida (Menos de 1 segundo)",
            description: "Interfaces optimizadas que eliminan abandonos y aumentan drásticamente las conversiones."
          },
          {
            title: "Presencia Digital a Prueba de Futuro",
            description: "Prepárese para el nuevo estándar de búsqueda semántica e inteligencia artificial."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Auditoría Semántica y Diagnóstico GEO",
            description: "Evaluación de cómo los buscadores y modelos de IA interpretan su marca actualmente."
          },
          {
            step: "02",
            title: "Implementación de Datos Estructurados",
            description: "Inyección de metadatos Schema.org para alimentar con precisión a los motores generativos."
          },
          {
            step: "03",
            title: "Optimización de Rendimiento Técnico",
            description: "Ajuste de código frontend para lograr tiempos de carga instantáneos en cualquier dispositivo."
          },
          {
            step: "04",
            title: "Monitoreo de Citaciones e Indexación",
            description: "Seguimiento continuo del posicionamiento en Google y en las respuestas de motores de IA."
          }
        ],
        faqs: [
          {
            question: "¿Qué es GEO (Generative Engine Optimization)?",
            answer: "GEO es la optimización pensada para motores de Inteligencia Artificial. Consiste en estructurar su contenido para que los motores de búsqueda generativa y asistentes de IA elijan su sitio como fuente autorizada."
          },
          {
            question: "¿En cuánto tiempo se perciben los resultados?",
            answer: "Las mejoras técnicas y de velocidad se notan en semanas. El posicionamiento orgánico y las citaciones en IAs se consolidan entre 2 y 4 meses."
          }
        ]
      }
    }
  },
  {
    id: "ai-web-applications",
    iconName: "Sparkles",
    featured: true,
    tags: ["React & Next.js", "Websites de Alta Conversão", "Experiência UI/UX Premium", "PWA & Mobile Ready", "Integração com CRMs"],
    technologiesDetailed: [
      { category: "Frameworks & UI", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"] },
      { category: "Funcionalidades Inteligentes", items: ["Busca Semântica com IA", "Chatbots Customizados", "Recomendações Dinâmicas", "Forms Preditivos"] },
      { category: "Conversão & Vendas", items: ["Integração WhatsApp API", "Gateways de Pagamento", "HubSpot / RD Station CRM", "Google Analytics 4"] },
      { category: "Segurança & Conformidade", items: ["Headers de Segurança HTTPS", "Política de Cookies LGPD", "Proteção Anti-Spam / Cloudflare Turnstile"] }
    ],
    locales: {
      pt: {
        title: "Websites & Aplicações Web de Alta Performance",
        shortDescription: "Sites corporativos, landing pages e aplicações web ultra velozes, com design premium e foco total em conversão de clientes.",
        fullDescription: "Criamos experiências digitais memoráveis que transmitem autoridade imediata. Nossos sites e web apps são desenvolvidos com tecnologia de ponta (React, Next.js, TypeScript), carregamento instantâneo e inteligência integrada para converter visitantes em clientes pagantes com máxima segurança e conformidade LGPD.",
        badge: "Conversão & Design",
        metaTitle: "Criação de Websites e Aplicações Web de Alta Performance | Andrade",
        metaDescription: "Desenvolvimento de sites corporativos modernos, rápidos e otimizados para conversão com React e Next.js. Entregas em tempo recorde.",
        deliverables: [
          "Websites Institucionais e Portais Corporativos de Alto Impacto",
          "Landing Pages de Alta Conversão Integradas a WhatsApp e CRM",
          "Aplicações Web Progressivas (PWA) Rápidas e Responsivas",
          "Design UI/UX Exclusivo e Alinhado com a Identidade da sua Marca",
          "Formulários Inteligentes com Qualificação Automática de Leads",
          "Conformidade Completa com LGPD (Avisos de Cookies e Termos de Uso)"
        ],
        benefits: [
          {
            title: "Aumento Imediato na Taxa de Conversão",
            description: "Layouts e chamadas para ação estudados para guiar o visitante até o contato ou compra com o mínimo de atrito."
          },
          {
            title: "Velocidade que Encanta o Cliente",
            description: "Navegação fluida sem travamentos, com notas máximas nos testes de velocidade do Google."
          },
          {
            title: "Design Moderno e Profissional",
            description: "Estética que transmite credibilidade, solidez e modernidade desde o primeiro segundo de visita."
          },
          {
            title: "100% Adaptado para Dispositivos Móveis",
            description: "Experiência perfeita em smartphones, tablets e monitores widescreen de qualquer resolução."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Arquitetura de Conversão & UX",
            description: "Definição da jornada do usuário, estrutura de páginas e elementos de alta persuasão."
          },
          {
            step: "02",
            title: "Design Visual Premium",
            description: "Criação de interfaces visuais sob medida alinhadas à sofisticação da sua marca."
          },
          {
            step: "03",
            title: "Desenvolvimento Frontend Ágil",
            description: "Construção com React/Next.js, otimização de imagens e integração de formulários/APIs."
          },
          {
            step: "04",
            title: "Otimização SEO/GEO & Lançamento",
            description: "Configuração de metatags, validações de segurança e publicação do site no ar."
          }
        ],
        faqs: [
          {
            question: "O site já vem pronto para funcionar em celulares?",
            answer: "Sim! Trabalhamos com o conceito Mobile-First. O site é projetado para oferecer a melhor experiência possível tanto no smartphone quanto no computador."
          },
          {
            question: "Posso integrar o site ao meu CRM e WhatsApp?",
            answer: "Com certeza. Conectamos os formulários e botões de contato diretamente ao seu WhatsApp corporativo, RD Station, HubSpot ou qualquer outro CRM."
          }
        ]
      },
      en: {
        title: "High-Performance Websites & Web Apps",
        shortDescription: "Modern corporate websites, landing pages, and web apps engineered for lightning speed and maximum lead conversion.",
        fullDescription: "We design memorable digital experiences that command immediate authority. Built on cutting-edge stacks (React, Next.js, TypeScript), our websites deliver instantaneous load times, stunning UI/UX, and smart lead qualification to turn visitors into revenue while ensuring strict GDPR/LGPD compliance.",
        badge: "Conversion & Speed",
        metaTitle: "Custom High-Performance Websites & Web Applications | Andrade",
        metaDescription: "Modern, fast, and conversion-focused corporate websites built with React and Next.js. Fast delivery and global standards.",
        deliverables: [
          "Bespoke Corporate Websites and High-Impact Portals",
          "High-Converting Landing Pages Integrated with WhatsApp & CRM",
          "Progressive Web Apps (PWA) with Instant Mobile Responsiveness",
          "Premium UI/UX Design Custom-Tailored to Your Brand",
          "Smart Lead Capture Forms with Automated Qualification",
          "Full GDPR/LGPD Compliance (Privacy Policies & Cookie Banners)"
        ],
        benefits: [
          {
            title: "Maximized Conversion Rates",
            description: "Frictionless user flows and persuasive UI patterns designed to drive inquiries and direct sales."
          },
          {
            title: "Instantaneous Speed",
            description: "Smooth, stutter-free navigation achieving top scores across Google PageSpeed and Lighthouse."
          },
          {
            title: "Elite Visual Prestige",
            description: "A polished aesthetic that elevates brand perception and instills immediate trust in enterprise buyers."
          },
          {
            title: "Flawless Mobile Experience",
            description: "Pixel-perfect responsiveness across all screen sizes, from mobile phones to 4K displays."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Conversion Architecture & UX",
            description: "Mapping out user journeys, page layouts, and high-impact call-to-action touchpoints."
          },
          {
            step: "02",
            title: "Premium Visual Design",
            description: "Crafting bespoke UI mockups reflecting your brand's unique market positioning."
          },
          {
            step: "03",
            title: "Rapid Frontend Engineering",
            description: "Building with React/Next.js, optimizing assets, and integrating lead generation endpoints."
          },
          {
            step: "04",
            title: "SEO/GEO Tuning & Deployment",
            description: "Comprehensive metadata setup, security checks, and smooth production launch."
          }
        ],
        faqs: [
          {
            question: "Is the website fully mobile-responsive?",
            answer: "Yes, 100%. We employ a strict Mobile-First approach to guarantee top-tier performance on mobile devices and desktops alike."
          },
          {
            question: "Can we integrate lead forms with our CRM and WhatsApp?",
            answer: "Absolutely. We seamlessly connect all forms and trigger buttons to your corporate WhatsApp, HubSpot, Salesforce, or custom webhooks."
          }
        ]
      },
      es: {
        title: "Sitios Web y Aplicaciones Web de Alto Rendimiento",
        shortDescription: "Sitios corporativos modernos, landing pages y aplicaciones web ultrarrápidas, diseñadas para maximizar conversiones.",
        fullDescription: "Creamos experiencias digitales que generan autoridad instantánea. Desarrollados con tecnologías modernas (React, Next.js, TypeScript), nuestros sitios web ofrecen carga instantánea, diseño visual sofisticado e inteligencia para convertir visitantes en clientes con total seguridad y cumplimiento de LGPD/GDPR.",
        badge: "Conversión y Diseño",
        metaTitle: "Desarrollo de Sitios Web y Aplicaciones Web de Alto Rendimiento | Andrade",
        metaDescription: "Sitios web corporativos rápidos y orientados a ventas desarrollados con React y Next.js. Entregas en tiempo récord y estándares globales.",
        deliverables: [
          "Sitios Web Corporativos y Portales de Gran Impacto",
          "Landing Pages de Alta Conversión Integradas con WhatsApp y CRM",
          "Aplicaciones Web Progresivas (PWA) Rápidas y Responsivas",
          "Diseño UI/UX Exclusivo y Adaptado a la Identidad de su Marca",
          "Formularios Inteligentes con Calificación Automática de Prospectos",
          "Cumplimiento Total de Privacidad y Normas LGPD/GDPR"
        ],
        benefits: [
          {
            title: "Mayor Tasa de Conversión",
            description: "Estructuras diseñadas para guiar al visitante hacia el contacto o la compra con fluidez."
          },
          {
            title: "Velocidad de Carga Instantánea",
            description: "Navegación sin demoras con excelentes calificaciones en Google PageSpeed Insights."
          },
          {
            title: "Diseño Visual de Élite",
            description: "Una imagen corporativa que transmite solidez y credibilidad desde el primer contacto."
          },
          {
            title: "100% Adaptado a Móviles",
            description: "Experiencia impecable en teléfonos inteligentes, tablets y computadoras de escritorio."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Arquitectura de Conversión y UX",
            description: "Definición de la ruta del usuario y diseño de puntos de contacto estratégicos."
          },
          {
            step: "02",
            title: "Diseño Visual Personalizado",
            description: "Creación de interfaces modernas y atractivas alineadas a los objetivos de su marca."
          },
          {
            step: "03",
            title: "Desarrollo Frontend Rápido",
            description: "Programación con React/Next.js, optimización de recursos e integración de formularios."
          },
          {
            step: "04",
            title: "Ajuste SEO/GEO y Lanzamiento",
            description: "Configuración de metadatos, revisiones de seguridad y publicación en producción."
          }
        ],
        faqs: [
          {
            question: "¿El sitio web está optimizado para dispositivos móviles?",
            answer: "¡Sí, totalmente! Diseñamos bajo metodología Mobile-First para garantizar una experiencia perfecta en teléfonos y pantallas grandes."
          },
          {
            question: "¿Es posible integrarlo con WhatsApp y CRM?",
            answer: "Por supuesto. Conectamos los formularios y llamadas a la acción directamente a su WhatsApp corporativo o CRM (HubSpot, Salesforce, etc.)."
          }
        ]
      }
    }
  },
  {
    id: "ai-agents-automation",
    iconName: "Workflow",
    featured: true,
    tags: ["Agentes Autônomos de IA", "Chatbots WhatsApp Inteligentes", "Automação de Processos (RPA)", "Integração RAG (Base de Dados)", "Atendimento Automatizado"],
    technologiesDetailed: [
      { category: "Modelos & LLMs", items: ["Grandes Modelos de Linguagem (LLMs)", "Modelos de Raciocínio Avançado", "Modelos Open-Source de Alta Performance", "Embeddings Semânticos"] },
      { category: "Frameworks de Agentes", items: ["LangChain", "LlamaIndex", "CrewAI", "Python", "Node.js"] },
      { category: "Bases de Conhecimento (RAG)", items: ["pgvector (PostgreSQL)", "Pinecone", "Qdrant", "ChromaDB"] },
      { category: "Canais de Comunicação", items: ["WhatsApp Business API Oficial", "Telegram", "Slack", "HubSpot", "Zendesk"] }
    ],
    locales: {
      pt: {
        title: "Agentes de IA & Automação Inteligente",
        shortDescription: "Automatize atendimentos, rotinas repetitivas e integre agentes inteligentes de IA conectados aos dados da sua empresa.",
        fullDescription: "Transformamos horas de trabalho manual em processos automáticos e eficientes. Desenvolvemos agentes autônomos de Inteligência Artificial para atendimento e vendas no WhatsApp, suporte técnico ágil e automação de fluxos operacionais (RPA), sempre conectados de forma segura à base de conhecimento do seu negócio.",
        badge: "Alta Produtividade",
        metaTitle: "Agentes de Inteligência Artificial & Automação de Processos | Andrade",
        metaDescription: "Implementação de agentes autônomos de IA, chatbots inteligentes para WhatsApp e automação de rotinas empresariais com total segurança.",
        deliverables: [
          "Agentes de IA para Atendimento e Vendas no WhatsApp",
          "Assistentes Internos Conectados à Base de Dados Corporativa (RAG)",
          "Automação de Tarefas Repetitivas e Processamento de Documentos",
          "Qualificação Automática de Leads e Agendamento de Reuniões",
          "Integração Segura com APIs Oficiais e CRMs Corporativos",
          "Painel de Auditoria de Conversas e Monitoramento de Respostas"
        ],
        benefits: [
          {
            title: "Atendimento Instantâneo e Automatizado",
            description: "Seus clientes nunca mais esperam para tirar dúvidas ou receber propostas, mesmo fora do horário comercial."
          },
          {
            title: "Economia de Centenas de Horas Operacionais",
            description: "Libere sua equipe de tarefas repetitivas para focar em estratégia, negociações e crescimento."
          },
          {
            title: "Respostas Precisas sem Alucinações",
            description: "Utilizamos arquitetura RAG com guardrails rigorosos para que o agente responda exclusivamente baseado nos dados oficiais da sua empresa."
          },
          {
            title: "Escala sem Aumento Proporcional de Custos",
            description: "Atenda 10 ou 10.000 clientes simultâneos com a mesma qualidade e velocidade de resposta."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Mapeamento dos Fluxos de Atendimento",
            description: "Identificação das dúvidas frequentes, regras de negócio e integrações necessárias."
          },
          {
            step: "02",
            title: "Estruturação da Base de Conhecimento",
            description: "Indexação segura dos manuais, políticas e dados da empresa em banco vetorial."
          },
          {
            step: "03",
            title: "Engenharia de Prompt & Guardrails",
            description: "Testes rigorosos de precisão, tom de voz da marca e blindagem contra respostas inadequadas."
          },
          {
            step: "04",
            title: "Conexão aos Canais & Go-Live",
            description: "Integração à API Oficial do WhatsApp e ativação do monitoramento contínuo."
          }
        ],
        faqs: [
          {
            question: "A IA pode falar algo errado para o meu cliente?",
            answer: "Não. Nossos agentes operam com travas de segurança rígidas (RAG). Eles respondem apenas com base nas informações previamente validadas por você, e quando não têm certeza, transferem imediatamente para um atendente humano."
          },
          {
            question: "Funciona no WhatsApp Oficial?",
            answer: "Sim! Integramos diretamente com a API Oficial do WhatsApp Business, garantindo máxima estabilidade e conformidade com as diretrizes da Meta."
          }
        ]
      },
      en: {
        title: "AI Agents & Intelligent Automation",
        shortDescription: "Automate customer inquiries, repetitive tasks, and deploy smart AI agents connected to your corporate knowledge base.",
        fullDescription: "We convert hundreds of manual work hours into automated, error-free processes. We build autonomous AI agents for customer support, WhatsApp sales qualification, and intelligent workflow automation (RPA), safely grounded in your company's proprietary data via secure RAG architecture.",
        badge: "High Productivity",
        metaTitle: "Autonomous AI Agents & Intelligent Process Automation | Andrade",
        metaDescription: "Deploy smart AI agents, WhatsApp assistants, and workflow automation tailored for your company with enterprise security and GDPR compliance.",
        deliverables: [
          "AI Agents for WhatsApp Sales, Inquiries, and Customer Support",
          "Internal AI Assistants Connected to Corporate Knowledge Bases (RAG)",
          "Repetitive Task Automation & Document Processing (PDFs, Invoices)",
          "Automated Lead Qualification and Meeting Scheduling",
          "Enterprise API and CRM Integrations (HubSpot, Salesforce, Zendesk)",
          "Live Conversation Analytics and Quality Assurance Dashboard"
        ],
        benefits: [
          {
            title: "Instant Automated Lead Response",
            description: "Never lose a high-value customer to slow response times, even during weekends and holidays."
          },
          {
            title: "Save Hundreds of Staff Hours",
            description: "Free your core team from repetitive inquiries so they can focus on high-impact strategic tasks."
          },
          {
            title: "Grounded & Hallucination-Free",
            description: "Strict RAG guardrails ensure the AI only answers based on verified corporate manuals and approved documentation."
          },
          {
            title: "Seamless Infinite Scaling",
            description: "Handle 10 or 10,000 simultaneous conversations with zero degradation in speed or accuracy."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Workflow & Inquiry Mapping",
            description: "Auditing common customer questions, internal handoffs, and required API connections."
          },
          {
            step: "02",
            title: "Knowledge Base Vectorization",
            description: "Securely indexing documents and system records into a private vector database."
          },
          {
            step: "03",
            title: "Prompt Engineering & Guardrails",
            description: "Rigorous accuracy benchmarks, tone of voice alignment, and fail-safe human handover triggers."
          },
          {
            step: "04",
            title: "Channel Integration & Deployment",
            description: "Connecting to WhatsApp Official API / web chat and launching live telemetry."
          }
        ],
        faqs: [
          {
            question: "Can the AI hallucinate or provide false company information?",
            answer: "No. We implement strict RAG (Retrieval-Augmented Generation) guardrails. The AI answers exclusively from approved corporate data, automatically escalating to human staff when necessary."
          },
          {
            question: "Does it work with official WhatsApp Business accounts?",
            answer: "Yes! We connect directly to Meta's Official WhatsApp Business API, ensuring 99.9% uptime and zero risk of phone number blocking."
          }
        ]
      },
      es: {
        title: "Agentes de IA y Automatización Inteligente",
        shortDescription: "Automatice la atención al cliente, tareas repetitivas e integre agentes de IA conectados a la base de datos de su empresa.",
        fullDescription: "Transformamos horas de trabajo manual en procesos automatizados y eficientes. Desarrollamos agentes autónomos de Inteligencia Artificial para atención y ventas por WhatsApp, soporte técnico y automatización de flujos operativos (RPA), conectados de forma segura a la información de su empresa.",
        badge: "Alta Productividad",
        metaTitle: "Agentes de Inteligencia Artificial y Automatización de Procesos | Andrade",
        metaDescription: "Implementación de agentes de IA, chatbots para WhatsApp y automatización inteligente para empresas con seguridad y cumplimiento normativo.",
        deliverables: [
          "Agentes de IA para Atención y Ventas en WhatsApp",
          "Asistentes Internos Conectados a la Base de Datos Corporativa (RAG)",
          "Automatización de Tareas Repetitivas y Procesamiento de Documentos",
          "Calificación Automática de Prospectos y Agendamiento de Citas",
          "Integración Segura con APIs Oficiales y CRMs Corporativos",
          "Panel de Control y Supervisión de Conversaciones en Tiempo Real"
        ],
        benefits: [
          {
            title: "Atención Inmediata y Automatizada",
            description: "Sus clientes reciben respuestas al instante a cualquier hora del día, incluso fuera del horario comercial."
          },
          {
            title: "Ahorro de Cientos de Horas Operativas",
            description: "Libere a su equipo de consultas rutinarias para concentrarse en ventas estratégicas y crecimiento."
          },
          {
            title: "Respuestas Precisas sin Alucinaciones",
            description: "Arquitectura RAG con límites estrictos para responder únicamente en base a documentos oficiales."
          },
          {
            title: "Escalabilidad Infinita",
            description: "Atienda 10 o 10.000 clientes al mismo tiempo con la misma calidad de respuesta y rapidez."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Mapeo de Procesos y Consultas",
            description: "Identificación de preguntas frecuentes, reglas de negocio e integraciones necesarias."
          },
          {
            step: "02",
            title: "Estructuración de Base de Conocimiento",
            description: "Indexación segura de manuales y datos corporativos en una base de datos vectorial privada."
          },
          {
            step: "03",
            title: "Ingeniería de Prompts y Seguridad",
            description: "Pruebas de precisión, tono de comunicación y reglas de derivación a agentes humanos."
          },
          {
            step: "04",
            title: "Integración a Canales y Lanzamiento",
            description: "Conexión a la API Oficial de WhatsApp y activación del monitoreo operativo."
          }
        ],
        faqs: [
          {
            question: "¿La IA puede cometer errores o inventar información?",
            answer: "No. Utilizamos arquitectura RAG con controles estrictos. La IA responde exclusivamente con la información aprobada por usted y deriva a un humano cuando es necesario."
          },
          {
            question: "¿Funciona en la API Oficial de WhatsApp?",
            answer: "¡Sí! Integramos con la API Oficial de WhatsApp Business, garantizando máxima estabilidad y sin riesgo de bloqueos."
          }
        ]
      }
    }
  },
  {
    id: "ai-consulting-acceleration",
    iconName: "Cpu",
    featured: false,
    tags: ["Consultoria Estratégica de IA", "Auditoria de Segurança & LGPD", "Modernização de Softwares Legados", "Capacitação de Times", "Governança de Dados"],
    technologiesDetailed: [
      { category: "Estratégia & Arquitetura", items: ["Planejamento de Adoção de IA", "Auditoria de Código", "Clean Architecture", "Domain-Driven Design"] },
      { category: "Segurança & Privacidade", items: ["Adequação LGPD / GDPR", "OWASP Security Standards", "Criptografia de Dados", "Políticas de Acesso"] },
      { category: "Modelos & Soluções", items: ["Modelos Fundamentais de IA", "Modelos Open-Source Locais", "Embeddings & Bancos Vetoriais", "Pipelines RAG"] },
      { category: "Entregas & Métricas", items: ["Relatórios de Viabilidade (ROI)", "Workshops Técnicos", "Mentoria Hands-on", "SLA Contratual"] }
    ],
    locales: {
      pt: {
        title: "Consultoria de IA & Modernização de Sistemas",
        shortDescription: "Diagnóstico estratégico para implementar IA nos seus softwares, modernizar sistemas antigos e garantir segurança e conformidade LGPD.",
        fullDescription: "Ajudamos líderes empresariais a adotar Inteligência Artificial com clareza, segurança e retorno financeiro palpável. Avaliamos seus sistemas atuais, desenhamos planos de modernização sem interrupção de operações e orientamos sua equipe técnica nas melhores práticas globais de engenharia de software.",
        badge: "Estratégia & ROI",
        metaTitle: "Consultoria em Inteligência Artificial & Modernização de Software | Andrade",
        metaDescription: "Consultoria estratégica de IA para empresas. Modernização de sistemas legados, segurança da informação e conformidade com LGPD.",
        deliverables: [
          "Diagnóstico de Maturidade Digital e Oportunidades de IA",
          "Plano Estratégico de Modernização de Sistemas Legados",
          "Auditoria de Segurança da Informação e Conformidade com a LGPD",
          "Definição de Arquitetura de Software Segura e Escalável",
          "Capacitação e Mentoria Hands-On para Equipes de TI",
          "Estudo de Retorno sobre Investimento (ROI) para Projetos de IA"
        ],
        benefits: [
          {
            title: "Decisões Assertivas sem Desperdício",
            description: "Evite gastar com ferramentas ou tecnologias inadequadas com a orientação de especialistas experientes."
          },
          {
            title: "Modernização sem Parar a Empresa",
            description: "Evolua sistemas antigos para tecnologias modernas de forma gradual e sem interrupção operacional."
          },
          {
            title: "Conformidade Total com a Lei (LGPD)",
            description: "Tranquilidade jurídica com auditoria completa de coleta, armazenamento e tratamento de dados corporativos."
          },
          {
            title: "Aceleração da Maturidade Tecnológica",
            description: "Capacite sua liderança e desenvolvedores a utilizarem IA diariamente para produzir mais e melhor."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Assessment & Diagnóstico 360°",
            description: "Análise dos sistemas, fluxos de trabalho e dados para identificar gargalos e oportunidades."
          },
          {
            step: "02",
            title: "Roadmap Técnico & Estudo de ROI",
            description: "Apresentação de um plano prioritário com cronograma claro e estimativa de ganhos."
          },
          {
            step: "03",
            title: "Implementação & Arquitetura Piloto",
            description: "Desenvolvimento do primeiro projeto de IA com acompanhamento direto dos nossos arquitetos."
          },
          {
            step: "04",
            title: "Governança & Sustentabilidade",
            description: "Definição de regras de segurança, políticas de uso e capacitação do time interno."
          }
        ],
        faqs: [
          {
            question: "A consultoria atende empresas de qualquer porte?",
            answer: "Sim! Atendemos desde startups e empresas em crescimento até médias e grandes corporações que buscam acelerar suas operações com IA de forma estruturada e segura."
          },
          {
            question: "Vocês também executam o desenvolvimento do software?",
            answer: "Sim! Atuamos tanto no formato de assessoria estratégica quanto no desenvolvimento prático e completo (hands-on) dos sistemas."
          }
        ]
      },
      en: {
        title: "AI Strategy & Software Modernization",
        shortDescription: "Strategic consulting to integrate AI into your software ecosystem, modernize legacy systems, and ensure full GDPR compliance.",
        fullDescription: "We guide business leaders in adopting Artificial Intelligence with clarity, security, and measurable ROI. We assess your existing software, engineer seamless modernization blueprints without operational downtime, and mentor your internal teams on international development standards.",
        badge: "Strategy & ROI",
        metaTitle: "Enterprise AI Consulting & Software Modernization | Andrade",
        metaDescription: "Strategic AI consulting for modern enterprises. Legacy software modernization, InfoSec auditing, and GDPR/LGPD compliance.",
        deliverables: [
          "Digital AI Readiness Assessment and Opportunity Mapping",
          "Zero-Downtime Legacy System Modernization Blueprint",
          "Comprehensive Information Security and Data Privacy Audit (GDPR)",
          "High-Performance Scalable Software Architecture Design",
          "Hands-On Technical Mentorship and Team Upskilling",
          "Detailed Business ROI and Cost-Benefit Projections"
        ],
        benefits: [
          {
            title: "Informed Strategic Investments",
            description: "Avoid wasteful tech spending and choose the exact AI models and frameworks that drive measurable profitability."
          },
          {
            title: "Modernize Without Business Disruption",
            description: "Refactor slow, outdated software into high-speed modern systems step-by-step with zero operational downtime."
          },
          {
            title: "Uncompromising Privacy Compliance",
            description: "Complete legal and operational peace of mind with enterprise-grade data privacy frameworks."
          },
          {
            title: "Accelerated Team Output",
            description: "Empower your technical leaders with practical AI workflows to dramatically boost development output."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "360° Technical Assessment",
            description: "Deep dive into your codebase, databases, and operational bottlenecks to uncover high-impact AI opportunities."
          },
          {
            step: "02",
            title: "Strategic Roadmap & ROI Blueprint",
            description: "Clear prioritization matrix, timeline, and projected return on investment."
          },
          {
            step: "03",
            title: "Pilot Implementation & Architecture",
            description: "Hands-on execution of initial AI modules alongside our senior software architects."
          },
          {
            step: "04",
            title: "Governance & Long-Term Scaling",
            description: "Establishing internal AI policies, security guidelines, and ongoing advisory support."
          }
        ],
        faqs: [
          {
            question: "Do you advise businesses of different sizes?",
            answer: "Yes! We work with fast-growing startups, scale-ups, and established enterprises aiming to deploy AI safely and effectively."
          },
          {
            question: "Can your team also build the software hands-on?",
            answer: "Absolutely. We provide both advisory leadership and full end-to-end engineering execution."
          }
        ]
      },
      es: {
        title: "Consultoría de IA y Modernización de Sistemas",
        shortDescription: "Diagnóstico estratégico para implementar IA en sus aplicaciones, modernizar sistemas legados y garantizar seguridad y cumplimiento normativo.",
        fullDescription: "Ayudamos a líderes empresariales a adoptar Inteligencia Artificial con claridad, seguridad y retorno de inversión medible. Evaluamos sus aplicaciones actuales, diseñamos planes de modernización sin detener la operación y capacitamos a su equipo en estándares internacionales de ingeniería.",
        badge: "Estrategia y ROI",
        metaTitle: "Consultoría en Inteligencia Artificial y Modernización de Software | Andrade",
        metaDescription: "Consultoría estratégica de IA para empresas. Modernización de sistemas, seguridad de la información y adecuación a normas internacionales.",
        deliverables: [
          "Diagnóstico de Madurez Digital y Oportunidades de IA",
          "Plan Estratégico de Modernización de Sistemas Legados",
          "Auditoría de Seguridad de la Información y Cumplimiento Normativo",
          "Diseño de Arquitectura de Software Segura y Escalable",
          "Capacitación y Mentoría Práctica para Equipos de TI",
          "Estudio de Retorno de Inversión (ROI) para Proyectos de IA"
        ],
        benefits: [
          {
            title: "Decisiones Tecnológicas Acertadas",
            description: "Evite gastos innecesarios en herramientas inadecuadas con el asesoramiento de arquitectos experimentados."
          },
          {
            title: "Modernización sin Interrupciones",
            description: "Evolucione sistemas antiguos hacia tecnologías modernas de forma gradual y segura."
          },
          {
            title: "Cumplimiento Total de Privacidad",
            description: "Garantía de tranquilidad legal y técnica con auditorías de privacidad y seguridad de datos."
          },
          {
            title: "Aceleración de su Equipo Técnico",
            description: "Capacite a sus desarrolladores para utilizar herramientas de IA e incrementar su productividad diaria."
          }
        ],
        methodology: [
          {
            step: "01",
            title: "Diagnóstico Integral 360°",
            description: "Evaluación de sistemas, procesos y datos para detectar cuellos de botella y oportunidades."
          },
          {
            step: "02",
            title: "Hoja de Ruta y Estimación de ROI",
            description: "Presentación de un cronograma de modernización con metas e impacto financiero claro."
          },
          {
            step: "03",
            title: "Implementación de Arquitectura Piloto",
            description: "Desarrollo del primer módulo con acompañamiento directo de nuestros especialistas."
          },
          {
            step: "04",
            title: "Gobernanza y Sostenibilidad",
            description: "Definición de políticas de uso, normas de seguridad y transferencia de conocimientos."
          }
        ],
        faqs: [
          {
            question: "¿La consultoría está orientada a empresas de cualquier tamaño?",
            answer: "¡Sí! Atendemos desde startups y empresas en expansión hasta compañías consolidadas que buscan incorporar IA con solidez."
          },
          {
            question: "¿También se encargan del desarrollo del software?",
            answer: "Por supuesto. Ofrecemos tanto asesoría estratégica como ejecución técnica completa de principio a fin."
          }
        ]
      }
    }
  }
];

export const getServiceById = (id: string): ServiceItem | undefined => {
  return servicesData.find((service) => service.id === id);
};

export const getLocalizedService = (service: ServiceItem, lang: Language): ServiceLocalized => {
  return service.locales[lang] || service.locales.pt;
};
