import React, { useEffect, useRef, useState } from 'react';
import { Award, Layers, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ExpertProfile {
  id: string;
  name: string;
  roleVi: string;
  roleEn: string;
  specialtyTag: string;
  bioVi: string;
  bioEn: string;
  highlightsVi: string[];
  highlightsEn: string[];
  statsBadge: string;
  parallaxFactor: number;
  accentVariant: 'red' | 'gold' | 'dark';
  monogram: string;
}

const ACADEMY_EXPERTS: ExpertProfile[] = [
  {
    id: 'vuong-dien',
    name: 'Nguyễn Hoàng Vương Điền',
    roleVi: 'CEO / CMO · Chuyên gia Hệ thống Tăng trưởng & Đo lường',
    roleEn: 'CEO / CMO · Growth Architecture & Measurement Lead',
    specialtyTag: 'Growth & Attribution',
    bioVi:
      'Trực tiếp kiến tạo hệ thống Performance Marketing & Data Infrastructure cho các thương hiệu dẫn đầu, kết nối tư duy chiến lược với thực thi kỹ thuật.',
    bioEn:
      'Architects performance marketing & data infrastructure systems for market leaders, bridging strategic thinking with rigorous technical execution.',
    highlightsVi: [
      '10+ năm dẫn dắt chiến dịch tăng trưởng đa kênh quy mô lớn',
      'Tác giả khung đánh giá Measurement-First Creative Testing',
      'Trực tiếp huấn luyện 500+ Marketers & Growth Leads thực chiến',
    ],
    highlightsEn: [
      '10+ years leading full-funnel growth systems at scale',
      'Creator of the Measurement-First Creative Testing framework',
      'Mentored 500+ active Marketers & Growth Leads in the industry',
    ],
    statsBadge: '10,000+ Giờ Thực Chiến',
    parallaxFactor: -18,
    accentVariant: 'red',
    monogram: 'VĐ',
  },
  {
    id: 'thanh-go',
    name: 'Lê Thị Thanh Gô',
    roleVi: 'CAO / CPO · Giám đốc Học thuật & Thiết kế Chương trình',
    roleEn: 'CAO / CPO · Chief Academic & Curriculum Architect',
    specialtyTag: 'Academic Design & IELTS',
    bioVi:
      'Chuyên gia thiết kế lộ trình chuyển hóa năng lực ngôn ngữ và tư duy phản biện, giúp người học rút ngắn thời gian đạt mục tiêu với thước đo rõ ràng.',
    bioEn:
      'Specializes in competency-based curriculum design and critical thinking, helping learners compress timelines with transparent progress rubrics.',
    highlightsVi: [
      'Chuẩn hóa hệ thống đánh giá năng lực đầu ra theo tuần',
      '92% học viên đạt và vượt mục tiêu cam kết ngay lần thi đầu',
      'Tích hợp phương pháp Coaching 1-1 dựa trên dữ liệu học tập',
    ],
    highlightsEn: [
      'Standardized weekly competency & output evaluation rubrics',
      '92% of learners achieve or exceed target scores on first attempt',
      'Pioneered data-informed 1-on-1 feedback coaching loops',
    ],
    statsBadge: '92% Tỷ Lệ Đạt Mục Tiêu',
    parallaxFactor: 18,
    accentVariant: 'gold',
    monogram: 'TG',
  },
  {
    id: 'minh-khoi',
    name: 'Trần Minh Khôi',
    roleVi: 'Lead Instructor · DaVinci Resolve & Creative Post-Production',
    roleEn: 'Lead Instructor · DaVinci Resolve & Creative Workflow',
    specialtyTag: 'Creative Tech & Color',
    bioVi:
      'Đạo diễn hậu kỳ và chuyên gia Color Grading cho hàng trăm TVC thương mại, mang quy trình chuẩn phòng dựng quốc tế vào từng buổi thực hành.',
    bioEn:
      'Post-production director and senior colorist for commercial TVCs, bringing international studio pipeline standards directly into the classroom.',
    highlightsVi: [
      'Chứng nhận DaVinci Resolve Certified Master Trainer',
      'Thực chiến hậu kỳ cho hơn 120+ chiến dịch quảng cáo FMCG',
      'Xây dựng thư viện bài tập thực hành từ raw footage thương mại thật',
    ],
    highlightsEn: [
      'DaVinci Resolve Certified Trainer & Finishing Artist',
      'Post-production lead across 120+ commercial FMCG campaigns',
      'Hands-on labs built with real commercial raw camera footage',
    ],
    statsBadge: '120+ Dự Án Thương Mại',
    parallaxFactor: -14,
    accentVariant: 'dark',
    monogram: 'MK',
  },
];

export const ExpertShowcase: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const updateParallax = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      // Compute normalized progress between -1 and 1 around viewport center
      const centerOffset =
        (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      const clamped = Math.max(-1.2, Math.min(1.2, centerOffset));
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateParallax();
        rafId = null;
      });
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="expert-showcase-section section-shell reveal-on-scroll"
      aria-label={t('Đội ngũ Giảng viên & Chuyên gia', 'Faculty & Industry Practitioners')}
    >
      <div className="container">
        <div className="expert-showcase-head">
          <div>
            <p className="section-kicker">
              {t('GIẢNG VIÊN & CHUYÊN GIA THỰC CHIẾN', 'PRACTITIONER FACULTY')}
            </p>
            <h2>
              {t(
                'Học trực tiếp từ những người đang vận hành hệ thống thật.',
                'Learn directly from practitioners running real-world systems.'
              )}
            </h2>
          </div>
          <p className="expert-showcase-lead">
            {t(
              'Tại DIGO Academy, mỗi giảng viên đều là người trực tiếp giải quyết bài toán tăng trưởng, sáng tạo và học thuật mỗi ngày — truyền đạt bằng kinh nghiệm thực tế và số liệu minh chứng.',
              'Every mentor at DIGO Academy actively solves growth, creative, and academic challenges daily — teaching through live casework rather than textbook theory.'
            )}
          </p>
        </div>

        <div className="expert-cards-grid">
          {ACADEMY_EXPERTS.map((expert) => {
            const translateY = (scrollProgress * expert.parallaxFactor).toFixed(1);
            const highlights = t('vi', 'en') === 'vi' ? expert.highlightsVi : expert.highlightsEn;

            return (
              <div
                key={expert.id}
                className="expert-parallax-wrapper"
                style={{
                  transform: `translate3d(0, ${translateY}px, 0)`,
                }}
              >
                <article
                  className={`expert-profile-card accent-${expert.accentVariant}`}
                >
                  <div className="expert-card-banner">
                    <div className={`expert-avatar-orb orb-${expert.accentVariant}`}>
                      <span>{expert.monogram}</span>
                    </div>
                    <div className="expert-banner-badges">
                      <span className="card-tag">{expert.specialtyTag}</span>
                      <span className="expert-stat-pill">
                        <Sparkles size={13} aria-hidden="true" />
                        {expert.statsBadge}
                      </span>
                    </div>
                  </div>

                  <div className="expert-card-content">
                    <h3>{expert.name}</h3>
                    <p className="expert-role-title">
                      {t(expert.roleVi, expert.roleEn)}
                    </p>
                    <p className="expert-bio-text">
                      {t(expert.bioVi, expert.bioEn)}
                    </p>

                    <ul className="expert-highlights-list">
                      {highlights.map((point, i) => (
                        <li key={i}>
                          <CheckCircle
                            size={16}
                            className="expert-check-icon"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="expert-card-footer">
                    <span className="expert-verified-pill">
                      <Award size={14} aria-hidden="true" />
                      {t('Hội đồng chuyên môn DIGO', 'DIGO Academic & Growth Council')}
                    </span>
                    <Layers size={16} className="expert-footer-icon" aria-hidden="true" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
