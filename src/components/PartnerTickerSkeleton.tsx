import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PartnerTickerSkeletonProps {
  pillCount?: number;
}

export const PartnerTickerSkeleton: React.FC<PartnerTickerSkeletonProps> = ({
  pillCount = 8,
}) => {
  const { t } = useLanguage();
  const skeletonItems = Array.from({ length: pillCount });

  return (
    <section
      className="partner-ticker-section is-skeleton-loading"
      aria-busy="true"
      aria-live="polite"
      aria-label={t(
        'Đang tải danh sách đối tác doanh nghiệp...',
        'Loading enterprise partners...'
      )}
    >
      <div className="container">
        <div className="partner-ticker-header">
          <span className="partner-ticker-badge coke-skeleton-badge">
            <span className="partner-live-dot" aria-hidden="true" />
            <span className="coke-skeleton-bar coke-skeleton-red" style={{ width: '128px', height: '12px' }} />
          </span>
          <div
            className="coke-skeleton-bar"
            style={{ width: 'min(420px, 78vw)', height: '16px' }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="partner-marquee-viewport" aria-hidden="true">
        <div className="partner-marquee-track is-skeleton-track">
          {skeletonItems.map((_, idx) => (
            <div
              key={`partner-skeleton-${idx}`}
              className="partner-logo-pill partner-skeleton-pill coke-shimmer-surface"
            >
              <span className="partner-glyph coke-skeleton-glyph" />
              <div className="partner-meta">
                <span
                  className="coke-skeleton-bar coke-skeleton-strong"
                  style={{ width: idx % 2 === 0 ? '118px' : '96px', height: '14px' }}
                />
                <span
                  className="coke-skeleton-bar"
                  style={{ width: idx % 2 === 0 ? '88px' : '108px', height: '11px', marginTop: '4px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
