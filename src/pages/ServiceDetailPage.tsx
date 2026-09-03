import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Code2,
  Search,
  Sparkles,
  Workflow,
  Cpu,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Globe,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { getServiceById, getLocalizedService, type ServiceItem } from '../data/services';
import { SEO } from '../components/common/SEO';
import { createWhatsAppUrl } from '../data/companyInfo';
import { useLanguage } from '../context/LanguageContext';

export const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { language, t } = useLanguage();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const loc = getLocalizedService(service, language);

  const getIcon = (iconName: ServiceItem['iconName']) => {
    const props = { size: 36, strokeWidth: 1.8, color: '#2dd4bf' };
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

  // Structured Data Schema for Google & AI Search (GEO)
  const serviceSchema = {
    '@type': 'Service',
    serviceType: loc.title,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Andrade Serviços de Tecnologia',
      url: window.location.origin,
    },
    description: loc.metaDescription,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${loc.title} Deliverables`,
      itemListElement: loc.deliverables.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
        position: idx + 1,
      })),
    },
    ...(loc.faqs && loc.faqs.length > 0
      ? {
          mainEntity: loc.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : {}),
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title={loc.metaTitle}
        description={loc.metaDescription}
        keywords={service.tags.concat(['Andrade Serviços de Tecnologia', loc.title, 'GEO', 'IA'])}
        structuredData={serviceSchema}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            {t('nav.home')}
          </Link>
          <ChevronRight size={14} />
          <Link to="/servicos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            {t('nav.services')}
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>{loc.title}</span>
        </nav>

        {/* Hero Section of Service Detail */}
        <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} color="#2dd4bf" />
              <span>{loc.badge}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              {loc.title}
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-main)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              {loc.fullDescription}
            </p>

            {/* Quick Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <div className="glass-card" style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2dd4bf', marginBottom: '0.25rem' }}>
                  <Zap size={18} color="#2dd4bf" />
                  <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{t('hero.kpi1_value')}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('hero.kpi1_desc')}</div>
              </div>

              <div className="glass-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-dark-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2dd4bf', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>{t('hero.kpi4_value')}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{t('hero.kpi4_desc')}</div>
              </div>

              <div className="glass-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-dark-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2dd4bf', marginBottom: '0.25rem' }}>
                  <Globe size={18} />
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>{t('hero.kpi3_value')}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{t('hero.kpi3_desc')}</div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={createWhatsAppUrl(`Olá! Gostaria de conversar com um especialista sobre ${loc.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ textDecoration: 'none' }}
              >
                <WhatsAppIcon size={18} color="#090a0f" />
                <span>{t('service_detail.talk_whatsapp')}</span>
              </a>
            </div>
          </div>

          {/* Deliverables Box */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 2.75rem)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid #0f766e',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(8, 12, 22, 0.95) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '18px',
                  background: 'rgba(4, 78, 70, 0.35)',
                  border: '1px solid #0f766e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getIcon(service.iconName)}
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {t('service_detail.deliverables_tag')}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{t('service_detail.deliverables_title')}</h3>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {loc.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.98rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle size={20} color="var(--primary-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} color="#2dd4bf" />
              <span>{t('service_detail.benefits_tag')}</span>
            </div>
            <h2 className="text-section-title">
              {t('service_detail.benefits_title_prefix')}<span className="gradient-text">{loc.title}</span>?
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '1.75rem' }}>
            {loc.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderLeft: '3px solid var(--primary-cyan)',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Methodology */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} color="#2dd4bf" />
              <span>{t('service_detail.methodology_tag')}</span>
            </div>
            <h2 className="text-section-title">
              {t('service_detail.methodology_title')}
            </h2>
            <p>{t('service_detail.methodology_desc')}</p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {loc.methodology.map((m, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary-cyan)',
                    opacity: 0.9,
                    background: 'rgba(4, 78, 70, 0.35)',
                    width: 54,
                    height: 54,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid #0f766e',
                  }}
                >
                  {m.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} color="#2dd4bf" />
              <span>{t('service_detail.tech_tag')}</span>
            </div>
            <h2 className="text-section-title">
              {t('service_detail.tech_title')}
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {service.technologiesDetailed.map((techGroup, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {techGroup.category}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {techGroup.items.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {loc.faqs && loc.faqs.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <div className="badge-pill">
                <Sparkles size={14} color="#2dd4bf" />
                <span>{t('service_detail.faq_tag')}</span>
              </div>
              <h2 className="text-section-title">
                {t('service_detail.faq_title_prefix')}<span className="gradient-text">{loc.title}</span>
              </h2>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {loc.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      border: isOpen ? '1px solid var(--border-glass-cyan)' : '1px solid var(--border-glass)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        color="var(--primary-cyan)"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0,
                          marginLeft: '1rem',
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.75rem 1.5rem 1.75rem',
                          color: 'var(--text-muted)',
                          fontSize: '0.98rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                          paddingTop: '1rem',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Lead Capture Form */}
        <div
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 5vw, 4rem)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid #0f766e',
            background: 'linear-gradient(135deg, rgba(12, 17, 32, 0.95) 0%, rgba(17, 24, 44, 0.8) 100%)',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="badge-pill">
              <Sparkles size={14} color="#2dd4bf" />
              <span>{t('service_detail.cta_tag')}</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff' }}>
              {t('service_detail.cta_title_prefix')}<span style={{ color: '#2dd4bf' }}>{loc.title}</span>?
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', maxWidth: '640px' }}>
              {t('service_detail.cta_desc')}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '0.5rem 0 1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#2dd4bf" />
                <span>{t('service_detail.badge_corp')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#2dd4bf" />
                <span>{t('service_detail.badge_nda')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="#2dd4bf" />
                <span>{t('service_detail.badge_speed')}</span>
              </div>
            </div>

            <a
              href={createWhatsAppUrl(`Olá! Gostaria de conversar com um especialista sobre ${loc.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ textDecoration: 'none', padding: '0.9rem 2.2rem' }}
            >
              <WhatsAppIcon size={18} color="#090a0f" />
              <span>{t('hero.cta_whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
