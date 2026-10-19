import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: 'Business & Growth',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError(
        t(
          'Vui lòng điền đầy đủ họ tên và email của bạn.',
          'Please provide both your name and email address.'
        )
      );
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      area: 'Business & Growth',
      message: '',
    });
    setSubmitted(false);
    setError('');
  };

  return (
    <main>
      <section className="page-hero section-shell">
        <div className="container narrow">
          <p className="section-kicker">{t('Liên hệ', 'Contact')}</p>
          <h1>
            {t(
              'Cùng tìm bước đi tiếp theo phù hợp cho bạn.',
              'Let’s find the right next step.'
            )}
          </h1>
          <p>
            {t(
              'Chia sẻ bối cảnh và mục tiêu của bạn. Đội ngũ DIGO sẽ kết nối bạn với chuyên gia phù hợp về tăng trưởng, đào tạo hoặc hạ tầng kỹ thuật.',
              'Share your context and we’ll route you to the right conversation for growth, learning, or technical infrastructure.'
            )}
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ paddingTop: '10px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {submitted ? (
            <div className="evidence-panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(200, 138, 50, 0.2)',
                  color: 'var(--brand-gold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                }}
              >
                ✓
              </div>
              <h2 style={{ color: '#fff', marginBottom: '12px' }}>
                {t('Cảm ơn bạn đã liên hệ!', 'Thank you for reaching out!')}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px', margin: '0 auto 24px auto' }}>
                {t(
                  `Chúng tôi đã tiếp nhận thông tin từ ${formData.name} (${formData.email}) về lĩnh vực "${formData.area}". Đội ngũ DIGO sẽ phản hồi trong vòng 24 giờ làm việc.`,
                  `We have received details from ${formData.name} (${formData.email}) regarding "${formData.area}". A DIGO specialist will be in touch within 24 business hours.`
                )}
              </p>
              <button
                type="button"
                className="button button-secondary"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                onClick={handleReset}
              >
                {t('Gửi tin nhắn khác', 'Send another message')}
              </button>
            </div>
          ) : (
            <form
              className="evidence-panel"
              style={{ display: 'grid', gap: '18px' }}
              onSubmit={handleSubmit}
            >
              {error && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(217, 27, 36, 0.2)',
                    border: '1px solid var(--brand-red)',
                    color: '#ff8a80',
                    fontSize: '0.9rem',
                  }}
                >
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" style={{ color: '#fff', fontWeight: 600 }}>
                  {t('Họ và tên', 'Name')} *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('Nguyễn Văn A', 'John Doe')}
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ color: '#fff', fontWeight: 600 }}>
                  {t('Email liên hệ', 'Email')} *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="area" style={{ color: '#fff', fontWeight: 600 }}>
                  {t('Lĩnh vực quan tâm', 'Area of interest')}
                </label>
                <select
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#151414',
                    color: '#fff',
                    outline: 'none',
                  }}
                >
                  <option value="Business & Growth">
                    {t('Doanh nghiệp & Tăng trưởng (Business & Growth)', 'Business & Growth')}
                  </option>
                  <option value="Learning & Academy">
                    {t('Đào tạo & Học viện (Learning & Academy)', 'Learning & Academy')}
                  </option>
                  <option value="Infrastructure & Technical">
                    {t('Hạ tầng dữ liệu & Kỹ thuật (Infrastructure & Technical)', 'Infrastructure & Technical')}
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ color: '#fff', fontWeight: 600 }}>
                  {t('Mô tả nhu cầu / bối cảnh', 'Brief description')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t(
                    'Chia sẻ ngắn gọn về quy mô hiện tại, thách thức gặp phải hoặc mong muốn cụ thể...',
                    'Briefly describe your current goals, challenges, or what you hope to achieve...'
                  )}
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#fff',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                ></textarea>
              </div>

              <button type="submit" className="button button-primary">
                {t('Gửi thông tin', 'Submit')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="section-shell section-alt">
        <div className="container narrow text-center">
          <p className="section-kicker">{t('Kênh liên hệ trực tiếp', 'Direct contact channels')}</p>
          <h2>{t('Luôn sẵn sàng trao đổi', 'Direct access to the team')}</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '24px',
            }}
          >
            <div className="info-card" style={{ flex: '1 1 240px', minHeight: 'auto', padding: '24px' }}>
              <span className="card-tag">Email</span>
              <p style={{ marginTop: '12px', fontWeight: 600, color: 'var(--text)' }}>
                hello@digo.com
              </p>
              <a href="mailto:hello@digo.com">{t('Gửi email ngay →', 'Send email →')}</a>
            </div>
            <div className="info-card" style={{ flex: '1 1 240px', minHeight: 'auto', padding: '24px' }}>
              <span className="card-tag">Hotline</span>
              <p style={{ marginTop: '12px', fontWeight: 600, color: 'var(--text)' }}>
                +84 000 000 000
              </p>
              <a href="tel:+84000000000">{t('Gọi hotline →', 'Call now →')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
