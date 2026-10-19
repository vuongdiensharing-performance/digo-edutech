import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PageId } from '../../types';
import { useScrollRevealGroup } from '../../hooks/useScrollReveal';
import { ExpertShowcase } from '../../components/ExpertShowcase';
import { SocialProofSlider, SocialProofItem } from '../../components/SocialProofSlider';

const ACADEMY_TESTIMONIALS: SocialProofItem[] = [
  {
    id: 'acad-1',
    tagVi: 'Học viên · Performance Marketing',
    tagEn: 'Alumni · Performance Marketing Track',
    metricBadge: 'Thăng tiến Senior Growth Lead',
    quoteVi:
      'Khác hoàn toàn các khóa học chạy theo mẹo vặt tool, DIGO Academy rèn cho mình tư duy cấu trúc thực nghiệm và đọc số liệu biên lợi nhuận. Mình đã áp dụng ngay vào ngân sách công ty và được thăng chức sau 4 tháng.',
    quoteEn:
      'Unlike courses that chase short-lived ad hacks, DIGO Academy trained me in structured experimentation and unit-economics measurement. I applied it directly at work and earned a promotion within 4 months.',
    authorName: 'Nguyễn Minh Tuấn',
    authorRoleVi: 'Senior Performance Specialist',
    authorRoleEn: 'Senior Performance Specialist',
    organization: 'K-Retail Vietnam',
    avatarInitials: 'MT',
    accentVariant: 'red',
  },
  {
    id: 'acad-2',
    tagVi: 'Học viên · Chương trình IELTS Thực Chiến',
    tagEn: 'Alumni · Applied IELTS Program',
    metricBadge: 'IELTS 6.0 → 8.0 Overall',
    quoteVi:
      'Nhờ lộ trình chấm chữa 1-1 có rubric đo lường rõ ràng từng tuần của cô Thanh Gô, mình tháo gỡ hoàn toàn điểm nghẽn Writing & Speaking để đạt 8.0 Overall chỉ sau 14 tuần rèn luyện kỷ luật.',
    quoteEn:
      'Thanks to weekly rubric-based 1-on-1 feedback loops, I broke through my Writing & Speaking plateau and achieved an 8.0 Overall in just 14 weeks of disciplined practice.',
    authorName: 'Võ Ngọc Bảo Trâm',
    authorRoleVi: 'Management Trainee',
    authorRoleEn: 'Management Trainee',
    organization: 'Unilever Vietnam',
    avatarInitials: 'BT',
    accentVariant: 'gold',
  },
  {
    id: 'acad-3',
    tagVi: 'Học viên · DaVinci Resolve Post-Production',
    tagEn: 'Alumni · DaVinci Resolve Workflow',
    metricBadge: 'X2.5 Thu Nhập Freelance & Agency',
    quoteVi:
      'Được thực hành trực tiếp trên source footage thương mại và học quy trình quản lý node màu chuẩn studio giúp mình rút ngắn 50% thời gian dựng và tự tin nhận các dự án TVC lớn.',
    quoteEn:
      'Practicing directly on commercial raw footage and mastering studio-grade color node pipelines cut my turnaround time by 50% and unlocked high-ticket TVC projects.',
    authorName: 'Hoàng Gia Huy',
    authorRoleVi: 'Video Editor & Colorist',
    authorRoleEn: 'Video Editor & Colorist',
    organization: 'FrameWorks Creative',
    avatarInitials: 'GH',
    accentVariant: 'dark',
  },
];

interface AcademyPageProps {
  onNavigate: (page: PageId) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
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

      <section className="section-shell reveal-on-scroll">
        <div className="container">
          <div className="card-grid three-up">
            <article className="info-card accent-red reveal-on-scroll reveal-delay-1">
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

            <article className="info-card accent-dark reveal-on-scroll reveal-delay-2">
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

            <article className="info-card accent-gold reveal-on-scroll reveal-delay-3">
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

      <section className="section-shell section-alt reveal-on-scroll">
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

      {/* Exclusive Faculty & Practitioner Showcase with Scroll Parallax */}
      <ExpertShowcase />

      {/* Student & Alumni Social Proof Slider */}
      <SocialProofSlider
        variant="testimonial"
        kickerVi="CÂU CHUYỆN THÀNH CÔNG HỌC VIÊN"
        kickerEn="STUDENT & ALUMNI OUTCOMES"
        titleVi="Chuyển hóa kiến thức thành kết quả nghề nghiệp thực chất."
        titleEn="Turning structured training into measurable career outcomes."
        subtitleVi="Phản hồi thực tế từ các học viên đã hoàn thành lộ trình đào tạo và áp dụng trực tiếp vào công việc."
        subtitleEn="Verified stories from practitioners who completed DIGO Academy tracks and applied them in real roles."
        items={ACADEMY_TESTIMONIALS}
      />
    </main>
  );
};
