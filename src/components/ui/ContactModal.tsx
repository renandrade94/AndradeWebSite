import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { servicesData, getLocalizedService } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || servicesData[0].locales.pt.title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const customMessage = `*Solicitação de Proposta Comercial - Andrade Serviços de Tecnologia*\n\n*Nome:* ${formData.name || 'Não informado'}\n*E-mail:* ${formData.email || 'Não informado'}\n*WhatsApp/Tel:* ${formData.phone || 'Não informado'}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message || 'Gostaria de agendar uma reunião técnica para o meu projeto.'}`;
    window.open(createWhatsAppUrl(customMessage), '_blank');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(1.5rem, 4vw, 2.25rem)',
          position: 'relative',
          backgroundColor: '#0f1219',
          border: '1px solid var(--border-hairline)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-pill" style={{ marginBottom: '0.85rem' }}>
              <ShieldCheck size={13} />
              <span>{t('modal.title')}</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              {t('modal.title')}
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              {t('modal.subtitle')}
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {t('contact.form_name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Carlos Silva"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#131722',
                    border: '1px solid var(--border-hairline)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                    {t('contact.form_email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carlos@empresa.com"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#131722',
                      border: '1px solid var(--border-hairline)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                    {t('contact.form_phone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+55 (11) 99999-9999"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#131722',
                      border: '1px solid var(--border-hairline)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {t('contact.form_service')}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#131722',
                    border: '1px solid var(--border-hairline)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  {servicesData.map((s) => {
                    const loc = getLocalizedService(s, language);
                    return (
                      <option key={s.id} value={loc.title} style={{ backgroundColor: '#131722', color: '#ffffff' }}>
                        {loc.title}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div style={{ marginBottom: '1.35rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {t('contact.form_message')}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva resumidamente os objetivos ou escopo..."
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#131722',
                    border: '1px solid var(--border-hairline)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem' }}
              >
                <Send size={15} />
                <span>{t('contact.form_submit')}</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
              }}
            >
              <CheckCircle2 size={28} />
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              {t('contact.success_title')}
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {t('contact.success_desc')}
            </p>

            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="btn btn-primary"
              style={{ margin: '0 auto' }}
            >
              <WhatsAppIcon size={16} />
              <span>{t('hero.cta_whatsapp')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
