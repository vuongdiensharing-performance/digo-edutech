import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          aria-label="DIGO home"
        >
          <span className="brand-mark">D</span>
          <span className="brand-text">DIGO</span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'ecosystem' ? 'active' : ''}`}
            onClick={() => handleNavClick('ecosystem')}
          >
            {t('Hệ sinh thái', 'Ecosystem')}
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'academy' ? 'active' : ''}`}
            onClick={() => handleNavClick('academy')}
          >
            Academy
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'growth' ? 'active' : ''}`}
            onClick={() => handleNavClick('growth')}
          >
            Growth
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'infra' ? 'active' : ''}`}
            onClick={() => handleNavClick('infra')}
          >
            Infra &amp; Trust
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'insights' ? 'active' : ''}`}
            onClick={() => handleNavClick('insights')}
          >
            {t('Tri thức', 'Insights')}
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            {t('Liên hệ', 'Contact')}
          </button>
        </nav>

        <div className="nav-tools">
          <div className="lang-switcher" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
              onClick={() => setLang('vi')}
            >
              VI
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="button button-primary"
            onClick={() => handleNavClick('contact')}
          >
            {t('Liên hệ DIGO', 'Contact DIGO')}
          </button>
        </div>

        <button
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
