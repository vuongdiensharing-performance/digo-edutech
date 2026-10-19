export type Language = 'vi' | 'en';

export type PageId = 'home' | 'ecosystem' | 'academy' | 'growth' | 'infra' | 'insights' | 'contact' | 'privacy' | 'terms';

export interface InsightArticle {
  id: string;
  tag: 'Growth' | 'Academy' | 'Infra';
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  contentVi?: string;
  contentEn?: string;
  readTime: string;
  date: string;
}
