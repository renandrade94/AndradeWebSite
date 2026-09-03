import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { SEO } from '../components/common/SEO';
import { createWhatsAppUrl } from '../data/companyInfo';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark-base)' }}>
      <SEO
        title={t('contact.title')}
        description={t('contact.subtitle')}
        keywords={[
          "Contato Andrade Serviços de Tecnologia",
          "Desenvolvimento com IA",
          "Consultoria GEO e SEO",
          "WhatsApp Atendimento Tecnologia",
          "Atendimento Global Tecnologia"
        ]}
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
          <span style={{ color: '#2dd4bf', fontWeight: 600 }}>{t('nav.contact')}</span>
        </nav>

        {/* Page Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: '#ffffff',
            }}
          >
            {t('contact.title')}
            <span style={{ color: '#2dd4bf' }}>{t('contact.title_highlight')}</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Direct Contact Layout */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Main Direct WhatsApp Banner */}
          <div className="glass-card cta-horizontal-card">
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
                  {t('contact.banner_title')}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  {t('contact.banner_desc')}
                </p>
              </div>
            </div>

            <a
              href={createWhatsAppUrl()}
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
    </div>
  );
};
