import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PartnerTickerSkeleton } from './PartnerTickerSkeleton';

export { PartnerTickerSkeleton };

export interface PartnerItem {
  id: string;
  name: string;
  categoryVi: string;
  categoryEn: string;
  accentColor: string;
  glyph: string;
}

const DEFAULT_PARTNERS: PartnerItem[] = [
  {
    id: 'vinamilk',
    name: 'VINAMILK',
    categoryVi: 'FMCG & Dinh dưỡng',
    categoryEn: 'FMCG & Nutrition',
    accentColor: '#005BAC',
    glyph: 'VM',
  },
  {
    id: 'shopee',
    name: 'SHOPEE',
    categoryVi: 'Thương mại điện tử',
    categoryEn: 'E-Commerce Platform',
    accentColor: '#EE4D2D',
    glyph: 'SP',
  },
  {
    id: 'highlands',
    name: 'HIGHLANDS COFFEE',
    categoryVi: 'Chuỗi F&B',
    categoryEn: 'F&B Retail Chain',
    accentColor: '#B22830',
    glyph: 'HC',
  },
  {
    id: 'tgdd',
    name: 'THẾ GIỚI DI ĐỘNG',
    categoryVi: 'Bán lẻ công nghệ',
    categoryEn: 'Tech Retail Giant',
    accentColor: '#F59E0B',
    glyph: 'MW',
  },
  {
    id: 'vng',
    name: 'VNG CORPORATION',
    categoryVi: 'Kỳ lân công nghệ',
    categoryEn: 'Tech Unicorn',
    accentColor: '#F40009',
    glyph: 'VNG',
  },
  {
    id: 'masan',
    name: 'MASAN CONSUMER',
    categoryVi: 'Hàng tiêu dùng nhanh',
    categoryEn: 'FMCG Conglomerate',
    accentColor: '#D9381E',
    glyph: 'MS',
  },
  {
    id: 'grab',
    name: 'GRAB VIETNAM',
    categoryVi: 'Siêu ứng dụng đa dịch vụ',
    categoryEn: 'Superapp Ecosystem',
    accentColor: '#00B14F',
    glyph: 'GR',
  },
  {
    id: 'vcb',
    name: 'VIETCOMBANK',
    categoryVi: 'Tài chính - Ngân hàng',
    categoryEn: 'Banking & Finance',
    accentColor: '#007A33',
    glyph: 'VCB',
  },
];

interface PartnerTickerProps {
  partners?: PartnerItem[];
  isLoading?: boolean;
  fetchDelayMs?: number;
}

export const PartnerTicker: React.FC<PartnerTickerProps> = ({
  partners = DEFAULT_PARTNERS,
  isLoading,
  fetchDelayMs = 620,
}) => {
  const { t } = useLanguage();
  const [internalLoading, setInternalLoading] = useState<boolean>(
    isLoading !== undefined ? isLoading : fetchDelayMs > 0
  );

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

  if (internalLoading) {
    return <PartnerTickerSkeleton pillCount={partners.length || 8} />;
  }

  // Duplicate array for seamless infinite CSS marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section
      className="partner-ticker-section is-hydrated-reveal"
      aria-label={t('Đối tác & Doanh nghiệp đồng hành', 'Trusted Enterprise Partners')}
    >
      <div className="container">
        <div className="partner-ticker-header">
          <span className="partner-ticker-badge">
            <span className="partner-live-dot" aria-hidden="true" />
            {t('HỆ SINH THÁI ĐỐI TÁC', 'TRUSTED NETWORK')}
          </span>
          <p className="partner-ticker-caption">
            {t(
              'Đồng hành đào tạo năng lực & tối ưu hệ thống tăng trưởng cùng các đội ngũ dẫn đầu thị trường',
              'Empowering capability building & measurable growth infrastructure across market-leading teams'
            )}
          </p>
        </div>
      </div>

      <div className="partner-marquee-viewport">
        <div className="partner-marquee-track">
          {marqueeList.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="partner-logo-pill"
              style={
                {
                  '--partner-accent': partner.accentColor,
                } as React.CSSProperties
              }
            >
              <span className="partner-glyph" aria-hidden="true">
                {partner.glyph}
              </span>
              <div className="partner-meta">
                <strong className="partner-name">{partner.name}</strong>
                <span className="partner-category">
                  {t(partner.categoryVi, partner.categoryEn)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
