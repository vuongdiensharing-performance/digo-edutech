import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  X,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageId } from '../../types';
import {
  ARTICLES_DATA,
  ArticlePillar,
  BlogCategoryKey,
  DetailedArticle,
} from '../../data/articlesData';
import { ArticleDetailPage } from './ArticleDetailPage';

interface InsightsPageProps {
  onNavigate: (page: PageId) => void;
  initialArticleId?: string | null;
}

type PillarFilterOption = 'All' | ArticlePillar;

interface SidebarCategoryItem {
  key: BlogCategoryKey;
  labelVi: string;
  labelEn: string;
  archiveCount: string;
  pillar: ArticlePillar;
}

const SIDEBAR_CATEGORIES: SidebarCategoryItem[] = [
  {
    key: 'ielts-tips',
    labelVi: 'IELTS Tips',
    labelEn: 'IELTS Tips',
    archiveCount: '12',
    pillar: 'Academy',
  },
  {
    key: 'performance-marketing',
    labelVi: 'Performance Marketing',
    labelEn: 'Performance Marketing',
    archiveCount: '18',
    pillar: 'Growth',
  },
  {
    key: 'edtech-insights',
    labelVi: 'EdTech Insights',
    labelEn: 'EdTech Insights',
    archiveCount: '14',
    pillar: 'Academy',
  },
  {
    key: 'digital-skills',
    labelVi: 'Kỹ năng số',
    labelEn: 'Digital Skills',
    archiveCount: '09',
    pillar: 'Infra',
  },
];

const ITEMS_PER_PAGE = 4;

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  initialArticleId = null,
}) => {
  const { lang, t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<PillarFilterOption>('All');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryKey | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllLoaded, setShowAllLoaded] = useState<boolean>(false);
  const [activeArticleId, setActiveArticleId] = useState<string | null>(
    initialArticleId
  );

  // Sidebar Lead Magnet Form State
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadError, setLeadError] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Sync with URL hash if formatted like #insights/creative-testing
  useEffect(() => {
    const syncHashArticle = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('insights/')) {
        const slug = hash.replace('insights/', '').trim();
        const found = ARTICLES_DATA.find(
          (a) => a.id === slug || a.slug === slug
        );
        if (found) {
          setActiveArticleId(found.id);
          return;
        }
      } else if (hash === 'insights') {
        setActiveArticleId(null);
      }
    };

    syncHashArticle();
    window.addEventListener('hashchange', syncHashArticle);
    return () => window.removeEventListener('hashchange', syncHashArticle);
  }, []);

  // Reset pagination when filters or search change
  useEffect(() => {
    setCurrentPage(1);
    setShowAllLoaded(false);
  }, [selectedPillar, selectedCategory, searchQuery]);

  const handleOpenArticle = (articleId: string) => {
    setActiveArticleId(articleId);
    window.history.replaceState(null, '', `#insights/${articleId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToListing = () => {
    setActiveArticleId(null);
    window.history.replaceState(null, '', '#insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesPillar =
        selectedPillar === 'All' || article.tag === selectedPillar;
      const matchesCategory =
        selectedCategory === 'All' || article.categoryKey === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesPillar && matchesCategory;

      const haystack = [
        article.titleVi,
        article.titleEn,
        article.descVi,
        article.descEn,
        article.categoryBadgeVi,
        article.categoryBadgeEn,
        article.author.name,
        article.tag,
      ]
        .join(' ')
        .toLowerCase();

      return matchesPillar && matchesCategory && haystack.includes(q);
    });
  }, [selectedPillar, selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));

  const visibleArticles: DetailedArticle[] = useMemo(() => {
    if (showAllLoaded) return filteredArticles;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage, showAllLoaded]);

  const popularArticles: DetailedArticle[] = useMemo(() => {
    const flagged = ARTICLES_DATA.filter((a) => a.isPopular);
    return flagged.length >= 4 ? flagged.slice(0, 4) : ARTICLES_DATA.slice(0, 4);
  }, []);

  const handleSidebarLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = leadName.trim();
    const trimmedEmail = leadEmail.trim();
    if (!trimmedName) {
      setLeadError(
        t('Vui lòng nhập họ và tên của bạn.', 'Please enter your full name.')
      );
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setLeadError(
        t(
          'Vui lòng nhập địa chỉ email hợp lệ.',
          'Please enter a valid email address.'
        )
      );
      return;
    }
    setLeadError('');
    setLeadSubmitted(true);
  };

  const handleClearFilters = () => {
    setSelectedPillar('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // If a reader selected an article, render the 2-column ArticleDetailPage template
  if (activeArticleId) {
    return (
      <ArticleDetailPage
        articleId={activeArticleId}
        onBackToInsights={handleBackToListing}
        onSelectArticle={handleOpenArticle}
        onNavigate={onNavigate}
      />
    );
  }

  const pillarTabs: { id: PillarFilterOption; labelVi: string; labelEn: string }[] = [
    { id: 'All', labelVi: 'Tất cả bài viết', labelEn: 'All Articles' },
    { id: 'Academy', labelVi: 'Academy (EdTech & IELTS)', labelEn: 'Academy (EdTech & IELTS)' },
    { id: 'Growth', labelVi: 'Growth (Marketing & CRO)', labelEn: 'Growth (Marketing & CRO)' },
    { id: 'Infra', labelVi: 'Infra & Trust (Kỹ năng số)', labelEn: 'Infra & Trust (Data & Tech)' },
  ];

  return (
    <main className="digo-blog-archive-page">
      {/* Top Corporate Editorial Banner */}
      <section className="digo-blog-archive-hero">
        <div className="digo-blog-container">
          <div className="digo-blog-hero-inner">
            <div className="digo-blog-kicker-row">
              <span className="digo-blog-kicker-badge">
                <Sparkles size={13} strokeWidth={2.5} />
                <span>{t('DIGO EDUTECH & GROWTH DOCTRINE', 'DIGO EDUTECH & GROWTH DOCTRINE')}</span>
              </span>
              <span className="digo-blog-kicker-sub">
                {t(
                  '"Measure Ruthlessly. Build What You Teach. Scale Monopolies."',
                  '"Measure Ruthlessly. Build What You Teach. Scale Monopolies."'
                )}
              </span>
            </div>

            <h1 className="digo-blog-hero-h1">
              {t(
                'Thư viện Tri thức & Chiến lược Thực chiến DIGO EduTech',
                'DIGO EduTech Knowledge Archive & Field-Tested Playbooks'
              )}
            </h1>

            <p className="digo-blog-hero-desc">
              {t(
                'Hệ thống bài viết chuyên sâu về phương pháp sư phạm IELTS thực chiến, kiến trúc tăng trưởng Tối ưu CPQL, Trang đích <1.2s và hạ tầng Server-Side CAPI Đối soát 1:1 từ Lead đến Doanh thu.',
                'In-depth playbooks covering competency-based IELTS pedagogy, CPQL Optimization, <1.2s high-velocity landing pages, and 1:1 Server-Side CAPI revenue attribution.'
              )}
            </p>

            {/* 3-Pillar Quick Filter Bar */}
            <div
              className="digo-blog-pillar-tabs"
              role="tablist"
              aria-label={t('Lọc bài viết theo trụ cột', 'Filter articles by pillar')}
            >
              {pillarTabs.map((tab) => {
                const isActive = selectedPillar === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`digo-pillar-tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => setSelectedPillar(tab.id)}
                  >
                    {t(tab.labelVi, tab.labelEn)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Corporate Blog Archive Layout (70% Main Content / 30% Smart Sidebar) */}
      <section className="digo-blog-main-section">
        <div className="digo-blog-container">
          <div className="digo-blog-layout-grid">
            {/* ============================================================
                COLUMN A (LEFT - 70%): MAIN CONTENT AREA (RECENT ARTICLES)
               ============================================================ */}
            <div className="digo-blog-main-feed">
              {/* Top Section: Recent Articles / Featured Header */}
              <div className="digo-feed-header-bar">
                <div className="digo-feed-header-titles">
                  <span className="digo-feed-eyebrow">
                    <Layers size={14} strokeWidth={2.3} />
                    <span>
                      {selectedCategory !== 'All'
                        ? t('CHUYÊN MỤC ĐANG CHỌN', 'ACTIVE CATEGORY')
                        : t('CẬP NHẬT MỚI NHẤT', 'RECENT ARTICLES & INSIGHTS')}
                    </span>
                  </span>
                  <h2 className="digo-feed-h2">
                    {selectedCategory === 'ielts-tips'
                      ? t('Chuyên mục: IELTS Tips & Tư duy Học thuật', 'Category: IELTS Tips & Academic Mastery')
                      : selectedCategory === 'performance-marketing'
                      ? t('Chuyên mục: Performance Marketing & CRO', 'Category: Performance Marketing & CRO')
                      : selectedCategory === 'edtech-insights'
                      ? t('Chuyên mục: EdTech Insights & Đào tạo', 'Category: EdTech Insights & L&D')
                      : selectedCategory === 'digital-skills'
                      ? t('Chuyên mục: Kỹ năng số & Hạ tầng Dữ liệu', 'Category: Digital Skills & Data Infra')
                      : t('Bài viết Mới nhất & Chuyên đề Nổi bật', 'Recent Articles & Featured Playbooks')}
                  </h2>
                </div>

                {(selectedPillar !== 'All' ||
                  selectedCategory !== 'All' ||
                  searchQuery.trim() !== '') && (
                  <button
                    type="button"
                    className="digo-feed-reset-btn"
                    onClick={handleClearFilters}
                  >
                    <X size={14} strokeWidth={2.5} />
                    <span>{t('Xóa bộ lọc', 'Clear filters')}</span>
                  </button>
                )}
              </div>

              {/* 2-Column Article Card Grid */}
              {visibleArticles.length === 0 ? (
                <div className="digo-blog-empty-state">
                  <h3>
                    {t(
                      'Không tìm thấy bài viết phù hợp với từ khóa của bạn',
                      'No articles matched your current search or filter'
                    )}
                  </h3>
                  <p>
                    {t(
                      'Hãy thử tìm kiếm với từ khóa khác (ví dụ: IELTS, ROAS, DaVinci, CAPI) hoặc xem toàn bộ chuyên mục.',
                      'Try another keyword (e.g., IELTS, ROAS, DaVinci, CAPI) or reset filters to browse all articles.'
                    )}
                  </p>
                  <button
                    type="button"
                    className="digo-Empty-reset-cta"
                    onClick={handleClearFilters}
                  >
                    {t('Xem tất cả bài viết', 'Show All Articles')}
                  </button>
                </div>
              ) : (
                <div className="digo-articles-2col-grid">
                  {visibleArticles.map((article) => {
                    const readTimeText =
                      lang === 'vi' ? article.readTimeVi : article.readTimeEn;
                    const categoryBadge =
                      lang === 'vi'
                        ? article.categoryBadgeVi
                        : article.categoryBadgeEn;

                    return (
                      <article
                        key={article.id}
                        className="digo-article-card"
                        onClick={() => handleOpenArticle(article.id)}
                        tabIndex={0}
                        role="button"
                        aria-label={t(article.titleVi, article.titleEn)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleOpenArticle(article.id);
                          }
                        }}
                      >
                        {/* 16:9 Fixed Aspect Ratio Thumbnail with 1.03x Hover Zoom */}
                        <div className="digo-card-thumb-wrap">
                          <img
                            src={article.thumbnailUrl}
                            alt={t(article.titleVi, article.titleEn)}
                            className="digo-card-thumb-img"
                            loading="lazy"
                          />
                          <div className="digo-card-thumb-overlay" />
                          <span className="digo-card-metric-tag">
                            <TrendingUp size={12} strokeWidth={2.5} />
                            <span>
                              {t(
                                article.metricHighlightVi,
                                article.metricHighlightEn
                              )}
                            </span>
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="digo-card-body">
                          {/* Meta Info: Category Accent Badge + Read Time + Date */}
                          <div className="digo-card-meta-row">
                            <span className="digo-card-category-badge">
                              {categoryBadge}
                            </span>
                            <span className="digo-card-meta-item">
                              <Clock size={13} strokeWidth={2.2} />
                              <span>{readTimeText}</span>
                            </span>
                            <span className="digo-card-meta-item">
                              <Calendar size={13} strokeWidth={2.2} />
                              <span>{article.date}</span>
                            </span>
                          </div>

                          {/* H3 Article Title (Max 2 lines, turns Primary #F40009 on hover) */}
                          <h3 className="digo-card-title-h3">
                            {t(article.titleVi, article.titleEn)}
                          </h3>

                          {/* Short Excerpt (Max 3 lines, standard 15-16px high-contrast body text) */}
                          <p className="digo-card-excerpt">
                            {t(article.descVi, article.descEn)}
                          </p>

                          {/* Footer: Author + "Đọc thêm" CTA with sliding arrow */}
                          <div className="digo-card-footer">
                            <div className="digo-card-author-mini">
                              <span
                                className="digo-card-author-avatar"
                                style={{
                                  background: article.author.avatarGradient,
                                }}
                                aria-hidden="true"
                              >
                                {article.author.avatarInitials}
                              </span>
                              <span className="digo-card-author-name">
                                {article.author.name}
                              </span>
                            </div>

                            <span className="digo-card-readmore-cta">
                              <span>{t('Đọc thêm', 'Read more')}</span>
                              <ArrowRight
                                size={16}
                                strokeWidth={2.5}
                                className="digo-readmore-arrow"
                              />
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Classic Centered Pagination + Smooth "Xem thêm (Load more)" */}
              {filteredArticles.length > 0 && (
                <div className="digo-pagination-wrapper">
                  <nav
                    className="digo-pagination-nav"
                    aria-label={t('Phân trang bài viết', 'Article pagination')}
                  >
                    <button
                      type="button"
                      className="digo-page-btn prev-next"
                      disabled={currentPage === 1 || showAllLoaded}
                      onClick={() => {
                        setShowAllLoaded(false);
                        setCurrentPage((p) => Math.max(1, p - 1));
                        window.scrollTo({ top: 280, behavior: 'smooth' });
                      }}
                    >
                      <ChevronLeft size={16} strokeWidth={2.4} />
                      <span>{t('Trước', 'Prev')}</span>
                    </button>

                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                      (pageNum) => {
                        const isCurrent =
                          !showAllLoaded && currentPage === pageNum;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            className={`digo-page-btn number ${
                              isCurrent ? 'is-active' : ''
                            }`}
                            aria-current={isCurrent ? 'page' : undefined}
                            onClick={() => {
                              setShowAllLoaded(false);
                              setCurrentPage(pageNum);
                              window.scrollTo({ top: 280, behavior: 'smooth' });
                            }}
                          >
                            {pageNum}
                          </button>
                        );
                      }
                    )}

                    <button
                      type="button"
                      className="digo-page-btn prev-next"
                      disabled={currentPage === totalPages || showAllLoaded}
                      onClick={() => {
                        setShowAllLoaded(false);
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 280, behavior: 'smooth' });
                      }}
                    >
                      <span>{t('Tiếp', 'Next')}</span>
                      <ChevronRight size={16} strokeWidth={2.4} />
                    </button>
                  </nav>

                  {!showAllLoaded && filteredArticles.length > ITEMS_PER_PAGE && (
                    <button
                      type="button"
                      className="digo-loadmore-btn"
                      onClick={() => setShowAllLoaded(true)}
                    >
                      <span>
                        {t(
                          `Xem thêm tất cả (${filteredArticles.length} bài viết)`,
                          `Load more (${filteredArticles.length} total articles)`
                        )}
                      </span>
                      <ArrowRight size={15} strokeWidth={2.4} />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* ============================================================
                COLUMN B (RIGHT - 30%): SMART SIDEBAR (CONVERSION & NAV HUB)
               ============================================================ */}
            <aside
              className="digo-blog-sidebar"
              aria-label={t(
                'Thanh công cụ tìm kiếm, chuyên mục và nhận tài liệu',
                'Blog search, categories, and lead magnet sidebar'
              )}
            >
              {/* WIDGET 1: Search Widget */}
              <div className="digo-sidebar-widget">
                <h3 className="digo-widget-title">
                  {t('Tìm kiếm Tri thức', 'Search Knowledge Hub')}
                </h3>
                <div className="digo-search-input-shell">
                  <Search
                    size={18}
                    strokeWidth={2.3}
                    className="digo-search-icon"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t(
                      'Tìm kiếm bài viết, tài liệu IELTS, Marketing...',
                      'Search articles, IELTS guides, Marketing...'
                    )}
                    className="digo-search-input"
                    aria-label={t(
                      'Tìm kiếm bài viết, tài liệu IELTS, Marketing',
                      'Search articles, IELTS guides, Marketing'
                    )}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="digo-search-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label={t('Xóa từ khóa', 'Clear search')}
                    >
                      <X size={14} strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </div>

              {/* WIDGET 2: Follow Us (Official Social Channels) */}
              <div className="digo-sidebar-widget">
                <h3 className="digo-widget-title">
                  {t('Theo dõi DiGo (Follow Us)', 'Follow DiGo Channels')}
                </h3>
                <p className="digo-widget-subcopy">
                  {t(
                    'Kết nối cùng cộng đồng học viên & chuyên gia thực chiến trên các kênh chính thức của DiGo:',
                    'Join our community of learners and growth practitioners across official DiGo channels:'
                  )}
                </p>
                <div className="digo-social-grid">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="digo-social-flat-btn social-linkedin"
                    aria-label="DiGo on LinkedIn"
                  >
                    <span className="digo-social-icon-box" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </span>
                    <div className="digo-social-meta">
                      <strong>LinkedIn</strong>
                      <span>B2B & Careers</span>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="digo-social-flat-btn social-facebook"
                    aria-label="DiGo on Facebook"
                  >
                    <span className="digo-social-icon-box" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                      </svg>
                    </span>
                    <div className="digo-social-meta">
                      <strong>Facebook</strong>
                      <span>Cộng đồng DiGo</span>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="digo-social-flat-btn social-youtube"
                    aria-label="DiGo on YouTube"
                  >
                    <span className="digo-social-icon-box" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                      </svg>
                    </span>
                    <div className="digo-social-meta">
                      <strong>YouTube</strong>
                      <span>Video Bài giảng</span>
                    </div>
                  </a>

                  {/* Zalo Official */}
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="digo-social-flat-btn social-zalo"
                    aria-label="DiGo Official Zalo OA"
                  >
                    <span className="digo-social-icon-box" aria-hidden="true">
                      <span className="zalo-text-mark">Zalo</span>
                    </span>
                    <div className="digo-social-meta">
                      <strong>Zalo OA</strong>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* WIDGET 3: Article Categories (Danh mục chuyên môn) */}
              <div className="digo-sidebar-widget">
                <div className="digo-widget-header-flex">
                  <h3 className="digo-widget-title">
                    {t('Danh mục Chuyên môn', 'Article Categories')}
                  </h3>
                  {selectedCategory !== 'All' && (
                    <button
                      type="button"
                      className="digo-widget-reset-link"
                      onClick={() => setSelectedCategory('All')}
                    >
                      {t('Tất cả', 'Reset')}
                    </button>
                  )}
                </div>

                <ul className="digo-category-list">
                  {SIDEBAR_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.key;
                    return (
                      <li key={cat.key}>
                        <button
                          type="button"
                          className={`digo-category-item-btn ${
                            isSelected ? 'is-active' : ''
                          }`}
                          onClick={() =>
                            setSelectedCategory(isSelected ? 'All' : cat.key)
                          }
                        >
                          <span className="digo-category-name">
                            {t(cat.labelVi, cat.labelEn)}
                          </span>
                          <span className="digo-category-count-badge">
                            ({cat.archiveCount})
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* WIDGET 4: Featured / Popular Articles (Bài viết nổi bật / Đọc nhiều) */}
              <div className="digo-sidebar-widget">
                <h3 className="digo-widget-title">
                  {t('Bài viết Đọc nhiều nhất', 'Popular & Featured Articles')}
                </h3>

                <div className="digo-popular-list">
                  {popularArticles.map((popArticle) => (
                    <button
                      key={popArticle.id}
                      type="button"
                      className="digo-popular-item"
                      onClick={() => handleOpenArticle(popArticle.id)}
                    >
                      {/* 60x60px Square Thumbnail on the Left */}
                      <img
                        src={popArticle.thumbnailUrl}
                        alt={t(popArticle.titleVi, popArticle.titleEn)}
                        className="digo-popular-thumb-60"
                        loading="lazy"
                      />
                      <div className="digo-popular-info">
                        <h4 className="digo-popular-title-2line">
                          {t(popArticle.titleVi, popArticle.titleEn)}
                        </h4>
                        <span className="digo-popular-date">
                          {popArticle.date}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* WIDGET 5: Newsletter / Lead Magnet Subscription Form (Trọng tâm chuyển đổi) */}
              <div className="digo-sidebar-widget digo-leadmagnet-widget">
                <div className="digo-leadmagnet-badge">
                  <Sparkles size={13} strokeWidth={2.5} />
                  <span>{t('TÀI LIỆU ĐỘC QUYỀN DIGO', 'EXCLUSIVE DIGO TOOLKIT')}</span>
                </div>

                <h3 className="digo-leadmagnet-title">
                  {t(
                    'Nhận trọn bộ tài liệu & chiến lược Marketing thực chiến từ DiGo',
                    'Get the Complete Actionable Marketing & EdTech Playbook Bundle from DiGo'
                  )}
                </h3>

                <p className="digo-leadmagnet-sub">
                  {t(
                    'Bao gồm Ma trận Creative Testing, Khung ôn luyện IELTS Band 7.5+ và Checklist kiểm toán dữ liệu doanh nghiệp.',
                    'Includes our Creative Testing Matrix, Academic Writing Band 7.5+ Blueprint, and Server-Side Data Audit Checklist.'
                  )}
                </p>

                {leadSubmitted ? (
                  <div className="digo-leadmagnet-success" role="status">
                    <CheckCircle2 size={22} strokeWidth={2.5} />
                    <div>
                      <strong>
                        {t(
                          `Cảm ơn ${leadName}! Tài liệu đã sẵn sàng.`,
                          `Thank you, ${leadName}! Your bundle is on the way.`
                        )}
                      </strong>
                      <p>
                        {t(
                          `Bộ tài liệu đã được gửi tới ${leadEmail}. Hãy kiểm tra hộp thư đến của bạn.`,
                          `We have dispatched the download link to ${leadEmail}.`
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    className="digo-leadmagnet-form"
                    onSubmit={handleSidebarLeadSubmit}
                    noValidate
                  >
                    <div className="digo-lead-field">
                      <label htmlFor="digo-sidebar-name" className="sr-only">
                        {t('Họ và tên', 'Full Name')}
                      </label>
                      <input
                        id="digo-sidebar-name"
                        type="text"
                        value={leadName}
                        onChange={(e) => {
                          setLeadName(e.target.value);
                          if (leadError) setLeadError('');
                        }}
                        placeholder={t('Nhập Họ và tên của bạn...', 'Enter your full name...')}
                        className="digo-lead-input"
                        required
                      />
                    </div>

                    <div className="digo-lead-field">
                      <label htmlFor="digo-sidebar-email" className="sr-only">
                        {t('Địa chỉ Email', 'Email Address')}
                      </label>
                      <input
                        id="digo-sidebar-email"
                        type="email"
                        value={leadEmail}
                        onChange={(e) => {
                          setLeadEmail(e.target.value);
                          if (leadError) setLeadError('');
                        }}
                        placeholder={t('Nhập Email nhận tài liệu...', 'Enter your work or personal email...')}
                        className="digo-lead-input"
                        required
                      />
                    </div>

                    {leadError && (
                      <p className="digo-lead-error" role="alert">
                        {leadError}
                      </p>
                    )}

                    <button type="submit" className="digo-lead-submit-btn">
                      <span>{t('Đăng ký nhận ngay', 'Subscribe & Download Now')}</span>
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </button>

                    <p className="digo-lead-disclaimer">
                      <ShieldCheck size={13} strokeWidth={2.3} />
                      <span>
                        {t(
                          'Cam kết bảo mật 100% thông tin cá nhân theo đúng chính sách quyền riêng tư của DiGo. Không spam.',
                          '100% privacy guaranteed under DiGo’s strict data protection policy. Unsubscribe anytime.'
                        )}
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
