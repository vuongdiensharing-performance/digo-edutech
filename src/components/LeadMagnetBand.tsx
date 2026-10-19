import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LeadMagnetBand: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'leader' | 'marketer' | 'learner'>('leader');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
    }, 550);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
  };

  return (
    <section
      className="lead-magnet-band"
      aria-label={t(
        'Nhận Báo cáo & Playbook Tăng trưởng DIGO 2026',
        'Download DIGO 2026 Growth & Measurement Playbook'
      )}
    >
      <div className="container">
        <div className="lead-magnet-shell">
          {/* Decorative Coca-Cola Effervescent Carbonation Orbs */}
          <div className="lead-magnet-bubbles" aria-hidden="true">
            <span className="lm-bubble b-1" />
            <span className="lm-bubble b-2" />
            <span className="lm-bubble b-3" />
            <span className="lm-bubble b-4" />
          </div>

          <div className="lead-magnet-grid">
            <div className="lead-magnet-copy">
              <div className="lead-magnet-pill-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>
                  {t(
                    'TÀI LIỆU ĐỘC QUYỀN · MIỄN PHÍ TẢI VỀ',
                    'FREE REPORT & PLAYBOOK · 2026 EDITION'
                  )}
                </span>
              </div>

              <h2>
                {t(
                  'Báo Cáo Đo Lường & Khung Vận Hành Tăng Trưởng Thực Chiến 2026',
                  'The 2026 Growth Measurement & Execution Architecture Report'
                )}
              </h2>

              <p>
                {t(
                  'Nhận ngay bộ Playbook 48 trang đúc kết từ các dự án tối ưu CPA, kiến trúc dữ liệu Server-side và khung năng lực đào tạo nội bộ của DIGO.',
                  'Get our 48-page practical playbook packed with CPA reduction frameworks, server-side attribution blueprints, and team capability rubrics.'
                )}
              </p>

              <div className="lead-magnet-perks">
                <span className="lm-perk-badge">
                  <FileText size={14} aria-hidden="true" />
                  {t('PDF 48 Trang + Template Notion', '48-Page PDF + Notion Templates')}
                </span>
                <span className="lm-perk-badge">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  {t('Số liệu kiểm chứng 100%', '100% Verified Case Metrics')}
                </span>
              </div>
            </div>

            <div className="lead-magnet-form-card">
              {status === 'success' ? (
                <div className="lead-magnet-success" role="status" aria-live="polite">
                  <div className="lm-success-icon">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3>
                    {t(
                      'Tuyệt vời! Tài liệu đã sẵn sàng cho bạn.',
                      'Awesome! Your Playbook is ready.'
                    )}
                  </h3>
                  <p>
                    {t(
                      `Chúng tôi đã gửi bản full PDF & bộ khung đo lường tới ${email}. Bạn cũng có thể mở trực tiếp ngay bên dưới.`,
                      `We sent the full PDF and measurement templates to ${email}. You can also access it directly below.`
                    )}
                  </p>
                  <div className="lm-success-actions">
                    <a
                      href="#insights"
                      className="button button-primary"
                      onClick={handleReset}
                    >
                      {t('Đọc tóm tắt Playbook ngay →', 'Read Playbook Summary Now →')}
                    </a>
                    <button
                      type="button"
                      className="lm-reset-link"
                      onClick={handleReset}
                    >
                      {t('Gửi tới một email khác', 'Send to another email')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="lead-magnet-form" noValidate>
                  <div className="lm-role-selector" role="group" aria-label={t('Vai trò của bạn', 'Your role')}>
                    <button
                      type="button"
                      className={`lm-role-pill ${role === 'leader' ? 'active' : ''}`}
                      onClick={() => setRole('leader')}
                    >
                      {t('C-Level / Founder', 'C-Level / Founder')}
                    </button>
                    <button
                      type="button"
                      className={`lm-role-pill ${role === 'marketer' ? 'active' : ''}`}
                      onClick={() => setRole('marketer')}
                    >
                      {t('Growth / Marketer', 'Growth / Marketer')}
                    </button>
                    <button
                      type="button"
                      className={`lm-role-pill ${role === 'learner' ? 'active' : ''}`}
                      onClick={() => setRole('learner')}
                    >
                      {t('Học viên / Chuyên viên', 'Learner / Specialist')}
                    </button>
                  </div>

                  <div className="lm-pill-input-group">
                    <input
                      type="email"
                      className={`lm-pill-input ${status === 'error' ? 'input-error' : ''}`}
                      placeholder={t(
                        'Nhập email công việc của bạn (VD: ten@congty.com)...',
                        'Enter your work email (e.g., name@company.com)...'
                      )}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      aria-label={t('Địa chỉ Email nhận tài liệu', 'Work Email Address')}
                      required
                    />
                    <button
                      type="submit"
                      className="button button-primary lm-submit-pill"
                      disabled={status === 'submitting'}
                    >
                      <span>
                        {status === 'submitting'
                          ? t('Đang chuẩn bị...', 'Preparing...')
                          : t('Tải Report Ngay', 'Get Free Report')}
                      </span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="lm-error-msg" role="alert">
                      {t(
                        'Vui lòng nhập địa chỉ email hợp lệ để nhận bộ tài liệu.',
                        'Please enter a valid email address to receive the report.'
                      )}
                    </p>
                  )}

                  <p className="lm-privacy-note">
                    {t(
                      'Không spam. Chỉ gửi báo cáo chuyên sâu & nghiên cứu thực chiến từ DIGO.',
                      'Zero spam. Only high-signal research and practical playbooks from DIGO.'
                    )}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
