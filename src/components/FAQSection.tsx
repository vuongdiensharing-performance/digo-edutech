import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export interface FAQItem {
  id: string;
  pillar: 'Academy' | 'Growth' | 'Infra';
  questionVi: string;
  questionEn: string;
  answerVi: string;
  answerEn: string;
}

export const FAQ_ITEMS: FAQItem[] = [
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

export const buildFAQJsonLd = (lang: 'vi' | 'en') => {
  const canonicalUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://digo.edu.vn/';

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    name:
      lang === 'vi'
        ? 'Những câu hỏi thường gặp về DIGO EduTech (Academy, Growth & Infra)'
        : 'Common Questions About DIGO EduTech (Academy, Growth & Infra)',
    description:
      lang === 'vi'
        ? 'Giải đáp chi tiết về hệ sinh thái 3 trụ cột của DIGO EduTech: Đào tạo thực chiến (Academy), Thực thi tăng trưởng (Growth) và Hạ tầng dữ liệu & AI (Infra & Trust).'
        : 'Detailed answers covering DIGO EduTech’s three operational pillars: Practical Education (Academy), Growth Execution (Growth), and Server-Side Data & AI Infrastructure (Infra & Trust).',
    inLanguage: lang === 'vi' ? 'vi-VN' : 'en-US',
    about: [
      {
        '@type': 'EducationalOrganization',
        name: 'DIGO Academy',
        description:
          lang === 'vi'
            ? 'Đào tạo năng lực thực chiến: IELTS, DaVinci Resolve và Performance Ads.'
            : 'Practical capability building across IELTS fluency, DaVinci Resolve, and Performance Ads.',
      },
      {
        '@type': 'Service',
        name: 'DIGO Growth',
        serviceType: 'Performance Marketing & Conversion Optimization',
        description:
          lang === 'vi'
            ? 'Tối ưu hóa tỷ lệ chuyển đổi (CPA/CAC) qua chu kỳ thử nghiệm khép kín Diagnose → Plan → Test → Measure → Improve.'
            : 'Closed-loop acquisition and conversion optimization grounded in verified data.',
      },
      {
        '@type': 'Service',
        name: 'DIGO Infra & Trust',
        serviceType: 'Server-Side Tracking, Conversions API (CAPI) & AI Automation',
        description:
          lang === 'vi'
            ? 'Hạ tầng đo lường dữ liệu Server-side, Conversions API (CAPI) và tự động hóa giám sát bằng AI Agents.'
            : 'First-party server-side event architecture, Conversions API (CAPI), and AI anomaly governance.',
      },
    ],
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      '@id': `${canonicalUrl}#faq-${item.id}`,
      name: lang === 'vi' ? item.questionVi : item.questionEn,
      about: {
        '@type': 'Thing',
        name:
          item.pillar === 'Academy'
            ? 'DIGO Academy'
            : item.pillar === 'Growth'
            ? 'DIGO Growth'
            : 'DIGO Infra & Trust',
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: lang === 'vi' ? item.answerVi : item.answerEn,
      },
    })),
  };
};

// Fluid "Effervescence" Spring Physics presets
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.04,
    },
  },
};

const itemRevealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.965,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 25,
      mass: 0.85,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.96,
    transition: {
      duration: 0.18,
    },
  },
};

const panelContentSpring = {
  type: 'spring' as const,
  stiffness: 340,
  damping: 28,
  mass: 0.8,
};

interface FAQSectionProps {
  includeJsonLd?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ includeJsonLd = false }) => {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>('academy-model');
  const [filterPillar, setFilterPillar] = useState<'All' | 'Academy' | 'Growth' | 'Infra'>('All');

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const filteredItems = useMemo(
    () =>
      filterPillar === 'All'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.pillar === filterPillar),
    [filterPillar]
  );

  const faqJsonLdString = useMemo(
    () => JSON.stringify(buildFAQJsonLd(lang)),
    [lang]
  );

  return (
    <section
      id="faq"
      className="faq-section section-shell section-alt reveal-on-scroll"
      aria-labelledby="faq-heading"
    >
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
      )}

      <div className="container narrow">
        <div className="section-head text-center center faq-head-spacing">
          <p className="section-kicker">
            {t('Giải đáp thắc mắc', 'Frequently Asked Questions')}
          </p>
          <h2 id="faq-heading">
            {t(
              'Những câu hỏi thường gặp về DIGO EduTech',
              'Common Questions About DIGO EduTech'
            )}
          </h2>
          <p className="lead faq-lead-copy">
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
        >
          {(
            [
              { key: 'All', labelVi: 'Tất cả (6)', labelEn: 'All (6)' },
              { key: 'Academy', labelVi: 'Academy', labelEn: 'Academy' },
              { key: 'Growth', labelVi: 'Growth', labelEn: 'Growth' },
              { key: 'Infra', labelVi: 'Infra & Trust', labelEn: 'Infra & Trust' },
            ] as const
          ).map((tab) => {
            const isTabActive = filterPillar === tab.key;
            return (
              <motion.button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isTabActive}
                className={`lang-btn faq-filter-pill ${isTabActive ? 'active' : ''}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                onClick={() => {
                  setFilterPillar(tab.key);
                  const matching =
                    tab.key === 'All'
                      ? FAQ_ITEMS
                      : FAQ_ITEMS.filter((i) => i.pillar === tab.key);
                  if (matching.length > 0 && !matching.some((i) => i.id === activeId)) {
                    setActiveId(matching[0].id);
                  }
                }}
              >
                {t(tab.labelVi, tab.labelEn)}
              </motion.button>
            );
          })}
        </div>

        {/* Accordion Container with Framer Motion Spring Effervescence */}
        <motion.div
          key={filterPillar}
          className="faq-accordion"
          role="presentation"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredItems.map((item, index) => {
              const isOpen = activeId === item.id;
              const itemNumber = (index + 1).toString().padStart(2, '0');
              const pillarLabel =
                item.pillar === 'Infra' ? 'Infra & Trust' : item.pillar;

              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemRevealVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.008,
                    transition: { type: 'spring', stiffness: 400, damping: 24 },
                  }}
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="faq-trigger"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <div className="faq-trigger-left">
                      <span className="faq-item-number">{itemNumber}</span>
                      <div className="faq-question-group">
                        <span className="faq-pillar-badge">{pillarLabel}</span>
                        <span className="faq-question-title">
                          {t(item.questionVi, item.questionEn)}
                        </span>
                      </div>
                    </div>

                    <motion.span
                      aria-hidden="true"
                      className={`faq-icon-orb ${isOpen ? 'is-open' : ''}`}
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 20,
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
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        className="faq-panel-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: panelContentSpring,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 380,
                            damping: 32,
                            mass: 0.7,
                          },
                        }}
                      >
                        <motion.div
                          className="faq-panel-inner"
                          initial={{ y: -10, opacity: 0, scale: 0.985 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {
                              type: 'spring',
                              stiffness: 360,
                              damping: 24,
                              delay: 0.03,
                            },
                          }}
                          exit={{
                            y: -6,
                            opacity: 0,
                            transition: { duration: 0.14 },
                          }}
                        >
                          <p>{t(item.answerVi, item.answerEn)}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
