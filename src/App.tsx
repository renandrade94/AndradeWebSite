/**
 * Andrade Serviços de Tecnologia - Main Application Entry & Routing
 * Configured for Cloudflare Workers / Pages deployment
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileFloatingBar } from './components/layout/MobileFloatingBar';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CasesPage } from './pages/CasesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

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

          {/* Dynamic Router Views */}
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              <Route path="/servicos/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/clientes" element={<CasesPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
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
