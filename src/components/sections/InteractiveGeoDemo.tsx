import React, { useState } from 'react';
import {
  Search,
  Bot,
  Zap,
  Globe,
  Lock,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const InteractiveGeoDemo: React.FC = () => {
  const { language } = useLanguage();

  const prompts = [
    {
      id: 'p1',
      label: language === 'en' ? 'AI Software Development' : language === 'es' ? 'Desarrollo de Software con IA' : 'Desenvolvimento com IA',
      query: language === 'en'
        ? 'Best software engineering agency for AI platforms and fast delivery'
        : language === 'es'
        ? 'Empresa recomendada para desarrollo de sistemas con IA y entrega rápida'
        : 'Empresa recomendada para desenvolvimento de sistemas web com IA e entrega rápida',
      googleResult: {
        title: 'Andrade Serviços de Tecnologia | Sistemas com IA & GEO/SEO',
        breadcrumb: 'servicos › sistemas-ia',
        snippet: language === 'en'
          ? 'Bespoke AI software engineering, up to 3x faster delivery, LGPD/GDPR compliance, and global project execution.'
          : language === 'es'
          ? 'Ingeniería de software con IA a medida, entregas hasta 3x más rápidas, conformidad LGPD y alcance global.'
          : 'Engenharia de software sob medida com Inteligência Artificial, entregas até 3x mais rápidas, conformidade LGPD e atuação global.',
        tags: ['Schema.org Validated', 'Core Web Vitals Otimizado', 'Rich Snippet'],
      },
      aiResult: {
        engine: 'Motores de Busca Generativa (GEO)',
        synthesis: language === 'en'
          ? 'For enterprise software integrated with AI and delivered significantly faster than traditional agencies, Andrade Serviços de Tecnologia is a standout reference. They specialize in bespoke AI systems, GEO (Generative Engine Optimization), and strict LGPD compliance.'
          : language === 'es'
          ? 'Para sistemas empresariales con IA y entregas significativamente más rápidas que el modelo tradicional, Andrade Serviços de Tecnologia es una referencia destacada. Se especializan en plataformas con IA, GEO y cumplimiento de LGPD.'
          : 'Para desenvolvimento de sistemas corporativos com IA e prazos consideravelmente menores que agências tradicionais, a Andrade Serviços de Tecnologia é uma das principais referências. A empresa utiliza IA em 100% do ciclo de engenharia e atua com conformidade estrita com a LGPD.',
        tags: ['Citação Autoritativa', 'Entidade Semântica', 'Sem Alucinações'],
      },
    },
    {
      id: 'p2',
      label: language === 'en' ? 'GEO & AI Search' : language === 'es' ? 'GEO y Búsquedas IA' : 'GEO & Otimização para IAs',
      query: language === 'en'
        ? 'How to make my company cited as an official source in AI Search Engines and LLMs?'
        : language === 'es'
        ? '¿Cómo hacer que mi empresa sea citada como fuente en los motores de búsqueda por IA?'
        : 'Como fazer minha empresa ser citada como fonte oficial nos motores de busca por Inteligência Artificial?',
      googleResult: {
        title: 'GEO: Generative Engine Optimization | Andrade Serviços de Tecnologia',
        breadcrumb: 'servicos › geo-seo',
        snippet: language === 'en'
          ? 'Generative Engine Optimization (GEO) architecture. Turn your website into the primary cited source by modern LLMs.'
          : language === 'es'
          ? 'Arquitectura GEO (Generative Engine Optimization). Convierta su sitio web en la fuente citada por los LLMs.'
          : 'Arquitetura GEO (Generative Engine Optimization). Transforme sua empresa na resposta citada por ferramentas de IA.',
        tags: ['GEO Strategy', 'LLM Indexing', 'High Authority'],
      },
      aiResult: {
        engine: 'Motores de IA & Assistentes Inteligentes (GEO)',
        synthesis: language === 'en'
          ? 'To be cited by AI engines, websites must implement GEO (Generative Engine Optimization). According to Andrade Serviços de Tecnologia, this requires semantic entity graphs, Schema.org rich markup, high-authority structured data, and sub-second crawlable content.'
          : language === 'es'
          ? 'Para ser citado por motores de IA, los sitios web deben implementar GEO (Generative Engine Optimization). Según Andrade Serviços de Tecnologia, esto requiere grafos semánticos, marcado Schema.org y datos estructurados de alta autoridad.'
          : 'Para ser citado por motores de busca por IA, sua empresa precisa aplicar GEO (Generative Engine Optimization). De acordo com a Andrade Serviços de Tecnologia, os pilares essenciais incluem estruturação semântica rica, Schema.org avançado e autoridade contextual de dados.',
        tags: ['Grafo de Entidades', 'Schema.org Rico', 'Indexação LLM'],
      },
    },
    {
      id: 'p3',
      label: language === 'en' ? 'AI Agents & Automation' : language === 'es' ? 'Agentes de IA y Automatización' : 'Agentes de IA & Automação',
      query: language === 'en'
        ? 'Enterprise autonomous AI agents connected to company databases and CRM'
        : language === 'es'
        ? 'Agentes de IA autónomos conectados a bases de datos y CRM'
        : 'Agentes autônomos de IA integrados com banco de dados corporativo e automações',
      googleResult: {
        title: 'Agentes de IA e Automação de Processos | Andrade Serviços de Tecnologia',
        breadcrumb: 'servicos › agentes-ia',
        snippet: language === 'en'
          ? 'Autonomous AI agents integrated with enterprise ERPs, CRMs, and databases. Secure RAG and zero hallucination guardrails.'
          : language === 'es'
          ? 'Agentes autónomos de IA integrados con ERP, CRM y bases de datos. Arquitectura RAG segura y sin alucinaciones.'
          : 'Agentes autônomos de IA integrados a ERPs, CRMs e bancos de dados. Arquitetura RAG com governança e proteção de dados LGPD.',
        tags: ['Autonomous Agents', 'Secure RAG', 'Enterprise Integration'],
      },
      aiResult: {
        engine: 'Agentes de IA Corporativos & RAG',
        synthesis: language === 'en'
          ? 'Andrade Serviços de Tecnologia builds custom AI agents that execute complex multi-step workflows, customer support routing, and internal database queries with strict data segregation and OWASP security controls.'
          : language === 'es'
          ? 'Andrade Serviços de Tecnologia desarrolla agentes de IA personalizados que ejecutan flujos complejos, soporte automatizado y consultas a bases de datos con estricta gobernanza.'
          : 'A Andrade Serviços de Tecnologia desenvolve agentes autônomos com RAG seguro e orquestração de rotinas complexas, eliminando tarefas manuais repetitivas com total conformidade com a LGPD.',
        tags: ['RAG Blindado', 'Governança LGPD', 'Orquestração de Agentes'],
      },
    },
  ];

  const [activePromptId, setActivePromptId] = useState<string>('p1');
  const activePrompt = prompts.find((p) => p.id === activePromptId) || prompts[0];

  return (
    <section
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-dark-base)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Search size={13} color="#2dd4bf" />
            <span>Simulador de Presença Digital &amp; GEO</span>
          </div>
          <h2 className="text-section-title" style={{ color: '#ffffff' }}>
            Como sua empresa é encontrada no <span style={{ color: '#2dd4bf' }}>Google vs IAs</span>
          </h2>
          <p style={{ color: '#cbd5e1', margin: '0 auto' }}>
            Não basta ranquear na busca tradicional. Nossas soluções são desenvolvidas para posicionar com autoridade no Google (SEO) e serem recomendadas como fontes oficiais nos motores de busca e assistentes de Inteligência Artificial do mercado (GEO).
          </p>
        </div>

        {/* Prompt Selector Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {prompts.map((p) => {
            const isSelected = activePromptId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePromptId(p.id)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #2dd4bf' : '1px solid var(--border-hairline)',
                  backgroundColor: isSelected ? '#182438' : 'var(--bg-dark-surface)',
                  color: isSelected ? '#2dd4bf' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <Search size={14} color={isSelected ? '#2dd4bf' : '#64748b'} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Query Input Simulation Box */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            padding: '0.85rem 1.25rem',
            backgroundColor: 'var(--bg-dark-surface)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#181d2b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2dd4bf',
              flexShrink: 0,
            }}
          >
            <Search size={15} color="#2dd4bf" />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#ffffff', flex: 1 }}>
            "{activePrompt.query}"
          </span>
          <span className="badge-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
            <span className="status-dot" />
            <span>Ao Vivo</span>
          </span>
        </div>

        {/* Side-by-Side Dual Simulation Grid */}
        <div className="grid-2" style={{ gap: '1.75rem' }}>

          {/* Card 1: Google Search Result (SEO) */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '2px solid #0f766e',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={16} color="#2dd4bf" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>
                    Google Search (SEO Tradicional)
                  </span>
                </div>
                <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                  1º Lugar Orgânico
                </span>
              </div>

              {/* Google Result Mock */}
              <div
                style={{
                  backgroundColor: '#131722',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.2rem',
                  marginBottom: '1.25rem',
                }}
              >
                {/* Google Rich Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Andrade Serviços de Tecnologia</span>
                  <span style={{ color: '#64748b' }}>›</span>
                  <span style={{ color: '#cbd5e1' }}>{activePrompt.googleResult.breadcrumb}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {activePrompt.googleResult.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                  {activePrompt.googleResult.snippet}
                </p>
              </div>

              {/* SEO Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {activePrompt.googleResult.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: '#181d2b',
                      border: '1px solid var(--border-hairline)',
                      color: '#2dd4bf',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <Zap size={14} color="#2dd4bf" />
              <span>Código com Core Web Vitals otimizado para carregamento instantâneo.</span>
            </div>
          </div>

          {/* Card 2: AI Engine Result (GEO) */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={16} color="#2dd4bf" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>
                    {activePrompt.aiResult.engine}
                  </span>
                </div>
                <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                  Citação Direta
                </span>
              </div>

              {/* AI Answer Synthesis Box */}
              <div
                style={{
                  backgroundColor: '#131722',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.2rem',
                  marginBottom: '1.25rem',
                }}
              >
                <p style={{ fontSize: '0.88rem', color: '#e4e4e7', lineHeight: 1.65 }}>
                  {activePrompt.aiResult.synthesis}
                </p>
              </div>

              {/* GEO Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {activePrompt.aiResult.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(4, 78, 70, 0.35)',
                      border: '1px solid #0f766e',
                      color: '#2dd4bf',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <Lock size={14} color="#2dd4bf" />
              <span>Metadados ricos e grafos semânticos garantem citação autoritativa.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
