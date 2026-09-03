import React from 'react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { useLanguage } from '../../context/LanguageContext';

export const MobileFloatingBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Fixed bottom conversion bar for mobile devices (< 868px) */}
      <div className="mobile-floating-bar" id="mobile-conversion-bar">
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '0.95rem', textDecoration: 'none', justifyContent: 'center' }}
          id="mobile-bottom-whatsapp-btn"
        >
          <WhatsAppIcon size={18} color="#090a0f" />
          <span>{t('hero.cta_whatsapp')}</span>
        </a>
      </div>

      {/* Floating WhatsApp Action Button for Tablet & Desktop screens */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Abrir conversa no WhatsApp da Andrade Serviços de Tecnologia"
        id="desktop-floating-whatsapp-btn"
        title="Fale Conosco no WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
};
