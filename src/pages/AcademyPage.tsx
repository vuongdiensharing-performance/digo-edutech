import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface AcademyPageProps {
  onNavigate: (page: PageId) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero section-shell">
        <div className="container narrow">
          <p className="section-kicker">DIGO Academy</p>
          <h1>
            {t(
              'Học qua thấu hiểu bản chất và thực hành liên tục.',
              'Learning through understanding and practice.'
            )}
          </h1>
          <p>
            {t(
              'Các chương trình được xây dựng xung quanh năng lực thực chiến, phản hồi có cấu trúc và ứng dụng vào môi trường thực tế.',
              'Programs are built around practical capability, structured feedback, and real-world application.'
            )}
          </p>
          <div className="cta-row">
            <button
              type="button"
              className="button button-primary"
              onClick={() => onNavigate('contact')}
            >
              {t('Khám phá chương trình', 'Explore a program')}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => onNavigate('insights')}
            >
              {t('Xem tài liệu & bài viết', 'View resources')}
            </button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="card-grid three-up">
            <article className="info-card accent-red">
              <div>
                <span className="card-tag">IELTS</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Sẵn sàng ngôn ngữ với tiến độ đo lường được.',
                    'Language readiness with measurable progress.'
                  )}
                </h3>
                <p>
                  {t(
                    'Luyện tập, nhận phản hồi và cải thiện có cấu trúc cho người học cần đạt kết quả thực chất.',
                    'Practice, feedback, and structured improvement for learners who need real traction.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('contact')}
              >
                {t('Đăng ký tư vấn →', 'Learn more →')}
              </button>
            </article>

            <article className="info-card accent-dark">
              <div>
                <span className="card-tag">DaVinci Resolve</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Công nghệ sáng tạo với quy trình làm việc chuẩn.',
                    'Creative technology with applied workflows.'
                  )}
                </h3>
                <p>
                  {t(
                    'Xây dựng năng lực dựng phim, hậu kỳ màu sắc và âm thanh theo định dạng quy trình thực tế.',
                    'Build editing and post-production capability in a practical, workflow-based format.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('contact')}
              >
                {t('Đăng ký tư vấn →', 'Learn more →')}
              </button>
            </article>

            <article className="info-card accent-gold">
              <div>
                <span className="card-tag">Marketing &amp; Performance Ads</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Chiến lược và thực thi cho môi trường tăng trưởng thực tế.',
                    'Strategy and execution for real growth environments.'
                  )}
                </h3>
                <p>
                  {t(
                    'Nắm vững hệ thống đằng sau việc lập kế hoạch chiến dịch, thử nghiệm sáng tạo và đo lường chính xác.',
                    'Learn the systems behind campaign planning, optimization, and measurement.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('contact')}
              >
                {t('Đăng ký tư vấn →', 'Learn more →')}
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell section-alt">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">
              {t('Phương pháp học tập', 'Learning method')}
            </p>
            <h2>
              {t(
                'Thực hành, phản hồi và minh chứng.',
                'Practice, feedback, and evidence.'
              )}
            </h2>
            <p>
              {t(
                'Không chỉ dừng lại ở lý thuyết suông, mỗi khóa học tại DIGO Academy đòi hỏi người học vận dụng tư duy phản biện, giải quyết bài toán cụ thể và nhận đánh giá từ các chuyên gia trong ngành.',
                'Beyond abstract theories, each path at DIGO Academy demands critical thinking, real problem-solving, and continuous feedback from active industry practitioners.'
              )}
            </p>
          </div>
          <div className="evidence-panel">
            <div className="metric-row">
              <span className="metric-label">01</span>
              <strong>{t('Khái niệm & Bối cảnh', 'Concept and context')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">02</span>
              <strong>{t('Thực hành có cấu trúc', 'Structured practice')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">03</span>
              <strong>{t('Đánh giá & Phản hồi', 'Evaluation and feedback')}</strong>
            </div>
            <div className="metric-row highlight">
              <span className="metric-label">04</span>
              <strong>{t('Hành động & Tinh chỉnh', 'Action and refinement')}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
