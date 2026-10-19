import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const { t } = useLanguage();

  const isPrivacy = type === 'privacy';

  return (
    <main>
      <section className="page-hero section-shell">
        <div className="container narrow">
          <p className="section-kicker">
            {isPrivacy ? t('Bảo mật & Quyền riêng tư', 'Privacy & Trust') : t('Điều khoản sử dụng', 'Terms of Service')}
          </p>
          <h1>
            {isPrivacy
              ? t('Chính sách quyền riêng tư', 'Privacy Policy')
              : t('Điều khoản và Điều kiện sử dụng', 'Terms and Conditions')}
          </h1>
          <p>
            {t(
              'Có hiệu lực từ tháng 01/2026. DIGO EduTech cam kết minh bạch tối đa trong thu thập dữ liệu và tuân thủ các tiêu chuẩn quản trị cao nhất.',
              'Effective January 2026. DIGO EduTech is committed to complete transparency in data governance and operating standards.'
            )}
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ paddingTop: '0' }}>
        <div className="container narrow">
          <div className="info-card" style={{ padding: '36px', lineHeight: 1.8 }}>
            {isPrivacy ? (
              <div style={{ display: 'grid', gap: '20px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('1. Thu thập dữ liệu minh bạch', '1. Transparent Data Collection')}
                </h3>
                <p>
                  {t(
                    'DIGO EduTech chỉ thu thập thông tin người dùng được cung cấp chủ động (như biểu mẫu liên hệ, đăng ký khóa học, nhu cầu tư vấn doanh nghiệp). Chúng tôi không bán, chia sẻ hoặc thương mại hóa thông tin nhận dạng cá nhân của bạn cho bất kỳ bên thứ ba nào.',
                    'DIGO EduTech only collects user information provided voluntarily (such as through contact forms, program inquiries, and enterprise consultations). We never sell, lease, or commercialize your personal identification data with third parties.'
                  )}
                </p>

                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('2. Hạ tầng dữ liệu & Đo lường chuẩn xác', '2. Data Infrastructure & Measurement Integrity')}
                </h3>
                <p>
                  {t(
                    'Mọi dữ liệu đo lường kỹ thuật trong các dự án hợp tác đều được xử lý thông qua máy chủ bảo mật, tuân thủ chặt chẽ các quy định bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP và tiêu chuẩn an toàn quốc tế.',
                    'All measurement signals handled across enterprise engagements are transmitted through encrypted, server-side infrastructure in strict compliance with data protection laws and enterprise security protocols.'
                  )}
                </p>

                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('3. Quyền của người dùng', '3. User Rights')}
                </h3>
                <p>
                  {t(
                    'Bạn có toàn quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân của mình bất kỳ lúc nào bằng cách gửi email tới hello@digo.com.',
                    'You retain full rights to inspect, rectify, or request erasure of your personal data at any time by contacting hello@digo.com.'
                  )}
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '20px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('1. Nguyên tắc hoạt động', '1. Operational Principles')}
                </h3>
                <p>
                  {t(
                    'DIGO EduTech cung cấp các giải pháp đào tạo thực chiến, tư vấn tăng trưởng và kiến tạo hạ tầng dữ liệu. Mọi thỏa thuận hợp tác đều được xác lập dựa trên các mục tiêu đo lường rõ ràng và minh bạch.',
                    'DIGO EduTech provides capability education, growth execution frameworks, and data infrastructure solutions. All enterprise partnerships operate under verifiable, measurable milestone criteria.'
                  )}
                </p>

                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('2. Sở hữu trí tuệ', '2. Intellectual Property')}
                </h3>
                <p>
                  {t(
                    'Mọi tài liệu đào tạo, giáo trình học viện và cấu trúc mã nguồn do DIGO sở hữu đều được bảo hộ bản quyền. Học viên và đối tác được cấp quyền sử dụng trong khuôn khổ chương trình và điều khoản cam kết.',
                    'All proprietary frameworks, academy coursework, curriculum designs, and codebase architectures developed by DIGO remain protected under international intellectual property statutes.'
                  )}
                </p>

                <h3 style={{ fontSize: '1.4rem' }}>
                  {t('3. Cam kết chất lượng & Trách nhiệm', '3. Quality Commitment & Accountability')}
                </h3>
                <p>
                  {t(
                    'Chúng tôi tin vào bằng chứng thực tế hơn là lời hứa suông. Các số liệu và case study được công bố luôn phản ánh trung thực kết quả đo lường theo đúng chu kỳ và điều kiện thử nghiệm.',
                    'We believe in proof over promises. All published benchmarks and case analyses accurately reflect true performance data under documented testing conditions.'
                  )}
                </p>
              </div>
            )}

            <div style={{ marginTop: '30px' }}>
              <button
                type="button"
                className="button button-primary"
                onClick={() => onNavigate('home')}
              >
                {t('← Trở về trang chủ', '← Back to Home')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
