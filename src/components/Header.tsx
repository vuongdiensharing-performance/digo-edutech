import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const renderThemeSwitcher = () => (
    <div className="theme-switcher" role="radiogroup" aria-label={t('Chuyển đổi giao diện', 'Theme switcher')}>
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'light'}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        onClick={() => setTheme('light')}
        aria-label={t('Giao diện Sáng (Coca-Cola Classic)', 'Light Theme (Coca-Cola Classic)')}
        title={t('Giao diện Sáng (Coca-Cola Classic)', 'Light Theme (Coca-Cola Classic)')}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <span>Light</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'dark'}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-label={t('Giao diện Tối (Coca-Cola Deep Black)', 'Deep Black Theme (Coca-Cola Zero)')}
        title={t('Giao diện Tối (Coca-Cola Deep Black)', 'Deep Black Theme (Coca-Cola Zero)')}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );

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

          {/* Mobile drawer controls for theme and language */}
          <div className="mobile-theme-lang">
            {renderThemeSwitcher()}
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
          </div>
        </nav>

        <div className="nav-tools">
          {renderThemeSwitcher()}

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

        {/* Quick theme toggle for mobile viewports */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="quick-theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? t('Chuyển sang giao diện Tối', 'Switch to Dark theme')
                : t('Chuyển sang giao diện Sáng', 'Switch to Light theme')
            }
            title={
              theme === 'light'
                ? t('Chuyển sang giao diện Tối', 'Switch to Dark theme')
                : t('Chuyển sang giao diện Sáng', 'Switch to Light theme')
            }
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

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
      </div>
    </header>
  );
};
