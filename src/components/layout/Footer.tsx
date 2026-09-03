import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { companyData, createWhatsAppUrl } from '../../data/companyInfo';
import { servicesData, getLocalizedService } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: '#04070e',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 10,
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3.5rem' }}>
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#090a0f',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                }}
              >
                A
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                  ANDRADE
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.12em' }}>
                  SERVIÇOS DE TECNOLOGIA
                </span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {t('footer.nav')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: t('nav.home'), to: '/' },
                { label: t('nav.all_services'), to: '/servicos' },
                { label: t('nav.cases'), to: '/cases' },
                { label: t('nav.about'), to: '/sobre' },
                { label: t('nav.contact'), to: '/contato' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    style={{ fontSize: '0.9rem', color: '#cbd5e1', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Service Routes */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {t('footer.solutions')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {servicesData.map((service) => {
                const loc = getLocalizedService(service, language);
                return (
                  <li key={service.id}>
                    <Link
                      to={`/servicos/${service.id}`}
                      style={{ fontSize: '0.9rem', color: '#cbd5e1', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                    >
                      {loc.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              Atendimento Corporativo
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <WhatsAppIcon size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
                >
                  {companyData.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <Globe size={16} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Atendimento Global (Brasil e exterior)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '0.4rem',
          }}
        >
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', textAlign: 'center', fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} {companyData.name} &bull; CNPJ {companyData.cnpj} &bull; {t('footer.rights')}
          </div>

          <div style={{ fontSize: '0.82rem', color: '#94a3b8', textAlign: 'center', letterSpacing: '0.02em' }}>
            {t('footer.compliance')}
          </div>
        </div>
      </div>
    </footer>
  );
};
