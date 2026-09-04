import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Search,
  Sparkles,
  Workflow,
  Cpu,
  ArrowRight,
  CheckCircle,
  Layers,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { servicesData, getLocalizedService, type ServiceItem } from '../data/services';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

import { createWhatsAppUrl } from '../data/companyInfo';

export const ServicesPage = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'platforms' | 'geo' | 'automation'>('all');

  const getIcon = (iconName: ServiceItem['iconName']) => {
    const props = { size: 28, strokeWidth: 1.8, color: '#2dd4bf' };
    switch (iconName) {
      case 'Code2':
        return <Code2 {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Workflow':
      case 'Bot':
        return <Workflow {...props} />;
      case 'Cpu':
      case 'BrainCircuit':
        return <Cpu {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'platforms') return service.id === 'ai-systems-platforms' || service.id === 'ai-web-applications';
    if (activeFilter === 'geo') return service.id === 'geo-seo-optimization';
    if (activeFilter === 'automation') return service.id === 'ai-agents-automation' || service.id === 'ai-consulting-acceleration';
    return true;
  });

  const catalogSchema = {
    '@type': 'ItemList',
    name: 'Catálogo de Soluções de Engenharia de Software e IA - Andrade Serviços de Tecnologia',
    itemListElement: servicesData.map((s, idx) => {
      const loc = getLocalizedService(s, language);
      return {
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Service',
          name: loc.title,
          description: loc.shortDescription,
          url: `${window.location.origin}/servicos/${s.id}`,
          provider: {
            '@type': 'Organization',
            name: 'Andrade Serviços de Tecnologia',
          },
        },
      };
    }),
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '5rem' }}>
      <SEO
        title={t('services.title') + t('services.title_highlight')}
        description={t('services.subtitle')}
        keywords={[
          "Desenvolvimento com Inteligência Artificial",
          "GEO Generative Engine Optimization",
          "SEO para IAs",
          "Websites Alta Conversão",
          "Agentes de IA WhatsApp",
          "Sistemas Corporativos IA"
        ]}
        structuredData={catalogSchema}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: t('nav.services') }]} marginBottom="2rem" />

        {/* Page Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: '#ffffff',
            }}
          >
            {t('services.title')}
            <span className="gradient-text">{t('services.title_highlight')}</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            {t('services.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.5rem',
          }}
        >
          {[
            { id: 'all', label: t('services.filter_all') },
            { id: 'platforms', label: t('services.filter_platforms') },
            { id: 'geo', label: t('services.filter_geo') },
            { id: 'automation', label: t('services.filter_automation') },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className="btn"
              style={{
                background: activeFilter === filter.id ? 'var(--primary-cyan)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === filter.id ? '#060911' : 'var(--text-main)',
                border: activeFilter === filter.id ? '1px solid var(--primary-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                fontWeight: activeFilter === filter.id ? 700 : 500,
                padding: '0.6rem 1.25rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="grid-2" style={{ gap: '2rem', marginBottom: '5rem' }}>
          {filteredServices.map((service) => {
            const loc = getLocalizedService(service, language);
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: 58,
                        height: 58,
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(4, 78, 70, 0.35)',
                        color: 'var(--primary-cyan)',
                        border: '1px solid #0f766e',
                      }}
                    >
                      {loc.badge}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      marginBottom: '0.85rem',
                      color: '#ffffff',
                    }}
                  >
                    {loc.title}
                  </h2>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {loc.fullDescription}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                      {t('services.deliverables_label')}
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {loc.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                          <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          color: 'var(--text-muted)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.25rem',
                  }}
                >
                  <Link
                    to={`/servicos/${service.id}`}
                    className="btn btn-secondary"
                    style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}
                  >
                    <span>{t('services.view_details')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-hairline)',
            backgroundColor: 'var(--bg-dark-surface)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
          }}
        >
          <div className="badge-pill">
            <Layers size={14} color="#2dd4bf" />
            <span>Precisa de uma Solução Customizada?</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', maxWidth: '700px' }}>
            Não encontrou exatamente o que procura? Desenvolvemos sob medida.
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
            Nossa equipe de especialistas em Inteligência Artificial desenha e constrói a solução ideal para os objetivos da sua empresa.
          </p>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de conversar sobre uma solução customizada de Inteligência Artificial para minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ textDecoration: 'none' }}
          >
            <WhatsAppIcon size={18} color="#090a0f" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
