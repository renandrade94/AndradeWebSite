/**
 * Andrade Serviços de Tecnologia - Main Application Entry & Routing
 * Configured for Cloudflare Workers / Pages deployment
 */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileFloatingBar } from './components/layout/MobileFloatingBar';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

// Main Landing Page (bundled eagerly for instant Homepage FCP/LCP)
import { HomePage } from './pages/HomePage';

// Subpages (lazy-loaded to keep initial bundle lean on slow 4G)
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const CasesPage = lazy(() => import('./pages/CasesPage').then((m) => ({ default: m.CasesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

import './styles/index.css';
import './styles/responsive.css';

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Header & Multilingual Navigation */}
          <Navbar />

          {/* Dynamic Router Views with Suspense Fallback */}
          <main style={{ flex: 1 }}>
            <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/servicos" element={<ServicesPage />} />
                <Route path="/servicos/:serviceId" element={<ServiceDetailPage />} />
                <Route path="/cases" element={<CasesPage />} />
                <Route path="/clientes" element={<CasesPage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/privacidade" element={<PrivacyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Multilingual Footer */}
          <Footer />

          {/* Mobile Bottom Bar & Floating WhatsApp */}
          <MobileFloatingBar />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
