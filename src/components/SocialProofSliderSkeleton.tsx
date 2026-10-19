import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SocialProofSliderSkeletonProps {
  cardCount?: number;
  showSubtitle?: boolean;
}

export const SocialProofSliderSkeleton: React.FC<SocialProofSliderSkeletonProps> = ({
  cardCount = 3,
  showSubtitle = true,
}) => {
  const { t } = useLanguage();
  const cards = Array.from({ length: cardCount });

  return (
    <section
      className="social-proof-section section-shell is-skeleton-loading"
      aria-busy="true"
      aria-live="polite"
      aria-label={t(
        'Đang tải dữ liệu chứng thực & case study...',
        'Loading case studies and testimonials...'
      )}
    >
      <div className="container">
        {/* Header & Controls Skeleton matching .social-proof-top */}
        <div className="social-proof-top" aria-hidden="true">
          <div className="social-proof-heading" style={{ width: '100%' }}>
            <div className="coke-skeleton-kicker-pill">
              <span className="partner-live-dot" />
              <span
                className="coke-skeleton-bar coke-skeleton-red"
                style={{ width: '160px', height: '12px' }}
              />
            </div>
            <div
              className="coke-skeleton-bar coke-skeleton-strong"
              style={{
                width: 'min(540px, 88%)',
                height: '38px',
                borderRadius: '9999px',
                marginTop: '14px',
                marginBottom: '10px',
              }}
            />
            <div
              className="coke-skeleton-bar coke-skeleton-strong"
              style={{
                width: 'min(380px, 68%)',
                height: '38px',
                borderRadius: '9999px',
                marginBottom: showSubtitle ? '18px' : '0',
              }}
            />
            {showSubtitle && (
              <>
                <div
                  className="coke-skeleton-bar"
                  style={{ width: 'min(620px, 92%)', height: '16px', marginBottom: '8px' }}
                />
                <div
                  className="coke-skeleton-bar"
                  style={{ width: 'min(460px, 74%)', height: '16px' }}
                />
              </>
            )}
          </div>

          <div className="social-proof-controls coke-shimmer-surface">
            <div className="slider-pill-btn coke-skeleton-circle" />
            <div className="slider-counter-pill">
              <span
                className="coke-skeleton-bar coke-skeleton-red"
                style={{ width: '42px', height: '14px' }}
              />
            </div>
            <div className="slider-pill-btn coke-skeleton-circle" />
          </div>
        </div>

        {/* 3-Card Bento Deck Skeleton matching .social-proof-deck */}
        <div className="social-proof-deck" aria-hidden="true">
          {cards.map((_, idx) => {
            const isSpotlight = idx === 0;
            return (
              <article
                key={`social-skeleton-card-${idx}`}
                className={`social-proof-card social-skeleton-card coke-shimmer-surface ${
                  isSpotlight ? 'is-active-skeleton' : ''
                }`}
              >
                {/* Top Row: Tag + Metric Badge */}
                <div className="social-card-top">
                  <span
                    className="coke-skeleton-bar coke-skeleton-red-soft"
                    style={{ width: '116px', height: '28px', borderRadius: '9999px' }}
                  />
                  <span
                    className="coke-skeleton-bar coke-skeleton-dark-pill"
                    style={{ width: '104px', height: '32px', borderRadius: '9999px' }}
                  />
                </div>

                {/* Quote Body */}
                <div className="social-quote-body">
                  <div className="coke-skeleton-quote-mark" />
                  <div className="coke-skeleton-lines">
                    <span className="coke-skeleton-bar" style={{ width: '96%', height: '15px' }} />
                    <span className="coke-skeleton-bar" style={{ width: '92%', height: '15px' }} />
                    <span className="coke-skeleton-bar" style={{ width: '88%', height: '15px' }} />
                    <span className="coke-skeleton-bar" style={{ width: '64%', height: '15px' }} />
                  </div>
                </div>

                {/* Footer Row: Avatar Orb + Author Meta */}
                <div className="social-card-footer">
                  <div className="social-avatar-pill coke-skeleton-avatar-orb" />
                  <div className="social-author-info" style={{ flex: 1 }}>
                    <span
                      className="coke-skeleton-bar coke-skeleton-strong"
                      style={{ width: '136px', height: '15px', marginBottom: '6px' }}
                    />
                    <span
                      className="coke-skeleton-bar"
                      style={{ width: '184px', height: '12px' }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination Dots Skeleton matching .social-proof-dots */}
        <div className="social-proof-dots" aria-hidden="true">
          {cards.map((_, idx) => (
            <span
              key={`social-skeleton-dot-${idx}`}
              className={`social-dot-pill ${idx === 0 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
