export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  segment: string;
  avatarText: string;
  content: string;
  rating: number;
  highlightMetric: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Carlos Eduardo Silva",
    role: "CTO & Co-founder",
    company: "Nexus Logística Digital",
    segment: "Logtech",
    avatarText: "CS",
    content: "A Andrade Tecnologia reestruturou toda a nossa arquitetura em nuvem e reduziu nosso tempo de deploy de 45 minutos para apenas 3 minutos. A equipe tem um nível técnico ímpar e entrega no prazo rigorosamente.",
    rating: 5,
    highlightMetric: "-65% de custo com AWS"
  },
  {
    id: "2",
    name: "Mariana Alcantara",
    role: "Diretora de Operações",
    company: "FinVance Soluções Financeiras",
    segment: "Fintech",
    avatarText: "MA",
    content: "Contratamos o desenvolvimento do nosso aplicativo mobile com a Andrade e a experiência foi fantástica. A preocupação com a usabilidade móvel e a segurança dos dados dos nossos clientes superou todas as expectativas.",
    rating: 5,
    highlightMetric: "+120% engajamento mobile"
  },
  {
    id: "3",
    name: "Roberto Mendes",
    role: "Head de TI",
    company: "Hospitalar Care Brasil",
    segment: "Healthtech",
    avatarText: "RM",
    content: "O suporte e monitoramento da Andrade nos dá a tranquilidade necessária para focar no core business. Desde o início da parceria, nosso índice de uptime atingiu 99.98% sem nenhuma interrupção não planejada.",
    rating: 5,
    highlightMetric: "99.98% Uptime contínuo"
  }
];
