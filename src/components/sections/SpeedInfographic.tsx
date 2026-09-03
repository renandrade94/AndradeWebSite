import React from 'react';
import {
  TrendingDown,
  ShieldCheck,
  Cpu,
  Sparkles,
  Zap,
  Check,
  Layers,
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { useLanguage } from '../../context/LanguageContext';

export const SpeedInfographic: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="infografico-tempo"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-dark-base)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <Zap size={14} color="#2dd4bf" />
            <span>{t('infographic.badge')}</span>
          </div>
          <h2
            className="text-section-title"
            style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)', lineHeight: 1.2, marginBottom: '1.25rem', color: '#ffffff' }}
          >
            {t('infographic.title_p1')}
            <span style={{ color: '#2dd4bf', fontWeight: 800 }}>{t('infographic.title_highlight')}*</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#cbd5e1', lineHeight: 1.7, margin: '0 auto', maxWidth: '720px' }}>
            {t('infographic.subtitle')}
          </p>
        </div>

        {/* 3 COMPARATIVE CARDS (CLEAN & SPACIOUS ARCHITECTURE) */}
        <div
          className="grid-3"
          style={{
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '4rem',
          }}
        >
          {/* CARD 1: ERA PRÉ-DIGITAL */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 3.5vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '3px solid #e11d48',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div>
              {/* Top Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#f87171',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#27191f',
                    border: '1px solid #4c1d2d',
                  }}
                >
                  Era Tradicional
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  1990 — 2010
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Modelo em Cascata
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '2rem' }}>
                {t('infographic.era1_desc')}
              </p>

              {/* Big Metric Callout */}
              <div
                style={{
                  backgroundColor: '#131722',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Tempo até o Lançamento*
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#f87171', lineHeight: 1 }}>
                  28 MESES
                </div>
              </div>

              {/* Step Flow List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <TrendingDown size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>12 meses:</strong> Planejamento e especificações</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <TrendingDown size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>09 meses:</strong> Desenvolvimento manual</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <TrendingDown size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>07 meses:</strong> Testes e homologação lenta</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem', fontSize: '0.82rem', color: '#94a3b8' }}>
              Risco de Atraso: <strong style={{ color: '#f87171' }}>Altíssimo (&gt; 70%)</strong>
            </div>
          </div>

          {/* CARD 2: ERA DIGITAL / ÁGIL */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 3.5vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '3px solid #f59e0b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div>
              {/* Top Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fbbf24',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#272017',
                    border: '1px solid #4a381f',
                  }}
                >
                  Era Ágil
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  2010 — 2023
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Metodologias Ágeis
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '2rem' }}>
                {t('infographic.era2_desc')}
              </p>

              {/* Big Metric Callout */}
              <div
                style={{
                  backgroundColor: '#131722',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Tempo até o Lançamento*
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#fbbf24', lineHeight: 1 }}>
                  09 MESES
                </div>
              </div>

              {/* Step Flow List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Layers size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>05 meses:</strong> Definição de backlog e wireframes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Layers size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>03 meses:</strong> Sprints manuais de desenvolvimento</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Layers size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>01 mês:</strong> Homologação e lançamento</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem', fontSize: '0.82rem', color: '#94a3b8' }}>
              Risco de Atraso: <strong style={{ color: '#fbbf24' }}>Moderado (~40%)</strong>
            </div>
          </div>

          {/* CARD 3: ERA DA INTELIGÊNCIA ARTIFICIAL (HERO CARD) */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 3.5vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(180deg, rgba(19, 27, 44, 0.95) 0%, rgba(4, 78, 70, 0.3) 100%)',
              border: '2px solid #2dd4bf',
              boxShadow: '0 12px 40px rgba(4, 78, 70, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div>
              {/* Top Meta */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#2dd4bf',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(4, 78, 70, 0.45)',
                    border: '1px solid #0f766e',
                  }}
                >
                  ★ Era da IA
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#090a0f',
                    backgroundColor: '#2dd4bf',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  85% Mais Rápido*
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Engenharia com IA
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.65, marginBottom: '2rem' }}>
                {t('infographic.era3_desc')}
              </p>

              {/* Big Metric Callout */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(4, 78, 70, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #2dd4bf',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#2dd4bf', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Tempo Médio de Entrega*
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#ffffff', lineHeight: 1 }}>
                  15 A 30 DIAS
                </div>
              </div>

              {/* Step Flow List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>2 a 4 dias:</strong> Prototipagem instantânea com IA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>7 a 15 dias:</strong> Engenharia com copilotos</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>3 a 5 dias:</strong> Deploy seguro, LGPD &amp; GEO/SEO</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(45, 212, 191, 0.3)', paddingTop: '1.25rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
              Risco de Atraso: <strong style={{ color: '#2dd4bf' }}>Mínimo (&lt; 5%)</strong>
            </div>
          </div>
        </div>

        {/* Benchmark Footnote */}
        <div
          style={{
            maxWidth: '880px',
            margin: '-1.5rem auto 4rem auto',
            textAlign: 'center',
            padding: '0.85rem 1.4rem',
            backgroundColor: 'rgba(19, 23, 34, 0.6)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            fontSize: '0.82rem',
            color: '#94a3b8',
            lineHeight: 1.5,
          }}
        >
          <ShieldCheck size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
          <span>* {t('infographic.sources_note')}</span>
        </div>

        {/* 3 PILLARS OF AI SPEED (CLEAN & SPACIOUS) */}
        <div className="grid-3" style={{ gap: '1.75rem', marginBottom: '4rem' }}>
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderRadius: 'var(--radius-lg)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={22} color="#2dd4bf" />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.65rem' }}>
              Prototipagem Ágil com IA
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              A tomada de decisão não leva meses. Com protótipos funcionais iterativos gerados e refinados por IA, validamos requisitos e arquitetura com extrema rapidez.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderRadius: 'var(--radius-lg)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Cpu size={22} color="#2dd4bf" />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.65rem' }}>
              Engenharia com Copilotos
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              Desenvolvedores seniores potencializados por agentes de IA geram código limpo, testes automatizados e APIs corporativas 3x mais rápido sem dívida técnica.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderRadius: 'var(--radius-lg)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <ShieldCheck size={22} color="#2dd4bf" />
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.65rem' }}>
              Deploy Seguro &amp; Otimizado
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              Sua aplicação já nasce com segurança OWASP Top 10, conformidade LGPD e metadados estruturados para liderar no Google e nos motores de busca por Inteligência Artificial (GEO).
            </p>
          </div>
        </div>

        {/* Action Callout Banner */}
        <div
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4.5vw, 3rem)',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-dark-surface)',
            border: '1px solid #0f766e',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              Quer acelerar o lançamento do seu projeto com IA?
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              Receba um diagnóstico técnico preliminar e estimativa de prazo para colocar seu produto no ar em semanas.
            </p>
          </div>

          <a
            href={createWhatsAppUrl('Olá! Gostaria de conversar com a equipe sobre o desenvolvimento acelerado com IA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ textDecoration: 'none', minWidth: '240px' }}
          >
            <WhatsAppIcon size={18} color="#090a0f" />
            <span>{t('infographic.cta_button')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
