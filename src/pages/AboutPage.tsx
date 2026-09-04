import {
  Zap,
  Target,
  Compass,
  Award,
  Code2,
  Search,
  Lock,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Differentials } from '../components/sections/Differentials';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppUrl } from '../data/companyInfo';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark-base)' }}>
      <SEO
        title={t('about.title')}
        description={t('about.p1')}
        keywords={[
          "Sobre Andrade Serviços de Tecnologia",
          "História Andrade Serviços de Tecnologia",
          "Engenharia de Software com IA",
          "Valores e Missão",
          "Conformidade LGPD e GDPR"
        ]}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: t('nav.about') }]} marginBottom="2rem" />

        {/* Page Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <Zap size={14} color="#2dd4bf" />
            <span>{t('about.badge')}</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}
          >
            {t('about.title')}
            <span style={{ color: '#2dd4bf' }}>{t('about.title_highlight')}</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            {t('about.p1')}
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            {t('about.p2')}
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            {t('about.p3')}
          </p>
        </div>

        {/* Pillars (Missão, Visão, Valores) */}
        <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Target size={24} color="#2dd4bf" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{t('about.mission_title')}</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.92rem' }}>
              {t('about.mission_desc')}
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={24} color="#2dd4bf" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{t('about.vision_title')}</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.92rem' }}>
              {t('about.vision_desc')}
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'var(--bg-dark-surface)',
              borderTop: '2px solid #2dd4bf',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '10px',
                backgroundColor: '#181d2b',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Award size={24} color="#2dd4bf" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{t('about.values_title')}</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.92rem' }}>
              {t('about.values_desc')}
            </p>
          </div>
        </div>

        {/* Engineering Culture Manifesto */}
        <div
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '4rem',
            backgroundColor: 'var(--bg-dark-surface)',
            borderTop: '2px solid #2dd4bf',
          }}
        >
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <Code2 size={14} color="#2dd4bf" />
              <span>{t('about.manifesto_tag')}</span>
            </div>
            <h2 className="text-section-title" style={{ color: '#ffffff' }}>
              {t('about.manifesto_title')}
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Zap size={22} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {t('about.manifesto_c1_title')}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {t('about.manifesto_c1_desc')}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Search size={22} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {t('about.manifesto_c2_title')}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {t('about.manifesto_c2_desc')}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Lock size={22} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {t('about.manifesto_c3_title')}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {t('about.manifesto_c3_desc')}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Globe size={22} color="#2dd4bf" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {t('about.manifesto_c4_title')}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {t('about.manifesto_c4_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Differentials Section */}
        <Differentials />

        {/* CTA Section */}
        <div
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: 'var(--radius-lg)',
            marginTop: '4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            backgroundColor: 'var(--bg-dark-surface)',
            borderTop: '2px solid #2dd4bf',
          }}
        >
          <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', fontWeight: 800, color: '#ffffff' }}>
            {t('about.cta_title')}
          </h3>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', lineHeight: 1.6 }}>
            {t('about.cta_desc')}
          </p>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de conversar com a equipe da Andrade Serviços de Tecnologia sobre nossos projetos com IA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ textDecoration: 'none', padding: '0.85rem 2.2rem', fontSize: '1rem' }}
          >
            <span>{t('hero.cta_whatsapp')}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
