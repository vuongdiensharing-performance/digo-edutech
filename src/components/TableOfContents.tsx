import React, { useEffect, useState } from 'react';
import { List, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface TOCItem {
  id: string;
  labelVi: string;
  labelEn: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  readTime?: string;
  pillarTag?: 'Academy' | 'Growth' | 'Infra';
  onQuickAction?: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  readTime,
  pillarTag = 'Growth',
  onQuickAction,
}) => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall article reading progress
      const articleEl = document.getElementById('article-longform-body');
      if (articleEl) {
        const rect = articleEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollable = Math.max(1, articleEl.offsetHeight - windowHeight * 0.4);
        const scrolled = Math.max(0, -rect.top + windowHeight * 0.28);
        const pct = Math.min(100, Math.round((scrolled / totalScrollable) * 100));
        setScrollProgress(pct);
      }

      // Determine active section based on viewport offset
      const triggerOffset = 180;
      let currentActive = items[0]?.id || '';

      for (const item of items) {
        const sectionEl = document.getElementById(item.id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            currentActive = item.id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleItemClick = (id: string) => {
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 115;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="toc-sticky-rail" aria-label={t('Mục lục bài viết', 'Table of contents')}>
      <div className="toc-card">
        <div className="toc-header">
          <div className="toc-title-row">
            <span className="toc-icon-badge" aria-hidden="true">
              <List size={15} strokeWidth={2.5} />
            </span>
            <span className="toc-heading-text">
              {t('MỤC LỤC BÀI VIẾT', 'TABLE OF CONTENTS')}
            </span>
          </div>
          <span className="toc-progress-pill">
            {scrollProgress}%
          </span>
        </div>

        {/* Effervescent Reading Progress Bar */}
        <div className="toc-progress-track" aria-hidden="true">
          <div
            className="toc-progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <nav className="toc-nav-list">
          {items.map((item, index) => {
            const isActive = activeId === item.id;
            const currentIndex = items.findIndex((i) => i.id === activeId);
            const isCompleted = index < currentIndex;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`toc-link-item ${isActive ? 'is-active' : ''} ${
                  isCompleted ? 'is-completed' : ''
                }`}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="toc-link-indicator" aria-hidden="true">
                  {isCompleted ? (
                    <CheckCircle2 size={13} strokeWidth={2.4} />
                  ) : (
                    <span className="toc-link-dot" />
                  )}
                </span>
                <span className="toc-link-text">
                  {t(item.labelVi, item.labelEn)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Madgicx-Style Sticky Micro-Conversion Widget */}
        <div className="toc-micro-cta">
          <div className="toc-micro-kicker">
            <span className="toc-live-dot" aria-hidden="true" />
            <span>
              {pillarTag === 'Academy'
                ? t('DIGO Academy · Thực chiến', 'DIGO Academy · Hands-On')
                : pillarTag === 'Infra'
                ? t('DIGO Infra · Server-Side', 'DIGO Infra · Server-Side')
                : t('DIGO Growth · Tăng trưởng', 'DIGO Growth · Full-Funnel')}
            </span>
          </div>
          <p className="toc-micro-copy">
            {pillarTag === 'Academy'
              ? t(
                  'Muốn áp dụng trực tiếp khung thực hành này cùng Mentor?',
                  'Want to master this workflow 1-on-1 with our Mentors?'
                )
              : pillarTag === 'Infra'
              ? t(
                  'Cần kiểm toán hệ thống CAPI & dữ liệu First-Party?',
                  'Need a technical audit of your CAPI & First-Party Data?'
                )
              : t(
                  'Muốn áp dụng hệ thống CRO & Creative Testing này?',
                  'Ready to deploy this CRO & Creative Testing system?'
                )}
          </p>
          {onQuickAction && (
            <button
              type="button"
              className="toc-micro-btn"
              onClick={onQuickAction}
            >
              <span>
                {pillarTag === 'Academy'
                  ? t('Khám phá Khóa học', 'Explore Cohort')
                  : pillarTag === 'Infra'
                  ? t('Nhận Kiểm toán Data', 'Book Data Audit')
                  : t('Nhận Tư vấn Tăng trưởng', 'Book Growth Call')}
              </span>
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </button>
          )}
          {readTime && (
            <div className="toc-readtime-note">
              {t('Thời lượng ước tính:', 'Estimated read:')} <strong>{readTime}</strong>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
