import { Star, Sparkles } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-pill badge-pill-emerald">
            <Sparkles size={14} color="#2dd4bf" />
            <span>Casos &amp; Depoimentos</span>
          </div>
          <h2 className="text-section-title">
            O que Nossos <span className="gradient-text-emerald">Parceiros Dizem</span>
          </h2>
          <p>
            Histórias reais de empresas que aceleraram sua maturidade tecnológica com a Andrade Serviços de Tecnologia.
          </p>
        </div>

        <div className="grid-3">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Metric Badge & Star Ratings */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <span
                    className="badge-tag"
                    style={{
                      background: 'rgba(16, 185, 129, 0.12)',
                      borderColor: 'rgba(16, 185, 129, 0.3)',
                      color: 'var(--accent-emerald)',
                      fontWeight: 600,
                    }}
                  >
                    {item.highlightMetric}
                  </span>
                </div>

                {/* Quote Content */}
                <p style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{item.content}"
                </p>
              </div>

              {/* Author & Company */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: '#044E46',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    flexShrink: 0,
                  }}
                >
                  {item.avatarText}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.role} • <span style={{ color: 'var(--primary-cyan)' }}>{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
