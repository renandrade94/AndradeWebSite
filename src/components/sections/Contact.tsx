import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-dark-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <h2 className="text-section-title" style={{ color: '#ffffff' }}>
            {t('contact.title')}
            <span style={{ color: '#2dd4bf' }}>{t('contact.title_highlight')}</span>
          </h2>
          <p style={{ color: '#cbd5e1', margin: '0 auto' }}>{t('contact.subtitle')}</p>
        </div>

        {/* Direct Channels Card */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Main Direct WhatsApp Banner Card */}
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                  Atendimento Direto via WhatsApp
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Converse diretamente com nossos especialistas e inicie o alinhamento do seu projeto.
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
    </section>
  );
};
