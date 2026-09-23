import React from 'react';
import { Shield, Lock, FileText, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';
import { companyData } from '../data/companyInfo';

export const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  const isEn = language === 'en';
  const isEs = language === 'es';

  const title = isEn
    ? 'Privacy Policy & Data Protection (LGPD & GDPR)'
    : isEs
    ? 'Política de Privacidad y Protección de Datos (LGPD y GDPR)'
    : 'Política de Privacidade & Proteção de Dados (LGPD & GDPR)';

  const description = isEn
    ? 'Official Privacy Policy of Andrade Serviços de Tecnologia. Learn how we safeguard your personal data in full compliance with the Brazilian General Data Protection Law (LGPD) and GDPR.'
    : isEs
    ? 'Política de Privacidad Oficial de Andrade Serviços de Tecnologia. Conozca cómo protegemos sus datos de conformidad con la LGPD y el GDPR.'
    : 'Política de Privacidade Oficial da Andrade Serviços de Tecnologia. Saiba como tratamos seus dados pessoais em total conformidade com a LGPD (Lei 13.709/2018) e normas internacionais (GDPR).';

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark-base)' }}>
      <SEO
        title={title}
        description={description}
        keywords={[
          'Política de Privacidade Andrade Serviços de Tecnologia',
          'Conformidade LGPD',
          'GDPR Compliance',
          'Proteção de Dados Pessoais',
          'Segurança OWASP',
          'Privacidade por Design',
        ]}
      />

      <div className="container" style={{ maxWidth: '920px' }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[{ label: isEn ? 'Privacy Policy' : isEs ? 'Política de Privacidad' : 'Política de Privacidade' }]}
          marginBottom="2rem"
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <Shield size={14} color="#2dd4bf" />
            <span>{isEn ? 'Security & Compliance by Design' : isEs ? 'Seguridad y Cumplimiento por Diseño' : 'Segurança & Privacidade por Design'}</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: '#ffffff',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto',
            }}
          >
            {isEn
              ? 'Transparency, confidentiality, and data sovereignty are the foundations of our engineering. This policy details how your information is collected, processed, and safeguarded.'
              : isEs
              ? 'La transparencia, la confidencialidad y la soberanía de los datos son los pilares de nuestra ingeniería. Esta política detalla cómo se recopila, procesa y protege su información.'
              : 'Transparência, confidencialidade e soberania sobre os dados são os pilares da nossa engenharia. Esta política detalha como suas informações são tratadas, armazenadas e protegidas.'}
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            {isEn ? 'Last updated: September 23, 2026' : isEs ? 'Última actualización: 23 de septiembre de 2026' : 'Última atualização: 23 de setembro de 2026'} &bull; Versão 1.1
          </div>
        </div>

        {/* Legal Identity Card */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Lock size={18} color="#2dd4bf" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>
              {isEn ? 'Data Controller Identification' : isEs ? 'Identificación del Responsable del Tratamiento' : 'Identificação do Controlador de Dados'}
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
            <div><strong>{isEn ? 'Company Name:' : 'Razão Social:'}</strong> {companyData.legalName}</div>
            <div><strong>CNPJ:</strong> {companyData.cnpj}</div>
            <div><strong>{isEn ? 'Headquarters:' : 'Sede:'}</strong> {companyData.address.full}</div>
            <div><strong>{isEn ? 'Channel / DPO:' : 'Canal de Atendimento / DPO:'}</strong> {companyData.phone}</div>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.02rem' }}>
          
          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="#2dd4bf" />
              1. {isEn ? 'Scope and Application' : isEs ? 'Alcance y Aplicación' : 'Escopo e Aplicação'}
            </h2>
            <p>
              {isEn
                ? 'This Privacy Policy applies to all individuals and corporate entities interacting with the website https://tecnologiandrade.com.br, our corporate communications (WhatsApp, online contact channels), and our software engineering services. We strictly adhere to the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados - LGPD, Law No. 13,709/2018) and, where applicable to international clients, the European General Data Protection Regulation (GDPR, Regulation EU 2016/679).'
                : isEs
                ? 'Esta Política de Privacidad se aplica a todas las personas y empresas que interactúan con el sitio web https://tecnologiandrade.com.br, nuestros canales corporativos (WhatsApp, canales de atención digital) y nuestros servicios de ingeniería de software. Cumplimos estrictamente con la Ley General de Protección de Datos de Brasil (LGPD, Ley 13.709/2018) y el Reglamento General de Protección de Datos de la Unión Europea (GDPR, Reglamento UE 2016/679).'
                : 'Esta Política de Privacidade aplica-se a todas as pessoas físicas e jurídicas que interagem com o website https://tecnologiandrade.com.br, nossos canais corporativos de atendimento (WhatsApp, canais de atendimento digital) e nossos serviços de engenharia de software. Cumprimos integralmente as diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e, quando aplicável a clientes globais, do Regulamento Geral de Proteção de Dados da União Europeia (GDPR - Regulamento UE 2016/679).'}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={20} color="#2dd4bf" />
              2. {isEn ? 'Data We Collect and How It Is Collected' : isEs ? 'Datos Recopilados y Formas de Recopilación' : 'Dados Pessoais Coletados e Formas de Coleta'}
            </h2>
            <p>
              {isEn
                ? 'We minimize data collection to only what is strictly necessary to fulfill our business and technical commitments (Principle of Data Minimization):'
                : 'Coletamos apenas as informações estritamente necessárias para a prestação de serviços e atendimento comercial (Princípio da Necessidade e Minimização):'}
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <strong>{isEn ? 'Information Provided Directly by You:' : 'Informações fornecidas diretamente pelo titular:'}</strong>{' '}
                {isEn
                  ? 'Name, corporate email, phone/WhatsApp number, company name, and project scope details submitted via contact forms or direct messaging.'
                  : 'Nome completo, e-mail corporativo, número de telefone/WhatsApp, empresa e detalhes de escopo técnico enviados voluntariamente através de formulários ou mensagens diretas.'}
              </li>
              <li>
                <strong>{isEn ? 'Technical and Browsing Telemetry:' : 'Dados de navegação e telemetria anônima:'}</strong>{' '}
                {isEn
                  ? 'IP address (anonymized), browser type, operating system, and navigation timings collected to guarantee system stability, detect malicious activity, and optimize Core Web Vitals.'
                  : 'Endereço IP (com anonimização aplicada), tipo de navegador, sistema operacional e métricas de desempenho de página (Core Web Vitals) para garantir estabilidade e prevenir acessos maliciosos.'}
              </li>
              <li>
                <strong>{isEn ? 'Zero Sensitive Data Collection:' : 'Inexistência de Coleta de Dados Sensíveis:'}</strong>{' '}
                {isEn
                  ? 'We do not collect or request sensitive personal data (e.g., biometric, health, philosophical, or political information).'
                  : 'A Andrade não coleta, solicita ou armazena dados pessoais sensíveis (dados de saúde, biométricos, opiniões políticas ou convicções religiosas).'}
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={20} color="#2dd4bf" />
              3. {isEn ? 'Legal Basis and Processing Purposes' : isEs ? 'Bases Legales y Finalidades del Tratamiento' : 'Bases Legais e Finalidades do Tratamento'}
            </h2>
            <p>
              {isEn
                ? 'All personal data processing is supported by legitimate legal bases outlined in LGPD Article 7:'
                : 'O tratamento de dados pessoais pela Andrade Serviços de Tecnologia baseia-se exclusivamente nas hipóteses autorizadoras do Artigo 7º da LGPD:'}
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <strong>{isEn ? 'Contract Execution and Pre-contractual Procedures (Art. 7, V):' : 'Execução de Contrato e Procedimentos Preliminares (Art. 7º, V):'}</strong>{' '}
                {isEn
                  ? 'To prepare technical proposals, architectural estimates, project contracts, and deliver software engineering milestones.'
                  : 'Elaboração de propostas comerciais, escopos técnicos de engenharia, celebração de contratos de prestação de serviços e entregas de projetos.'}
              </li>
              <li>
                <strong>{isEn ? 'Legitimate Interests (Art. 7, IX):' : 'Legítimo Interesse (Art. 7º, IX):'}</strong>{' '}
                {isEn
                  ? 'To enhance platform security, defend against cyber threats (OWASP Top 10), and provide tailored technical support.'
                  : 'Aprimoramento da segurança da informação, combate a fraudes e ataques cibernéticos, e suporte técnico corporativo aos clientes.'}
              </li>
              <li>
                <strong>{isEn ? 'Compliance with Legal/Regulatory Obligations (Art. 7, II):' : 'Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):'}</strong>{' '}
                {isEn
                  ? 'Invoicing, fiscal retention, and compliance with the Brazilian Internet Civil Rights Framework (Marco Civil da Internet, Law 12,965/2014).'
                  : 'Emissão de notas fiscais, atendimento a obrigações tributárias e cumprimento dos registros de conexão exigidos pelo Marco Civil da Internet (Lei nº 12.965/2014).'}
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="#2dd4bf" />
              4. {isEn ? 'Data Security, Encryption, and Zero-Training AI Policy' : isEs ? 'Seguridad, Criptografía y Política de IA' : 'Segurança da Informação, Criptografia e Política de IA'}
            </h2>
            <p>
              {isEn
                ? 'We adopt security-by-design standards across our infrastructure and development lifecycle:'
                : 'Implementamos controles rigorosos de segurança da informação alinhados aos padrões internacionais e boas práticas OWASP:'}
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <strong>{isEn ? 'End-to-End Encryption:' : 'Criptografia em Trânsito e Repouso:'}</strong>{' '}
                {isEn
                  ? 'All communications are protected by TLS 1.3 encryption with strict HTTP Strict Transport Security (HSTS) preloading and modern ciphers.'
                  : 'Todo o tráfego é protegido por criptografia TLS 1.3 de ponta a ponta com cabeçalhos HSTS (HTTP Strict Transport Security) e Content Security Policy (CSP) restritiva.'}
              </li>
              <li>
                <strong>{isEn ? 'Client Confidentiality & IP Ownership:' : 'Propriedade Intelectual Exclusiva do Cliente:'}</strong>{' '}
                {isEn
                  ? 'All repositories, application code, databases, and configuration keys belong 100% to our clients. We do not retain unauthorized copies or claim ownership of client assets.'
                  : '100% do código-fonte, arquitetura, chaves e dados produzidos nos projetos pertencem com exclusividade ao cliente. A Andrade não retém dados confidenciais após o término do vínculo.'}
              </li>
              <li>
                <strong>{isEn ? 'Zero Public Model Training on Client Data:' : 'Política Estrita de IA Sem Treinamento Público:'}</strong>{' '}
                {isEn
                  ? 'We never use client personal data, proprietary codebase, or business logic to train public third-party AI models. Any enterprise RAG or agent implementation operates in isolated, zero-retention tenant boundaries.'
                  : 'Garantimos categoricamente que nenhum dado de cliente, código confidencial ou informação proprietária é utilizado para treinamento de modelos públicos de inteligência artificial de terceiros.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="#2dd4bf" />
              5. {isEn ? 'Data Subject Rights (LGPD Art. 18 / GDPR)' : isEs ? 'Derechos del Titular de Datos' : 'Direitos dos Titulares de Dados (Art. 18 da LGPD)'}
            </h2>
            <p>
              {isEn
                ? 'As a data subject, you hold full rights under LGPD Article 18, which may be exercised at any time free of charge:'
                : 'Em conformidade com o Artigo 18 da LGPD, os titulares de dados pessoais podem exercer a qualquer momento, de forma simples e gratuita, os seguintes direitos:'}
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>{isEn ? 'Confirmation and Access:' : 'Confirmação e Acesso:'}</strong> {isEn ? 'Confirm the existence of processing and request access to your data.' : 'Confirmar a existência de tratamento e acessar os dados pessoais mantidos.'}</li>
              <li><strong>{isEn ? 'Correction:' : 'Correção:'}</strong> {isEn ? 'Request correction of incomplete, inaccurate, or outdated data.' : 'Solicitar a correção de dados incompletos, inexatos ou desatualizados.'}</li>
              <li><strong>{isEn ? 'Anonymization or Erasure:' : 'Anonimização, Bloqueio ou Eliminação:'}</strong> {isEn ? 'Request erasure or anonymization of unnecessary or excessive data.' : 'Requerer a eliminação ou anonimização de dados desnecessários ou tratados em desconformidade.'}</li>
              <li><strong>{isEn ? 'Portability:' : 'Portabilidade:'}</strong> {isEn ? 'Request portability of your data to another service provider.' : 'Solicitar a portabilidade dos dados para outro fornecedor de serviços.'}</li>
              <li><strong>{isEn ? 'Revocation of Consent:' : 'Revogação do Consentimento:'}</strong> {isEn ? 'Revoke previously granted consent with immediate effect.' : 'Revogar o consentimento previamente fornecido a qualquer momento.'}</li>
            </ul>
          </section>

          <section style={{ background: '#0e131f', padding: '1.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginTop: 0, marginBottom: '0.75rem' }}>
              6. {isEn ? 'Contact the Data Protection Officer (DPO)' : isEs ? 'Contacto del Delegado de Protección de Datos (DPO)' : 'Canal de Atendimento do Encarregado (DPO)'}
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1.25rem' }}>
              {isEn
                ? 'To exercise any of your privacy rights or submit questions regarding our security and data processing practices, please contact our Data Protection Officer:'
                : 'Para exercer quaisquer dos seus direitos de titular ou esclarecer dúvidas sobre esta Política de Privacidade e Proteção de Dados, entre em contato diretamente com o nosso Encarregado de Proteção de Dados:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#2dd4bf" />
                <span><strong>{isEn ? 'Corporate Phone / WhatsApp:' : 'Telefone / WhatsApp Corporativo:'}</strong> {companyData.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={16} color="#2dd4bf" />
                <span><strong>{isEn ? 'Contact Channel:' : 'Canal Oficial de Atendimento:'}</strong> <a href="/contact" style={{ color: '#2dd4bf', textDecoration: 'none' }}>tecnologiandrade.com.br/contact</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="#2dd4bf" />
                <span><strong>{isEn ? 'Address:' : 'Endereço:'}</strong> {companyData.address.full}</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
