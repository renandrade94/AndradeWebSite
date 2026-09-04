import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, type Language } from '../../context/LanguageContext';

interface LanguageSelectorProps {
  dropUp?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ dropUp = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar Idioma / Select Language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.45rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'var(--text-main)',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
      >
        <Globe size={15} color="#2dd4bf" />
        <span>{currentLang.label}</span>
        <ChevronDown
          size={13}
          style={{
            transform: isOpen ? (dropUp ? 'rotate(0deg)' : 'rotate(180deg)') : (dropUp ? 'rotate(180deg)' : 'rotate(0deg)'),
            transition: 'transform 0.2s ease',
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            ...(dropUp ? { bottom: 'calc(100% + 8px)' } : { top: 'calc(100% + 6px)' }),
            right: 0,
            width: '160px',
            background: 'rgba(12, 17, 32, 0.98)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid #0f766e',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
            padding: '0.4rem',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          {languages.map((l) => {
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.55rem 0.75rem',
                  borderRadius: '8px',
                  background: isSelected ? 'rgba(4, 78, 70, 0.35)' : 'transparent',
                  border: 'none',
                  color: isSelected ? 'var(--primary-cyan)' : 'var(--text-main)',
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>{l.label}</span>
                {isSelected && <Check size={14} color="var(--primary-cyan)" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
