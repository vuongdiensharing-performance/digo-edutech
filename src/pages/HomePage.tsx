import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">DIGO EduTech</p>
            <h1>Measure Ruthlessly. Build What You Teach. Scale Monopolies.</h1>
            <p className="lead">
              {t(
                'DIGO kết nối đào tạo thực chiến, triển khai tăng trưởng và hạ tầng dữ liệu để biến tri thức thành năng lực có thể áp dụng và đo lường.',
                'DIGO connects practical education, growth execution, and data infrastructure to turn knowledge into measurable action.'
              )}
            </p>
            <div className="cta-row">
              <button
                type="button"
                className="button button-primary"
                onClick={() => onNavigate('ecosystem')}
              >
                {t('Khám phá hệ sinh thái', 'Explore the Ecosystem')}
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => onNavigate('contact')}
              >
                {t('Hợp tác cùng DIGO', 'Work With DIGO')}
              </button>
            </div>
            <ul className="hero-meta">
              <li>
                <span className="meta-label">Academy</span>
                <strong>
                  {t(
                    'Học để hiểu. Thực hành để làm được.',
                    'Learn with purpose. Practice to build capability.'
                  )}
                </strong>
              </li>
              <li>
                <span className="meta-label">Growth</span>
                <strong>
                  {t(
                    'Xây dựng và tối ưu hệ thống tăng trưởng dựa trên dữ liệu.',
                    'Build and improve growth systems through measurement and experimentation.'
                  )}
                </strong>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="DIGO signal graphic">
            <div className="signal-panel">
              <div className="signal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-gold"></span>
                <span className="dot dot-dark"></span>
              </div>
              <div className="signal-block">
                <div className="signal-flow">
                  <span>Signal</span>
                  <span>Measure</span>
                  <span>Decide</span>
                  <span>Improve</span>
                </div>
                <div className="signal-lines" aria-hidden="true">
                  <span className="line line-one"></span>
                  <span className="line line-two"></span>
                  <span className="line line-three"></span>
                  <span className="line line-four"></span>
                  <div className="node node-a"></div>
                  <div className="node node-b"></div>
                  <div className="node node-c"></div>
                  <div className="node node-d"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story section-shell section-alt">
        <div className="container narrow">
          <p className="section-kicker">
            {t('Góc nhìn DIGO', 'The DIGO point of view')}
          </p>
          <h2>
            {t(
              'Tri thức không nên tách rời thực thi. Tăng trưởng không nên tách rời dữ liệu.',
              'Knowledge should not sit apart from execution. Growth should not sit apart from evidence.'
            )}
          </h2>
          <p>
            {t(
              'DIGO xây dựng một hệ sinh thái nơi học, triển khai và hạ tầng cùng vận hành trong một vòng lặp: hiểu rõ vấn đề, làm đúng mô hình, đo lường hiệu quả và cải tiến liên tục.',
              'DIGO creates a system where learning, execution, and infrastructure work in one loop: understand the problem, build the right model, measure outcomes, and improve continuously.'
            )}
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars section-shell">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">
              {t('Ba trụ cột', 'Three pillars')}
            </p>
            <h2>
              {t(
                'Một hệ sinh thái, ba năng lực bổ trợ',
                'One ecosystem, three complementary capabilities'
              )}
            </h2>
          </div>

          <div className="card-grid three-up">
            <article className="info-card accent-red">
              <div>
                <span className="card-tag">Academy</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Học để hiểu. Thực hành để làm được.',
                    'Learn with purpose. Practice to build capability.'
                  )}
                </h3>
                <p>
                  {t(
                    'Các chương trình giúp người học chuyển từ hiểu biết sang năng lực thực chiến.',
                    'Programs that turn understanding into practical capability.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('academy')}
              >
                {t('Khám phá Academy →', 'Explore Academy →')}
              </button>
            </article>

            <article className="info-card accent-dark">
              <div>
                <span className="card-tag">Growth</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Xây dựng và tối ưu hệ thống tăng trưởng dựa trên dữ liệu.',
                    'Build and improve growth systems through measurement and experimentation.'
                  )}
                </h3>
                <p>
                  {t(
                    'Kết hợp chiến lược, sáng tạo và tối ưu hóa để tăng hiệu quả theo chuẩn đo lường.',
                    'Combining strategy, testing, and optimization for measurable performance gains.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('growth')}
              >
                {t('Khám phá Growth →', 'Explore Growth →')}
              </button>
            </article>

            <article className="info-card accent-gold">
              <div>
                <span className="card-tag">Infra &amp; Trust</span>
                <h3 style={{ marginTop: '16px' }}>
                  {t(
                    'Xây dựng nền tảng dữ liệu và tự động hóa có kiểm soát.',
                    'Build trusted foundations for data, measurement, and automation.'
                  )}
                </h3>
                <p>
                  {t(
                    'Cấu trúc, dữ liệu và agent AI hỗ trợ ra quyết định nhanh hơn và đáng tin cậy hơn.',
                    'Data foundations, system architecture, and AI agents that support more reliable decisions.'
                  )}
                </p>
              </div>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('infra')}
              >
                {t('Khám phá Infra & Trust →', 'Explore Infra & Trust →')}
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section-shell section-alt">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">
              {t('DIGO vận hành như thế nào', 'How DIGO works')}
            </p>
            <h2>
              {t(
                'Học → Xây dựng → Đo lường → Cải thiện',
                'Learn → Build → Measure → Improve'
              )}
            </h2>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <span className="step-index">01</span>
              <h3>{t('Hiểu', 'Learn')}</h3>
              <p>
                {t(
                  'Nắm rõ bối cảnh, cơ hội và điểm nghẽn thực tế.',
                  'Clarify the context, the opportunity, and the blocker in front of the team.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">02</span>
              <h3>{t('Xây dựng', 'Build')}</h3>
              <p>
                {t(
                  'Triển khai hệ thống, lộ trình và mô hình phù hợp với mục tiêu.',
                  'Create the system, path, or operating model that fits the goal.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">03</span>
              <h3>{t('Đo lường', 'Measure')}</h3>
              <p>
                {t(
                  'Theo dõi dữ liệu, nguồn và xu hướng để đánh giá thực chất.',
                  'Track the right data, source, and signals before drawing conclusions.'
                )}
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">04</span>
              <h3>{t('Cải thiện', 'Improve')}</h3>
              <p>
                {t(
                  'Điều chỉnh mô hình và chiến lược theo bằng chứng thực tế.',
                  'Refine the system using real evidence, not assumptions.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="evidence section-shell">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">
              {t('Bằng chứng thay cho lời hứa', 'Evidence, not noise')}
            </p>
            <h2>
              {t(
                'Mỗi quyết định cần có cơ sở đo lường rõ ràng.',
                'Every decision should be grounded in clear measurement.'
              )}
            </h2>
            <p>
              {t(
                'DIGO trình bày bằng chứng theo ngữ cảnh, không phóng đại hay sử dụng số liệu không có nguồn xác thực.',
                'DIGO presents proof in context, without inflating claims or using unsupported numbers.'
              )}
            </p>
          </div>
          <div className="evidence-panel">
            <div className="metric-row">
              <span className="metric-label">Context</span>
              <strong>Performance marketing optimization</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Period</span>
              <strong>Q2 2025</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Metric</span>
              <strong>CPA reduction vs. baseline</strong>
            </div>
            <div className="metric-row">
              <span className="metric-label">Source</span>
              <strong>Approved dashboard export</strong>
            </div>
            <div className="metric-row highlight">
              <span className="metric-label">Result</span>
              <strong>–27.4% CPA</strong>
            </div>
            <p className="evidence-note">
              {t(
                'Số liệu chỉ dùng khi có nguồn, thời kỳ và định nghĩa chu kỳ đo lường rõ ràng.',
                'Figures are shown only when the source, period, and metric definition are clearly documented.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights section-shell section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">
              {t('Tri thức nổi bật', 'Featured insights')}
            </p>
            <h2>
              {t(
                'Từ chiến lược, sáng tạo đến dữ liệu và kỹ năng',
                'From strategy, creativity, and data to practical skill-building'
              )}
            </h2>
          </div>

          <div className="card-grid three-up">
            <article className="news-card">
              <span className="card-tag">Growth</span>
              <h3>Measurement-first creative testing</h3>
              <p>
                {t(
                  'Thử nghiệm có kỷ luật giúp tăng hiệu suất mà không phụ thuộc vào các chỉ số vô bổ.',
                  'How disciplined experimentation improves performance without chasing vanity metrics.'
                )}
              </p>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('insights')}
              >
                {t('Đọc bài viết →', 'Read insight →')}
              </button>
            </article>
            <article className="news-card">
              <span className="card-tag">Academy</span>
              <h3>Build skills that transfer to real work</h3>
              <p>
                {t(
                  'Năng lực thực tế được xây dựng thông qua đánh giá có cấu trúc và phản hồi định kỳ.',
                  'Practical capability is built through structured evaluation and feedback loops.'
                )}
              </p>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('insights')}
              >
                {t('Đọc bài viết →', 'Read insight →')}
              </button>
            </article>
            <article className="news-card">
              <span className="card-tag">Infra</span>
              <h3>Why server-side data architecture matters</h3>
              <p>
                {t(
                  'Đo lường chính xác và tự động hóa tốt hơn bắt đầu từ nền tảng hạ tầng đáng tin cậy.',
                  'Cleaner measurement and better automation begin with a trustworthy infrastructure foundation.'
                )}
              </p>
              <button
                type="button"
                className="card-link-btn"
                onClick={() => onNavigate('insights')}
              >
                {t('Đọc bài viết →', 'Read insight →')}
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section-shell">
        <div className="container split-layout align-center">
          <div className="team-portrait">
            <div className="portrait-card">
              <div className="portrait-photo">
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>DIGO LEADERSHIP</span>
              </div>
              <div className="portrait-copy">
                <strong>Nguyễn Hoàng Vương Điền</strong>
                <span>CEO / CMO</span>
              </div>
            </div>
            <div className="portrait-card secondary">
              <div className="portrait-photo alt">
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>DIGO LEADERSHIP</span>
              </div>
              <div className="portrait-copy">
                <strong>Lê Thị Thanh Gô</strong>
                <span>CAO / CPO</span>
              </div>
            </div>
          </div>
          <div>
            <p className="section-kicker">
              {t('Con người phía sau hệ thống', 'People behind the system')}
            </p>
            <h2>
              {t(
                'Kết nối tri thức, thực thi và dữ liệu bằng các con người có năng lực thực sự.',
                'Connecting learning, execution, and data through people with real capability.'
              )}
            </h2>
            <p>
              {t(
                'DIGO được xây dựng bởi những người làm việc ở ranh giới giữa đào tạo, marketing và hạ tầng dữ liệu — nơi cho phép hiểu rõ nguyên nhân và cải thiện liên tục.',
                'DIGO is built by people working at the intersection of education, marketing, and data infrastructure — the place where root causes become practical improvements.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band section-shell">
        <div className="container cta-band-inner">
          <div>
            <p className="section-kicker">
              {t('Tìm lộ trình phù hợp', 'Find the right next step')}
            </p>
            <h2>
              {t(
                'Xây dựng hệ thống tăng trưởng có thể đo lường.',
                'Build a more measurable growth system.'
              )}
            </h2>
          </div>
          <div className="cta-row compact">
            <button
              type="button"
              className="button button-primary"
              onClick={() => onNavigate('contact')}
            >
              {t('Tư vấn doanh nghiệp', 'Business consultation')}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => onNavigate('academy')}
            >
              {t('Khám phá lộ trình học', 'Explore learning paths')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
