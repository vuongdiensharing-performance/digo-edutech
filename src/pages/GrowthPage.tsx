import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface GrowthPageProps {
  onNavigate: (page: PageId) => void;
}

export const GrowthPage: React.FC<GrowthPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero section-shell">
        <div className="container narrow">
          <p className="section-kicker">DIGO Growth</p>
          <h1>
            {t(
              'Tăng trưởng qua đo lường và thực thi kỷ luật.',
              'Growth through measurement and disciplined execution.'
            )}
          </h1>
          <p>
            {t(
              'Tập trung vào khắc phục lỗ hổng theo dõi dữ liệu, nâng cao chu kỳ thử nghiệm và điều chỉnh hiệu suất bám sát bài toán kinh doanh thực tế.',
              'Focused on tracking gaps, improving testing cycles, and aligning performance with real business logic.'
            )}
          </p>
          <div className="cta-row">
            <button
              type="button"
              className="button button-primary"
              onClick={() => onNavigate('contact')}
            >
              {t('Yêu cầu tư vấn tăng trưởng', 'Request a consultation')}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => onNavigate('insights')}
            >
              {t('Xem câu chuyện thực tế', 'See case stories')}
            </button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">
              {t('Vấn đề được giải quyết', 'Problems addressed')}
            </p>
            <h2>
              {t(
                'Dữ liệu phân mảnh, hiệu suất mờ mịt, tốc độ thử nghiệm kém.',
                'Disconnected data, unclear performance, poor test velocity.'
              )}
            </h2>
            <p>
              {t(
                'Nhiều doanh nghiệp chi hàng trăm triệu cho quảng cáo nhưng không biết tiền thực sự sinh lời từ kênh nào. DIGO thiết lập hệ thống chuẩn mực để loại bỏ suy đoán cảm tính.',
                'Many organizations scale ad spend without transparent attribution or reliable conversion tracking. DIGO establishes rigorous protocols to replace intuition with concrete evidence.'
              )}
            </p>
          </div>
          <div className="evidence-panel">
            <div className="metric-row">
              <span className="metric-label">01</span>
              <strong>{t('Lỗ hổng tracking & attribution', 'Tracking gaps')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">02</span>
              <strong>{t('Vòng lặp thử nghiệm yếu', 'Weak testing loops')}</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">03</span>
              <strong>{t('Hiệu suất mông lung & ảo', 'Unclear performance')}</strong>
            </div>
            <div className="metric-row highlight">
              <span className="metric-label">04</span>
              <strong>{t('Đo lường & Cải thiện liên tục', 'Measure and improve')}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-alt">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">{t('Phương pháp luận', 'Methodology')}</p>
            <h2>Diagnose → Plan → Test → Measure → Improve</h2>
            <p style={{ marginTop: '14px' }}>
              {t(
                'Quy trình tăng trưởng tuần hoàn khép kín đảm bảo từng đồng ngân sách được kiểm chứng hiệu quả trước khi nhân rộng quy mô.',
                'A closed-loop growth cycle ensuring every dollar invested is validated before scaling.'
              )}
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <span className="step-index">STEP 1</span>
              <h3>{t('Chẩn đoán', 'Diagnose')}</h3>
              <p>
                {t(
                  'Audit toàn diện phễu marketing, tracking pixel, CAPI và chất lượng chuyển đổi.',
                  'Audit full marketing funnel, tracking pixels, CAPI, and conversion data quality.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">STEP 2</span>
              <h3>{t('Lập kế hoạch', 'Plan')}</h3>
              <p>
                {t(
                  'Xây dựng ma trận giả thuyết sáng tạo và ngân sách thử nghiệm có kiểm soát.',
                  'Construct hypothesis matrices, messaging angles, and controlled test budgets.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">STEP 3</span>
              <h3>{t('Thử nghiệm', 'Test')}</h3>
              <p>
                {t(
                  'Triển khai A/B testing creative & landing page với tốc độ cao và biến số độc lập.',
                  'Deploy creative & landing page testing with high velocity and isolated variables.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">STEP 4</span>
              <h3>{t('Cải tiến', 'Improve')}</h3>
              <p>
                {t(
                  'Tái đầu tư vào các biến thể chiến thắng, tối ưu hóa CAC và mở rộng kênh sinh lời.',
                  'Reallocate budget to winning assets, optimize CAC, and scale profitable vectors.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
