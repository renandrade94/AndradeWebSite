interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export const Logo = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
}: LogoProps) => {
  // Dimensions map
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 64,
    xl: 96,
  };

  const iconDim = iconSizes[size];

  // Standalone Monogram Icon (Official Black & White 'A' Badge)
  const MonogramIcon = (
    <div
      style={{
        width: iconDim,
        height: iconDim,
        borderRadius: size === 'sm' ? '8px' : size === 'lg' ? '14px' : size === 'xl' ? '20px' : '10px',
        backgroundColor: '#ffffff',
        color: '#090a0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.85rem' : size === 'xl' ? '2.8rem' : '1.35rem',
        fontFamily: 'var(--font-sans)',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      A
    </div>
  );

  if (variant === 'icon') {
    return <div className={`logo-icon-wrapper ${className}`}>{MonogramIcon}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div
        className={`logo-stacked ${className}`}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0.4rem',
        }}
      >
        {MonogramIcon}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            style={{
              fontSize: size === 'lg' || size === 'xl' ? '1.85rem' : '1.35rem',
              fontWeight: 900,
              letterSpacing: '0.14em',
              color: '#ffffff',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
            }}
          >
            ANDRADE
          </span>
          <span
            style={{
              fontSize: size === 'lg' || size === 'xl' ? '0.75rem' : '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--primary-cyan)',
              lineHeight: 1.2,
              marginTop: '2px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            SERVIÇOS DE TECNOLOGIA
          </span>
        </div>
      </div>
    );
  }

  // Horizontal Variant (Default for Navigation and Footers)
  return (
    <div
      className={`logo-horizontal ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? '0.65rem' : '0.85rem',
      }}
    >
      {MonogramIcon}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: size === 'sm' ? '1.15rem' : size === 'lg' ? '1.6rem' : '1.35rem',
            fontWeight: 900,
            letterSpacing: '0.12em',
            color: '#ffffff',
            lineHeight: 1.1,
            fontFamily: 'var(--font-sans)',
          }}
        >
          ANDRADE
        </span>
        <span
          style={{
            fontSize: size === 'sm' ? '0.55rem' : size === 'lg' ? '0.75rem' : '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--primary-cyan)',
            lineHeight: 1.2,
            marginTop: '1px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          SERVIÇOS DE TECNOLOGIA
        </span>
      </div>
    </div>
  );
};
