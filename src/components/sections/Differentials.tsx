import React from 'react';
import { Zap, Search, ShieldCheck, Globe, Check, Lock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Differentials: React.FC = () => {
  const { t } = useLanguage();

  const diffs = [
    {
      icon: <Search size={20} color="#2dd4bf" />,
      badge: "Pioneirismo GEO & SEO",
      title: t('diff.card1.title'),
      description: t('diff.card1.desc'),
      benefits: [
        "Indexação prioritária no Google",
        "Citação como resposta nos motores de busca por IA (GEO)",
        "Arquitetura semântica rica com Schema.org"
      ]
    },
    {
      icon: <Zap size={20} color="#2dd4bf" />,
      badge: "Velocidade de Entrega",
      title: t('diff.card2.title'),
      description: t('diff.card2.desc'),
      benefits: [
        "Entregas até 3x mais rápidas que agências comuns",
        "IA integrada em 100% do ciclo de código",
        "Sprints quinzenais com protótipos funcionais"
      ]
    },
    {
      icon: <TrendingUp size={20} color="#2dd4bf" />,
      badge: "Resultados Reais",
      title: t('diff.card3.title'),
      description: t('diff.card3.desc'),
      benefits: [
        "Foco direto em faturamento e conversão",
        "Sem jargões técnicos desnecessários",
        "Experiência simples, transparente e ágil"
      ]
    },
    {
      icon: <ShieldCheck size={20} color="#2dd4bf" />,
      badge: "Segurança & LGPD",
      title: t('diff.card4.title'),
      description: t('diff.card4.desc'),
      benefits: [
        "Conformidade total com a LGPD e GDPR",
        "Proteção contra vulnerabilidades OWASP Top 10",
        "Criptografia de dados e privacidade por design"
      ]
    },
    {
      icon: <Globe size={20} color="#2dd4bf" />,
      badge: "Escopo Global",
      title: t('diff.card5.title'),
      description: t('diff.card5.desc'),
      benefits: [
        "Projetos executados no Brasil, EUA, Latam e Europa",
        "Atendimento trilíngue (PT / EN / ES)",
        "Padrões internacionais de engenharia de software"
      ]
    },
    {
      icon: <Lock size={20} color="#2dd4bf" />,
      badge: "100% Seu",
      title: t('diff.card6.title'),
      description: t('diff.card6.desc'),
      benefits: [
        "Código-fonte e repositórios 100% transferidos",
        "Sem mensalidades ocultas ou dependência técnica",
        "Documentação clara para evolução futura"
      ]
    }
  ];

  return (
    <section id="diferenciais" className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-dark-base)' }}>
      <div className="container">
        <div className="section-header" style={{ maxWidth: '820px' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={13} />
            <span>{t('diff.badge')}</span>
          </div>
          <h2 className="text-section-title" style={{ color: '#ffffff' }}>
            {t('diff.title')}
            <span style={{ color: '#2dd4bf' }}>{t('diff.title_highlight')}</span>
          </h2>
          <p style={{ color: '#cbd5e1' }}>{t('diff.subtitle')}</p>
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {diffs.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.65rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-dark-surface)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      backgroundColor: '#181d2b',
                      border: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="badge-tag">
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#e2e8f0' }}>
                      <Check size={13} color="#2dd4bf" style={{ flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
