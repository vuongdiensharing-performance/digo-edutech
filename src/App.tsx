import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EcosystemPage } from './pages/EcosystemPage';
import { AcademyPage } from './pages/AcademyPage';
import { GrowthPage } from './pages/GrowthPage';
import { InfraPage } from './pages/InfraPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages: PageId[] = [
      'home',
      'ecosystem',
      'academy',
      'growth',
      'infra',
      'insights',
      'contact',
      'privacy',
      'terms',
    ];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ecosystem':
        return <EcosystemPage onNavigate={handleNavigate} />;
      case 'academy':
        return <AcademyPage onNavigate={handleNavigate} />;
      case 'growth':
        return <GrowthPage onNavigate={handleNavigate} />;
      case 'infra':
        return <InfraPage onNavigate={handleNavigate} />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <LegalPage type="privacy" onNavigate={handleNavigate} />;
      case 'terms':
        return <LegalPage type="terms" onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="app-shell">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
};

export default App;
