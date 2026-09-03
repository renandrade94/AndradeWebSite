import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div
      style={{
        paddingTop: 'calc(var(--header-height) + 5rem)',
        paddingBottom: '8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <SEO
        title={t('notfound.title')}
        description={t('notfound.desc')}
      />

      <div className="container" style={{ maxWidth: '600px' }}>
        <div
          style={{
            fontSize: '6rem',
            fontWeight: 900,
            fontFamily: 'var(--font-mono)',
            color: '#2dd4bf',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
          {t('notfound.title')}
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          {t('notfound.desc')}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            <Home size={18} />
            <span>{t('notfound.back_home')}</span>
          </Link>

          <Link to="/servicos" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            <Search size={18} />
            <span>{t('nav.all_services')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
