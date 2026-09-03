import React, { useState } from 'react';
import { Sparkles, CheckCircle, Quote, Layers, ExternalLink } from 'lucide-react';
import { casesData, getLocalizedCase } from '../data/cases';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppUrl } from '../data/companyInfo';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { SEO } from '../components/common/SEO';
import connectaLogo from '../assets/images/connectaodonto-symbol.png';
import souriantLogo from '../assets/images/souriant-logo.png';
import temperoLogo from '../assets/images/tempero-logo.png';

export const CasesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: t('cases.filter_all') },
    { key: 'healthtech', label: 'Healthtech & Odontologia' },
    { key: 'media', label: 'Audiovisual & Mídia' },
  ];

  const getCaseLogo = (caseId: string, fallbackUrl?: string) => {
    if (caseId === 'connectaodonto') return connectaLogo;
    if (caseId === 'souriant-odontologia') return souriantLogo;
    if (caseId === 'agtemp') return temperoLogo;
    return fallbackUrl || '';
  };

  const filteredCases = activeFilter === 'all'
    ? casesData
    : casesData.filter((item) => item.segmentKey === activeFilter);

  const casesSchema = {
    '@type': 'ItemList',
    name: 'Cases de Sucesso & Projetos em Produção - Andrade Serviços de Tecnologia',
    itemListElement: casesData.map((c, idx) => {
      const loc = getLocalizedCase(c, language);
      return {
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: `${loc.client} - ${loc.title}`,
          headline: loc.title,
          description: `${loc.challenge} Solução: ${loc.solution}`,
          url: c.websiteUrl || `${window.location.origin}/cases`,
          keywords: c.technologies.join(', '),
          creator: {
            '@type': 'Organization',
            name: 'Andrade Serviços de Tecnologia',
          },
        },
      };
    }),
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '5rem', backgroundColor: 'var(--bg-dark-base)' }}>
      <SEO
        title={t('cases.title') + t('cases.title_highlight')}
        description={t('cases.subtitle')}
        keywords={[
          "Case ConnectaOdonto",
          "Desenvolvimento ConnectaOdonto",
          "Case Souriant Odontologia",
          "Case Tempero Produtora Audiovisual",
          "Cases de Sucesso Engenharia de Software",
          "Desenvolvimento com Inteligência Artificial",
          "Plataforma Odontológica B2B",
          "PWA e Web Apps"
        ]}
        structuredData={casesSchema}
      />

      <div className="container">
        {/* Page Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} color="#2dd4bf" />
            <span>{t('cases.badge')}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: '#ffffff',
            }}
          >
            {t('cases.title')}
            <span style={{ color: '#2dd4bf' }}>{t('cases.title_highlight')}</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {t('cases.subtitle')}
          </p>

          {/* Segment Filters (if multiple categories exist) */}
          {filterOptions.length > 1 && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.35rem',
                padding: '0.3rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-hairline)',
                margin: '0 auto',
              }}
            >
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      backgroundColor: isActive ? '#2dd4bf' : 'transparent',
                      color: isActive ? '#090a0f' : '#cbd5e1',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
          {filteredCases.map((caseItem) => {
            const loc = getLocalizedCase(caseItem, language);
            return (
              <article
                key={caseItem.id}
                className="glass-card"
                style={{
                  padding: 'clamp(2rem, 4vw, 3.25rem)',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--bg-dark-surface)',
                  borderTop: '2px solid #2dd4bf',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {/* Case Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {caseItem.logoUrl ? (
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          backgroundColor: (caseItem.id === 'souriant-odontologia' || caseItem.id === 'agtemp') ? '#ffffff' : '#181d2b',
                          border: (caseItem.id === 'souriant-odontologia' || caseItem.id === 'agtemp') ? '1px solid #ffffff' : '1px solid var(--border-hairline)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          flexShrink: 0,
                          boxShadow: (caseItem.id === 'souriant-odontologia' || caseItem.id === 'agtemp') ? '0 2px 8px rgba(0,0,0,0.25)' : 'none',
                        }}
                      >
                        <img
                          src={getCaseLogo(caseItem.id, caseItem.logoUrl)}
                          alt={`Logotipo ${loc.client} - Case Andrade Serviços de Tecnologia`}
                          width={caseItem.id === 'souriant-odontologia' ? 38 : 34}
                          height={caseItem.id === 'souriant-odontologia' ? 38 : 34}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: caseItem.id === 'souriant-odontologia' ? 38 : 34,
                            height: caseItem.id === 'souriant-odontologia' ? 38 : 34,
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          backgroundColor: 'rgba(4, 78, 70, 0.35)',
                          border: '1px solid #0f766e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2dd4bf',
                          fontWeight: 900,
                          fontSize: '1.2rem',
                          fontFamily: 'var(--font-mono)',
                          flexShrink: 0,
                        }}
                      >
                        {loc.client.charAt(0)}
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, lineHeight: 1.2 }}>
                        {loc.client}
                      </span>
                      <div>
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: '#2dd4bf',
                            backgroundColor: 'rgba(4, 78, 70, 0.35)',
                            border: '1px solid #0f766e',
                            padding: '0.2rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            fontFamily: 'var(--font-mono)',
                            display: 'inline-block',
                          }}
                        >
                          {loc.segment}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {caseItem.websiteUrl && (
                      <a
                        href={caseItem.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.35rem 0.85rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid #0f766e',
                          color: '#2dd4bf',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(45, 212, 191, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                        }}
                      >
                        <span>{caseItem.id === 'connectaodonto' ? 'Visitar Plataforma' : 'Visitar Website'}</span>
                        <ExternalLink size={13} color="#2dd4bf" />
                      </a>
                    )}
                    <div className="badge-pill">
                      <Layers size={13} color="#2dd4bf" />
                      <span>{loc.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Case Title & Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                  <div>
                    <h2
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.25,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {loc.title}
                    </h2>

                    {/* Metrics Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '1rem',
                        marginTop: '1.25rem',
                      }}
                    >
                      {loc.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          style={{
                            padding: '1rem 1.25rem',
                            backgroundColor: '#181d2b',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-hairline)',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '1.6rem',
                              fontWeight: 900,
                              fontFamily: 'var(--font-mono)',
                              color: '#2dd4bf',
                              lineHeight: 1.1,
                              marginBottom: '0.25rem',
                            }}
                          >
                            {metric.value}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenge, Solution & Results Grid */}
                <div className="grid-2" style={{ gap: '2rem' }}>
                  {/* Challenge & Solution */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div
                      style={{
                        padding: '1.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-hairline)',
                      }}
                    >
                      <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#2dd4bf' }}>01.</span> {t('cases.challenge')}
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                        {loc.challenge}
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '1.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-hairline)',
                      }}
                    >
                      <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#2dd4bf' }}>02.</span> {t('cases.solution')}
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                        {loc.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Results List */}
                  <div
                    style={{
                      padding: '1.5rem',
                      backgroundColor: 'rgba(4, 78, 70, 0.15)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid #0f766e',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1.25rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                        {t('cases.results')}
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {loc.results.map((res, rIdx) => (
                          <li
                            key={rIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem',
                              fontSize: '0.92rem',
                              color: '#ffffff',
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle size={18} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                        {t('cases.tech_stack')}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {caseItem.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '0.25rem 0.65rem',
                              borderRadius: '6px',
                              backgroundColor: '#181d2b',
                              border: '1px solid var(--border-hairline)',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: '#cbd5e1',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Testimonial Box */}
                {loc.testimonial && (
                  <div
                    style={{
                      padding: '1.5rem',
                      backgroundColor: '#131722',
                      borderRadius: 'var(--radius-lg)',
                      borderLeft: '3px solid #2dd4bf',
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Quote size={24} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.65rem' }}>
                        "{loc.testimonial.quote}"
                      </p>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                        {loc.testimonial.author} — <span style={{ color: '#94a3b8', fontWeight: 500 }}>{loc.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-card cta-horizontal-card" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '12px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <WhatsAppIcon size={26} color="#2dd4bf" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                {t('cases.cta_title')}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                {t('cases.cta_desc')}
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppUrl('Olá! Gostaria de conversar com a liderança técnica sobre como construir uma plataforma digital ou ecossistema sob medida com a Andrade.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            <WhatsAppIcon size={18} color="#090a0f" />
            <span>{t('contact.whatsapp_cta')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
