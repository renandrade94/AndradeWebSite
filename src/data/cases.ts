export interface CaseStudyLocalized {
  title: string;
  client: string;
  segment: string;
  badge: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  websiteUrl?: string;
  logoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CaseStudyItem {
  id: string;
  segmentKey: 'healthtech' | 'media' | 'logtech' | 'fintech' | 'ecommerce' | 'agtech' | 'all';
  technologies: string[];
  featured?: boolean;
  websiteUrl?: string;
  logoUrl?: string;
  locales: {
    pt: CaseStudyLocalized;
    en: CaseStudyLocalized;
    es: CaseStudyLocalized;
  };
}

export const casesData: CaseStudyItem[] = [
  {
    id: 'connectaodonto',
    segmentKey: 'healthtech',
    websiteUrl: 'https://www.connectaodonto.com',
    logoUrl: '/images/clients/connectaodonto-symbol.png',
    technologies: [
      'React & Vite',
      'TypeScript',
      'PostgreSQL & RLS',
      'Capacitor (Android Native)',
      'PWA & WebPush',
      'Edge Functions',
      'Tailwind CSS'
    ],
    featured: true,
    locales: {
      pt: {
        title: 'Desenvolvimento do Ecossistema B2B da Odontologia Moderna',
        client: 'ConnectaOdonto',
        segment: 'Healthtech & Odontologia Digital',
        badge: 'Ecossistema B2B & Plataforma Web',
        challenge: 'O mercado odontológico brasileiro operava de forma descentralizada e burocrática para a divulgação de vagas profissionais (dentistas, ASB e TSB), sublocação de consultórios ociosos e conexão com laboratórios e fornecedores, dependendo de canais informais sem segurança jurídica ou governança.',
        solution: 'Desenvolvimento completo da plataforma ConnectaOdonto: um ecossistema digital inteligente que conecta profissionais, clínicas e fornecedores. Inclui portal público moderno, busca e anúncio de vagas fixas e freelance, locação e monetização de salas/consultórios, marketplace de fornecedores e painel administrativo integrado em tempo real.',
        results: [
          'Plataforma 100% digital integrando dentistas, clínicas, laboratórios e fornecedores em um único hub.',
          'Gestão centralizada de oportunidades de trabalho, consultórios e parcerias comerciais.',
          'Painel administrativo integrado para moderação, métricas e governança operacional.',
          'Arquitetura segura com criptografia, alta disponibilidade e conformidade estrita com a LGPD.'
        ],
        metrics: [
          { label: 'Tempo de Entrega', value: '4 Meses' },
          { label: 'Solução', value: 'Ecossistema B2B' },
          { label: 'Status', value: 'Em Produção' }
        ],
        websiteUrl: 'https://www.connectaodonto.com',
        logoUrl: '/images/clients/connectaodonto-symbol.png',
        testimonial: {
          quote: 'A Andrade Serviços de Tecnologia transformou a visão da ConnectaOdonto em uma plataforma digital robusta, moderna e de alta usabilidade, unindo a prática odontológica à mais avançada engenharia de software.',
          author: 'ConnectaOdonto',
          role: 'Ecossistema da Odontologia Moderna'
        }
      },
      en: {
        title: 'End-to-End Engineering of the B2B Modern Dental Ecosystem',
        client: 'ConnectaOdonto',
        segment: 'Healthtech & Digital Dentistry',
        badge: 'B2B Ecosystem & Web Platform',
        challenge: 'The dental healthcare sector operated in a fragmented manner for hiring dental professionals (dentists, assistants, hygienists), monetizing idle clinic rooms, and sourcing laboratory partners, lacking a centralized secure platform.',
        solution: 'Full development of the ConnectaOdonto platform: an intelligent digital hub connecting dental clinics, professionals, and suppliers. Features modern web portal, fixed and freelance recruitment, clinic space rental marketplace, supplier catalog, and real-time administrative management panel.',
        results: [
          'Unified 100% digital platform connecting clinics, dentists, assistants, and suppliers.',
          'Centralized management of dental career opportunities, clinic spaces, and supplier relations.',
          'Comprehensive administrative portal for platform governance, moderation, and analytics.',
          'Secure cloud architecture with data encryption and full GDPR/LGPD compliance.'
        ],
        metrics: [
          { label: 'Delivery Time', value: '4 Months' },
          { label: 'Solution', value: 'B2B Ecosystem' },
          { label: 'Status', value: 'Live in Prod' }
        ],
        websiteUrl: 'https://www.connectaodonto.com',
        logoUrl: '/images/clients/connectaodonto-symbol.png',
        testimonial: {
          quote: 'Andrade turned ConnectaOdonto vision into a robust, state-of-the-art digital ecosystem, combining real-world dental expertise with top-tier software engineering.',
          author: 'ConnectaOdonto',
          role: 'Modern Dental Ecosystem'
        }
      },
      es: {
        title: 'Desarrollo Integral del Ecosistema B2B de la Odontología Moderna',
        client: 'ConnectaOdonto',
        segment: 'Healthtech & Odontología Digital',
        badge: 'Ecosistema B2B & Plataforma Web',
        challenge: 'El sector odontológico operaba de forma descentralizada para la contratación de profesionales, subalquiler de consultorios inactivos y conexión con proveedores, dependiendo de canales informales sin seguridad ni control.',
        solution: 'Desarrollo integral de la plataforma ConnectaOdonto: un ecosistema digital que conecta clínicas, profesionales y proveedores. Incluye portal web moderno, oportunidades de trabajo para odontólogos y auxiliares, sistema de alquiler de consultorios, catálogo de proveedores y panel de administración en tiempo real.',
        results: [
          'Plataforma 100% digital que integra dentistas, clínicas, laboratorios y proveedores en un único hub.',
          'Gestión centralizada de oportunidades de trabajo, consultorios y alianzas comerciales.',
          'Panel administrativo para gobernanza, moderación y métricas de operación.',
          'Arquitetura segura en la nube con cifrado y estricto cumplimiento de LGPD.'
        ],
        metrics: [
          { label: 'Tiempo de Entrega', value: '4 Meses' },
          { label: 'Solución', value: 'Ecosistema B2B' },
          { label: 'Estado', value: 'En Producción' }
        ],
        websiteUrl: 'https://www.connectaodonto.com',
        logoUrl: '/images/clients/connectaodonto-symbol.png',
        testimonial: {
          quote: 'Andrade convirtió la visión de ConnectaOdonto en un ecosistema digital robusto y moderno, uniendo la experiencia odontológica con la más avanzada ingeniería de software.',
          author: 'ConnectaOdonto',
          role: 'Ecosistema de Odontología Moderna'
        }
      }
    }
  },
  {
    id: 'souriant-odontologia',
    segmentKey: 'healthtech',
    websiteUrl: 'https://souriantodontologia.com.br',
    logoUrl: '/images/clients/souriant-logo.png',
    technologies: [
      'React & Vite',
      'TypeScript',
      'Schema.org JSON-LD',
      'Core Web Vitals',
      'Google Analytics',
      'CSS / Design System'
    ],
    featured: true,
    locales: {
      pt: {
        title: 'Website Institucional de Alta Performance e Posicionamento GEO/SEO',
        client: 'Souriant Odontologia',
        segment: 'Clínica & Odontologia Especializada',
        badge: 'Website Institucional & Presença Digital',
        challenge: 'A Souriant Odontologia necessitava de um website institucional moderno e com estética de alto padrão para consolidar sua autoridade médica no setor odontológico, comunicar suas especialidades clínicas e ranquear com destaque nas buscas locais do Google e motores de busca por Inteligência Artificial (GEO).',
        solution: 'Desenvolvimento de website institucional ultrarrápido com arquitetura moderna em React/TypeScript, metadados semânticos completos (Schema.org/MedicalBusiness) para GEO e SEO, design visual sofisticado e canais de contato otimizados para conversão de novos pacientes.',
        results: [
          'Website institucional elegante com navegação instantânea e design responsivo premium.',
          'Estrutura técnica otimizada para Core Web Vitals e indexação prioritária no Google e em IAs.',
          'Experiência do paciente aprimorada com apresentação clara de tratamentos e canais diretos de atendimento.'
        ],
        metrics: [
          { label: 'Tempo de Entrega', value: '4 Dias' },
          { label: 'Solução', value: 'Website & SEO' },
          { label: 'Status', value: 'Em Produção' }
        ],
        testimonial: {
          quote: 'A Andrade Serviços de Tecnologia desenvolveu uma presença digital impecável para a Souriant, unindo sofisticação visual, carregamento ultrarrápido e uma experiência clara e fluida para os nossos pacientes.',
          author: 'Souriant Odontologia',
          role: 'Odontologia Especializada'
        }
      },
      en: {
        title: 'High-Performance Institutional Website & GEO/SEO Optimization',
        client: 'Souriant Odontologia',
        segment: 'Specialized Dental Clinic',
        badge: 'Institutional Website & Digital Reach',
        challenge: 'Souriant Odontologia required a state-of-the-art institutional website to reflect its clinical authority, present specialized dental treatments, and rank prominently on Google local search and AI search engines (GEO).',
        solution: 'Engineered a modern, lightning-fast institutional website in React/TypeScript with full semantic schema markup (Schema.org/MedicalBusiness), sophisticated typography, and conversion pathways tailored for patient engagement.',
        results: [
          'High-authority institutional web platform with instant page loads and responsive design.',
          'Optimized technical foundations for Core Web Vitals and Generative AI search indexing.',
          'Seamless patient journey with intuitive presentation of specialized clinical services.'
        ],
        metrics: [
          { label: 'Delivery Time', value: '4 Days' },
          { label: 'Solution', value: 'Website & SEO' },
          { label: 'Status', value: 'Live in Prod' }
        ],
        testimonial: {
          quote: 'Andrade built a spotless digital presence for Souriant, combining aesthetic sophistication, rapid performance, and a smooth patient experience.',
          author: 'Souriant Odontologia',
          role: 'Specialized Dental Clinic'
        }
      },
      es: {
        title: 'Sitio Web Institucional de Alto Rendimiento y Posicionamiento GEO/SEO',
        client: 'Souriant Odontologia',
        segment: 'Clínica & Odontología Especializada',
        badge: 'Sitio Web Institucional & Presencia Digital',
        challenge: 'Souriant Odontologia requería un sitio web institucional moderno y de alta categoría estética para comunicar sus especialidades clínicas y posicionar en Google y motores de búsqueda con IA (GEO).',
        solution: 'Desarrollo de un sitio web ultrarrápido en React/TypeScript con metadados semánticos completos para GEO y SEO, diseño visual sofisticado y canales directos para la captación de pacientes.',
        results: [
          'Sitio web institucional de alta categoría con navegación instantánea y diseño responsive.',
          'Estructura técnica optimizada para Core Web Vitals e indexación en motores de IA.',
          'Experiencia del paciente optimizada con presentación clara de tratamientos clínicos.'
        ],
        metrics: [
          { label: 'Tiempo de Entrega', value: '4 Días' },
          { label: 'Solución', value: 'Website & SEO' },
          { label: 'Estado', value: 'En Producción' }
        ],
        testimonial: {
          quote: 'Andrade desarrolló una presencia digital impecable para Souriant, uniendo sofisticación visual, velocidad y una experiencia excelente para nuestros pacientes.',
          author: 'Souriant Odontologia',
          role: 'Odontología Especializada'
        }
      }
    }
  },
  {
    id: 'agtemp',
    segmentKey: 'media',
    websiteUrl: 'https://agtemp.com',
    logoUrl: '/images/clients/tempero-logo.png',
    technologies: [
      'React & Vite',
      'PostgreSQL',
      'TanStack Query',
      'Framer Motion',
      'Cloud Storage & CDN',
      'Painel CMS em Tempo Real'
    ],
    featured: true,
    locales: {
      pt: {
        title: 'Website Dinâmico com Gestão de Mídias em Tempo Real e Captação de Leads',
        client: 'Tempero | Produtora Audiovisual',
        segment: 'Audiovisual, Mídia & Entretenimento',
        badge: 'Website Dinâmico & Captação de Leads',
        challenge: 'A produtora necessitava de uma plataforma digital dinâmica e de alto impacto visual capaz de exibir seu portfólio de filmes e produções em tempo real, permitindo à equipe atualizar fotos, vídeos e links instantaneamente, além de otimizar a captação direta de leads e novas oportunidades de projetos.',
        solution: 'Desenvolvimento de website dinâmico de alto desempenho com sistema inteligente de gestão de fotos e vídeos atualizados em tempo real, controle dinâmico e centralizado de todos os links e botões da página, e canais integrados para captação e conversão de leads.',
        results: [
          'Exibição de portfólio audiovisual em tempo real com streaming otimizado de vídeos e fotos em alta definição.',
          'Gestão autônoma e instantânea de links, CTAs e materiais promocionais pela equipe da produtora.',
          'Estrutura otimizada para geração e captação contínua de leads qualificados para novos orçamentos.'
        ],
        metrics: [
          { label: 'Tempo de Entrega', value: '10 Dias' },
          { label: 'Solução', value: 'Website & SEO' },
          { label: 'Status', value: 'Em Produção' }
        ],
        testimonial: {
          quote: 'A Andrade entregou uma plataforma dinâmica que elevou nosso posicionamento no mercado audiovisual. O gerenciamento em tempo real de fotos e vídeos e a facilidade na captação de novos clientes transformaram nossa agilidade comercial.',
          author: 'Tempero Produtora',
          role: 'Produtora Audiovisual'
        }
      },
      en: {
        title: 'Dynamic Web Platform with Real-Time Media Management & Lead Generation',
        client: 'Tempero | Audiovisual Production',
        segment: 'Media, Film & Entertainment',
        badge: 'Dynamic Web & Lead Generation',
        challenge: 'The audiovisual production house required a high-impact dynamic web platform to showcase cinematic films and media in real time, empowering their internal team to update media assets and links on the fly and capture inbound project leads.',
        solution: 'Built a high-performance dynamic platform featuring real-time photo/video feeds, centralized link and CTA management, and optimized contact funnels for direct lead capture.',
        results: [
          'Real-time streaming portfolio featuring high-definition photo and video content.',
          'Zero-code control over links, buttons, and marketing campaigns directly from the admin interface.',
          'Optimized conversion funnels for inbound client inquiries and project quotes.'
        ],
        metrics: [
          { label: 'Delivery Time', value: '10 Days' },
          { label: 'Solution', value: 'Website & SEO' },
          { label: 'Status', value: 'Live in Prod' }
        ],
        testimonial: {
          quote: 'Andrade delivered a dynamic platform that significantly boosted our market presence. Managing real-time media assets and capturing new client opportunities transformed our commercial agility.',
          author: 'Tempero Produtora',
          role: 'Audiovisual Production'
        }
      },
      es: {
        title: 'Plataforma Web Dinámica con Gestión de Medios en Tiempo Real y Captación de Leads',
        client: 'Tempero | Productora Audiovisual',
        segment: 'Audiovisual, Medios & Entretenimiento',
        badge: 'Web Dinámica & Captación de Leads',
        challenge: 'La productora requería una plataforma web de alto impacto visual para proyectar su catálogo de producciones en tiempo real, permitiendo a su equipo actualizar fotos, videos y enlaces al instante con foco en la captación de nuevos clientes.',
        solution: 'Desarrollo de una plataforma web dinámica con feed de fotos y videos en tiempo real, gestión total de enlaces y canales optimizados para la captación y conversión de leads.',
        results: [
          'Portafolio audiovisual en tiempo real con transmisión optimizada de video y fotografía.',
          'Control total de enlaces y llamadas a la acción sin intermediación técnica.',
          'Estructura optimizada para la generación ágil de contactos comerciales y solicitudes de presupuesto.'
        ],
        metrics: [
          { label: 'Tiempo de Entrega', value: '10 Días' },
          { label: 'Solución', value: 'Website & SEO' },
          { label: 'Estado', value: 'En Producción' }
        ],
        testimonial: {
          quote: 'Andrade entregó una plataforma dinámica que elevó nuestro posicionamiento audiovisual. La gestión de medios en tiempo real y la agilidad en la captación de clientes transformaron nuestra respuesta comercial.',
          author: 'Tempero Produtora',
          role: 'Productora Audiovisual'
        }
      }
    }
  }
];

export const getLocalizedCase = (caseItem: CaseStudyItem, language: 'pt' | 'en' | 'es'): CaseStudyLocalized => {
  return caseItem.locales[language] || caseItem.locales.pt;
};
