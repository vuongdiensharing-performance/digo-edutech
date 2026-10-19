import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EcosystemPage } from './pages/EcosystemPage';
import { AcademyPage } from './pages/Academy';
import { GrowthPage } from './pages/Growth';
import { InfraPage } from './pages/Infra';
import { InsightsPage } from './pages/Insights';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

import { SodaEffervescence } from './components/SodaEffervescence';
import { LeadMagnetBand } from './components/LeadMagnetBand';

export const App: React.FC = () => {
  const getPageFromHash = (): PageId => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    if (rawHash.startsWith('insights/')) {
      return 'insights';
    }
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
    if (validPages.includes(rawHash as PageId)) {
      return rawHash as PageId;
    }
    return 'home';
  };

  const getArticleIdFromHash = (): string | null => {
    const rawHash = window.location.hash.replace('#', '');
    if (rawHash.startsWith('insights/')) {
      return rawHash.replace('insights/', '').trim() || null;
    }
    return null;
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [initialArticleId, setInitialArticleId] = useState<string | null>(getArticleIdFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      setInitialArticleId(getArticleIdFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    setInitialArticleId(null);
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
        return (
          <InsightsPage
            onNavigate={handleNavigate}
            initialArticleId={initialArticleId}
          />
        );
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
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-shell">
          <SodaEffervescence />
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
          {renderPage()}
          <LeadMagnetBand />
          <Footer onNavigate={handleNavigate} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
