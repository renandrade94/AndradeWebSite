import React, { createContext, useContext, useState } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  pt: {
    // Nav
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.cases': 'Cases de Sucesso',
    'nav.about': 'Sobre Nós',
    'nav.differentials': 'Diferenciais',
    'nav.technologies': 'Tecnologias',
    'nav.contact': 'Contato',
    'nav.request_quote': 'Solicitar Proposta',
    'nav.all_services': 'Todos os Serviços',

    // Cases Page
    'cases.badge': 'Resultados Reais & Histórias de Sucesso',
    'cases.title': 'Transformação Digital em ',
    'cases.title_highlight': 'Ação',
    'cases.subtitle': 'Conheça como a engenharia acelerada por IA da Andrade Serviços de Tecnologia impulsionou empresas líderes com alta performance, redução de custos e disponibilidade contínua.',
    'cases.filter_all': 'Todos os Segmentos',
    'cases.challenge': 'O Desafio',
    'cases.solution': 'A Solução de Engenharia',
    'cases.results': 'Resultados de Impacto',
    'cases.tech_stack': 'Stack de Tecnologias',
    'cases.cta_title': 'Pronto para Construir o Próximo Case de Sucesso?',
    'cases.cta_desc': 'Fale com nossos especialistas técnicos e descubra como acelerar seus projetos com Inteligência Artificial e alta performance.',

    // Hero
    'hero.badge': 'Desenvolvimento com Inteligência Artificial & GEO / SEO',
    'hero.title_prefix': 'Criamos Sistemas, Sites e Plataformas Inteligentes com ',
    'hero.title_highlight': 'IA & Alta Performance',
    'hero.description': 'Desenvolvemos soluções digitais sob medida integradas com Inteligência Artificial e preparadas para ranquear no topo do Google e em motores de busca por IA (GEO & SEO). Entregas em tempo recorde com segurança rigorosa, normas de mercado e conformidade LGPD.',
    'hero.cta_quote': 'Iniciar Projeto com IA',
    'hero.cta_whatsapp': 'Falar pelo WhatsApp',
    'hero.metric_speed': 'Entregas até 3x mais rápidas com IA',
    'hero.metric_global': 'Projetos Globais (Brasil, EUA & Latam)',
    'hero.metric_geo': '100% Otimizado para GEO & SEO',
    'hero.metric_lgpd': 'Segurança da Informação & LGPD',

    // Infographic Section
    'infographic.badge': 'Aceleração de Time-to-Market',
    'infographic.title_p1': 'O que antes levava meses ',
    'infographic.title_highlight': 'agora acontece em dias',
    'infographic.subtitle': 'Veja como a evolução tecnológica e a Engenharia com Inteligência Artificial transformaram o ciclo de criação de produtos digitais, saindo de anos de burocracia para lançamentos em tempo recorde.',
    'infographic.idea': 'Ideia',
    'infographic.market': 'Mercado (Go-Live)',
    'infographic.months_unit': 'Meses',
    'infographic.days_unit': 'DIAS',
    'infographic.stage_decision': 'Tomada de Decisão & Planejamento',
    'infographic.stage_dev': 'Design & Desenvolvimento',
    'infographic.stage_deploy': 'Implantação, Testes & Lançamento',
    
    'infographic.era1_name': 'ERA PRÉ-DIGITAL',
    'infographic.era1_desc': 'Processos lentos em cascata, reuniões infindáveis e meses de desenvolvimento manual isolado.',
    'infographic.era1_total': '28 MESES',
    'infographic.era1_s1': '12 Meses (43%)',
    'infographic.era1_s2': '09 Meses (33%)',
    'infographic.era1_s3': '07 Meses (25%)',

    'infographic.era2_name': 'ERA DIGITAL (ÁGIL TRADICIONAL)',
    'infographic.era2_desc': 'Metodologias ágeis e sprints reduziram prazos, mas ainda dependiam de gargalos manuais e equipes grandes.',
    'infographic.era2_total': '09 MESES',
    'infographic.era2_s1': '05 Meses (55%)',
    'infographic.era2_s2': '03 Meses (33%)',
    'infographic.era2_s3': '01 Mês (12%)',

    'infographic.era3_name': 'ERA DA INTELIGÊNCIA ARTIFICIAL',
    'infographic.era3_tag': 'Metodologia Andrade Serviços de Tecnologia',
    'infographic.era3_desc': 'Engenharia orientada a IA: prototipagem instantânea, código limpo gerado e revisado com copilotos, testes automatizados e esteiras contínuas.',
    'infographic.era3_total': 'DIAS',
    'infographic.era3_highlight': 'Redução de até 85% no tempo de lançamento | 100% Código Seguro & LGPD',
    'infographic.sources_note': 'Fundamentado em benchmarks consolidados da indústria de software (Standish Group CHAOS Report, State of Agile) e estudos globais de produtividade com IA (McKinsey & Co. / GitHub Research).',
    'infographic.cta_button': 'Acelerar Meu Projeto com IA',

    // Global Badge
    'global.worldwide_delivery': 'Atendimento Internacional & Entregas Globais',

    // Services General
    'services.badge': 'Soluções Inteligentes',
    'services.title': 'Soluções de Software e Web com ',
    'services.title_highlight': 'Inteligência Artificial',
    'services.subtitle': 'Do design à engenharia avançada: plataformas intuitivas, automações inteligentes e arquiteturas otimizadas para serem encontradas por humanos e pelas IAs.',
    'services.deliverables_label': 'Principais Entregáveis:',
    'services.view_details': 'Ver Detalhes do Serviço',
    'services.request_service': 'Solicitar Orçamento',
    'services.catalog_cta': 'Ver Catálogo Completo de Soluções',

    // About Section
    'about.badge': 'Experiência & Inovação',
    'about.title': 'Anos de Mercado Acelerados pela ',
    'about.title_highlight': 'Revolução da IA',
    'about.p1': 'A Andrade Serviços de Tecnologia combina sólida experiência de mercado com o que há de mais avançado em Inteligência Artificial para entregar projetos digitais em prazos consideravelmente menores que o modelo tradicional.',
    'about.p2': 'Não criamos apenas sites ou sistemas: construímos plataformas de alta conversão estruturadas desde a raiz para serem citadas e recomendadas por ferramentas de IA (GEO - Generative Engine Optimization) e alcançarem o topo do Google.',
    'about.p3': 'Com clientes e projetos executados pelo mundo todo, garantimos total conformidade com a LGPD, padrões internacionais de segurança da informação e uma experiência descomplicada e transparente.',
    'about.stat_experience': 'Anos de Experiência',
    'about.stat_speed': 'Mais Rápido que o Mercado',
    'about.stat_global': 'Projetos Globais Atendidos',
    'about.stat_compliance': 'Conformidade LGPD & ISO',

    // Differentials
    'diff.badge': 'Por que a Andrade?',
    'diff.title': 'Diferenciais que Geram ',
    'diff.title_highlight': 'Resultados Reais',
    'diff.subtitle': 'O que torna nossa entrega única no mercado de tecnologia:',
    'diff.card1.title': 'Pioneirismo em GEO (AI Search) & SEO',
    'diff.card1.desc': 'Sua empresa pronta para ser encontrada no topo do Google e citada como fonte oficial nos principais motores de busca e assistentes de Inteligência Artificial do mercado.',
    'diff.card2.title': 'Desenvolvimento Acelerado por IA',
    'diff.card2.desc': 'Utilizamos Inteligência Artificial em 100% dos nossos fluxos de engenharia, reduzindo o tempo de lançamento em até 60%.',
    'diff.card3.title': 'Resultados Palpáveis e Simplicidade',
    'diff.card3.desc': 'Eliminamos o jargão técnico complexo. Focamos em métricas reais: aumento de conversão, eficiência operacional e vendas.',
    'diff.card4.title': 'Segurança da Informação & LGPD',
    'diff.card4.desc': 'Código blindado contra vulnerabilidades OWASP, conformidade estrita com a LGPD e privacidade garantida por design.',
    'diff.card5.title': 'Atuação Global sem Fronteiras',
    'diff.card5.desc': 'Projetos desenvolvidos e sustentados para clientes no Brasil, América Latina, Estados Unidos e Europa.',
    'diff.card6.title': 'Propriedade Intelectual 100% Sua',
    'diff.card6.desc': 'Todo o código-fonte, repositórios e integrações desenvolvidas pertencem integralmente à sua empresa após a entrega.',

    // Tech Stack
    'tech.badge': 'Nosso Ecossistema',
    'tech.title': 'Tecnologias de Ponta & ',
    'tech.title_highlight': 'Modelos de IA',
    'tech.subtitle': 'Dominamos as ferramentas mais modernas do mundo para criar soluções velozes, estáveis e escaláveis.',

    // Contact
    'contact.badge': 'Fale Conosco',
    'contact.title': 'Pronto para Acelerar seu Negócio com ',
    'contact.title_highlight': 'Inteligência Artificial?',
    'contact.subtitle': 'Entre em contato e receba uma análise técnica preliminar sem compromisso para o seu projeto.',
    'contact.whatsapp_cta': 'Falar pelo WhatsApp',
    'contact.form_name': 'Seu Nome Completo *',
    'contact.form_email': 'E-mail Corporativo *',
    'contact.form_phone': 'WhatsApp / Telefone *',
    'contact.form_service': 'Serviço Desejado',
    'contact.form_message': 'Resumo do Projeto ou Desafio',
    'contact.form_submit': 'Solicitar Proposta Comercial',
    'contact.form_submitting': 'Enviando...',
    'contact.success_title': 'Solicitação Recebida!',
    'contact.sla': 'Atendimento Corporativo',
    'contact.sla_desc': 'Equipe técnica dedicada para novos projetos e consultoria',

    // Hero KPIs
    'hero.kpi1_title': 'Velocidade',
    'hero.kpi1_value': '3x Mais Rápido',
    'hero.kpi1_desc': 'Engenharia acelerada com IA',
    'hero.kpi2_title': 'Visibilidade',
    'hero.kpi2_value': 'GEO & SEO',
    'hero.kpi2_desc': 'Buscadores e IAs generativas',
    'hero.kpi3_title': 'Abrangência',
    'hero.kpi3_value': 'Global',
    'hero.kpi3_desc': 'Atuação no Brasil e exterior',
    'hero.kpi4_title': 'Conformidade',
    'hero.kpi4_value': 'LGPD / GDPR',
    'hero.kpi4_desc': 'Segurança OWASP por design',

    // Services Filter
    'services.filter_all': 'Todas as Soluções',
    'services.filter_platforms': 'Sistemas & Web Apps',
    'services.filter_geo': 'GEO & Buscas por IA',
    'services.filter_automation': 'Agentes & Automação',

    // Service Detail
    'service_detail.deliverables_tag': 'Escopo & Entregáveis',
    'service_detail.deliverables_title': 'O que está incluso:',
    'service_detail.benefits_tag': 'Diferenciais Estratégicos',
    'service_detail.benefits_title_prefix': 'Por que escolher a Andrade para ',
    'service_detail.methodology_tag': 'Como Trabalhamos',
    'service_detail.methodology_title': 'Metodologia de Engenharia & IA',
    'service_detail.methodology_desc': 'Processo ágil, com entregas frequentes e foco em resultados palpáveis para o seu negócio.',
    'service_detail.tech_tag': 'Stack de Engenharia',
    'service_detail.tech_title': 'Tecnologias & Modelos de IA Utilizados',
    'service_detail.faq_tag': 'Perguntas Frequentes',
    'service_detail.faq_title_prefix': 'Dúvidas sobre ',
    'service_detail.cta_tag': 'Inicie seu Projeto',
    'service_detail.cta_title_prefix': 'Pronto para acelerar seu projeto de ',
    'service_detail.cta_desc': 'Fale diretamente com nossa equipe técnica de engenharia e receba uma avaliação preliminar para o seu negócio.',
    'service_detail.badge_corp': 'Atendimento corporativo e consultoria ágil',
    'service_detail.badge_nda': 'Acordo de Confidencialidade (NDA) disponível',
    'service_detail.badge_speed': 'Entregas até 3x mais rápidas com IA',
    'service_detail.talk_whatsapp': 'Falar com um Especialista no WhatsApp',

    // About Page Additions
    'about.mission_title': 'Nossa Missão',
    'about.mission_desc': 'Simplificar a tecnologia e gerar resultados palpáveis para empresas globais através do desenvolvimento ágil de sistemas, web apps e plataformas aceleradas por Inteligência Artificial e otimizadas para GEO & SEO.',
    'about.vision_title': 'Nossa Visão',
    'about.vision_desc': 'Ser a referência internacional em engenharia de software com Inteligência Artificial, reconhecida por entregas ultrarrápidas, conformidade de segurança e soluções que lideram buscas por IA.',
    'about.values_title': 'Nossos Valores',
    'about.values_desc': 'Transparência radical, velocidade sem abrir mão de qualidade, segurança da informação e LGPD como prioridade máxima, e código 100% de propriedade do cliente.',
    'about.manifesto_tag': 'Manifesto de Engenharia & IA',
    'about.manifesto_title': 'Como Desenvolvemos Software no Século da IA',
    'about.manifesto_c1_title': 'IA em 100% dos Processos de Engenharia',
    'about.manifesto_c1_desc': 'Utilizamos copilotos de IA, automações de testes e revisão de arquitetura assistida para acelerar prazos de entrega em até 60% com menor taxa de erros.',
    'about.manifesto_c2_title': 'Padrões Nativos de GEO (Generative Engine Optimization)',
    'about.manifesto_c2_desc': 'Toda linha de código e estrutura de dados é modelada para que sua empresa seja indexada e citada como fonte oficial nos principais motores de IA e no Google.',
    'about.manifesto_c3_title': 'Código Seguro e Conformidade LGPD por Padrão',
    'about.manifesto_c3_desc': 'Segurança não é um adendo: é o alicerce. Blindamos dados contra vulnerabilidades OWASP e asseguramos privacidade estrita.',
    'about.manifesto_c4_title': 'Atuação Global e Entrega em Prazos Recordes',
    'about.manifesto_c4_desc': 'Comunicação direta sem burocracia, entregando sistemas robustos para clientes no Brasil e no exterior em uma fração do tempo do mercado.',
    'about.cta_title': 'Pronto para Construir o Futuro do seu Negócio com IA?',
    'about.cta_desc': 'Fale com nossos especialistas técnicos e acelere seus projetos digitais com alta performance e inteligência.',

    // Contact Page Additions
    'contact.banner_title': 'Atendimento Corporativo via WhatsApp',
    'contact.banner_desc': 'Fale em tempo real com nossa liderança técnica de engenharia para avaliar suas necessidades.',

    // NotFound
    'notfound.title': 'Página Não Encontrada',
    'notfound.desc': 'A página que você está procurando não existe ou foi movida.',
    'notfound.back_home': 'Voltar para o Início',

    // Footer
    'footer.tagline': 'Engenharia de Software com Inteligência Artificial, GEO/SEO e Alto Desempenho para Empresas Globais',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.compliance': 'Conformidade com LGPD & Normas de Segurança',
    'footer.nav': 'Navegação',
    'footer.solutions': 'Soluções em IA',

    // Modal
    'modal.title': 'Solicitar Proposta de IA & Software',
    'modal.subtitle': 'Preencha os dados abaixo para receber um orçamento rápido.',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.cases': 'Case Studies',
    'nav.about': 'About Us',
    'nav.differentials': 'Why Choose Us',
    'nav.technologies': 'Tech Stack',
    'nav.contact': 'Contact',
    'nav.request_quote': 'Get a Proposal',
    'nav.all_services': 'All Services',

    // Cases Page
    'cases.badge': 'Proven Impact & Client Success',
    'cases.title': 'Digital Transformation in ',
    'cases.title_highlight': 'Action',
    'cases.subtitle': 'Explore how Andrade AI-accelerated engineering propelled leading enterprises with high performance, cost savings, and continuous uptime.',
    'cases.filter_all': 'All Industries',
    'cases.challenge': 'The Challenge',
    'cases.solution': 'Engineering Solution',
    'cases.results': 'Impact Results',
    'cases.tech_stack': 'Technology Stack',
    'cases.cta_title': 'Ready to Build Your Next Success Story?',
    'cases.cta_desc': 'Talk with our technical specialists and discover how to accelerate your digital projects with AI and enterprise performance.',

    // Hero
    'hero.badge': 'AI-Powered Development & GEO / SEO Excellence',
    'hero.title_prefix': 'We Build Smart Systems, Websites & Platforms Powered by ',
    'hero.title_highlight': 'AI & High Performance',
    'hero.description': 'We build bespoke digital solutions integrated with Artificial Intelligence and optimized to rank at the top of Google and AI Search Engines (GEO & SEO). Delivered in record time with enterprise security standards, international compliance, and GDPR/LGPD readiness.',
    'hero.cta_quote': 'Start AI Project',
    'hero.cta_whatsapp': 'Chat on WhatsApp',
    'hero.metric_speed': 'Up to 3x faster delivery with AI engineering',
    'hero.metric_global': 'Global Projects (USA, Latam & Europe)',
    'hero.metric_geo': '100% Optimized for GEO & SEO',
    'hero.metric_lgpd': 'Enterprise InfoSec & Data Privacy',

    // Hero KPIs
    'hero.kpi1_title': 'Speed',
    'hero.kpi1_value': '3x Faster',
    'hero.kpi1_desc': 'AI-accelerated software engineering',
    'hero.kpi2_title': 'Visibility',
    'hero.kpi2_value': 'GEO & SEO',
    'hero.kpi2_desc': 'Search engines & Generative AI',
    'hero.kpi3_title': 'Reach',
    'hero.kpi3_value': 'Global',
    'hero.kpi3_desc': 'Serving USA, Latam & Europe',
    'hero.kpi4_title': 'Compliance',
    'hero.kpi4_value': 'LGPD / GDPR',
    'hero.kpi4_desc': 'OWASP security by design',

    // Infographic Section
    'infographic.badge': 'Time-to-Market Acceleration',
    'infographic.title_p1': 'What used to take months ',
    'infographic.title_highlight': 'now happens in days',
    'infographic.subtitle': 'See how technological evolution and AI-powered software engineering compressed digital product creation from years of bureaucratic cycles into record-breaking launches.',
    'infographic.idea': 'Idea',
    'infographic.market': 'Market (Go-Live)',
    'infographic.months_unit': 'Months',
    'infographic.days_unit': 'DAYS',
    'infographic.stage_decision': 'Decision Making & Planning',
    'infographic.stage_dev': 'Design & Development',
    'infographic.stage_deploy': 'Deployment, QA & Launch',

    'infographic.era1_name': 'PRE-DIGITAL ERA',
    'infographic.era1_desc': 'Slow waterfall processes, endless meetings, and months of isolated manual coding.',
    'infographic.era1_total': '28 MONTHS',
    'infographic.era1_s1': '12 Months (43%)',
    'infographic.era1_s2': '09 Months (33%)',
    'infographic.era1_s3': '07 Months (25%)',

    'infographic.era2_name': 'DIGITAL ERA (TRADITIONAL AGILE)',
    'infographic.era2_desc': 'Agile sprints reduced development cycles, but still suffered from manual overhead and large team bottlenecks.',
    'infographic.era2_total': '09 MONTHS',
    'infographic.era2_s1': '05 Months (55%)',
    'infographic.era2_s2': '03 Months (33%)',
    'infographic.era2_s3': '01 Month (12%)',

    'infographic.era3_name': 'ARTIFICIAL INTELLIGENCE ERA',
    'infographic.era3_tag': 'Andrade Serviços de Tecnologia',
    'infographic.era3_desc': 'AI-driven engineering: instant prototyping, AI copilots generating clean code, automated test suites, and continuous delivery.',
    'infographic.era3_total': 'DAYS',
    'infographic.era3_highlight': 'Up to 85% reduction in time-to-market | 100% Secure & Compliant Code',
    'infographic.sources_note': 'Grounded in industry-standard software benchmarks (Standish Group CHAOS Report, State of Agile) and global AI developer productivity studies (McKinsey & Co. / GitHub Research).',
    'infographic.cta_button': 'Accelerate My Project with AI',

    // Global Badge
    'global.worldwide_delivery': 'International Service & Worldwide Delivery',

    // Services General
    'services.badge': 'Smart Solutions',
    'services.title': 'Software & Web Solutions Powered by ',
    'services.title_highlight': 'Artificial Intelligence',
    'services.subtitle': 'From modern UI/UX design to advanced AI engineering: scalable platforms, smart workflows, and architectures built to be discovered by both humans and AI engines.',
    'services.deliverables_label': 'Key Deliverables:',
    'services.view_details': 'View Service Details',
    'services.request_service': 'Request a Quote',
    'services.catalog_cta': 'View Full Solutions Catalog',

    // Services Filter
    'services.filter_all': 'All Solutions',
    'services.filter_platforms': 'Systems & Web Apps',
    'services.filter_geo': 'GEO & AI Search',
    'services.filter_automation': 'Agents & Automation',

    // Service Detail
    'service_detail.deliverables_tag': 'Scope & Deliverables',
    'service_detail.deliverables_title': 'What is included:',
    'service_detail.benefits_tag': 'Strategic Advantages',
    'service_detail.benefits_title_prefix': 'Why choose Andrade for ',
    'service_detail.methodology_tag': 'How We Work',
    'service_detail.methodology_title': 'Engineering & AI Methodology',
    'service_detail.methodology_desc': 'Agile process with continuous releases and measurable business ROI.',
    'service_detail.tech_tag': 'Engineering Stack',
    'service_detail.tech_title': 'Technologies & AI Models Used',
    'service_detail.faq_tag': 'Frequently Asked Questions',
    'service_detail.faq_title_prefix': 'Questions about ',
    'service_detail.cta_tag': 'Start Your Project',
    'service_detail.cta_title_prefix': 'Ready to accelerate your project for ',
    'service_detail.cta_desc': 'Speak directly with our senior engineering team and get a preliminary technical assessment for your business.',
    'service_detail.badge_corp': 'Enterprise consulting and rapid delivery',
    'service_detail.badge_nda': 'Non-Disclosure Agreement (NDA) ready',
    'service_detail.badge_speed': 'Up to 3x faster delivery with AI',
    'service_detail.talk_whatsapp': 'Talk with an Expert on WhatsApp',

    // About Section
    'about.badge': 'Experience & Innovation',
    'about.title': 'Years of Market Mastery Accelerated by ',
    'about.title_highlight': 'the AI Revolution',
    'about.p1': 'Andrade Serviços de Tecnologia merges proven market expertise with state-of-the-art Artificial Intelligence to deliver digital projects significantly faster than traditional software agencies.',
    'about.p2': 'We don’t just build apps or websites: we create high-converting platforms engineered from the ground up to be cited and recommended by AI engines (GEO - Generative Engine Optimization) and rank #1 on Google search.',
    'about.p3': 'Serving clients and executing projects globally, we strictly adhere to international InfoSec standards, GDPR/LGPD compliance, and transparent, hassle-free communication.',
    'about.stat_experience': 'Years of Experience',
    'about.stat_speed': 'Faster Than Traditional Agencies',
    'about.stat_global': 'Worldwide Projects Executed',
    'about.stat_compliance': 'GDPR, LGPD & Security Standards',

    // About Page Additions
    'about.mission_title': 'Our Mission',
    'about.mission_desc': 'To simplify technology and drive tangible business results for global enterprises through agile development of systems, web apps, and AI-powered platforms optimized for GEO & SEO.',
    'about.vision_title': 'Our Vision',
    'about.vision_desc': 'To be the international benchmark in AI-powered software engineering, recognized for rapid delivery, uncompromising security compliance, and market-leading AI visibility.',
    'about.values_title': 'Our Values',
    'about.values_desc': 'Radical transparency, speed without sacrificing code quality, InfoSec & LGPD/GDPR as top priority, and 100% customer-owned intellectual property.',
    'about.manifesto_tag': 'Engineering & AI Manifesto',
    'about.manifesto_title': 'How We Build Software in the AI Era',
    'about.manifesto_c1_title': 'AI in 100% of Engineering Workflows',
    'about.manifesto_c1_desc': 'We leverage AI copilots, test automation, and architectural reviews to cut delivery times by up to 60% with reduced error rates.',
    'about.manifesto_c2_title': 'Native GEO (Generative Engine Optimization) Standards',
    'about.manifesto_c2_desc': 'Every line of code and structured data model is architected for your brand to be cited as an authoritative source in AI engines and Google.',
    'about.manifesto_c3_title': 'Secure Code & InfoSec Compliance by Default',
    'about.manifesto_c3_desc': 'Security is not an afterthought: it is our bedrock. We harden applications against OWASP vulnerabilities and ensure strict data privacy.',
    'about.manifesto_c4_title': 'Global Reach & Record-Breaking Turnaround',
    'about.manifesto_c4_desc': 'Direct communication without bureaucratic drag, delivering robust software for clients worldwide in a fraction of traditional agency timelines.',
    'about.cta_title': 'Ready to Build the Future of Your Business with AI?',
    'about.cta_desc': 'Talk with our senior engineering team and accelerate your digital roadmap with state-of-the-art intelligence.',

    // Differentials
    'diff.badge': 'Why Andrade?',
    'diff.title': 'Differentials that Deliver ',
    'diff.title_highlight': 'Tangible Results',
    'diff.subtitle': 'What makes our software delivery unique in the technology landscape:',
    'diff.card1.title': 'Pioneers in GEO (AI Search) & SEO',
    'diff.card1.desc': 'Get your business indexed at the top of Google and cited as an authoritative source across all market-leading AI search engines and assistants.',
    'diff.card2.title': 'AI-Accelerated Engineering',
    'diff.card2.desc': 'We leverage AI copilots and automated workflows in 100% of our code lifecycle, cutting time-to-market by up to 60%.',
    'diff.card3.title': 'Tangible Results & Crystal Simplicity',
    'diff.card3.desc': 'No confusing jargon. We focus on measurable business KPIs: higher conversion rates, operational savings, and revenue growth.',
    'diff.card4.title': 'Enterprise InfoSec & Data Privacy',
    'diff.card4.desc': 'Hardened against OWASP vulnerabilities, strictly compliant with LGPD/GDPR and privacy-by-design architecture.',
    'diff.card5.title': 'Borderless Global Reach',
    'diff.card5.desc': 'We build and maintain software solutions for clients across the United States, Latin America, Europe, and Brazil.',
    'diff.card6.title': '100% Intellectual Property Yours',
    'diff.card6.desc': 'All source code, Git repositories, architectures, and integrations belong 100% to your company upon delivery.',

    // Tech Stack
    'tech.badge': 'Our Ecosystem',
    'tech.title': 'Cutting-Edge Technologies & ',
    'tech.title_highlight': 'AI Foundation Models',
    'tech.subtitle': 'We master the world’s most advanced development frameworks and LLMs to create lightning-fast, secure software.',

    // Contact
    'contact.badge': 'Get in Touch',
    'contact.title': 'Ready to Accelerate Your Business with ',
    'contact.title_highlight': 'Artificial Intelligence?',
    'contact.subtitle': 'Reach out to receive a free preliminary architectural review and proposal for your business.',
    'contact.whatsapp_cta': 'Chat on WhatsApp',
    'contact.form_name': 'Full Name *',
    'contact.form_email': 'Corporate Email *',
    'contact.form_phone': 'Phone / WhatsApp *',
    'contact.form_service': 'Desired Service',
    'contact.form_message': 'Project Summary or Key Challenges',
    'contact.form_submit': 'Request Commercial Proposal',
    'contact.form_submitting': 'Submitting...',
    'contact.success_title': 'Request Received!',
    'contact.success_desc': 'Redirecting to our WhatsApp business channel to assist you immediately.',
    'contact.sla': 'Corporate Support',
    'contact.sla_desc': 'Dedicated technical team for new projects and consulting',
    'contact.banner_title': 'Corporate Inquiries via WhatsApp',
    'contact.banner_desc': 'Chat in real time with our engineering leadership to evaluate your business requirements.',

    // NotFound
    'notfound.title': 'Page Not Found',
    'notfound.desc': 'The page you are looking for does not exist or has been moved.',
    'notfound.back_home': 'Back to Home',

    // Footer
    'footer.tagline': 'Software Engineering with Artificial Intelligence, GEO/SEO and High Performance for Global Enterprises',
    'footer.rights': 'All rights reserved.',
    'footer.compliance': 'LGPD, GDPR & InfoSec Compliance',
    'footer.nav': 'Navigation',
    'footer.solutions': 'AI Solutions',

    // Modal
    'modal.title': 'Request AI & Software Proposal',
    'modal.subtitle': 'Fill out the details below to receive a fast, tailored estimate.',
  },

  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.cases': 'Casos de Éxito',
    'nav.about': 'Sobre Nosotros',
    'nav.differentials': 'Diferenciales',
    'nav.technologies': 'Tecnologías',
    'nav.contact': 'Contacto',
    'nav.request_quote': 'Solicitar Propuesta',
    'nav.all_services': 'Todos los Servicios',

    // Cases Page
    'cases.badge': 'Resultados Reales & Casos de Éxito',
    'cases.title': 'Transformación Digital en ',
    'cases.title_highlight': 'Acción',
    'cases.subtitle': 'Descubra cómo la ingeniería acelerada por IA de Andrade impulsó a empresas líderes com alto rendimiento, ahorro de costos y disponibilidad continua.',
    'cases.filter_all': 'Todos los Sectores',
    'cases.challenge': 'El Desafío',
    'cases.solution': 'La Solución de Ingeniería',
    'cases.results': 'Resultados de Impacto',
    'cases.tech_stack': 'Stack de Tecnologías',
    'cases.cta_title': '¿Listo para Construir el Próximo Caso de Éxito?',
    'cases.cta_desc': 'Hable con nuestros especialistas técnicos y descubra cómo acelerar sus proyectos digitales con IA y alto rendimiento.',

    // Hero
    'hero.badge': 'Desarrollo con Inteligencia Artificial & GEO / SEO',
    'hero.title_prefix': 'Creamos Sistemas, Sitios y Plataformas Inteligentes con ',
    'hero.title_highlight': 'IA & Alto Rendimiento',
    'hero.description': 'Desarrollamos soluciones digitales a medida integradas con Inteligencia Artificial y optimizadas para posicionar en Google y motores de búsqueda con IA (GEO & SEO). Entregas en tiempo récord con seguridad estricta, normas de mercado y cumplimiento de LGPD/GDPR.',
    'hero.cta_quote': 'Iniciar Proyecto con IA',
    'hero.cta_whatsapp': 'Hablar por WhatsApp',
    'hero.metric_speed': 'Entregas hasta 3x más rápidas con IA',
    'hero.metric_global': 'Proyectos Globales (EE.UU., Latam y Europa)',
    'hero.metric_geo': '100% Optimizado para GEO & SEO',
    'hero.metric_lgpd': 'Seguridad de la Información & Privacidad',

    // Hero KPIs
    'hero.kpi1_title': 'Velocidad',
    'hero.kpi1_value': '3x Más Rápido',
    'hero.kpi1_desc': 'Ingeniería acelerada con IA',
    'hero.kpi2_title': 'Visibilidad',
    'hero.kpi2_value': 'GEO & SEO',
    'hero.kpi2_desc': 'Buscadores e IAs generativas',
    'hero.kpi3_title': 'Alcance',
    'hero.kpi3_value': 'Global',
    'hero.kpi3_desc': 'Atención en EE.UU., Latam y Europa',
    'hero.kpi4_title': 'Conformidad',
    'hero.kpi4_value': 'LGPD / GDPR',
    'hero.kpi4_desc': 'Seguridad OWASP desde el diseño',

    // Infographic Section
    'infographic.badge': 'Aceleración de Time-to-Market',
    'infographic.title_p1': 'Lo que antes tomaba meses ',
    'infographic.title_highlight': 'ahora ocurre en días',
    'infographic.subtitle': 'Vea cómo la evolución tecnológica y la Ingeniería con Inteligência Artificial transformaron el ciclo de creación digital, pasando de años de lentitud a lanzamientos en tiempo récord.',
    'infographic.idea': 'Idea',
    'infographic.market': 'Mercado (Go-Live)',
    'infographic.months_unit': 'Meses',
    'infographic.days_unit': 'DÍAS',
    'infographic.stage_decision': 'Toma de Decisión y Planificación',
    'infographic.stage_dev': 'Diseño y Desarrollo',
    'infographic.stage_deploy': 'Despliegue, Pruebas y Lanzamiento',

    'infographic.era1_name': 'ERA PREDIGITAL',
    'infographic.era1_desc': 'Procesos lentos en cascada, reuniones interminables y meses de desarrollo manual aislado.',
    'infographic.era1_total': '28 MESES',
    'infographic.era1_s1': '12 Meses (43%)',
    'infographic.era1_s2': '09 Meses (33%)',
    'infographic.era1_s3': '07 Meses (25%)',

    'infographic.era2_name': 'ERA DIGITAL (ÁGIL TRADICIONAL)',
    'infographic.era2_desc': 'Las metodologías ágiles redujeron plazos, pero aún dependían de cuellos de botella manuales y grandes equipos.',
    'infographic.era2_total': '09 MESES',
    'infographic.era2_s1': '05 Meses (55%)',
    'infographic.era2_s2': '03 Meses (33%)',
    'infographic.era2_s3': '01 Mes (12%)',

    'infographic.era3_name': 'ERA DE LA INTELIGENCIA ARTIFICIAL',
    'infographic.era3_tag': 'Metodología Andrade Serviços de Tecnologia',
    'infographic.era3_desc': 'Ingeniería con IA: prototipado instantáneo, código limpio generado con copilotos, pruebas automatizadas y entrega continua.',
    'infographic.era3_total': 'DÍAS',
    'infographic.era3_highlight': 'Reducción de hasta 85% en tiempo de lanzamiento | 100% Código Seguro y LGPD',
    'infographic.sources_note': 'Fundamentado en benchmarks consolidados de la industria (Standish Group CHAOS Report, State of Agile) y estudios globales de productividad con IA (McKinsey & Co. / GitHub Research).',
    'infographic.cta_button': 'Acelerar Mi Proyecto con IA',

    // Global Badge
    'global.worldwide_delivery': 'Atención Internacional & Entregas Globales',

    // Services General
    'services.badge': 'Soluciones Inteligentes',
    'services.title': 'Soluciones de Software e Web com ',
    'services.title_highlight': 'Inteligência Artificial',
    'services.subtitle': 'Desde diseño UI/UX hasta ingeniería avanzada: plataformas escalables, automatizaciones inteligentes y arquitecturas optimizadas para ser encontradas por humanos y motores de IA.',
    'services.deliverables_label': 'Principales Entregables:',
    'services.view_details': 'Ver Detalles del Servicio',
    'services.request_service': 'Solicitar Cotización',
    'services.catalog_cta': 'Ver Catálogo Completo de Soluciones',

    // Services Filter
    'services.filter_all': 'Todas las Soluciones',
    'services.filter_platforms': 'Sistemas y Web Apps',
    'services.filter_geo': 'GEO y Búsquedas IA',
    'services.filter_automation': 'Agentes y Automatización',

    // Service Detail
    'service_detail.deliverables_tag': 'Alcance y Entregables',
    'service_detail.deliverables_title': 'Qué está incluido:',
    'service_detail.benefits_tag': 'Ventajas Estratégicas',
    'service_detail.benefits_title_prefix': '¿Por qué elegir a Andrade para ',
    'service_detail.methodology_tag': 'Cómo Trabajamos',
    'service_detail.methodology_title': 'Metodología de Ingeniería e IA',
    'service_detail.methodology_desc': 'Proceso ágil con entregas continuas y enfoque en resultados reales para su negocio.',
    'service_detail.tech_tag': 'Stack de Ingeniería',
    'service_detail.tech_title': 'Tecnologías y Modelos de IA Utilizados',
    'service_detail.faq_tag': 'Preguntas Frecuentes',
    'service_detail.faq_title_prefix': 'Preguntas sobre ',
    'service_detail.cta_tag': 'Inicie su Proyecto',
    'service_detail.cta_title_prefix': '¿Listo para acelerar su proyecto de ',
    'service_detail.cta_desc': 'Hable directamente con nuestro equipo de ingeniería y reciba una evaluación preliminar para su empresa.',
    'service_detail.badge_corp': 'Atención corporativa y consultoría ágil',
    'service_detail.badge_nda': 'Acuerdo de Confidencialidad (NDA) disponible',
    'service_detail.badge_speed': 'Entregas hasta 3x más rápidas con IA',
    'service_detail.talk_whatsapp': 'Hablar con un Especialista en WhatsApp',

    // About Section
    'about.badge': 'Experiencia & Innovación',
    'about.title': 'Años de Experiencia Acelerados por la ',
    'about.title_highlight': 'Revolución de la IA',
    'about.p1': 'Andrade Serviços de Tecnologia combina una sólida trayectoria de mercado con lo más avanzado en Inteligencia Artificial para entregar proyectos digitales en plazos significativamente menores.',
    'about.p2': 'No solo creamos sitios web o sistemas: construimos plataformas de alta conversión preparadas para ser citadas y recomendadas por herramientas de IA (GEO - Generative Engine Optimization) y alcanzar el primer lugar en Google.',
    'about.p3': 'Con clientes y proyectos ejecutados en todo el mundo, garantizamos total cumplimiento de normas de seguridad, LGPD/GDPR y una comunicación ágil y transparente.',
    'about.stat_experience': 'Años de Experiencia',
    'about.stat_speed': 'Más Rápido que el Mercado',
    'about.stat_global': 'Projetos Globais Atendidos',
    'about.stat_compliance': 'Normas de Seguridad & LGPD',

    // About Page Additions
    'about.mission_title': 'Nuestra Misión',
    'about.mission_desc': 'Simplificar la tecnología y generar resultados palpables para empresas globales mediante el desarrollo ágil de sistemas, web apps y plataformas con IA optimizadas para GEO & SEO.',
    'about.vision_title': 'Nuestra Visión',
    'about.vision_desc': 'Ser el referente internacional en ingeniería de software con Inteligencia Artificial, reconocido por entregas ultrarrápidas, seguridad estricta y liderazgo en búsquedas por IA.',
    'about.values_title': 'Nuestros Valores',
    'about.values_desc': 'Transparência radical, velocidad sin sacrificar calidad, seguridad de la información como máxima prioridad y propiedad intelectual 100% del cliente.',
    'about.manifesto_tag': 'Manifiesto de Ingeniería e IA',
    'about.manifesto_title': 'Cómo Desarrollamos Software en la Era de la IA',
    'about.manifesto_c1_title': 'IA en el 100% de los Procesos de Ingeniería',
    'about.manifesto_c1_desc': 'Usamos copilotos de IA, pruebas automatizadas y revisión de arquitectura asistida para reducir tiempos de entrega hasta un 60% con menor tasa de errores.',
    'about.manifesto_c2_title': 'Estándares Nativos de GEO (Generative Engine Optimization)',
    'about.manifesto_c2_desc': 'Cada línea de código y modelo de datos está estructurado para que su empresa sea indexada y citada como fuente oficial en motores de IA y Google.',
    'about.manifesto_c3_title': 'Código Seguro y Cumplimiento Normativo por Defecto',
    'about.manifesto_c3_desc': 'La seguridad no es un accesorio: es la base. Protegemos datos contra vulnerabilidades OWASP y garantizamos privacidad rigurosa.',
    'about.manifesto_c4_title': 'Alcance Global y Entregas en Tiempo Récord',
    'about.manifesto_c4_desc': 'Comunicación directa sin burocracia, entregando sistemas robustos para clientes en todo el mundo en una fracción del tiempo habitual.',
    'about.cta_title': '¿Listo para Construir el Futuro de su Negocio con IA?',
    'about.cta_desc': 'Hable con nuestros especialistas técnicos y acelere sus proyectos digitales con alto rendimiento e inteligencia.',

    // Differentials
    'diff.badge': '¿Por qué Andrade?',
    'diff.title': 'Diferenciales que Generan ',
    'diff.title_highlight': 'Resultados Palpables',
    'diff.subtitle': 'Lo que hace única nuestra entrega en el mercado tecnológico:',
    'diff.card1.title': 'Pioneros en GEO (Búsquedas IA) & SEO',
    'diff.card1.desc': 'Su empresa posicionada en lo alto de Google y citada como fuente oficial en los principales motores y asistentes de Inteligencia Artificial del mercado.',
    'diff.card2.title': 'Desarrollo Acelerado por IA',
    'diff.card2.desc': 'Usamos Inteligencia Artificial en el 100% de nuestros flujos de ingeniería, reduciendo los tiempos de entrega hasta un 60%.',
    'diff.card3.title': 'Resultados Palpables y Simplicidade',
    'diff.card3.desc': 'Sin jerga técnica innecesaria. Nos enfocamos en resultados reales: aumento de conversión, eficiencia y ventas.',
    'diff.card4.title': 'Seguridad de la Información & LGPD',
    'diff.card4.desc': 'Código blindado contra vulnerabilidades, cumplimiento estricto de LGPD/GDPR y privacidad garantizada desde el diseño.',
    'diff.card5.title': 'Alcance Global sin Fronteras',
    'diff.card5.desc': 'Proyectos desarrollados y operados para clientes en Estados Unidos, América Latina, Europa y Brasil.',
    'diff.card6.title': 'Propiedad Intelectual 100% Suya',
    'diff.card6.desc': 'Todo el código fuente, repositórios e integraciones pertenecen totalmente a su empresa al finalizar la entrega.',

    // Tech Stack
    'tech.badge': 'Nuestro Ecosistema',
    'tech.title': 'Tecnologías de Vanguardia & ',
    'tech.title_highlight': 'Modelos de IA',
    'tech.subtitle': 'Dominamos los frameworks y modelos LLM más modernos del mundo para construir soluciones ultrarrápidas y seguras.',

    // Contact
    'contact.badge': 'Contacto',
    'contact.title': '¿Listo para Acelerar su Negocio con ',
    'contact.title_highlight': 'Inteligencia Artificial?',
    'contact.subtitle': 'Contáctenos y reciba una evaluación técnica preliminar sin compromiso para su proyecto.',
    'contact.whatsapp_cta': 'Hablar por WhatsApp',
    'contact.form_name': 'Nombre Completo *',
    'contact.form_email': 'Correo Corporativo *',
    'contact.form_phone': 'Teléfono / WhatsApp *',
    'contact.form_service': 'Servicio de Interés',
    'contact.form_message': 'Resumen del Proyecto o Desafío',
    'contact.form_submit': 'Solicitar Propuesta Comercial',
    'contact.form_submitting': 'Enviando...',
    'contact.success_title': '¡Solicitud Recibida!',
    'contact.success_desc': 'Redirigiendo a nuestro canal de WhatsApp para atenderle de inmediato.',
    'contact.sla': 'Atención Corporativa',
    'contact.sla_desc': 'Equipo técnico dedicado para nuevos proyectos y consultoría',
    'contact.banner_title': 'Atención Corporativa vía WhatsApp',
    'contact.banner_desc': 'Hable en tiempo real con nuestra dirección técnica para evaluar las necesidades de su empresa.',

    // NotFound
    'notfound.title': 'Página No Encontrada',
    'notfound.desc': 'La página que busca no existe o ha sido movida.',
    'notfound.back_home': 'Volver al Inicio',

    // Footer
    'footer.tagline': 'Ingeniería de Software con Inteligencia Artificial, GEO/SEO y Alto Rendimiento para Empresas Globales',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.compliance': 'Cumplimiento LGPD, GDPR y Seguridad',
    'footer.nav': 'Navegación',
    'footer.solutions': 'Soluciones en IA',

    // Modal
    'modal.title': 'Solicitar Propuesta de IA & Software',
    'modal.subtitle': 'Complete los datos a continuación para recibir un presupuesto rápido.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('andrade_lang') as Language;
        if (saved && (saved === 'pt' || saved === 'en' || saved === 'es')) {
          return saved;
        }
      }
    } catch {
      // Ignore Safari private browsing storage restrictions
    }
    try {
      const navLang = typeof navigator !== 'undefined' && navigator.language ? navigator.language.toLowerCase() : 'pt';
      if (navLang.startsWith('en')) return 'en';
      if (navLang.startsWith('es')) return 'es';
    } catch {
      // Ignore
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('andrade_lang', lang);
      }
    } catch {
      // Ignore Safari private browsing storage restrictions
    }
  };

  const t = (key: string): string => {
    const langDict = translations[language] || translations.pt;
    return (langDict as Record<string, string>)[key] || (translations.pt as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
