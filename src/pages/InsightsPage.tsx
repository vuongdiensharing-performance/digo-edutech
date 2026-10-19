import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
}

interface Article {
  id: string;
  tag: 'Growth' | 'Academy' | 'Infra';
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  readTime: string;
  paragraphsVi: string[];
  paragraphsEn: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'creative-testing',
    tag: 'Growth',
    titleVi: 'Thử nghiệm sáng tạo ưu tiên đo lường',
    titleEn: 'Measurement-first creative testing',
    descVi: 'Lựa chọn các chỉ số thực sự lý giải hiệu suất trước khi tối ưu hóa ngân sách.',
    descEn: 'Choosing the metrics that actually explain performance before optimizing spend.',
    readTime: '5 min read',
    paragraphsVi: [
      'Trong thời đại thuật toán tự động hóa ngày càng mạnh mẽ, nhiều nhà quảng cáo quá chú trọng vào các chỉ số bề nổi như CTR hoặc lượt xem 3 giây mà quên đi bài toán tỷ lệ chuyển đổi cuối cùng.',
      'Một quy trình thử nghiệm sáng tạo chuẩn mực phải bắt đầu bằng giả thuyết rõ ràng: Biến thể này nhằm chứng minh luận điểm nào về insight khách hàng? Biến số thay đổi là hook mở đầu hay đề xuất giá trị?',
      'Bằng cách kiểm soát chặt chẽ các nhóm biến số và đo lường trực tiếp trên CPA và CAC, doanh nghiệp tiết kiệm 30-40% chi phí thử nghiệm lãng phí và tìm ra những creative angle mang tính chuyển đổi bền vững.'
    ],
    paragraphsEn: [
      'In an era where platform algorithms increasingly manage targeting, many advertisers still chase shallow proxy metrics like high CTR or 3-second hook retention without isolating downstream conversion value.',
      'A disciplined creative testing framework begins with an explicit hypothesis: What specific customer pain point or psychological trigger is being examined? Is the variable the visual hook or the core offer?',
      'By systematically isolating creative components and testing against verified acquisition cost thresholds, teams can eliminate wasted spend and scale truly durable messaging angles.'
    ]
  },
  {
    id: 'skill-acquisition',
    tag: 'Academy',
    titleVi: 'Vòng lặp thực hành để tiếp thu kỹ năng',
    titleEn: 'Practice loops for skill acquisition',
    descVi: 'Làm thế nào việc học thực chiến xây dựng năng lực vững chắc thay vì sự hiểu biết hời hợt.',
    descEn: 'How practical learning builds durable skills rather than shallow familiarity.',
    readTime: '6 min read',
    paragraphsVi: [
      'Xem video hướng dẫn hoặc đọc tài liệu chỉ tạo ra ảo tưởng về sự am hiểu. Năng lực thực sự chỉ được định hình khi người học đối mặt với các tình huống phức tạp không có đáp án mẫu sẵn.',
      'Tại DIGO Academy, chúng tôi áp dụng mô hình 4 bước: Nắm vững nguyên lý cốt lõi, bắt tay vào dự án mẫu với dữ liệu thật, chịu sự đánh giá khắt khe từ mentor và tinh chỉnh liên tục cho đến khi đạt chuẩn sản phẩm thương mại.',
      'Đây là lý do học viên tốt nghiệp các chương trình DaVinci Resolve hay Performance Marketing của chúng tôi có thể đảm nhận công việc ngay lập tức mà không cần thời gian đào tạo lại.'
    ],
    paragraphsEn: [
      'Watching tutorials or reading summaries creates the cognitive illusion of competence. Genuine proficiency only crystallizes when learners wrestle with ambiguous, messy problems where no textbook answer exists.',
      'At DIGO Academy, we structure learning around rigorous feedback loops: grounding in first principles, applying workflows to authentic project briefs, submitting work for ruthless evaluation, and iterating to production quality.',
      'This methodology ensures that graduates of DaVinci Resolve post-production or Performance Ad systems step directly into production environments with verified confidence.'
    ]
  },
  {
    id: 'data-architecture',
    tag: 'Infra',
    titleVi: 'Tại sao kiến trúc dữ liệu tốt hơn lại quan trọng',
    titleEn: 'Why better data architecture matters',
    descVi: 'Hệ thống đáng tin cậy nâng cao tự động hóa, báo cáo và các quyết định vận hành then chốt.',
    descEn: 'Trustworthy systems improve automation, reporting, and operating decisions.',
    readTime: '7 min read',
    paragraphsVi: [
      'Khi các trình duyệt tăng cường bảo mật và hạn chế cookie của bên thứ ba, các hệ thống client-side tracking truyền thống thất thoát từ 20% đến 40% dữ liệu chuyển đổi thực tế.',
      'Việc triển khai kiến trúc Server-Side Tracking (như Meta Conversions API, Google Enhanced Conversions) cùng hạ tầng đám mây riêng biệt mang lại dữ liệu first-party đầy đủ và bảo mật tuyệt đối.',
      'Hơn nữa, một nền tảng dữ liệu sạch là điều kiện tiên quyết để vận hành các AI Agent phân tích tự động, giúp ban điều hành nhận diện xu hướng sớm và ra quyết định chính xác hơn.'
    ],
    paragraphsEn: [
      'As modern browsers tighten privacy controls and sunset third-party cookies, traditional client-side pixel implementations routinely drop between 20% and 40% of authentic conversion events.',
      'Adopting a first-party server-side tracking architecture (such as Meta CAPI and Google Enhanced Conversions) re-establishes clean attribution and safeguards user data under enterprise governance.',
      'Crucially, clean, high-integrity data pipelines serve as the indispensable prerequisite for autonomous AI decision agents, enabling leadership to detect anomalies and deploy capital with clarity.'
    ]
  }
];

import { useScrollRevealGroup } from '../hooks/useScrollReveal';

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const mainRef = useScrollRevealGroup<HTMLElement>('.reveal-on-scroll', {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  });

  const filteredArticles = selectedTag === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.tag === selectedTag);

  const activeArticle = ARTICLES.find(a => a.id === activeArticleId);

  return (
    <main ref={mainRef}>
      <section className="page-hero section-shell reveal-on-scroll">
        <div className="container narrow text-center center">
          <p className="section-kicker">{t('Tri thức', 'Insights')}</p>
          <h1>
            {t(
              'Góc nhìn chuyên sâu phục vụ học tập và ra quyết định.',
              'Editorial ideas built for learning and decision-making.'
            )}
          </h1>
          <p>
            {t(
              'Góc nhìn dài hạn về hệ thống tăng trưởng, đào tạo thực chiến và hạ tầng dữ liệu đáng tin cậy.',
              'Long-form perspectives on growth systems, education, and trustworthy data infrastructure.'
            )}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '0 0 32px 0' }} className="reveal-on-scroll">
        <div className="container text-center" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {['All', 'Growth', 'Academy', 'Infra'].map((tag) => (
            <button
              key={tag}
              type="button"
              className={`lang-btn ${selectedTag === tag ? 'active' : ''}`}
              style={{ padding: '8px 18px', border: '1px solid var(--border)' }}
              onClick={() => {
                setSelectedTag(tag);
                setActiveArticleId(null);
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Article Reader Modal or Expander */}
      {activeArticle && (
        <section className="section-shell section-alt reveal-on-scroll" style={{ padding: '40px 0' }}>
          <div className="container narrow">
            <div className="info-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="card-tag">{activeArticle.tag}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {activeArticle.readTime}
                </span>
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
                {t(activeArticle.titleVi, activeArticle.titleEn)}
              </h2>
              <div style={{ marginTop: '12px', display: 'grid', gap: '16px', lineHeight: 1.8 }}>
                {(t('vi', 'en') === 'vi' ? activeArticle.paragraphsVi : activeArticle.paragraphsEn).map((para, i) => (
                  <p key={i} style={{ color: 'var(--text)' }}>
                    {para}
                  </p>
                ))}
              </div>
              <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setActiveArticleId(null)}
                >
                  {t('← Đóng bài viết', '← Close article')}
                </button>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => onNavigate('contact')}
                >
                  {t('Trao đổi về đề tài này', 'Discuss this topic')}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-shell reveal-on-scroll">
        <div className="container">
          <div className="card-grid three-up">
            {filteredArticles.map((article, idx) => (
              <article key={article.id} className={`news-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
                <span className="card-tag">{article.tag}</span>
                <h3 style={{ marginTop: '10px' }}>
                  {t(article.titleVi, article.titleEn)}
                </h3>
                <p>{t(article.descVi, article.descEn)}</p>
                <button
                  type="button"
                  className="card-link-btn"
                  onClick={() => {
                    setActiveArticleId(article.id);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                >
                  {t('Đọc bài viết →', 'Read insight →')}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
