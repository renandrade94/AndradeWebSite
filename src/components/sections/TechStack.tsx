import { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { techStackData } from '../../data/techStack';
import { useLanguage } from '../../context/LanguageContext';

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Todas as Tecnologias' },
    { id: 'ai_models', label: 'Modelos de IA & RAG' },
    { id: 'geo_seo', label: 'GEO & SEO' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'security', label: 'Segurança & LGPD' },
  ];

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(checkScroll, 150);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [checkScroll]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.max(160, Math.floor(el.clientWidth * 0.65));
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleCategoryClick = (catId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(catId);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

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

        {/* Category Carousel Wrapper */}
        <div style={{ position: 'relative', maxWidth: '100%', margin: '0 auto 2.5rem auto' }}>
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Rolar para a esquerda"
              style={{
                position: 'absolute',
                left: '-4px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'rgba(14, 19, 31, 0.95)',
                border: '1px solid #2dd4bf',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Left Fade Gradient Mask */}
          {canScrollLeft && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 44,
                background: 'linear-gradient(to right, var(--bg-dark-base) 20%, transparent 100%)',
                zIndex: 5,
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="tech-carousel-track"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleCategoryClick(cat.id, e)}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    flexShrink: 0,
                    scrollSnapAlign: 'center',
                    border: isActive
                      ? '1px solid #2dd4bf'
                      : '1px solid var(--border-hairline)',
                    backgroundColor: isActive
                      ? '#182438'
                      : 'var(--bg-dark-surface)',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    boxShadow: isActive ? '0 0 14px rgba(45, 212, 191, 0.2)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Fade Gradient Mask */}
          {canScrollRight && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: 44,
                background: 'linear-gradient(to left, var(--bg-dark-base) 20%, transparent 100%)',
                zIndex: 5,
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Rolar para a direita"
              style={{
                position: 'absolute',
                right: '-4px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: 'rgba(14, 19, 31, 0.95)',
                border: '1px solid #2dd4bf',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={20} />
            </button>
          )}
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
