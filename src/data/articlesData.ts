export type ArticlePillar = 'Academy' | 'Growth' | 'Infra';

export type BlogCategoryKey =
  | 'ielts-tips'
  | 'performance-marketing'
  | 'edtech-insights'
  | 'digital-skills';

export interface ArticleAuthor {
  id: string;
  name: string;
  roleVi: string;
  roleEn: string;
  credentialsVi: string;
  credentialsEn: string;
  bioVi: string;
  bioEn: string;
  avatarInitials: string;
  avatarGradient: string;
  linkedinUrl?: string;
  statsVi: string[];
  statsEn: string[];
}

export interface ArticleSection {
  id: string;
  headingVi: string;
  headingEn: string;
  paragraphsVi: string[];
  paragraphsEn: string[];
  bulletsVi?: string[];
  bulletsEn?: string[];
  keyTakeawayVi?: string;
  keyTakeawayEn?: string;
}

export interface ArticleInlineCTA {
  variant: 'black' | 'red';
  badgeVi: string;
  badgeEn: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  buttonTextVi: string;
  buttonTextEn: string;
  resourceNameVi: string;
  resourceNameEn: string;
  targetPage: 'academy' | 'growth' | 'infra' | 'contact';
}

export interface DetailedArticle {
  id: string;
  slug: string;
  tag: ArticlePillar;
  categoryKey: BlogCategoryKey;
  categoryBadgeVi: string;
  categoryBadgeEn: string;
  thumbnailUrl: string;
  isPopular?: boolean;
  clusterNameVi: string;
  clusterNameEn: string;
  isCornerstone?: boolean;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  date: string;
  readTimeVi: string;
  readTimeEn: string;
  metricHighlightVi: string;
  metricHighlightEn: string;
  author: ArticleAuthor;
  inlineCta: ArticleInlineCTA;
  sections: ArticleSection[];
}

export const AUTHORS: Record<string, ArticleAuthor> = {
  vuongDien: {
    id: 'vuong-dien',
    name: 'Nguyễn Hoàng Vương Điền',
    roleVi: 'CEO / CMO · Phụ trách Kiến trúc Tăng trưởng & Hạ tầng Công nghệ @ DIGO EduTech',
    roleEn: 'CEO / CMO · Growth Architecture & Tech Infrastructure Lead @ DIGO EduTech',
    credentialsVi: '10+ năm Kiến trúc Tăng trưởng, Tối ưu CPQL & Đối soát Dữ liệu 1:1',
    credentialsEn: '10+ Years in Growth Architecture, CPQL Optimization & 1:1 CAPI Attribution',
    bioVi:
      'Trực tiếp kiến tạo hệ sinh thái DIGO EduTech với triết lý "Measure Ruthlessly. Build What You Teach. Scale Monopolies." Phụ trách Kiến trúc tăng trưởng hiệu suất (Tối ưu CPQL, Trang đích <1.2s) và Hạ tầng dữ liệu Server-Side CAPI đối soát 1:1 từ Lead đến Doanh thu.',
    bioEn:
      'Architect of the DIGO EduTech ecosystem driven by "Measure Ruthlessly. Build What You Teach. Scale Monopolies." Leads Performance Growth Architecture (CPQL Optimization, <1.2s Landing Pages) and 1:1 Server-Side CAPI Infrastructure.',
    avatarInitials: 'VĐ',
    avatarGradient: 'linear-gradient(135deg, #D91B24 0%, #0F0E0E 100%)',
    statsVi: ['Tối ưu CPQL -38%', 'Đối soát 1:1 CAPI', 'Trang đích <1.2s'],
    statsEn: ['-38% CPQL Optimization', '1:1 CAPI Reconciliation', '<1.2s Landing Speed'],
  },
  minhTriet: {
    id: 'minh-triet',
    name: 'Minh Triết',
    roleVi: 'Head of Data Infrastructure & Tracking @ DIGO Infra & Trust',
    roleEn: 'Head of Data Infrastructure & Tracking @ DIGO Infra & Trust',
    credentialsVi: 'Chuyên gia Kiến trúc Server-Side GTM, Meta CAPI & Đối soát 1:1 CRM',
    credentialsEn: 'Principal Architect in Server-Side GTM, Meta CAPI & 1:1 CRM Reconciliation',
    bioVi:
      'Chuyên gia thiết kế luồng dữ liệu First-Party và hệ thống đối soát 1:1 từ Lead đến Doanh thu cho doanh nghiệp E-commerce và EdTech quy mô lớn theo chuẩn bảo mật Zero-Trust.',
    bioEn:
      'Specializes in sovereign first-party data pipelines, cloud GTM clusters, and 1:1 lead-to-revenue attribution under Zero-Trust governance.',
    avatarInitials: 'MT',
    avatarGradient: 'linear-gradient(135deg, #0F0E0E 0%, #D91B24 100%)',
    statsVi: ['+38% Dữ liệu Khôi phục', 'Đối soát 1:1 CRM', 'Zero-Trust Governance'],
    statsEn: ['+38% Attribution Recovery', '1:1 CRM Match', 'Zero-Trust Governance'],
  },
  khanhLinh: {
    id: 'thanh-go',
    name: 'Lê Thị Thanh Gô',
    roleVi: 'CAO / CPO · Phụ trách Chất lượng Học thuật & Phương pháp Sư phạm @ DIGO EduTech',
    roleEn: 'CAO / CPO · Chief Academic & Pedagogy Officer @ DIGO EduTech',
    credentialsVi: 'Chuyên gia Thiết kế Chương trình Đào tạo Thực chiến, IELTS & EdTech Systems',
    credentialsEn: 'Chief Architect in Competency-Based Curriculum, IELTS & EdTech Systems',
    bioVi:
      'Phụ trách Chất lượng học thuật & Phương pháp sư phạm tại DIGO Academy. Thiết kế hệ thống đánh giá năng lực đầu ra theo tuần và vòng lặp phản hồi 1-1 (Practice Loops), giúp 92% học viên đạt và vượt mục tiêu cam kết ngay lần thi đầu.',
    bioEn:
      'Leads Academic Quality & Pedagogical Architecture at DIGO Academy. Pioneered weekly competency rubrics and 1-on-1 Practice Loops with a 92% first-attempt target achievement rate.',
    avatarInitials: 'TG',
    avatarGradient: 'linear-gradient(135deg, #C88A32 0%, #D91B24 100%)',
    statsVi: ['92% Đạt Mục tiêu Lần đầu', 'Coaching 1-1 Thực chiến', 'Chuẩn Đầu ra Hàng tuần'],
    statsEn: ['92% First-Attempt Pass', '1-on-1 Practice Loops', 'Weekly Output Rubrics'],
  },
};

export const ARTICLES_DATA: DetailedArticle[] = [
  {
    id: 'creative-testing',
    slug: 'creative-testing',
    tag: 'Growth',
    categoryKey: 'performance-marketing',
    categoryBadgeVi: 'Performance Marketing',
    categoryBadgeEn: 'Performance Marketing',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    clusterNameVi: 'Topic Cluster: Creative CRO & Paid Media',
    clusterNameEn: 'Topic Cluster: Creative CRO & Paid Media',
    isCornerstone: true,
    titleVi: 'Thử nghiệm sáng tạo ưu tiên đo lường: Khung vận hành giảm 38% CAC',
    titleEn: 'Measurement-First Creative Testing: The Operating System to Cut CAC by 38%',
    descVi:
      'Lựa chọn các chỉ số thực sự lý giải hiệu suất chuyển đổi trước khi mở rộng ngân sách quảng cáo Meta & TikTok quy mô lớn.',
    descEn:
      'Isolating the creative variables and financial metrics that actually explain downstream conversion before scaling paid spend.',
    date: '14 Oct 2026',
    readTimeVi: '6 phút đọc',
    readTimeEn: '6 min read',
    metricHighlightVi: '-38% Chi phí CAC',
    metricHighlightEn: '-38% Blended CAC',
    author: AUTHORS.vuongDien,
    inlineCta: {
      variant: 'red',
      badgeVi: 'TÀI LIỆU THỰC CHIẾN MIỄN PHÍ',
      badgeEn: 'FREE CRO & AD PLAYBOOK',
      titleVi: 'Tải ngay "Ma trận 36 Biến số Thử nghiệm Sáng tạo & Đo lường ROAS 2026"',
      titleEn: 'Download the "2026 Creative Testing Matrix & ROAS Attribution Blueprint"',
      descVi:
        'Bao gồm bảng tính phân bổ ngân sách sandbox, khung chấm điểm Hook/Hold Rate và quy trình cắt lỗ tự động đang áp dụng tại DIGO Growth.',
      descEn:
        'Includes our exact sandbox budget calculator, Hook-to-Hold diagnostic scorecard, and automated stop-loss rules used by DIGO Growth.',
      buttonTextVi: 'Nhận Playbook + Khung Kiểm Toán',
      buttonTextEn: 'Get Playbook + Audit Template',
      resourceNameVi: 'Creative Testing Matrix v4.2 (PDF + Notion)',
      resourceNameEn: 'Creative Testing Matrix v4.2 (PDF + Notion)',
      targetPage: 'growth',
    },
    sections: [
      {
        id: 'illusion-of-vanity-metrics',
        headingVi: '1. Cái bẫy của chỉ số bề nổi (CTR & 3-Second Views)',
        headingEn: '1. The Vanity Metric Trap: Why High CTR Often Destroys Margin',
        paragraphsVi: [
          'Trong kỷ nguyên thuật toán tự động hóa phân phối (Meta Advantage+, TikTok Smart Performance), phần lớn đội ngũ Media Buyer vẫn mắc kẹt trong việc tối ưu hóa các chỉ số bề nổi như CTR (Click-Through Rate) hoặc tỷ lệ xem 3 giây đầu tiên mà tách rời khỏi bài toán lợi nhuận ròng.',
          'Một mẫu quảng cáo giật tít có thể kéo CTR lên trên 3.5%, nhưng nếu thông điệp không đồng nhất với Landing Page phía sau, tỷ lệ chuyển đổi (CVR) sẽ sụt giảm nghiêm trọng và đẩy chi phí thu hút khách hàng (CAC) vượt ngưỡng hòa vốn.',
        ],
        paragraphsEn: [
          'In an era where platform algorithms manage audience targeting automatically (Meta Advantage+, TikTok Smart Performance), creative is your primary targeting lever. Yet most teams still optimize for shallow proxy metrics like raw CTR or 3-second thumbstop ratios divorced from net contribution margin.',
          'A sensational hook can easily inflate CTR past 3.5%, but when the visual promise disconnects from the post-click landing experience, conversion rates collapse and blended Customer Acquisition Cost (CAC) spirals past break-even.',
        ],
        keyTakeawayVi:
          'Đừng bao giờ đánh giá một mẫu Creative chỉ bằng chi phí mỗi lượt nhấp (CPC). Hãy đo lường Creative bằng Doanh thu trên mỗi 1,000 lượt hiển thị (eCPM Revenue) và Tỷ lệ Chuyển đổi đủ điều kiện (Qualified CVR).',
        keyTakeawayEn:
          'Never grade creative assets on CPC alone. Anchor creative evaluation on Revenue per Mille (eCPM Revenue) and Qualified Conversion Velocity.',
      },
      {
        id: 'hypothesis-driven-matrix',
        headingVi: '2. Thiết lập Ma trận Giả thuyết: Tách biệt Hook, Body và Offer',
        headingEn: '2. Hypothesis-Driven Testing: Isolating Hook, Body, and Offer Variables',
        paragraphsVi: [
          'Một quy trình thử nghiệm sáng tạo chuẩn mực tại DIGO Growth luôn bắt đầu bằng một giả thuyết rõ ràng: Biến thể này nhằm chứng minh luận điểm nào về tâm lý khách hàng? Nếu bạn thay đổi cả tiêu đề, hình ảnh, kịch bản lẫn ưu đãi trong cùng một lần test, bạn sẽ không bao giờ biết yếu tố nào thực sự tạo ra đơn hàng.',
          'Chúng tôi áp dụng nguyên tắc phân tách modular 80/20: Giữ cố định 80% cấu trúc đã chứng minh hiệu quả (Control) và chỉ thay đổi 20% biến số đang cần kiểm chứng trong môi trường ngân sách cô lập.',
        ],
        paragraphsEn: [
          'A disciplined creative testing framework at DIGO Growth begins with an explicit hypothesis: Which exact customer objection or psychological trigger is being tested? When teams alter the visual hook, script body, creator, and offer simultaneously, attribution learning drops to zero.',
          'We enforce a modular 80/20 isolation protocol: lock 80% of the proven control asset and mutate only one high-leverage variable per test cell inside an isolated sandbox campaign.',
        ],
        bulletsVi: [
          'Thumbstop Rate (3s / Impressions) > 32%: Đo lường sức hút thị giác và thông điệp mở đầu.',
          'Hold Rate (15sThruPlay / 3s Views) > 25%: Đo lường tính thuyết phục của luận điểm và cấu trúc kể chuyện.',
          'Outbound CTR > 1.5% kết hợp Landing Page CVR > 3.8%: Đo lường sự đồng bộ giữa quảng cáo và trang đích.',
        ],
        bulletsEn: [
          'Thumbstop Ratio (3s Views / Impressions) > 32%: Validates visual pattern interruption and opening hook.',
          'Hold Ratio (15s ThruPlay / 3s Views) > 25%: Validates narrative pacing, demonstration clarity, and proof.',
          'Outbound CTR > 1.5% paired with Post-Click CVR > 3.8%: Validates message match between ad and landing page.',
        ],
      },
      {
        id: 'sandbox-to-scale-pipeline',
        headingVi: '3. Quy trình Sandbox-to-Scale & Đồng bộ trang đích (Post-Click CRO)',
        headingEn: '3. The Sandbox-to-Scale Pipeline & Post-Click CRO Alignment',
        paragraphsVi: [
          'Mỗi tuần, các biến thể vượt qua ngưỡng CPA mục tiêu với tối thiểu 30 chuyển đổi trong chiến dịch Sandbox sẽ được chuyển sang chiến dịch Scaling với ngân sách lớn. Đồng thời, những góc tiếp cận (Creative Angles) thắng cuộc sẽ được chuyển hóa thành tiêu đề Hero và khối Social Proof trên trang đích.',
          'Bằng cách đồng bộ chặt chẽ giữa Creative thử nghiệm và kiến trúc chuyển đổi trên Website, các đối tác của DIGO tiết kiệm trung bình 30–40% ngân sách thử nghiệm lãng phí và duy trì hiệu suất ROAS ổn định ngay cả khi nhân bản ngân sách gấp 5 lần.',
        ],
        paragraphsEn: [
          'Every week, creative variants that clear target CPA thresholds with statistically significant conversion volume graduate from the testing sandbox into consolidated scaling campaigns. Winning creative angles are immediately mirrored in landing page hero headlines and social proof blocks.',
          'By locking paid creative testing and post-click CRO into a single feedback loop, DIGO clients eliminate 30–40% of wasted testing spend and preserve ROAS stability while scaling budgets 5x.',
        ],
      },
      {
        id: 'server-side-signal-feedback',
        headingVi: '4. Nuôi dưỡng thuật toán bằng tín hiệu Server-Side sạch',
        headingEn: '4. Feeding Platform Algorithms with Clean Server-Side Signals',
        paragraphsVi: [
          'Thuật toán quảng cáo chỉ thông minh bằng chất lượng dữ liệu bạn cấp cho nó. Thay vì đẩy các sự kiện PageView hay AddToCart nhiễu loạn, hãy kết nối trực tiếp CRM và cổng thanh toán qua Server-Side Conversions API (CAPI) để gửi tín hiệu khách hàng có giá trị vòng đời (LTV) cao về lại nền tảng.',
        ],
        paragraphsEn: [
          'Ad delivery algorithms are only as intelligent as the conversion signals you feed them. Instead of optimizing on noisy browser pixels, pipe verified CRM qualification and net-revenue events back via Server-Side Conversions API (CAPI) so the algorithm hunts for high-LTV buyers.',
        ],
      },
    ],
  },
  {
    id: 'skill-acquisition',
    slug: 'skill-acquisition',
    tag: 'Academy',
    categoryKey: 'edtech-insights',
    categoryBadgeVi: 'EdTech Insights',
    categoryBadgeEn: 'EdTech Insights',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    clusterNameVi: 'Topic Cluster: Đào tạo Thực chiến & Competency Loops',
    clusterNameEn: 'Topic Cluster: Applied Education & Competency Loops',
    isCornerstone: false,
    titleVi: 'Vòng lặp thực hành (Practice Loops): Cách xây dựng năng lực thực chiến bền vững',
    titleEn: 'Practice Loops for Skill Acquisition: Building Production-Ready Competency',
    descVi:
      'Làm thế nào mô hình học qua dự án thật và phản hồi khắt khe từ Mentor xóa bỏ "ảo tưởng hiểu biết" của việc xem video thụ động.',
    descEn:
      'Why passive video consumption creates an illusion of competence—and how structured practice loops forge commercial-grade skills.',
    date: '10 Oct 2026',
    readTimeVi: '7 phút đọc',
    readTimeEn: '7 min read',
    metricHighlightVi: '94% Làm được việc ngay',
    metricHighlightEn: '94% Job-Ready Output',
    author: AUTHORS.vuongDien,
    inlineCta: {
      variant: 'black',
      badgeVi: 'LỘ TRÌNH ĐÀO TẠO DIGO ACADEMY',
      badgeEn: 'DIGO ACADEMY CURRICULUM',
      titleVi: 'Khám phá Lộ trình Huấn luyện Thực chiến 1-Kèm-1 cùng Chuyên gia',
      titleEn: 'Explore Our Intensive Project-Based Cohorts & 1-on-1 Mentorship',
      descVi:
        'Thực hành trực tiếp trên đề bài thương mại (DaVinci Resolve, Performance Ads, Data Analytics) với hệ thống chấm bài chi tiết từng bước.',
      descEn:
        'Master commercial workflows in DaVinci Resolve, Performance Marketing, and Analytics through real briefs and line-by-line mentor critiques.',
      buttonTextVi: 'Xem Lộ Trình & Nhận Tư Vấn Khóa Học',
      buttonTextEn: 'Explore Syllabus & Book Advisory',
      resourceNameVi: 'Academy Competency Framework 2026',
      resourceNameEn: 'Academy Competency Framework 2026',
      targetPage: 'academy',
    },
    sections: [
      {
        id: 'illusion-of-competence',
        headingVi: '1. Phá vỡ "Ảo tưởng về năng lực" trong đào tạo trực tuyến',
        headingEn: '1. Shattering the "Illusion of Competence" in Modern EdTech',
        paragraphsVi: [
          'Xem hàng chục giờ video hướng dẫn hoặc đọc tóm tắt lý thuyết thường tạo ra cảm giác quen thuộc giả tạo. Người học gật gù vì hiểu hết từng câu chữ của giảng viên, nhưng ngay khi mở phần mềm trắng hoặc đối diện với một bảng dữ liệu quảng cáo lỗ vốn thực tế, họ hoàn toàn tê liệt.',
          'Khoa học nhận thức gọi đây là khoảng cách giữa Nhận diện thụ động (Passive Recognition) và Truy xuất chủ động (Active Execution). Năng lực thực sự chỉ kết tinh khi người học buộc phải tự ra quyết định trong điều kiện thiếu gợi ý sẵn.',
        ],
        paragraphsEn: [
          'Binge-watching tutorials or highlighting frameworks creates a dangerous cognitive trap: mistaking familiarity for mastery. Learners nod along to polished demonstrations, yet freeze the moment they face a blank timeline or a bleeding ad account.',
          'Cognitive science distinguishes passive recognition from active procedural retrieval. Durable capability only forms when learners wrestle with messy constraints and make independent trade-offs.',
        ],
        keyTakeawayVi:
          'Tỷ lệ hoàn thành video (Video Completion Rate) là chỉ số vô nghĩa. Thước đo duy nhất của DIGO Academy là chất lượng sản phẩm thương mại mà học viên tự tay xuất bản.',
        keyTakeawayEn:
          'Video completion rate is a vanity metric. At DIGO Academy, the sole measure of learning is the commercial quality of shipped portfolio artifacts.',
      },
      {
        id: 'four-stage-practice-loop',
        headingVi: '2. Mô hình Vòng lặp Thực hành 4 bước tại DIGO Academy',
        headingEn: '2. The 4-Stage Practice Loop Architecture at DIGO Academy',
        paragraphsVi: [
          'Để chuyển hóa kiến thức thành phản xạ nghề nghiệp, mọi học phần tại DIGO Academy — từ hậu kỳ video thương mại DaVinci Resolve đến vận hành Performance Marketing — đều được thiết kế xoay quanh vòng lặp 4 giai đoạn khép kín.',
        ],
        paragraphsEn: [
          'To compress the journey from novice to production-ready operator, every module at DIGO Academy is engineered around a tight four-stage practice loop rather than linear lectures.',
        ],
        bulletsVi: [
          'Bước 1 — Nguyên lý Đệ nhất (First Principles): Nắm bản chất cốt lõi trong 20 phút tinh gọn, loại bỏ hoàn toàn lý thuyết rườm rà.',
          'Bước 2 — Dự án Dữ liệu Thật (Authentic Briefs): Thực hành ngay trên raw footage, bộ tracking hoặc tài khoản mẫu chuẩn doanh nghiệp.',
          'Bước 3 — Phản biện Khắt khe (Ruthless Mentor Critique): Chuyên gia mổ xẻ từng lỗi nhỏ theo tiêu chuẩn nghiệm thu của Agency.',
          'Bước 4 — Tinh chỉnh Đạt chuẩn (Production Iteration): Sửa bài bắt buộc cho đến khi vượt qua bộ tiêu chí kiểm định đầu ra.',
        ],
        bulletsEn: [
          'Stage 1 — First-Principles Briefing: Concise 20-minute mental models stripped of academic fluff.',
          'Stage 2 — Authentic Production Briefs: Hands-on execution using raw commercial footage and real tracking datasets.',
          'Stage 3 — Calibrated Mentor Critique: Line-by-line diagnostic feedback against agency QA rubrics.',
          'Stage 4 — Mandatory Iteration to Standard: Resubmission loops until the artifact passes commercial acceptance gates.',
        ],
      },
      {
        id: 'portfolio-driven-outcomes',
        headingVi: '3. Đầu ra định hướng Portfolio & Tác động doanh nghiệp',
        headingEn: '3. Portfolio-Verified Outcomes & Immediate Team Impact',
        paragraphsVi: [
          'Khi tốt nghiệp, học viên không cầm trên tay một tấm chứng chỉ tượng trưng mà sở hữu một bộ Hồ sơ năng lực (Verified Portfolio) gồm các chiến dịch, kịch bản và sản phẩm đã qua kiểm duyệt khắt khe. Nhờ đó, doanh nghiệp tuyển dụng hoặc cử nhân sự đi học có thể áp dụng ngay quy trình vào vận hành thực tế từ tuần đầu tiên.',
        ],
        paragraphsEn: [
          'Graduates leave not with a decorative certificate, but with a verified production portfolio of audited campaigns, grading nodes, and analytics dashboards—ready to deploy inside growth teams on day one.',
        ],
      },
    ],
  },
  {
    id: 'data-architecture',
    slug: 'data-architecture',
    tag: 'Infra',
    categoryKey: 'digital-skills',
    categoryBadgeVi: 'Kỹ năng số & Data Infra',
    categoryBadgeEn: 'Digital Skills & Data Infra',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    clusterNameVi: 'Topic Cluster: Server-Side Tracking & First-Party Data',
    clusterNameEn: 'Topic Cluster: Server-Side Tracking & First-Party Data',
    isCornerstone: true,
    titleVi: 'Tại sao Kiến trúc Dữ liệu Server-Side là sống còn trong kỷ nguyên AI & Hậu Cookie',
    titleEn: 'Why Sovereign Server-Side Data Architecture Determines AI & Growth ROI',
    descVi:
      'Khôi phục 25–40% dữ liệu chuyển đổi bị thất thoát và xây dựng nền tảng dữ liệu sạch cho báo cáo quản trị & tự động hóa.',
    descEn:
      'Recovering 25–40% of lost browser attribution and engineering clean first-party event pipelines for executive reporting and AI agents.',
    date: '06 Oct 2026',
    readTimeVi: '8 phút đọc',
    readTimeEn: '8 min read',
    metricHighlightVi: '99.4% Tín hiệu Sạch',
    metricHighlightEn: '99.4% Signal Integrity',
    author: AUTHORS.minhTriet,
    inlineCta: {
      variant: 'red',
      badgeVi: 'KIỂM TOÁN HẠ TẦNG DỮ LIỆU',
      badgeEn: 'INFRASTRUCTURE HEALTH AUDIT',
      titleVi: 'Website của bạn đang thất thoát bao nhiêu % dữ liệu chuyển đổi?',
      titleEn: 'How Much Revenue Attribution Is Your Browser Pixel Silently Dropping?',
      descVi:
        'Nhận bản đánh giá kỹ thuật miễn phí về điểm EMQ (Event Match Quality), độ trễ Server-Side GTM và lỗ hổng dữ liệu giữa Web – Quảng cáo – CRM.',
      descEn:
        'Request a technical diagnostic of your Meta CAPI Event Match Quality (EMQ), Server-Side GTM latency, and CRM reconciliation gaps.',
      buttonTextVi: 'Đăng Ký Kiểm Toán Data & CAPI',
      buttonTextEn: 'Request Data & CAPI Audit',
      resourceNameVi: 'DIGO Infra Diagnostic Checklist (28 Points)',
      resourceNameEn: 'DIGO Infra Diagnostic Checklist (28 Points)',
      targetPage: 'infra',
    },
    sections: [
      {
        id: 'signal-loss-crisis',
        headingVi: '1. Cuộc khủng hoảng thất thoát tín hiệu từ Client-Side Pixel',
        headingEn: '1. The Silent Signal Loss Crisis of Browser-Only Tracking',
        paragraphsVi: [
          'Khi Safari ITP, trình chặn quảng cáo (AdBlockers) và các quy định quyền riêng tư ngày càng thắt chặt, các đoạn mã theo dõi gắn trên trình duyệt (Client-Side Pixel truyền thống) thường xuyên làm rơi rớt từ 20% đến 40% sự kiện mua hàng hoặc điền form thực tế.',
          'Hệ quả kép diễn ra ngay lập tức: Báo cáo ROAS trên trình quản lý quảng cáo bị sai lệch nghiêm trọng khiến ban giám đốc phân bổ sai ngân sách, đồng thời thuật toán học máy của Meta/Google bị "mù dữ liệu" và tối ưu hóa nhầm tệp khách hàng.',
        ],
        paragraphsEn: [
          'With Safari ITP lifetime caps, aggressive ad blockers, and browser privacy sandboxes, legacy client-side JavaScript pixels routinely drop between 20% and 40% of authentic checkout and lead events.',
          'The damage compounds in two directions: executive leadership misallocates capital based on distorted attribution reports, while ad platform bidding models starve for high-intent training signals.',
        ],
        keyTakeawayVi:
          'Mỗi 10% tín hiệu chuyển đổi bị mất trên Pixel sẽ làm tăng trung bình 14–18% chi phí CPA do thuật toán phải đấu thầu trong trạng thái thiếu dữ liệu xác thực.',
        keyTakeawayEn:
          'Every 10% drop in conversion signal fidelity inflates effective CPA by 14–18% as bidding algorithms lose deterministic buyer feedback.',
      },
      {
        id: 'server-side-capi-blueprint',
        headingVi: '2. Kiến trúc First-Party Server-Side GTM & Deduplication chuẩn mực',
        headingEn: '2. First-Party Server-Side GTM & Deterministic Event Deduplication',
        paragraphsVi: [
          'Giải pháp không phải là gắn thêm nhiều mã script làm chậm tốc độ tải trang, mà là chuyển dịch sang kiến trúc Server-Side Tracking đặt trên tên miền phụ (First-Party Subdomain) của chính doanh nghiệp.',
          'Tại DIGO Infra, chúng tôi thiết lập luồng dữ liệu song song (Redundant Dual-Stream) kết hợp mã định danh `event_id` duy nhất và băm dữ liệu SHA-256 chuẩn bảo mật để đạt điểm Event Match Quality (EMQ) từ 8.8 đến 9.4/10.',
        ],
        paragraphsEn: [
          'The solution is not bloating the browser with heavier scripts, but migrating event collection to a sovereign first-party cloud cluster mapped to your own DNS subdomain.',
          'At DIGO Infra, we engineer redundant browser + server event streams synchronized via deterministic `event_id` deduplication keys and SHA-256 PII hashing—consistently elevating Event Match Quality (EMQ) scores to 8.8–9.4/10.',
        ],
        bulletsVi: [
          'Cải thiện tốc độ tải trang (Core Web Vitals / LCP) nhờ giảm tải 60% third-party scripts trên trình duyệt.',
          'Khôi phục 100% sự kiện thanh toán thành công từ Webhook ngân hàng/CRM kể cả khi khách hàng tắt trình duyệt.',
          'Kiểm soát tuyệt đối quyền riêng tư dữ liệu (Data Governance): Chỉ chia sẻ các trường thông tin được phép tới đối tác quảng cáo.',
        ],
        bulletsEn: [
          'Boosts Core Web Vitals and page speed by offloading 60% of third-party vendor scripts from the client browser.',
          'Captures 100% of asynchronous payment webhooks and offline CRM stage transitions even when users close their tab.',
          'Enforces strict data governance: strip, hash, and validate PII fields in your private cloud before forwarding to ad networks.',
        ],
      },
      {
        id: 'ai-ready-warehouse',
        headingVi: '3. Sẵn sàng cho AI Agent và Báo cáo Quản trị Thời gian thực',
        headingEn: '3. Powering Autonomous AI Agents & Executive Decision Dashboards',
        paragraphsVi: [
          'Một kho dữ liệu (Data Warehouse) sạch, đồng nhất giữa chi phí quảng cáo và doanh thu thực thu trong CRM là nền móng bắt buộc trước khi triển khai bất kỳ công cụ AI phân tích hay tự động hóa quy trình nào. Khi hạ tầng dữ liệu đáng tin cậy, mọi quyết định mở rộng quy mô đều dựa trên sự thật thay vì cảm tính.',
        ],
        paragraphsEn: [
          'A unified, deduplicated data warehouse reconciling ad spend with net CRM revenue is the non-negotiable foundation for AI anomaly detection and executive forecasting. When your infrastructure is trustworthy, scaling decisions become mathematical.',
        ],
      },
    ],
  },
  {
    id: 'ielts-academic-thinking-system',
    slug: 'ielts-academic-thinking-system',
    tag: 'Academy',
    categoryKey: 'ielts-tips',
    categoryBadgeVi: 'IELTS Tips',
    categoryBadgeEn: 'IELTS Tips',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    clusterNameVi: 'Topic Cluster: Đào tạo Thực chiến & Competency Loops',
    clusterNameEn: 'Topic Cluster: Applied Education & Competency Loops',
    isCornerstone: false,
    titleVi: 'Chiến lược Tư duy Phản biện & Cấu trúc Luận điểm đạt IELTS Writing 7.5+ thực chất',
    titleEn: 'First-Principles Academic Writing: Scoring Band 7.5+ in IELTS Without Memorized Templates',
    descVi:
      'Loại bỏ văn mẫu máy móc: Phương pháp xây dựng lập luận PEEL và rèn phản xạ từ vựng học thuật (Lexical Resource) có tính ứng dụng cao.',
    descEn:
      'Eliminate robotic templates: how structured PEEL argumentation and active lexical retrieval unlock consistent Band 7.5+ scores.',
    date: '04 Oct 2026',
    readTimeVi: '6 phút đọc',
    readTimeEn: '6 min read',
    metricHighlightVi: '+1.5 Band sau 8 Tuần',
    metricHighlightEn: '+1.5 Band in 8 Weeks',
    author: AUTHORS.khanhLinh,
    inlineCta: {
      variant: 'red',
      badgeVi: 'BỘ TÀI LIỆU HỌC THUẬT DIGO EDUTECH',
      badgeEn: 'DIGO EDUTECH ACADEMIC KIT',
      titleVi: 'Nhận Bộ Khung Lập Luận IELTS Writing Band 8.0 & 120 Cụm Collocations Học Thuật',
      titleEn: 'Download the Band 8.0 Argumentation Blueprint & 120 Academic Collocations',
      descVi:
        'Được biên soạn bởi hội đồng chuyên môn DiGo EduTech giúp học viên bứt phá tiêu chí Task Response và Coherence & Cohesion.',
      descEn:
        'Compiled by DiGo EduTech curriculum leads to help learners systematically master Task Response and Coherence & Cohesion.',
      buttonTextVi: 'Tải Trọn Bộ Tài Liệu Ngay',
      buttonTextEn: 'Download Free Study Kit',
      resourceNameVi: 'DiGo Academic Writing Playbook (PDF)',
      resourceNameEn: 'DiGo Academic Writing Playbook (PDF)',
      targetPage: 'academy',
    },
    sections: [
      {
        id: 'why-memorized-templates-fail',
        headingVi: '1. Tại sao học thuộc lòng "Văn mẫu" khiến điểm Writing giậm chân ở 6.0?',
        headingEn: '1. Why Memorized Essay Templates Cap Your Writing Score at Band 6.0',
        paragraphsVi: [
          'Nhiều thí sinh dành hàng tháng trời học thuộc các khung câu phức (Complex Sentences) sáo rỗng và cố nhồi nhét từ vựng hiếm vào bài viết. Tuy nhiên, giám khảo chấm thi nhận diện ngay lập tức sự thiếu tự nhiên và trừ điểm nặng ở tiêu chí Coherence & Cohesion cũng như Task Response.',
          'Tại DiGo EduTech, chúng tôi huấn luyện học viên tiếp cận bài viết như một bản phân tích chiến lược: Tư duy rõ ràng trước, ngôn từ chính xác theo sau.',
        ],
        paragraphsEn: [
          'Countless test-takers spend months memorizing ornate boilerplate openings and forcing archaic vocabulary into essays. Certified examiners spot template-stitching immediately, penalizing both Task Response and Coherence & Cohesion.',
          'At DiGo EduTech, we train learners to treat Task 2 as a structured analytical brief: clarity of thought precedes lexical complexity.',
        ],
        keyTakeawayVi:
          'Một câu văn đơn giản nhưng sắc bén, đi thẳng vào trọng tâm câu hỏi luôn đạt điểm cao hơn một câu văn phức tạp nhưng sáo rỗng.',
        keyTakeawayEn:
          'A precise, logically anchored argument always outscores an artificially convoluted sentence.',
      },
      {
        id: 'peel-paragraph-engineering',
        headingVi: '2. Kỹ thuật kiến tạo đoạn văn PEEL & Vòng lặp chấm chữa 1-kèm-1',
        headingEn: '2. PEEL Paragraph Engineering & 1-on-1 Diagnostic Rewrite Loops',
        paragraphsVi: [
          'Mỗi đoạn thân bài (Body Paragraph) đạt chuẩn Band 7.5+ đều tuân thủ chặt chẽ cấu trúc PEEL: Point (Luận điểm cốt lõi) -> Explanation (Giải thích cơ chế nhân quả) -> Example (Dẫn chứng cụ thể) -> Link (Kết nối lại đề bài). Khi kết hợp cùng vòng lặp chấm bài và viết lại (Rewrite Loop) tại DiGo, học viên hình thành phản xạ viết mạch lạc chỉ sau 6–8 tuần.',
        ],
        paragraphsEn: [
          'Every Band 7.5+ body paragraph follows a disciplined PEEL chain: Point -> Causal Explanation -> Concrete Evidence -> Thesis Link. Combined with mandatory rewrite loops, students build automatic structural fluency within 6–8 weeks.',
        ],
      },
    ],
  },
  {
    id: 'full-funnel-cro-architecture',
    slug: 'full-funnel-cro-architecture',
    tag: 'Growth',
    categoryKey: 'performance-marketing',
    categoryBadgeVi: 'Performance Marketing',
    categoryBadgeEn: 'Performance Marketing',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    isPopular: false,
    clusterNameVi: 'Topic Cluster: Creative CRO & Paid Media',
    clusterNameEn: 'Topic Cluster: Creative CRO & Paid Media',
    isCornerstone: false,
    titleVi: 'Tối ưu hóa Tỷ lệ Chuyển đổi (CRO) B2B & EdTech: Từ Lượt nhấp đến Doanh thu Thực',
    titleEn: 'Full-Funnel CRO for High-Ticket B2B & EdTech: From Ad Click to Qualified Pipeline',
    descVi:
      'Cách thiết kế luồng Inbound Lead Gen, đặt điểm neo niềm tin (E-E-A-T) và giảm ma sát biểu mẫu để nhân đôi tỷ lệ chuyển đổi.',
    descEn:
      'Engineering high-contrast landing architectures, E-E-A-T trust anchors, and micro-commitment forms that double qualified lead velocity.',
    date: '02 Oct 2026',
    readTimeVi: '5 phút đọc',
    readTimeEn: '5 min read',
    metricHighlightVi: '+112% Tỷ lệ Lead Chuẩn',
    metricHighlightEn: '+112% Qualified Leads',
    author: AUTHORS.vuongDien,
    inlineCta: {
      variant: 'black',
      badgeVi: 'CHECKLIST TỐI ƯU CHUYỂN ĐỔI (CRO)',
      badgeEn: 'HIGH-CONVERTING CRO CHECKLIST',
      titleVi: 'Nhận Bộ Khung Kiểm Toán 42 Điểm Chuyển Đổi Trang Đích (Landing Page CRO)',
      titleEn: 'Get the 42-Point Landing Page & Inbound Funnel CRO Audit Sheet',
      descVi:
        'Giúp đội ngũ Marketing tự rà soát bố cục Above-the-Fold, tốc độ phản hồi, CTA tương phản và kịch bản nuôi dưỡng Lead.',
      descEn:
        'Audit your above-the-fold clarity, visual hierarchy, social proof placement, and form friction in under 30 minutes.',
      buttonTextVi: 'Tải Checklist CRO Miễn Phí',
      buttonTextEn: 'Download Free CRO Checklist',
      resourceNameVi: 'DIGO 42-Point CRO Audit Sheet',
      resourceNameEn: 'DIGO 42-Point CRO Audit Sheet',
      targetPage: 'growth',
    },
    sections: [
      {
        id: 'above-the-fold-clarity',
        headingVi: '1. Quy tắc 5 Giây ở Vùng Đầu Trang (Above-the-Fold)',
        headingEn: '1. The 5-Second Above-the-Fold Clarity Contract',
        paragraphsVi: [
          'Khách hàng truy cập từ quảng cáo trả phí quyết định ở lại hay thoát trang chỉ trong 5 giây đầu tiên. Nếu tiêu đề của bạn dùng những từ ngữ chung chung, thiếu con số định lượng và không khớp với mẫu quảng cáo họ vừa nhấp vào, bạn sẽ mất 70% lưu lượng truy cập ngay lập tức.',
          'Cấu trúc Hero hiệu suất cao luôn bao gồm 3 thành phần: Nhãn phân loại đối tượng (Kicker), Tiêu đề cam kết kết quả đo lường được, và Cụm bằng chứng xã hội (Social Proof) ngay sát nút hành động chính.',
        ],
        paragraphsEn: [
          'Paid traffic visitors decide whether to stay or bounce within five seconds. When your hero headline relies on vague corporate slogans instead of mirroring the specific promise of the ad they clicked, up to 70% of paid clicks evaporate.',
          'High-converting hero architecture pairs three elements: an audience-qualifying kicker, an outcome-driven headline backed by a concrete metric, and verifiable social proof adjacent to a high-contrast pill CTA.',
        ],
      },
      {
        id: 'contextual-inline-ctas',
        headingVi: '2. Nhúng Call-to-Action theo ngữ cảnh đọc (Contextual Inline CTAs)',
        headingEn: '2. Contextual Inline CTAs: Capturing High-Intent Readers Mid-Scroll',
        paragraphsVi: [
          'Người đọc hiếm khi cuộn đến tận chân trang mới tìm nút đăng ký. Lấy cảm hứng từ các hệ thống Inbound Lead Gen hàng đầu thế giới như Madgicx, việc đặt các khối Inline CTA có độ tương phản mạnh ngay sau phần phân tích vấn đề giúp tăng tỷ lệ nhấp (CTR) lên gấp 3.4 lần so với banner đặt ở sidebar.',
        ],
        paragraphsEn: [
          'Readers rarely reach the footer before deciding to act. By embedding high-contrast, topic-matched Inline CTAs directly after diagnosing a painful bottleneck, inbound conversion rates jump 3.4x compared to ignored sidebar banners.',
        ],
        keyTakeawayVi:
          'Mỗi bài viết chuyên sâu không chỉ để đọc — nó là một phễu chuyển đổi tự động khi kết hợp Mục lục thông minh (Sticky TOC), Tác giả uy tín (E-E-A-T) và Inline CTA đúng ngữ cảnh.',
        keyTakeawayEn:
          'Every technical article becomes a compounding acquisition asset when paired with a Sticky TOC, verified E-E-A-T authorship, and contextual Inline CTAs.',
      },
    ],
  },
  {
    id: 'davinci-commercial-pipeline',
    slug: 'davinci-commercial-pipeline',
    tag: 'Academy',
    categoryKey: 'digital-skills',
    categoryBadgeVi: 'Kỹ năng số & Sáng tạo',
    categoryBadgeEn: 'Digital & Creative Skills',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
    isPopular: false,
    clusterNameVi: 'Topic Cluster: Đào tạo Thực chiến & Competency Loops',
    clusterNameEn: 'Topic Cluster: Applied Education & Competency Loops',
    isCornerstone: false,
    titleVi: 'Chuẩn hóa quy trình Hậu kỳ & Color Grading thương mại trên DaVinci Resolve',
    titleEn: 'Standardizing Commercial Post-Production & Color Pipelines in DaVinci Resolve',
    descVi:
      'Cách xây dựng Node Tree chuẩn ACES/DaVinci Wide Gamut giúp đội ngũ sáng tạo xuất bản hàng chục biến thể Video Ad mỗi tuần.',
    descEn:
      'How structured node trees and color-managed workflows let creative teams ship dozens of high-converting video ad variants every week.',
    date: '27 Sep 2026',
    readTimeVi: '6 phút đọc',
    readTimeEn: '6 min read',
    metricHighlightVi: '3.2x Tốc độ Sản xuất',
    metricHighlightEn: '3.2x Production Speed',
    author: AUTHORS.khanhLinh,
    inlineCta: {
      variant: 'red',
      badgeVi: 'KHÓA HỌC DAVINCI RESOLVE THỰC CHIẾN',
      badgeEn: 'COMMERCIAL DAVINCI RESOLVE COHORT',
      titleVi: 'Làm chủ Quy trình Dựng & Chỉnh Màu Quảng Cáo Thương Mại trong 6 Tuần',
      titleEn: 'Master Commercial Editing & Color Grading Workflows in 6 Weeks',
      descVi:
        'Nhận bộ PowerGrades chuẩn thương mại và thực hành trực tiếp trên footage TVC/Performance Video cùng giảng viên DIGO Academy.',
      descEn:
        'Get our production PowerGrade node templates and build a commercial reel with 1-on-1 feedback from DIGO Academy instructors.',
      buttonTextVi: 'Xem Chi Tiết Khóa Học & PowerGrade',
      buttonTextEn: 'View Course Syllabus & PowerGrades',
      resourceNameVi: 'DIGO Commercial Node Tree Pack',
      resourceNameEn: 'DIGO Commercial Node Tree Pack',
      targetPage: 'academy',
    },
    sections: [
      {
        id: 'why-color-management-matters',
        headingVi: '1. Tại sao quản lý không gian màu (Color Management) quyết định tốc độ?',
        headingEn: '1. Why Color-Managed Workflows Dictate Creative Velocity',
        paragraphsVi: [
          'Trong sản xuất Video Quảng cáo hiện đại, một dự án thường pha trộn dữ liệu từ nhiều máy quay khác nhau (Sony S-Log3, ARRI LogC, iPhone Apple Log). Nếu chỉnh màu thủ công hoặc áp dụng LUT cảm tính, màu da và màu sản phẩm thương hiệu sẽ bị lệch giữa các phiên bản.',
          'Việc thiết lập Color Space Transform (CST) về không gian DaVinci Wide Gamut giúp chuẩn hóa toàn bộ tín hiệu đầu vào chỉ trong 30 giây, bảo toàn dải tương phản động (Dynamic Range) và giữ chuẩn màu nhận diện thương hiệu (như sắc đỏ #F40009 đặc trưng).',
        ],
        paragraphsEn: [
          'Modern commercial shoots routinely mix footage across Sony S-Log3, RED, and iPhone Apple Log. Relying on destructive display LUTs ruins skin tones and distorts brand hero colors across formats.',
          'Standardizing on a DaVinci Wide Gamut intermediate pipeline via Color Space Transforms (CST) normalizes multi-camera timelines in seconds while preserving highlight roll-off and exact brand color fidelity.',
        ],
      },
      {
        id: 'modular-node-tree-system',
        headingVi: '2. Kiến trúc Node Tree cố định cho đội ngũ Creative',
        headingEn: '2. Fixed Modular Node Trees for Collaborative Creative Teams',
        paragraphsVi: [
          'Tại DIGO Academy, học viên được rèn luyện thói quen tổ chức Node Tree theo cấu trúc cố định: Exposure -> Balance -> Contrast Pivot -> Skin Tone Isolation -> Brand Color Lock -> Halation/Film Grain. Khi bất kỳ thành viên nào mở dự án của đồng nghiệp, họ đều có thể chỉnh sửa và xuất hàng loạt phiên bản (9:16, 1:1, 16:9) ngay lập tức.',
        ],
        paragraphsEn: [
          'At DIGO Academy, students drill a strict fixed-node architecture: Exposure -> White Balance -> Contrast Pivot -> Skin Vector -> Brand Hue Lock -> Output CST. Any editor on the team can open a colleague’s project and batch-render 9:16, 1:1, and 16:9 ad deliverables without guesswork.',
        ],
      },
    ],
  },
  {
    id: 'crm-attribution-reconciliation',
    slug: 'crm-attribution-reconciliation',
    tag: 'Infra',
    categoryKey: 'performance-marketing',
    categoryBadgeVi: 'Performance Marketing',
    categoryBadgeEn: 'Performance Marketing',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    isPopular: false,
    clusterNameVi: 'Topic Cluster: Server-Side Tracking & First-Party Data',
    clusterNameEn: 'Topic Cluster: Server-Side Tracking & First-Party Data',
    isCornerstone: false,
    titleVi: 'Đồng bộ hóa CRM & Quảng cáo Đa kênh: Giải bài toán Lợi nhuận Thực (MER)',
    titleEn: 'CRM-to-Ad Attribution Reconciliation: Solving for True Marketing Efficiency (MER)',
    descVi:
      'Kết nối dữ liệu doanh thu thực tế từ CRM/POS ngược về hệ thống báo cáo để chấm dứt tình trạng các nền tảng quảng cáo tranh công.',
    descEn:
      'Bridging offline CRM closed-won revenue with platform ad spend to eliminate double-counted conversions and scale on verified MER.',
    date: '19 Sep 2026',
    readTimeVi: '7 phút đọc',
    readTimeEn: '7 min read',
    metricHighlightVi: '100% Khớp Doanh Thu',
    metricHighlightEn: '100% Revenue Reconciliation',
    author: AUTHORS.minhTriet,
    inlineCta: {
      variant: 'black',
      badgeVi: 'GIẢI PHÁP DATA & BI DASHBOARD',
      badgeEn: 'UNIFIED BI & ATTRIBUTION SUITE',
      titleVi: 'Xây dựng Hệ thống Báo cáo Doanh thu Thực (Single Source of Truth) cho CEO',
      titleEn: 'Build an Executive Single Source of Truth Reconciling Ad Spend & CRM Cash',
      descVi:
        'Tự động hóa đối soát dữ liệu từ Meta, Google, TikTok với HubSpot/Lark/POS theo thời gian thực cùng đội ngũ kỹ sư DIGO Infra.',
      descEn:
        'Automate real-time reconciliation across Meta, Google, TikTok, and your CRM/ERP with DIGO Infra data engineers.',
      buttonTextVi: 'Đặt Lịch Tư Vấn Kiến Trúc Dữ Liệu',
      buttonTextEn: 'Book Data Architecture Consultation',
      resourceNameVi: 'Executive MER & Attribution Schema',
      resourceNameEn: 'Executive MER & Attribution Schema',
      targetPage: 'infra',
    },
    sections: [
      {
        id: 'double-counting-dilemma',
        headingVi: '1. Khi tổng doanh thu trên trình quảng cáo cao gấp đôi tiền thực về tài khoản',
        headingEn: '1. When Platform-Reported Revenue Doubles Your Actual Bank Deposits',
        paragraphsVi: [
          'Nếu một khách hàng xem video trên TikTok buổi sáng, nhấp vào quảng cáo Facebook buổi chiều và tìm kiếm thương hiệu trên Google trước khi mua hàng, cả 3 nền tảng đều sẽ tự nhận 100% công trạng cho đơn hàng đó trong báo cáo mặc định.',
          'Doanh nghiệp mở rộng ngân sách dựa trên ROAS tự báo cáo của từng kênh thường rơi vào tình trạng chi phí quảng cáo tăng vọt nhưng tổng doanh thu thực tế (Net Revenue) đi ngang.',
        ],
        paragraphsEn: [
          'When a buyer watches a TikTok video at breakfast, clicks a Meta retargeting ad at lunch, and converts via Google Brand Search at dinner, all three platforms claim 100% credit in their native dashboards.',
          'Founders who scale budgets based on siloed platform ROAS inevitably watch ad spend climb while net bank revenue flatlines.',
        ],
      },
      {
        id: 'mer-and-cohort-ltv',
        headingVi: '2. Kết hợp MER (Marketing Efficiency Ratio) và Phân tích Cohort LTV',
        headingEn: '2. Combining Marketing Efficiency Ratio (MER) with Cohort LTV Pipelines',
        paragraphsVi: [
          'Kiến trúc dữ liệu của DIGO Infra gom toàn bộ sự kiện chạm (Touchpoints) cùng mã đơn hàng thực tế từ hệ thống ERP/CRM vào một bảng đối soát duy nhất. Ban lãnh đạo có thể theo dõi chỉ số MER (Tổng doanh thu thực / Tổng chi phí Marketing) và thời gian hoàn vốn CAC theo từng nhóm khách hàng (Cohort) theo thời gian thực.',
        ],
        paragraphsEn: [
          'DIGO Infra unifies multi-touch click IDs (`fbc`, `gclid`, `ttclid`) with settled ERP/CRM invoices inside a single reconciliation schema—giving leadership real-time visibility into blended MER and cohort payback windows.',
        ],
      },
    ],
  },
  {
    id: 'edtech-ai-learning-analytics',
    slug: 'edtech-ai-learning-analytics',
    tag: 'Academy',
    categoryKey: 'edtech-insights',
    categoryBadgeVi: 'EdTech Insights',
    categoryBadgeEn: 'EdTech Insights',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    isPopular: false,
    clusterNameVi: 'Topic Cluster: Đào tạo Thực chiến & Competency Loops',
    clusterNameEn: 'Topic Cluster: Applied Education & Competency Loops',
    isCornerstone: false,
    titleVi: 'Ứng dụng Learning Analytics & AI Trợ giảng trong Đào tạo Doanh nghiệp (L&D)',
    titleEn: 'Learning Analytics & AI Co-Pilots in Corporate L&D: Measuring Real Skill Transfer',
    descVi:
      'Cách đo lường tỷ lệ chuyển hóa kiến thức vào công việc thực tế và cá nhân hóa lộ trình nâng cấp kỹ năng số cho đội ngũ nhân sự.',
    descEn:
      'How modern EdTech organizations track post-training skill transfer and personalize competency pathways across teams.',
    date: '11 Sep 2026',
    readTimeVi: '5 phút đọc',
    readTimeEn: '5 min read',
    metricHighlightVi: '2.8x Tốc độ Nắm bắt',
    metricHighlightEn: '2.8x Skill Retention',
    author: AUTHORS.khanhLinh,
    inlineCta: {
      variant: 'black',
      badgeVi: 'GIẢI PHÁP ĐÀO TẠO IN-HOUSE DOANH NGHIỆP',
      badgeEn: 'CORPORATE L&D ENABLEMENT',
      titleVi: 'Thiết kế Chương trình Huấn luyện Kỹ năng Số & Marketing Riêng cho Doanh Nghiệp',
      titleEn: 'Custom Corporate Training Programs in Growth, Creative & Data Analytics',
      descVi:
        'Đo ni đóng giày giáo trình dựa trên bài toán thực tế của doanh nghiệp bạn, cam kết đầu ra bằng chỉ số KPI vận hành.',
      descEn:
        'Tailored workshops and hands-on sprints built around your actual brand datasets and team KPIs.',
      buttonTextVi: 'Nhận Đề Xuất Đào Tạo Doanh Nghiệp',
      buttonTextEn: 'Request Corporate Training Proposal',
      resourceNameVi: 'Corporate L&D Competency Matrix 2026',
      resourceNameEn: 'Corporate L&D Competency Matrix 2026',
      targetPage: 'academy',
    },
    sections: [
      {
        id: 'measuring-skill-transfer',
        headingVi: '1. Từ đánh giá cảm tính sang Đo lường Năng lực bằng Dữ liệu (Learning Analytics)',
        headingEn: '1. From Satisfaction Surveys to Telemetry-Driven Skill Measurement',
        paragraphsVi: [
          'Hầu hết các chương trình đào tạo nội bộ (L&D) chỉ dừng lại ở phiếu khảo sát mức độ hài lòng sau buổi học. Để đào tạo thực sự tạo ra ROI, hệ thống EdTech cần theo dõi tốc độ hoàn thành bài tập thực hành, số lần sửa lỗi và chất lượng đầu ra trong 30–60 ngày tiếp theo.',
        ],
        paragraphsEn: [
          'Most corporate training programs stop at post-session smiley sheets. True L&D ROI requires tracking rubric pass rates, iteration velocity, and on-the-job execution 30–60 days post-cohort.',
        ],
      },
    ],
  },
];
