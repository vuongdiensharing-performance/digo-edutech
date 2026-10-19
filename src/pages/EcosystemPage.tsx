import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';

interface EcosystemPageProps {
  onNavigate: (page: PageId) => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const mainRef = useScrollRevealGroup<HTMLElement>('.reveal-on-scroll', {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  });

  return (
    <main ref={mainRef}>
      <section className="page-hero section-shell reveal-on-scroll">
        <div className="container narrow center text-center">
          <p className="section-kicker">{t('Hệ sinh thái', 'Ecosystem')}</p>
          <h1>
            {t(
              'Một hệ sinh thái. Ba năng lực bổ trợ.',
              'One ecosystem. Three complementary capabilities.'
            )}
          </h1>
          <p>
            {t(
              'Mỗi trụ cột giải quyết một lớp khác nhau của tăng trưởng và năng lực: tri thức, thực thi và hạ tầng.',
              'Each branch addresses a different layer of growth and capability: knowledge, execution, and infrastructure.'
            )}
          </p>
        </div>
      </section>

      <section className="section-shell reveal-on-scroll">
        <div className="container">
          <div className="card-grid three-up">
            <article className="info-card accent-red reveal-on-scroll reveal-delay-1">
              <div>
                <span className="card-tag">Academy</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Xây dựng tri thức và năng lực thực chiến.',
                    'Build knowledge and practical capability.'
                  )}
                </h3>
                <p>
                  {t(
                    'Các lộ trình học tập được thiết kế nhằm giúp người học hiểu sâu, áp dụng thực tế và liên tục tinh chỉnh kỹ năng trong công việc.',
                    'Learning paths designed to help people understand, apply, and refine new skills in real working contexts.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('academy')}
              >
                {t('Tìm hiểu Academy →', 'Explore Academy →')}
              </button>
            </article>

            <article className="info-card accent-dark reveal-on-scroll reveal-delay-2">
              <div>
                <span className="card-tag">Growth</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Ứng dụng chiến lược, thực thi và tối ưu hóa.',
                    'Apply strategy, execution, and optimization.'
                  )}
                </h3>
                <p>
                  {t(
                    'Hệ thống marketing tăng trưởng được xây dựng xung quanh việc thử nghiệm, hiệu quả kênh và kết quả đo lường rõ ràng.',
                    'Performance marketing systems built around experimentation, channel performance, and measurable outcomes.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('growth')}
              >
                {t('Tìm hiểu Growth →', 'Explore Growth →')}
              </button>
            </article>

            <article className="info-card accent-gold reveal-on-scroll reveal-delay-3">
              <div>
                <span className="card-tag">Infra &amp; Trust</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Hỗ trợ đo lường đáng tin cậy và tự động hóa.',
                    'Support trusted measurement and automation.'
                  )}
                </h3>
                <p>
                  {t(
                    'Nền tảng dữ liệu cho phép nâng cao chất lượng dữ liệu, tính minh bạch và đòn bẩy kỹ thuật cần thiết để mở rộng quy mô.',
                    'Data foundations that enable better data quality, visibility, and the technical leverage needed for scale.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('infra')}
              >
                {t('Tìm hiểu Infra & Trust →', 'Explore Infra & Trust →')}
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell section-alt reveal-on-scroll">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">
              {t('Mối liên kết giữa các trụ cột', 'How the branches connect')}
            </p>
            <h2>
              {t(
                'Học tập tạo ra năng lực. Tăng trưởng đưa vào ứng dụng. Hạ tầng làm cho tất cả đo lường được.',
                'Learning creates capability. Growth applies it. Infrastructure makes it measurable.'
              )}
            </h2>
            <p>
              {t(
                'Khi ba thành tố này hoạt động cùng nhau, tổ chức đạt được chu kỳ phản hồi nhanh hơn, loại bỏ sự lãng phí tài nguyên và kiến tạo lợi thế cạnh tranh bền vững.',
                'When these three components function in unison, organizations achieve rapid feedback loops, eliminate wasteful spend, and build sustainable compounding advantages.'
              )}
            </p>
          </div>
          <div className="evidence-panel">
            <div className="metric-row">
              <span className="metric-label">Academy</span>
              <strong>{t('Chuyển giao kỹ năng và tri thức', 'Skill and knowledge transfer')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Growth</span>
              <strong>{t('Chiến lược và thực thi', 'Strategy and execution')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Infra</span>
              <strong>{t('Dữ liệu, tự động hóa, tin cậy', 'Data, automation, trust')}</strong>
            </div>
            <div className="metric-row highlight">
              <span className="metric-label">Outcome</span>
              <strong>{t('Quyết định chuẩn xác, hệ thống vượt trội', 'Better decisions, better systems')}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="cta-band section-shell reveal-on-scroll">
        <div className="container cta-band-inner">
          <div>
            <p className="section-kicker">{t('Hợp tác hệ sinh thái', 'Ecosystem collaboration')}</p>
            <h2>{t('Cùng xây dựng năng lực tăng trưởng vượt bậc', 'Ready to scale your organization?')}</h2>
          </div>
          <div className="cta-row compact">
            <button
              type="button"
              className="button button-primary"
              onClick={() => onNavigate('contact')}
            >
              {t('Liên hệ DIGO ngay', 'Contact DIGO Now')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
