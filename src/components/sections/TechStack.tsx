import { useState } from 'react';
import { Terminal } from 'lucide-react';
import { techStackData } from '../../data/techStack';
import { useLanguage } from '../../context/LanguageContext';

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: 'Todas as Tecnologias' },
    { id: 'ai_models', label: 'Modelos de IA & RAG' },
    { id: 'geo_seo', label: 'GEO & SEO' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'security', label: 'Segurança & LGPD' },
  ];

  const filteredTechs =
    activeCategory === 'all'
      ? techStackData
      : techStackData.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tecnologias" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-dark-base)' }}>
      <div className="container">
        <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <h2 className="text-section-title" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            {t('tech.title')}
            <span style={{ color: '#2dd4bf' }}>{t('tech.title_highlight')}</span>
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '720px', margin: '0 auto' }}>{t('tech.subtitle')}</p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2.25rem',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: isActive
                    ? '1px solid #2dd4bf'
                    : '1px solid var(--border-hairline)',
                  backgroundColor: isActive
                    ? '#182438'
                    : 'var(--bg-dark-surface)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  transition: 'all 0.15s ease',
                  outline: 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid-3" style={{ gap: '1.25rem' }}>
          {filteredTechs.map((tech, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.25rem 1.4rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                backgroundColor: 'var(--bg-dark-surface)',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '8px',
                  backgroundColor: '#181d2b',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#2dd4bf',
                }}
              >
                <Terminal size={18} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <h4 style={{ fontSize: '0.98rem', color: '#ffffff', fontWeight: 700 }}>
                    {tech.name}
                  </h4>
                </div>
                <span className="badge-tag" style={{ fontSize: '0.68rem', padding: '0.12rem 0.45rem', marginBottom: '0.45rem', display: 'inline-block' }}>
                  {tech.categoryLabel}
                </span>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
