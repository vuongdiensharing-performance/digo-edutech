import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PageId } from '../../types';
import { useScrollRevealGroup } from '../../hooks/useScrollReveal';

interface InfraPageProps {
  onNavigate: (page: PageId) => void;
}

export const InfraPage: React.FC<InfraPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const mainRef = useScrollRevealGroup<HTMLElement>('.reveal-on-scroll', {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  });

  return (
    <main ref={mainRef}>
      <section className="page-hero section-shell reveal-on-scroll">
        <div className="container narrow">
          <p className="section-kicker">DIGO Infra &amp; Trust</p>
          <h1>
            {t(
              'Nền tảng đáng tin cậy cho dữ liệu, đo lường và tự động hóa.',
              'Trusted foundations for data, measurement, and automation.'
            )}
          </h1>
          <p>
            {t(
              'Kiến trúc, chất lượng dữ liệu và thực hành tự động hóa được thiết kế nhằm mang lại sự minh bạch, bảo mật và ra quyết định đáng tin cậy.',
              'Architecture, data quality, and automation practices designed for clarity, governance, and reliable decision-making.'
            )}
          </p>
          <div className="cta-row">
            <button
              type="button"
              className="button button-primary"
              onClick={() => onNavigate('contact')}
            >
              {t('Tư vấn kỹ thuật hạ tầng', 'Technical consultation')}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => onNavigate('insights')}
            >
              {t('Tìm hiểu phương pháp', 'Learn the approach')}
            </button>
          </div>
        </div>
      </section>

      <section className="section-shell reveal-on-scroll">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">
              {t('Tổng quan năng lực', 'Capability overview')}
            </p>
            <h2>
              {t(
                'Hạ tầng dữ liệu và đo lường phục vụ vận hành thực tế.',
                'Data and measurement infrastructure for real operational use.'
              )}
            </h2>
            <p>
              {t(
                'Hệ thống server-side tracking, đường ống ETL và các tác vụ AI tự động giúp doanh nghiệp kiểm soát toàn vẹn luồng dữ liệu khách hàng, vượt qua rào cản cookie bên thứ ba.',
                'Server-side tracking pipelines, ETL pipelines, and automated AI agents ensure full data integrity and resilience against third-party cookie restrictions.'
              )}
            </p>
          </div>
          <div className="evidence-panel">
            <div className="metric-row">
              <span className="metric-label">Data</span>
              <strong>{t('Hạ tầng đo lường chuẩn xác', 'Measurement infrastructure')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">CAPI</span>
              <strong>{t('Kết nối dữ liệu Server-side', 'Server-side data connectivity')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Automation</span>
              <strong>{t('Agent AI và luồng logic thông minh', 'AI agents and workflow logic')}</strong>
            </div>
            <div className="metric-row highlight">
              <span className="metric-label">Trust</span>
              <strong>{t('Quản trị, minh bạch, trách nhiệm', 'Governance, clarity, accountability')}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-alt reveal-on-scroll">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">{t('Hệ thống kiến trúc', 'Architecture system')}</p>
            <h2>
              {t(
                'Từ luồng tín hiệu thô đến bảng điều khiển điều hành',
                'From raw signal ingestion to executive intelligence'
              )}
            </h2>
          </div>

          <div className="card-grid three-up">
            <article className="info-card accent-dark reveal-on-scroll reveal-delay-1">
              <div>
                <span className="card-tag">Ingestion</span>
                <h3 style={{ marginTop: '16px' }}>First-Party Data</h3>
                <p>
                  {t(
                    'Thu thập trực tiếp và làm sạch dữ liệu từ website, CRM và hệ thống giao dịch của bạn.',
                    'Direct collection and sanitization of user events from web, CRM, and transaction layers.'
                  )}
                </p>
              </div>
            </article>

            <article className="info-card accent-red reveal-on-scroll reveal-delay-2">
              <div>
                <span className="card-tag">Pipeline</span>
                <h3 style={{ marginTop: '16px' }}>Conversions API</h3>
                <p>
                  {t(
                    'Đồng bộ dữ liệu thời gian thực lên Meta CAPI, Google Ads Offline Conversions và TikTok Events API.',
                    'Real-time synchronization to Meta CAPI, Google Ads Offline Conversions, and TikTok Events.'
                  )}
                </p>
              </div>
            </article>

            <article className="info-card accent-gold reveal-on-scroll reveal-delay-3">
              <div>
                <span className="card-tag">Intelligence</span>
                <h3 style={{ marginTop: '16px' }}>Automated Agents</h3>
                <p>
                  {t(
                    'AI agent phân tích cảnh báo bất thường về chi phí, CPA biến động và cảnh báo cơ hội tối ưu.',
                    'AI agents monitoring anomaly spend, unexpected CPA shifts, and flag instant optimization levers.'
                  )}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
