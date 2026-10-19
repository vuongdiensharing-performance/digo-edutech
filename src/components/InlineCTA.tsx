import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Download, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ArticleInlineCTA } from '../data/articlesData';
import { PageId } from '../types';

interface InlineCTAProps {
  cta: ArticleInlineCTA;
  onNavigate?: (page: PageId) => void;
}

export const InlineCTA: React.FC<InlineCTAProps> = ({ cta, onNavigate }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showInlineInput, setShowInlineInput] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePrimaryAction = () => {
    if (!showInlineInput) {
      setShowInlineInput(true);
      return;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg(
        t(
          'Vui lòng nhập email công việc hợp lệ để nhận tài liệu.',
          'Please enter a valid work email to receive the playbook.'
        )
      );
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <aside
      className={`inline-cta-box variant-${cta.variant}`}
      aria-label={t('Tài nguyên & Hành động khuyến nghị', 'Recommended Resource & Action')}
    >
      {/* Decorative Carbonation Fizz Bubbles */}
      <div className="inline-cta-fizz-layer" aria-hidden="true">
        <span className="fizz-orb orb-1" />
        <span className="fizz-orb orb-2" />
        <span className="fizz-orb orb-3" />
        <span className="fizz-orb orb-4" />
        <span className="fizz-orb orb-5" />
      </div>

      <div className="inline-cta-inner">
        <div className="inline-cta-top-meta">
          <span className="inline-cta-badge">
            <Sparkles size={13} strokeWidth={2.5} />
            <span>{t(cta.badgeVi, cta.badgeEn)}</span>
          </span>
          <span className="inline-cta-resource-tag">
            <BookOpen size={13} strokeWidth={2.2} />
            <span>{t(cta.resourceNameVi, cta.resourceNameEn)}</span>
          </span>
        </div>

        <h3 className="inline-cta-title">{t(cta.titleVi, cta.titleEn)}</h3>
        <p className="inline-cta-desc">{t(cta.descVi, cta.descEn)}</p>

        {isSubmitted ? (
          <div className="inline-cta-success" role="status">
            <CheckCircle2 size={22} strokeWidth={2.5} />
            <div className="inline-cta-success-text">
              <strong>
                {t(
                  'Đã gửi bộ tài liệu & khung thực hành tới hộp thư của bạn!',
                  'Playbook & framework dispatched to your inbox!'
                )}
              </strong>
              <span>
                {t(
                  `Tài liệu "${cta.resourceNameVi}" đã sẵn sàng cho ${email}.`,
                  `"${cta.resourceNameEn}" has been unlocked for ${email}.`
                )}
              </span>
            </div>
            {onNavigate && (
              <button
                type="button"
                className="inline-cta-secondary-pill"
                onClick={() => onNavigate(cta.targetPage)}
              >
                <span>{t('Khám phá giải pháp', 'Explore Pillar')}</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        ) : showInlineInput ? (
          <form className="inline-cta-capture-form" onSubmit={handleFormSubmit} noValidate>
            <div className="inline-cta-pill-group">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder={t(
                  'Nhập email của bạn để nhận file PDF + Template...',
                  'Enter your work email for instant PDF + Template...'
                )}
                className="inline-cta-pill-input"
                aria-label={t('Email nhận tài liệu', 'Email for resource download')}
                autoFocus
              />
              <button type="submit" className="inline-cta-fizz-btn">
                <span className="btn-fizz-bubbles" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <Download size={16} strokeWidth={2.4} />
                <span>{t('Gửi Tài Liệu Ngay', 'Send Me the Playbook')}</span>
              </button>
            </div>
            {errorMsg && <p className="inline-cta-error">{errorMsg}</p>}
          </form>
        ) : (
          <div className="inline-cta-actions">
            <button
              type="button"
              className="inline-cta-fizz-btn"
              onClick={handlePrimaryAction}
            >
              <span className="btn-fizz-bubbles" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>{t(cta.buttonTextVi, cta.buttonTextEn)}</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </button>

            {onNavigate && (
              <button
                type="button"
                className="inline-cta-ghost-btn"
                onClick={() => onNavigate(cta.targetPage)}
              >
                <span>
                  {cta.targetPage === 'academy'
                    ? t('Hoặc xem lộ trình DIGO Academy →', 'Or view DIGO Academy syllabus →')
                    : cta.targetPage === 'infra'
                    ? t('Hoặc xem kiến trúc DIGO Infra →', 'Or explore DIGO Infra architecture →')
                    : t('Hoặc trao đổi cùng chuyên gia →', 'Or speak with a strategist →')}
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};
