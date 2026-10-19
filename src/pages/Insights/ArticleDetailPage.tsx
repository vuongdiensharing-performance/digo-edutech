import React, { useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowRight,
  Share2,
  Check,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageId } from '../../types';
import { ARTICLES_DATA, DetailedArticle } from '../../data/articlesData';
import { TableOfContents, TOCItem } from '../../components/TableOfContents';
import { AuthorBio } from '../../components/AuthorBio';
import { InlineCTA } from '../../components/InlineCTA';

interface ArticleDetailPageProps {
  articleId: string;
  onBackToInsights: () => void;
  onSelectArticle: (articleId: string) => void;
  onNavigate: (page: PageId) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  articleId,
  onBackToInsights,
  onSelectArticle,
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [copiedLink, setCopiedLink] = React.useState(false);

  const article: DetailedArticle = useMemo(() => {
    return (
      ARTICLES_DATA.find((a) => a.id === articleId || a.slug === articleId) ||
      ARTICLES_DATA[0]
    );
  }, [articleId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const tocItems: TOCItem[] = useMemo(() => {
    return article.sections.map((sec) => ({
      id: sec.id,
      labelVi: sec.headingVi,
      labelEn: sec.headingEn,
    }));
  }, [article]);

  const relatedArticles = useMemo(() => {
    const sameCluster = ARTICLES_DATA.filter(
      (a) => a.id !== article.id && a.tag === article.tag
    );
    const others = ARTICLES_DATA.filter(
      (a) => a.id !== article.id && a.tag !== article.tag
    );
    return [...sameCluster, ...others].slice(0, 3);
  }, [article]);

  const readTimeText = lang === 'vi' ? article.readTimeVi : article.readTimeEn;

  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#insights/${article.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  return (
    <main className="article-detail-page">
      {/* 1. Large High-Contrast Editorial Header */}
      <header className="article-hero-shell section-shell">
        <div className="container">
          <div className="article-hero-top-nav">
            <button
              type="button"
              className="article-back-pill"
              onClick={onBackToInsights}
            >
              <ArrowLeft size={16} strokeWidth={2.4} />
              <span>{t('Tất cả Chuyên đề Tri thức', 'All Insights & Topic Clusters')}</span>
            </button>

            <div className="article-cluster-breadcrumb">
              <Layers size={14} strokeWidth={2.3} />
              <span>{t(article.clusterNameVi, article.clusterNameEn)}</span>
            </div>
          </div>

          <div className="article-hero-header-box">
            {/* Pill Tag, Date, Read Time, & Outcome Metric */}
            <div className="article-meta-pills-row">
              <span className={`article-pillar-pill tag-${article.tag.toLowerCase()}`}>
                {article.tag === 'Infra' ? 'Infra & Trust' : article.tag}
              </span>

              <span className="article-meta-item">
                <Calendar size={14} strokeWidth={2.2} />
                <span>{article.date}</span>
              </span>

              <span className="article-meta-item">
                <Clock size={14} strokeWidth={2.2} />
                <span className="article-readtime-mono">{readTimeText}</span>
              </span>

              <span className="article-metric-pill">
                <TrendingUp size={14} strokeWidth={2.4} />
                <span>{t(article.metricHighlightVi, article.metricHighlightEn)}</span>
              </span>
            </div>

            <h1 className="article-display-title">
              {t(article.titleVi, article.titleEn)}
            </h1>

            <p className="article-lead-deck">
              {t(article.descVi, article.descEn)}
            </p>

            <div className="article-byline-bar">
              <AuthorBio
                author={article.author}
                variant="compact"
                publishedDate={article.date}
                readTime={readTimeText}
              />

              <div className="article-share-actions">
                <button
                  type="button"
                  className="article-share-pill"
                  onClick={handleCopyShareLink}
                >
                  {copiedLink ? (
                    <>
                      <Check size={15} strokeWidth={2.5} />
                      <span>{t('Đã sao chép liên kết', 'Link Copied')}</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={15} strokeWidth={2.3} />
                      <span>{t('Chia sẻ bài viết', 'Share Article')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Two-Column Madgicx Inbound Layout: Sticky TOC (320px) + Long-Form Article Body (1fr) */}
      <section className="article-body-shell section-shell">
        <div className="container">
          <div className="article-two-col-grid">
            {/* Left Column: Sticky TableOfContents */}
            <div className="article-sidebar-col">
              <TableOfContents
                items={tocItems}
                readTime={readTimeText}
                pillarTag={article.tag}
                onQuickAction={() => onNavigate(article.inlineCta.targetPage)}
              />
            </div>

            {/* Right / Main Column: Long-Form Content + Mid-Article InlineCTA + E-E-A-T AuthorBio */}
            <article id="article-longform-body" className="article-main-col">
              {article.sections.map((section, secIndex) => {
                const paragraphs =
                  lang === 'vi' ? section.paragraphsVi : section.paragraphsEn;
                const bullets =
                  lang === 'vi' ? section.bulletsVi : section.bulletsEn;
                const takeaway =
                  lang === 'vi' ? section.keyTakeawayVi : section.keyTakeawayEn;

                // Inject InlineCTA right after Section 1 (mid-article high-intent zone)
                const shouldRenderInlineCTA =
                  secIndex === 1 || (article.sections.length === 2 && secIndex === 0);

                return (
                  <React.Fragment key={section.id}>
                    <section
                      id={section.id}
                      className="article-content-section"
                    >
                      <h2 className="article-section-h2">
                        {t(section.headingVi, section.headingEn)}
                      </h2>

                      <div className="article-prose-stack">
                        {paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="article-prose-p">
                            {para}
                          </p>
                        ))}
                      </div>

                      {bullets && bullets.length > 0 && (
                        <ul className="article-checklist-box">
                          {bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="article-checklist-item">
                              <span className="article-check-orb" aria-hidden="true">
                                <CheckCircle2 size={16} strokeWidth={2.5} />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {takeaway && (
                        <div className="article-takeaway-card">
                          <div className="article-takeaway-kicker">
                            {t('ĐIỂM CỐT LÕI (KEY TAKEAWAY)', 'EXECUTIVE TAKEAWAY')}
                          </div>
                          <p className="article-takeaway-text">{takeaway}</p>
                        </div>
                      )}
                    </section>

                    {shouldRenderInlineCTA && (
                      <InlineCTA
                        cta={article.inlineCta}
                        onNavigate={onNavigate}
                      />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Full E-E-A-T Author Bio Box at End of Article */}
              <AuthorBio
                author={article.author}
                variant="full"
                onConsultClick={() => onNavigate('contact')}
              />
            </article>
          </div>
        </div>
      </section>

      {/* 3. Topic Cluster Continuation Grid */}
      <section className="section-shell section-alt">
        <div className="container">
          <div className="cluster-related-header">
            <div>
              <p className="section-kicker">
                {t('ĐỌC TIẾP TRONG CỤM CHỦ ĐỀ', 'CONTINUE IN THIS TOPIC CLUSTER')}
              </p>
              <h2>
                {t(
                  'Các bài phân tích chuyên sâu liên quan',
                  'Related Deep-Dive Playbooks & Blueprints'
                )}
              </h2>
            </div>
            <button
              type="button"
              className="button button-secondary"
              onClick={onBackToInsights}
            >
              {t('Xem toàn bộ thư viện →', 'View all insights →')}
            </button>
          </div>

          <div className="insights-topic-grid three-up">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                className="topic-cluster-card"
                onClick={() => onSelectArticle(rel.id)}
              >
                <div className="topic-card-top">
                  <span className={`article-pillar-pill tag-${rel.tag.toLowerCase()}`}>
                    {rel.tag === 'Infra' ? 'Infra & Trust' : rel.tag}
                  </span>
                  <span className="topic-card-metric">
                    {t(rel.metricHighlightVi, rel.metricHighlightEn)}
                  </span>
                </div>

                <h3 className="topic-card-title">
                  {t(rel.titleVi, rel.titleEn)}
                </h3>

                <p className="topic-card-desc">
                  {t(rel.descVi, rel.descEn)}
                </p>

                <div className="topic-card-footer">
                  <div className="topic-card-author">
                    <span
                      className="topic-author-mini-avatar"
                      style={{ background: rel.author.avatarGradient }}
                    >
                      {rel.author.avatarInitials}
                    </span>
                    <div className="topic-author-meta-text">
                      <strong>{rel.author.name}</strong>
                      <span>
                        {rel.date} · {lang === 'vi' ? rel.readTimeVi : rel.readTimeEn}
                      </span>
                    </div>
                  </div>

                  <span className="topic-card-read-arrow" aria-hidden="true">
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
