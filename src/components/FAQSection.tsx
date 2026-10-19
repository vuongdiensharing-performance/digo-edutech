import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface FAQItem {
  id: string;
  pillar: 'Academy' | 'Growth' | 'Infra';
  questionVi: string;
  questionEn: string;
  answerVi: string;
  answerEn: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'academy-model',
    pillar: 'Academy',
    questionVi: 'Các chương trình tại DIGO Academy có gì khác biệt so với các khóa học lý thuyết thông thường?',
    questionEn: 'How do DIGO Academy programs differ from traditional theoretical courses?',
    answerVi:
      'DIGO Academy vận hành theo mô hình 4 bước: Khái niệm cốt lõi → Thực hành trên dự án thật → Đánh giá khắt khe từ chuyên gia → Tinh chỉnh đạt chuẩn thương mại. Học viên không học thụ động qua slide mà trực tiếp xử lý bài toán thực tế (từ kỹ năng ngôn ngữ IELTS, quy trình dựng phim DaVinci Resolve đến xây dựng hệ thống Performance Ads).',
    answerEn:
      'DIGO Academy operates on a 4-stage method: Core Concepts → Hands-on Project Practice → Ruthless Expert Evaluation → Commercial Refinement. Learners do not passively absorb slides; they directly execute real workflows in IELTS fluency, DaVinci Resolve post-production, or Performance Ad systems.',
  },
  {
    id: 'academy-instructors',
    pillar: 'Academy',
    questionVi: 'Ai là người trực tiếp giảng dạy và đồng hành cùng học viên tại Academy?',
    questionEn: 'Who directly instructs and mentors learners at the Academy?',
    answerVi:
      'Đội ngũ giảng viên và mentor tại DIGO là những chuyên gia đang trực tiếp vận hành các chiến dịch tăng trưởng lớn, điều hành sản xuất media và quản trị hạ tầng kỹ thuật. Học viên được hỗ trợ phản hồi 1:1 và sửa bài trực tiếp trên sản phẩm thực tế.',
    answerEn:
      'Instructors and mentors at DIGO are active practitioners leading live growth campaigns, production studios, and engineering pipelines. Students receive direct 1:1 critique and portfolio coaching on practical deliverables.',
  },
  {
    id: 'growth-methodology',
    pillar: 'Growth',
    questionVi: 'DIGO Growth tối ưu chi phí chuyển đổi (CPA) và hiệu suất bằng phương pháp nào?',
    questionEn: 'What methodology does DIGO Growth use to optimize acquisition costs (CPA)?',
    answerVi:
      'Chúng tôi loại bỏ hoàn toàn việc chi tiêu ngân sách theo cảm tính bằng chu kỳ khép kín: Diagnose (chẩn đoán lỗ hổng tracking) → Plan (lập ma trận giả thuyết sáng tạo) → Test (thử nghiệm creative & landing page tốc độ cao) → Measure (đo lường CPA/CAC thực tế) → Improve (tái phân bổ ngân sách vào các góc tiếp cận sinh lời).',
    answerEn:
      'We eliminate guesswork through a closed testing loop: Diagnose (audit tracking and conversion attribution) → Plan (construct creative hypothesis matrices) → Test (deploy creative and landing page iterations with high velocity) → Measure (track verified CPA/CAC) → Improve (scale proven angles).',
  },
  {
    id: 'growth-metrics',
    pillar: 'Growth',
    questionVi: 'DIGO có cam kết về số liệu và bằng chứng đo lường thực tế không?',
    questionEn: 'Does DIGO provide clear, documented performance benchmarks?',
    answerVi:
      'Có. Nguyên tắc của DIGO là "Bằng chứng thay cho lời hứa" (Evidence, not noise). Mọi kết quả đo lường đều gắn liền với nguồn dữ liệu xác thực, thời kỳ chu kỳ đo rõ ràng (ví dụ: Q2 2025 CPA reduction –27.4%) và xuất trực tiếp từ dashboard kiểm chứng của đối tác.',
    answerEn:
      'Yes. DIGO is grounded in "Evidence, not noise". All performance metrics are tied to documented data sources, explicit testing periods (e.g. Q2 2025 CPA reduction –27.4%), and verified analytics exports rather than unverified vanity metrics.',
  },
  {
    id: 'infra-capi',
    pillar: 'Infra',
    questionVi: 'Server-side Tracking và Conversions API (CAPI) giải quyết vấn đề gì cho doanh nghiệp?',
    questionEn: 'What problems do Server-side Tracking and Conversions API (CAPI) solve?',
    answerVi:
      'Khi các trình duyệt thắt chặt quyền riêng tư và chặn cookie bên thứ ba, các hệ thống pixel truyền thống mất từ 20% đến 40% tín hiệu chuyển đổi. Hạ tầng Server-side của DIGO truyền trực tiếp dữ liệu first-party an toàn lên Meta, Google Ads và TikTok, khôi phục độ chính xác chuyển đổi và đảm bảo tuân thủ bảo mật.',
    answerEn:
      'As modern browsers restrict third-party cookies, traditional client-side pixels lose 20% to 40% of conversion signals. DIGO’s Server-side infrastructure securely relays first-party event streams directly to Meta, Google Ads, and TikTok, restoring measurement precision and ensuring full data compliance.',
  },
  {
    id: 'infra-automation',
    pillar: 'Infra',
    questionVi: 'DIGO ứng dụng AI Agents vào hạ tầng tự động hóa và quản trị ra sao?',
    questionEn: 'How does DIGO deploy AI Agents within data infrastructure and governance?',
    answerVi:
      'DIGO xây dựng các agent AI tự động nhằm giám sát bất thường dữ liệu 24/7: phát hiện đột biến chi phí quảng cáo, cảnh báo suy giảm tỷ lệ chuyển đổi, và đề xuất phương án tối ưu tự động dựa trên quy tắc logic được kiểm soát chặt chẽ.',
    answerEn:
      'DIGO deploys autonomous AI agents for 24/7 anomaly detection: catching ad spend spikes, flagging conversion drop-offs, and surfacing operational optimization levers governed by strict human-in-the-loop logic.',
  },
];

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>('academy-model');
  const [filterPillar, setFilterPillar] = useState<'All' | 'Academy' | 'Growth' | 'Infra'>('All');

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const filteredItems = filterPillar === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.pillar === filterPillar);

  return (
    <section className="faq-section section-shell section-alt reveal-on-scroll">
      <div className="container narrow">
        <div className="section-head text-center center" style={{ marginBottom: '32px' }}>
          <p className="section-kicker">
            {t('Giải đáp thắc mắc', 'Frequently Asked Questions')}
          </p>
          <h2>
            {t(
              'Những câu hỏi thường gặp về DIGO EduTech',
              'Common Questions About DIGO EduTech'
            )}
          </h2>
          <p className="lead" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {t(
              'Tìm hiểu chi tiết về cách ba trụ cột Academy, Growth và Infra & Trust vận hành để đem lại kết quả đo lường thực chất.',
              'Explore how Academy, Growth, and Infra & Trust work together to generate measurable outcomes.'
            )}
          </p>
        </div>

        {/* Pillar Filter Tabs */}
        <div
          className="faq-filter-bar"
          role="tablist"
          aria-label={t('Lọc câu hỏi theo trụ cột', 'Filter questions by pillar')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px',
          }}
        >
          {(
            [
              { key: 'All', labelVi: 'Tất cả (6)', labelEn: 'All (6)' },
              { key: 'Academy', labelVi: 'Academy', labelEn: 'Academy' },
              { key: 'Growth', labelVi: 'Growth', labelEn: 'Growth' },
              { key: 'Infra', labelVi: 'Infra & Trust', labelEn: 'Infra & Trust' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={filterPillar === tab.key}
              className={`lang-btn ${filterPillar === tab.key ? 'active' : ''}`}
              style={{
                padding: '8px 16px',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                fontSize: '0.84rem',
              }}
              onClick={() => {
                setFilterPillar(tab.key);
                // Keep active item open if still present in filtered list
                const matching = tab.key === 'All' ? FAQ_ITEMS : FAQ_ITEMS.filter(i => i.pillar === tab.key);
                if (matching.length > 0 && !matching.some(i => i.id === activeId)) {
                  setActiveId(matching[0].id);
                }
              }}
            >
              {t(tab.labelVi, tab.labelEn)}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion" role="presentation">
          {filteredItems.map((item, index) => {
            const isOpen = activeId === item.id;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '14px',
                  boxShadow: isOpen ? '0 10px 30px rgba(15, 14, 14, 0.06)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="faq-trigger"
                  onClick={() => toggleAccordion(item.id)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.82rem',
                        color: 'var(--brand-red)',
                        fontWeight: 700,
                      }}
                    >
                      {itemNumber}
                    </span>
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        fontFamily: 'Plus Jakarta Sans, Segoe UI, sans-serif',
                        lineHeight: 1.35,
                      }}
                    >
                      {t(item.questionVi, item.questionEn)}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--brand-red)' : 'rgba(15, 14, 14, 0.05)',
                      color: isOpen ? '#ffffff' : 'var(--text)',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease, background-color 0.2s ease, color 0.2s ease',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      padding: '0 24px 22px 50px',
                      color: 'var(--text-soft)',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(15, 14, 14, 0.05)',
                      marginTop: '4px',
                      paddingTop: '16px',
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      {t(item.answerVi, item.answerEn)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
