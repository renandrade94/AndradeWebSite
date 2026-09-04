import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { createWhatsAppUrl } from '../../data/companyInfo';
import { LanguageSelector } from '../common/LanguageSelector';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navRoutes = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.services'), to: '/servicos' },
    { label: t('nav.cases'), to: '/cases' },
    { label: t('nav.about'), to: '/sobre' },
    { label: t('nav.contact'), to: '/contato' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 950,
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          backgroundColor: isScrolled ? 'rgba(9, 10, 15, 0.95)' : 'rgba(9, 10, 15, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-hairline)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo Brand Header */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                color: '#090a0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                fontFamily: 'var(--font-sans)',
                flexShrink: 0,
              }}
            >
              A
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                }}
              >
                ANDRADE
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                SERVIÇOS DE TECNOLOGIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="hide-mobile"
          >
            {navRoutes.map((route) => (
              <NavLink
                key={route.to}
                to={route.to}
                end={route.to === '/'}
                style={({ isActive }) => ({
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  position: 'relative',
                  padding: '0.4rem 0',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{route.label}</span>
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: '#ffffff',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions: Language Switcher & WhatsApp CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hide-mobile">
            <LanguageSelector />

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem' }}
            >
              <WhatsAppIcon size={15} color="#2dd4bf" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="show-mobile-flex" style={{ alignItems: 'center' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100dvh - var(--header-height))',
            backgroundColor: '#090a0f',
            zIndex: 999,
            padding: '1.5rem 1.5rem calc(1.5rem + env(safe-area-inset-bottom, 20px)) 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Main Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {navRoutes.map((route) => (
              <NavLink
                key={route.to}
                to={route.to}
                onClick={closeMenu}
                style={({ isActive }) => ({
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                })}
              >
                {route.label}
              </NavLink>
            ))}
          </div>

          {/* Bottom Actions: Language Selector Dropdown & WhatsApp Button */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.25rem 0' }}>
              <span style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 600 }}>Idioma / Language</span>
              <LanguageSelector dropUp={true} />
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <WhatsAppIcon size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
