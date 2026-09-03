export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai_models' | 'geo_seo' | 'security';
  categoryLabel: string;
  description: string;
  color: string;
}

export const techStackData: TechItem[] = [
  // AI & Models
  {
    name: "Modelos Fundamentais & LLMs",
    category: "ai_models",
    categoryLabel: "Inteligência Artificial",
    description: "Integração agnóstica com os modelos de linguagem mais avançados para automação, análise de dados e agentes conversacionais.",
    color: "#2dd4bf"
  },
  {
    name: "Modelos Multimodais & Raciocínio",
    category: "ai_models",
    categoryLabel: "Inteligência Artificial",
    description: "Raciocínio complexo, visão computacional, extração estruturada de documentos corporativos e geração de código de alta precisão.",
    color: "#2dd4bf"
  },
  {
    name: "LangChain & RAG",
    category: "ai_models",
    categoryLabel: "Inteligência Artificial",
    description: "Arquitetura Retrieval-Augmented Generation conectada com segurança à base de dados da sua empresa sem alucinações.",
    color: "#2dd4bf"
  },
  {
    name: "pgvector & Embeddings",
    category: "ai_models",
    categoryLabel: "Inteligência Artificial",
    description: "Busca semântica vetorial de altíssima velocidade para correspondência de intenções e atendimento com IA.",
    color: "#2dd4bf"
  },

  // GEO & SEO
  {
    name: "GEO (AI Engine Optimization)",
    category: "geo_seo",
    categoryLabel: "GEO & SEO",
    description: "Otimização semântica para posicionar sua marca como resposta oficial nas principais ferramentas de busca por Inteligência Artificial.",
    color: "#2dd4bf"
  },
  {
    name: "Schema.org & JSON-LD",
    category: "geo_seo",
    categoryLabel: "GEO & SEO",
    description: "Metadados estruturados que permitem que buscadores e IAs indexem produtos, serviços e conteúdos com precisão máxima.",
    color: "#2dd4bf"
  },
  {
    name: "Core Web Vitals",
    category: "geo_seo",
    categoryLabel: "GEO & SEO",
    description: "Otimização cirúrgica de tempo de carregamento e estabilidade visual (LCP, FID, CLS) para máxima performance no Google.",
    color: "#2dd4bf"
  },

  // Frontend
  {
    name: "React & Next.js",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "Aplicações web corporativas ultrarrápidas com renderização híbrida (SSR/SSG) e excelente usabilidade (UI/UX).",
    color: "#2dd4bf"
  },
  {
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "Tipagem estática rigorosa que elimina erros em produção e garante escalabilidade de longo prazo.",
    color: "#2dd4bf"
  },
  {
    name: "Tailwind CSS & UI Kit",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "Design moderno, responsivo e interfaces visualmente impecáveis em qualquer tamanho de tela.",
    color: "#2dd4bf"
  },

  // Backend
  {
    name: "Node.js & NestJS",
    category: "backend",
    categoryLabel: "Backend & APIs",
    description: "Microsserviços e APIs corporativas em arquitetura modular com capacidade para milhões de requisições.",
    color: "#2dd4bf"
  },
  {
    name: "FastAPI & Python",
    category: "backend",
    categoryLabel: "Backend & APIs",
    description: "Backend de altíssima performance para orquestração de rotinas assíncronas e pipelines de Inteligência Artificial.",
    color: "#2dd4bf"
  },
  {
    name: "PostgreSQL & Supabase",
    category: "backend",
    categoryLabel: "Backend & APIs",
    description: "Bancos de dados relacionais robustos com segurança de nível enterprise, replicação e integridade de dados.",
    color: "#2dd4bf"
  },

  // Security & Compliance
  {
    name: "Conformidade LGPD & GDPR",
    category: "security",
    categoryLabel: "Segurança & Normas",
    description: "Auditoria e governança de dados para garantir privacidade, termos de consentimento e conformidade legal estrita.",
    color: "#2dd4bf"
  },
  {
    name: "OWASP Security Standards",
    category: "security",
    categoryLabel: "Segurança & Normas",
    description: "Proteção contra injeções SQL, XSS, CSRF e implementação de autenticação robusta (OAuth2 e JWT).",
    color: "#2dd4bf"
  }
];
