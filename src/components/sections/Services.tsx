import { Link } from 'react-router-dom';
import {
  Code2,
  Search,
  Sparkles,
  Workflow,
  Cpu,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { servicesData, getLocalizedService, type ServiceItem } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export const Services = () => {
  const { language, t } = useLanguage();

  const getIcon = (iconName: ServiceItem['iconName']) => {
    const props = { size: 22, strokeWidth: 1.8, color: '#2dd4bf' };
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

  const primaryServices = servicesData.slice(0, 2);
  const secondaryServices = servicesData.slice(2);

  return (
    <section id="servicos" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-dark-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '850px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <h2 className="text-section-title" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            {t('services.title')}
            <span style={{ color: '#2dd4bf' }}>{t('services.title_highlight')}</span>
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '720px', margin: '0 auto' }}>{t('services.subtitle')}</p>
        </div>

        {/* Bento Row 1: Top 2 Flagship Pillars */}
        <div className="grid-2" style={{ gap: '1.75rem', marginBottom: '1.75rem' }}>
          {primaryServices.map((service) => {
            const loc = getLocalizedService(service, language);
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  backgroundColor: 'var(--bg-dark-surface)',
                  borderTop: '2px solid #2dd4bf',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        backgroundColor: '#181d2b',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="badge-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}>
                      {loc.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.65rem' }}>
                    {loc.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.35rem' }}>
                    {loc.shortDescription}
                  </p>

                  <div style={{ marginBottom: '1.35rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {t('services.deliverables_label')}
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {loc.deliverables.slice(0, 3).map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            color: '#e2e8f0',
                          }}
                        >
                          <CheckCircle size={14} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Link
                    to={`/servicos/${service.id}`}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      fontSize: '0.88rem',
                    }}
                  >
                    <span>{t('services.view_details')}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bento Row 2: Secondary 3 Pillars */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {secondaryServices.map((service) => {
            const loc = getLocalizedService(service, language);
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.6rem',
                  backgroundColor: 'var(--bg-dark-surface)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '8px',
                        backgroundColor: '#181d2b',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="badge-tag">
                      {loc.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {loc.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {loc.shortDescription}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <Link
                    to={`/servicos/${service.id}`}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      fontSize: '0.84rem',
                      padding: '0.55rem 0.75rem',
                    }}
                  >
                    <span>{t('services.view_details')}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog Link */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            to="/servicos"
            className="btn btn-secondary"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '0.92rem',
              textDecoration: 'none',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <span>{t('services.catalog_cta')}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
