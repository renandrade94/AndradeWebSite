export interface CompanyInfo {
  name: string;
  tradingName: string;
  legalName: string;
  cnpj: string;
  cnpjRaw: string;
  tagline: string;
  domain: string;
  websiteUrl: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappMessageDefault: string;
  address: {
    city: string;
    state: string;
    country: string;
    full: string;
  };
  workingHours?: string;
  sla: string;
  globalCoverage: string;
}

export const companyData: CompanyInfo = {
  name: "Andrade Serviços de Tecnologia",
  tradingName: "Andrade Serviços de Tecnologia",
  legalName: "Andrade Serviços de Tecnologia",
  cnpj: "35.395.058/0001-66",
  cnpjRaw: "35395058000166",
  tagline: "Desenvolvimento de Software com Inteligência Artificial, GEO & SEO para Empresas Globais",
  domain: "tecnologiandrade.com.br",
  websiteUrl: "https://tecnologiandrade.com.br",
  phone: "+55 (11) 94975-2588",
  phoneRaw: "5511949752588",
  whatsappNumber: "5511949752588",
  whatsappMessageDefault: "Olá! Gostaria de conversar com um especialista da Andrade Serviços de Tecnologia sobre desenvolvimento com Inteligência Artificial.",
  address: {
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    full: "São Paulo - SP, Brasil (Atendimento Global: Brasil e exterior)",
  },
  sla: "Atendimento Corporativo Especializado",
  globalCoverage: "Projetos desenvolvidos para clientes globais com padrões internacionais de segurança e LGPD/GDPR",
};

export const createWhatsAppUrl = (message?: string): string => {
  const text = encodeURIComponent(message || companyData.whatsappMessageDefault);
  return `https://wa.me/${companyData.whatsappNumber}?text=${text}`;
};
