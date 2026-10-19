import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a
            className="brand footer-brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            aria-label="DIGO home"
          >
            <span className="brand-mark">D</span>
            <span className="brand-text">DIGO</span>
          </a>
          <p className="footer-copy">
            {t(
              'Kết nối tri thức, thực thi và hạ tầng dữ liệu.',
              'Connecting learning, execution, and data infrastructure.'
            )}
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li>
              <button type="button" onClick={() => onNavigate('ecosystem')}>
                Ecosystem
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('academy')}>
                Academy
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('growth')}>
                Growth
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('infra')}>
                Infra &amp; Trust
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4>{t('Tri thức', 'Insights')}</h4>
          <ul>
            <li>
              <button type="button" onClick={() => onNavigate('insights')}>
                Insights
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4>{t('Liên hệ', 'Contact')}</h4>
          <ul>
            <li>
              <a href="mailto:hello@digo.com">hello@digo.com</a>
            </li>
            <li>
              <a href="tel:+84000000000">+84 000 000 000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bar">
        <span>© 2026 DIGO EduTech</span>
        <div>
          <button type="button" onClick={() => onNavigate('privacy')}>
            {t('Chính sách quyền riêng tư', 'Privacy policy')}
          </button>
          <button type="button" onClick={() => onNavigate('terms')}>
            {t('Điều khoản', 'Terms')}
          </button>
        </div>
      </div>
    </footer>
  );
};
