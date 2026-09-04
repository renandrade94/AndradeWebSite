import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  marginBottom?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, marginBottom = '2rem' }) => {
  const { t } = useLanguage();

  const allItems: BreadcrumbItem[] = [
    { label: t('nav.home'), to: '/' },
    ...items,
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom,
      }}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                size={14}
                style={{ color: 'var(--text-muted)', opacity: 0.6, flexShrink: 0 }}
              />
            )}
            {isLast || !item.to ? (
              <span style={{ color: '#2dd4bf', fontWeight: 600 }}>{item.label}</span>
            ) : (
              <Link
                to={item.to}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
