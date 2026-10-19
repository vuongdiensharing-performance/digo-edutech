import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SocialProofSliderSkeleton } from './SocialProofSliderSkeleton';

export { SocialProofSliderSkeleton };

export interface SocialProofItem {
  id: string;
  tagVi: string;
  tagEn: string;
  metricBadge: string;
  quoteVi: string;
  quoteEn: string;
  authorName: string;
  authorRoleVi: string;
  authorRoleEn: string;
  organization: string;
  avatarInitials: string;
  accentVariant?: 'red' | 'gold' | 'dark';
}

interface SocialProofSliderProps {
  kickerVi: string;
  kickerEn: string;
  titleVi: string;
  titleEn: string;
  subtitleVi?: string;
  subtitleEn?: string;
  items: SocialProofItem[];
  variant?: 'casestudy' | 'testimonial';
  autoPlayMs?: number;
  isLoading?: boolean;
  fetchDelayMs?: number;
}

export const SocialProofSlider: React.FC<SocialProofSliderProps> = ({
  kickerVi,
  kickerEn,
  titleVi,
  titleEn,
  subtitleVi,
  subtitleEn,
  items,
  variant = 'casestudy',
  autoPlayMs = 6500,
  isLoading,
  fetchDelayMs = 740,
}) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [internalLoading, setInternalLoading] = useState<boolean>(
    isLoading !== undefined ? isLoading : fetchDelayMs > 0
  );

  const total = items.length;

  useEffect(() => {
    if (isLoading !== undefined) {
      setInternalLoading(isLoading);
      return;
    }
    if (fetchDelayMs <= 0) {
      setInternalLoading(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setInternalLoading(false);
    }, fetchDelayMs);
    return () => window.clearTimeout(timer);
  }, [isLoading, fetchDelayMs]);

  const handleNext = useCallback(() => {
    if (total <= 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (internalLoading || isPaused || total <= 1) return;
    const timer = window.setInterval(handleNext, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [internalLoading, isPaused, total, autoPlayMs, handleNext]);

  if (internalLoading) {
    return (
      <SocialProofSliderSkeleton
        cardCount={items?.length || 3}
        showSubtitle={Boolean(subtitleVi && subtitleEn)}
      />
    );
  }

  if (!items || items.length === 0) return null;

  return (
    <section
      className="social-proof-section section-shell is-hydrated-reveal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="social-proof-top">
          <div className="social-proof-heading">
            <p className="section-kicker">{t(kickerVi, kickerEn)}</p>
            <h2>{t(titleVi, titleEn)}</h2>
            {subtitleVi && subtitleEn && (
              <p className="lead social-proof-sub">{t(subtitleVi, subtitleEn)}</p>
            )}
          </div>

          <div className="social-proof-controls" aria-label={t('Điều hướng', 'Slider controls')}>
            <button
              type="button"
              className="slider-pill-btn"
              onClick={handlePrev}
              aria-label={t('Slide trước', 'Previous slide')}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="slider-counter-pill">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="slider-counter-divider">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>
            <button
              type="button"
              className="slider-pill-btn"
              onClick={handleNext}
              aria-label={t('Slide tiếp theo', 'Next slide')}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop 3-card dynamic bento / spring deck + active spotlight */}
        <div className="social-proof-deck">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const accentClass =
              item.accentVariant === 'gold'
                ? 'accent-gold'
                : item.accentVariant === 'dark'
                ? 'accent-dark'
                : 'accent-red';

            return (
              <article
                key={item.id}
                className={`social-proof-card ${accentClass} ${
                  isActive ? 'is-active' : 'is-Preview'
                }`}
                onClick={() => setActiveIndex(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
              >
                <div className="social-card-top">
                  <span className="card-tag">{t(item.tagVi, item.tagEn)}</span>
                  <span className="social-metric-pill">
                    {variant === 'casestudy' ? (
                      <TrendingUp size={14} aria-hidden="true" />
                    ) : (
                      <Award size={14} aria-hidden="true" />
                    )}
                    {item.metricBadge}
                  </span>
                </div>

                <div className="social-quote-body">
                  <Quote className="social-quote-icon" size={28} aria-hidden="true" />
                  <p className="social-quote-text">“{t(item.quoteVi, item.quoteEn)}”</p>
                </div>

                <div className="social-card-footer">
                  <div className="social-avatar-pill" aria-hidden="true">
                    {item.avatarInitials}
                  </div>
                  <div className="social-author-info">
                    <strong>{item.authorName}</strong>
                    <span>
                      {t(item.authorRoleVi, item.authorRoleEn)} · {item.organization}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pill Pagination Dots */}
        <div className="social-proof-dots" role="tablist">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`${t('Chuyển đến mục', 'Go to item')} ${idx + 1}`}
              className={`social-dot-pill ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
