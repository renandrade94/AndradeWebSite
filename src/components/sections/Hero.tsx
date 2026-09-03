import React from 'react';
import { Shield, Zap, Globe, Search } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + clamp(2rem, 5vw, 4rem))',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        backgroundColor: 'var(--bg-dark-base)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Main Headline (Solid White, High Contrast WCAG AAA) */}
        <h1
          style={{
            maxWidth: '980px',
            margin: '0 auto 1.5rem auto',
            fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: '#ffffff',
          }}
        >
          {t('hero.title_prefix')}
          <span style={{ color: '#2dd4bf' }}>{t('hero.title_highlight')}</span>
        </h1>

        {/* Subtitle (Refined Neutral Slate, Contrast 14:1) */}
        <p
          style={{
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            color: '#cbd5e1',
            lineHeight: 1.7,
            fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
          }}
        >
          {t('hero.description')}
        </p>

        {/* Action Button (Solid Tactile Luxury) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3.75rem',
          }}
        >
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="hero-whatsapp-cta"
            style={{ minWidth: '240px', textDecoration: 'none' }}
          >
            <WhatsAppIcon size={18} color="#090a0f" />
            <span>{t('hero.cta_whatsapp')}</span>
          </a>
        </div>

        {/* 4 Key Operational Metrics (Solid Matte Surface) */}
        <div
          className="grid-4"
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          {/* KPI 1: Speed */}
          <div className="glass-card" style={{ padding: '1.35rem 1.4rem', backgroundColor: 'var(--bg-dark-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {t('hero.kpi1_title')}
              </span>
              <Zap size={16} color="#2dd4bf" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              {t('hero.kpi1_value')}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{t('hero.kpi1_desc')}</div>
          </div>

          {/* KPI 2: GEO & SEO */}
          <div className="glass-card" style={{ padding: '1.35rem 1.4rem', backgroundColor: 'var(--bg-dark-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {t('hero.kpi2_title')}
              </span>
              <Search size={16} color="#2dd4bf" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              {t('hero.kpi2_value')}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{t('hero.kpi2_desc')}</div>
          </div>

          {/* KPI 3: Global Reach */}
          <div className="glass-card" style={{ padding: '1.35rem 1.4rem', backgroundColor: 'var(--bg-dark-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {t('hero.kpi3_title')}
              </span>
              <Globe size={16} color="#2dd4bf" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              {t('hero.kpi3_value')}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{t('hero.kpi3_desc')}</div>
          </div>

          {/* KPI 4: InfoSec & LGPD */}
          <div className="glass-card" style={{ padding: '1.35rem 1.4rem', backgroundColor: 'var(--bg-dark-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {t('hero.kpi4_title')}
              </span>
              <Shield size={16} color="#2dd4bf" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              {t('hero.kpi4_value')}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{t('hero.kpi4_desc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
