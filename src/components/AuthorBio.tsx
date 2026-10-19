import React from 'react';
import { ShieldCheck, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ArticleAuthor } from '../data/articlesData';

interface AuthorBioProps {
  author: ArticleAuthor;
  variant?: 'compact' | 'full';
  publishedDate?: string;
  readTime?: string;
  onConsultClick?: () => void;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({
  author,
  variant = 'full',
  publishedDate,
  readTime,
  onConsultClick,
}) => {
  const { t } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className="author-bio-compact" aria-label={t('Thông tin tác giả', 'Author information')}>
        <div
          className="author-avatar-circle compact"
          style={{ background: author.avatarGradient }}
          aria-hidden="true"
        >
          <span>{author.avatarInitials}</span>
          <span className="author-verified-dot" title={t('Chuyên gia xác thực E-E-A-T', 'Verified E-E-A-T Expert')}>
            <ShieldCheck size={12} strokeWidth={2.6} />
          </span>
        </div>
        <div className="author-compact-meta">
          <div className="author-compact-name-row">
            <strong className="author-compact-name">{author.name}</strong>
            <span className="author-eeat-pill">
              <ShieldCheck size={12} strokeWidth={2.4} />
              <span>{t('Chuyên gia Kiểm định', 'E-E-A-T Verified')}</span>
            </span>
          </div>
          <div className="author-compact-sub">
            <span>{t(author.roleVi, author.roleEn)}</span>
            {publishedDate && (
              <>
                <span className="author-meta-sep" aria-hidden="true">·</span>
                <span>{publishedDate}</span>
              </>
            )}
            {readTime && (
              <>
                <span className="author-meta-sep" aria-hidden="true">·</span>
                <span className="author-meta-mono">{readTime}</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  const stats = t('vi', 'en') === 'vi' ? author.statsVi : author.statsEn;

  return (
    <section
      className="author-bio-card"
      aria-label={t('Hồ sơ chuyên gia & Tác giả E-E-A-T', 'E-E-A-T Author Profile')}
    >
      <div className="author-bio-top-ribbon">
        <span className="author-ribbon-badge">
          <Award size={14} strokeWidth={2.4} />
          <span>{t('HỒ SƠ TÁC GIẢ & KIỂM ĐỊNH CHUYÊN MÔN (E-E-A-T)', 'AUTHORSHIP & E-E-A-T CLINICAL REVIEW')}</span>
        </span>
        <span className="author-ribbon-trust">
          <Sparkles size={13} strokeWidth={2.2} />
          <span>{t('Thực chiến 100% từ Dự án DIGO', '100% Field-Tested at DIGO')}</span>
        </span>
      </div>

      <div className="author-bio-main">
        <div className="author-avatar-wrap">
          <div
            className="author-avatar-circle full"
            style={{ background: author.avatarGradient }}
            aria-hidden="true"
          >
            <span>{author.avatarInitials}</span>
          </div>
          <span className="author-avatar-ring" aria-hidden="true" />
        </div>

        <div className="author-bio-content">
          <div className="author-bio-header">
            <div>
              <h3 className="author-bio-name">{author.name}</h3>
              <p className="author-bio-role">{t(author.roleVi, author.roleEn)}</p>
            </div>
            {onConsultClick && (
              <button
                type="button"
                className="author-consult-pill"
                onClick={onConsultClick}
              >
                <span>{t('Đặt lịch cố vấn 1:1', 'Book 1:1 Advisory')}</span>
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </button>
            )}
          </div>

          <p className="author-bio-credentials">
            {t(author.credentialsVi, author.credentialsEn)}
          </p>

          <p className="author-bio-description">
            {t(author.bioVi, author.bioEn)}
          </p>

          <div className="author-stats-row">
            {stats.map((stat, idx) => (
              <span key={idx} className="author-stat-pill">
                <span className="author-stat-dot" aria-hidden="true" />
                <span>{stat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
