import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, Globe, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Zap size={20} color="#2dd4bf" />,
      title: t('diff.card2.title'),
      desc: t('diff.card2.desc'),
    },
    {
      icon: <Target size={20} color="#2dd4bf" />,
      title: t('diff.card1.title'),
      desc: t('diff.card1.desc'),
    },
    {
      icon: <Globe size={20} color="#2dd4bf" />,
      title: t('diff.card5.title'),
      desc: t('diff.card5.desc'),
    },
    {
      icon: <ShieldCheck size={20} color="#2dd4bf" />,
      title: t('diff.card4.title'),
      desc: t('diff.card4.desc'),
    },
  ];

  return (
    <section id="sobre" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-dark-base)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Main Description */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '1rem' }}>
              <Zap size={13} color="#2dd4bf" />
              <span>{t('about.badge')}</span>
            </div>
            <h2 className="text-section-title" style={{ marginBottom: '1.25rem', color: '#ffffff' }}>
              {t('about.title')}
              <span style={{ color: '#2dd4bf' }}>{t('about.title_highlight')}</span>
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '1.25rem' }}>
              {t('about.p1')}
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '1.25rem' }}>
              {t('about.p2')}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '2rem' }}>
              {t('about.p3')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {[
                "Entregas aceleradas com engenharia de Inteligência Artificial",
                "Arquitetura nativa para indexação em IAs (GEO) e Google (SEO)",
                "Segurança da Informação rigorosa e conformidade total com a LGPD",
                "Atendimento a fusos horários globais com suporte de alto nível"
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="#2dd4bf" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#ffffff' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/sobre" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                <span>Conhecer Nossa História &amp; Valores</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Pillars 2x2 Grid */}
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg-dark-surface)',
                }}
              >
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
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
