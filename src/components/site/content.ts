import type { SiteLanguage } from "./language";

export type NavItem = {
  to: string;
  label: string;
};

type ServiceCard = {
  title: string;
  body: string;
};

type BrandCard = {
  name: string;
  website?: string;
  tagline: string;
  category: string;
  positioning: string;
  status?: "verified" | "missing";
};

type ContactOption = {
  value: string;
  label: string;
};

type JourneyStep = {
  title: string;
  body: string;
};

type ContactDetails = {
  phone: string;
  email: string;
  website: string;
  address: string;
  social: string;
};

type LocaleContent = {
  dir: "ltr" | "rtl";
  langLabel: string;
  brandDisplayName: string;
  companyName: string;
  nav: NavItem[];
  ctaPrimary: string;
  ctaSecondary: string;
  footerIntro: string;
  quickLinksLabel: string;
  contactLabel: string;
  missingLabel: string;
  contactDetails: ContactDetails;
  home: {
    heroKicker: string;
    heroTitle: string;
    heroBody: string;
    heroHighlights: string[];
    trustItems: string[];
    introTitle: string;
    introBody: string;
    introCta: string;
    scopeTitle: string;
    scopeCards: ServiceCard[];
    scopeCta: string;
    operatingModelTitle: string;
    operatingModelBody: string;
    operatingCriteria: string[];
    whyTitle: string;
    whyBullets: string[];
    partnershipTitle: string;
    partnershipBody: string;
    partnershipBullets: string[];
    governanceTitle: string;
    governanceBody: string;
    governanceBullets: string[];
    brandsTitle: string;
    brandsBody: string;
    finalCtaTitle: string;
    finalCtaBody: string;
    finalCtaButton: string;
  };
  about: {
    pageTitle: string;
    intro: string;
    overview: string[];
    founderTitle: string;
    founderMessage: string[];
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    valuesTitle: string;
    valuesBody: string;
  };
  services: {
    pageTitle: string;
    intro: string;
    cards: ServiceCard[];
  };
  capabilities: {
    pageTitle: string;
    intro: string;
    bullets: string[];
  };
  governance: {
    pageTitle: string;
    intro: string;
    bullets: string[];
  };
  partnerships: {
    pageTitle: string;
    intro: string;
    whyPartnerTitle: string;
    bullets: string[];
    journeyTitle: string;
    journeySteps: JourneyStep[];
    partnerFormTitle: string;
    partnerFormIntro: string;
    partnerFormFields: {
      name: string;
      company: string;
      country: string;
      businessType: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  brands: {
    pageTitle: string;
    intro: string;
    cards: BrandCard[];
  };
  contact: {
    pageTitle: string;
    intro: string;
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      inquiryType: string;
      message: string;
      submit: string;
    };
    inquiryOptions: ContactOption[];
  };
};

const sharedContact = {
  phone: "+971 4 458 1655",
  email: "Info@yansabtrading.com",
  website: "www.yansabtrading.com",
  address: "Missing / Not found in source files",
  social: "Missing / Not found in source files",
};

const sharedServicesEn: ServiceCard[] = [
  { title: "General Trading & Supply", body: "General trading and supply across multiple categories." },
  { title: "Procurement Services", body: "Procurement services tailored to client requirements." },
  {
    title: "Wholesale & Distribution",
    body: "Wholesale and distribution across the UAE and selected regional markets.",
  },
  { title: "Supplier Representation", body: "Supplier representation and market-entry support." },
  {
    title: "Trade Coordination",
    body: "Trade coordination, supplier management, and documentation control.",
  },
  {
    title: "Commercial Sourcing",
    body: "Commercial sourcing based on quality, pricing, and reliability standards.",
  },
];

const sharedServicesAr: ServiceCard[] = [
  { title: "التجارة العامة والتوريد", body: "التجارة العامة والتوريد عبر عدة فئات." },
  { title: "خدمات المشتريات", body: "خدمات المشتريات وفق متطلبات العملاء." },
  { title: "الجملة والتوزيع", body: "الجملة والتوزيع داخل الإمارات والأسواق الإقليمية المختارة." },
  { title: "تمثيل الموردين", body: "تمثيل الموردين ودعم دخول الأسواق." },
  { title: "التنسيق التجاري", body: "التنسيق التجاري وإدارة الموردين وضبط التوثيق." },
  { title: "التوريد التجاري", body: "التوريد التجاري وفق معايير الجودة والسعر والاعتمادية." },
];

const englishContent: LocaleContent = {
  dir: "ltr",
  langLabel: "EN",
  brandDisplayName: "YANSAB Trading Co.",
  companyName: "Yansab General Trading L.L.C",
  nav: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Yansab" },
    { to: "/brands", label: "Brands" },
    { to: "/services", label: "Services" },
    { to: "/partnerships", label: "Distribution & Partnerships" },
    { to: "/contact", label: "Contact" },
  ],
  ctaPrimary: "Contact Us",
  ctaSecondary: "Become a Partner",
  footerIntro:
    "Yansab General Trading L.L.C is a Dubai-based trading company established in 2010, operating as a family-owned business with institutional discipline and commercial flexibility.",
  quickLinksLabel: "Quick Links",
  contactLabel: "Contact",
  missingLabel: "Please contact us via the contact form",
  contactDetails: sharedContact,
  home: {
    heroKicker: "Dubai based • Established 2010 • Family owned",
    heroTitle: "A trading company built on trust, discipline, and long-term value.",
    heroBody:
      "Yansab is a Dubai-based trading company with family roots and institutional standards, structured to source, distribute, and execute with disciplined professionalism across evolving commercial needs.",
    heroHighlights: [
      "Institutional discipline in engagement and execution",
      "Commercial flexibility across categories and market needs",
      "Long-term approach to trusted partnerships",
    ],
    trustItems: ["Dubai HQ", "Since 2010", "Family-Owned", "Multi-Sector Execution"],
    introTitle: "Built to Move with the Market.",
    introBody:
      "Yansab operates with the strength of a family business and the discipline of an institution. The company is structured to support sourcing, supply, distribution, and execution across commercial opportunities with clarity, responsiveness, and credibility.",
    introCta: "Explore Yansab",
    scopeTitle: "What We Do",
    scopeCards: sharedServicesEn,
    scopeCta: "View All Services",
    operatingModelTitle: "Our Operating Model",
    operatingModelBody:
      "Each opportunity is assessed against practical commercial standards to support sound decisions, controlled risk, and repeatable growth.",
    operatingCriteria: [
      "Demand volume",
      "Profitability and margin potential",
      "Supply reliability",
      "Compliance and documentation requirements",
      "Long-term repeatability and growth potential",
    ],
    whyTitle: "Why Yansab?",
    whyBullets: [
      "Family-rooted commitment with a reputation-driven business culture",
      "Institutional professionalism in engagement, documentation, and execution",
      "Commercial flexibility to capture opportunities and meet market requirements",
      "Disciplined operating approach that supports sustainable growth",
      "Long-term mindset focused on continuity, trust, and scalable partnerships",
    ],
    partnershipTitle: "Partnerships Built with Care, Transparency, and Continuity.",
    partnershipBody:
      "Yansab approaches partnerships as structured commercial alliances rather than isolated transactions, with clear communication and realistic commitments.",
    partnershipBullets: [
      "Selective and credible partner relationships",
      "Professional representation and protection of commercial trust",
      "Clear communication and realistic expectations",
      "Continuity, repeat business, and shared long-term value",
    ],
    governanceTitle: "Clear Foundations That Reduce Execution Risk.",
    governanceBody:
      "Yansab operates on clear commercial and administrative foundations designed to strengthen trust and reduce execution risk.",
    governanceBullets: [
      "Proper commercial documentation",
      "Supplier verification and credibility checks",
      "Commercially sound payment structures",
      "Compliance with licensing, customs, and applicable regulatory requirements",
      "A disciplined operating framework that supports growth and partner confidence",
    ],
    brandsTitle: "Brands & Business Lines",
    brandsBody:
      "Yansab supports owned and partner brands under a disciplined commercial framework.",
    finalCtaTitle: "Let’s Build the Next Commercial Move with Clarity.",
    finalCtaBody:
      "Whether you are a supplier, partner, retailer, or brand owner, Yansab is positioned to support disciplined commercial execution with trust at the center.",
    finalCtaButton: "Start the Conversation",
  },
  about: {
    pageTitle: "About Yansab",
      intro: "A Dubai-based trading house shaped by long-term discipline, trusted relationships, and serious execution standards.",
    overview: [
      "Yansab General Trading L.L.C is a Dubai-based trading company established in 2010, operating as a family-owned business with institutional discipline, commercial flexibility, and a long-term approach to value creation.",
      "The company is positioned to source, supply, distribute, and execute across multiple product categories and commercial requirements.",
      "Yansab serves as a reliable trading platform connecting market demand with dependable supply through trusted relationships and disciplined operations.",
    ],
    founderTitle: "Founder’s Message",
    founderMessage: [
      "Sustainable business is not built on transactions alone, but on trust, clarity, consistency, and the fulfillment of commitments.",
      "Operating from Dubai gives Yansab a strategic base to connect regional demand with international supply channels while maintaining high standards of conduct and commercial responsibility.",
      "Our ambition is simple and serious: to represent the Yansab name with professionalism in every deal, every shipment, and every relationship we build.",
    ],
    visionTitle: "Vision",
    visionBody:
      "To become a trusted trade name recognized for reliability, disciplined execution, and long-term commercial value across the UAE and regional markets.",
    missionTitle: "Mission",
    missionBody:
      "To deliver dependable trading, sourcing, and supply solutions through strong supplier relationships, clear commercial processes, and professional market execution.",
    valuesTitle: "Values",
    valuesBody:
      "Trust, clarity, consistency, disciplined execution, continuity, and commercial responsibility.",
  },
  services: {
    pageTitle: "Services",
    intro:
      "Yansab delivers practical commercial capabilities across sourcing, procurement, supply, distribution, and documentation-controlled execution with institutional consistency.",
    cards: sharedServicesEn,
  },
  capabilities: {
    pageTitle: "Sectors & Commercial Capabilities",
    intro:
      "Commercial capabilities across sourcing, supply, distribution, and execution for practical market requirements.",
    bullets: [
      "General trading and supply across multiple categories",
      "Procurement services tailored to client requirements",
      "Wholesale and distribution across the UAE and selected regional markets",
      "Supplier representation and market-entry support",
      "Trade coordination, supplier management, and documentation control",
      "Commercial sourcing based on quality, pricing, and reliability standards",
    ],
  },
  governance: {
    pageTitle: "Governance & Compliance",
    intro:
      "Yansab operates on clear commercial and administrative foundations designed to strengthen trust and reduce execution risk.",
    bullets: [
      "Proper commercial documentation",
      "Supplier verification and credibility checks",
      "Commercially sound payment structures",
      "Compliance with licensing, customs, and applicable regulatory requirements",
      "A disciplined operating framework that supports growth and partner confidence",
    ],
  },
  partnerships: {
    pageTitle: "Distribution & Partnerships",
    intro:
      "Yansab values partnerships that are built with care, managed professionally, and designed to grow over time.",
    whyPartnerTitle: "Why Partner with Yansab?",
    bullets: [
      "Selective and credible partner relationships",
      "Professional representation and protection of commercial trust",
      "Clear communication and realistic expectations",
      "Continuity, repeat business, and shared long-term value",
    ],
    journeyTitle: "Partner Journey",
    journeySteps: [
      { title: "Initial strategic alignment", body: "Executive-level alignment on market potential, partner fit, and measurable commercial objectives." },
      { title: "Requirement understanding", body: "Clarifying commercial and operational requirements." },
      { title: "Supplier or market evaluation", body: "Assessing supplier credibility and route-to-market fit." },
      { title: "Commercial structuring", body: "Designing a disciplined commercial model covering terms, margin architecture, and operating governance." },
      { title: "Documentation and compliance", body: "Building a robust documentation and compliance framework with clear controls for risk-managed execution." },
      { title: "Execution and relationship management", body: "Coordinated delivery with continuity and performance follow-through." },
    ],
    partnerFormTitle: "Become a Partner",
    partnerFormIntro:
      "Yansab works with suppliers, retailers, distributors, and commercial partners through an approach built on professionalism, structure, and mutual value creation.",
    partnerFormFields: {
      name: "Name",
      company: "Company",
      country: "Country",
      businessType: "Business Type",
      phone: "Phone",
      email: "Email",
      message: "Message",
      submit: "Send Inquiry",
    },
  },
  brands: {
    pageTitle: "Brands & Business Lines",
    intro: "Yansab supports owned and partner brands through disciplined market execution and long-term commercial positioning.",
    cards: [
      {
        name: "Somitta",
        website: "https://www.somitta.com/",
        tagline: "Feel The Sudanese Sense",
        category: "Perfumes, incense, and beauty products",
        positioning: "Built around authenticity, sensory richness, and culturally rooted product identity.",
        status: "verified",
      },
      {
        name: "Additional brand line",
        tagline: "Details available upon request",
        category: "Please contact us for category details",
        positioning: "Commercial positioning details are available upon request",
        status: "missing",
      },
    ],
  },
  contact: {
    pageTitle: "Start the Conversation",
    intro:
      "For partnerships, supply opportunities, distribution discussions, or general inquiries, contact Yansab and the team will respond with professionalism and clarity.",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      inquiryType: "Inquiry Type",
      message: "Message",
      submit: "Send Inquiry",
    },
    inquiryOptions: [
      { value: "general", label: "General inquiry" },
      { value: "partner", label: "Partnership inquiry" },
      { value: "supplier", label: "Supplier inquiry" },
    ],
  },
};

const arabicContent: LocaleContent = {
  dir: "rtl",
  langLabel: "AR",
  brandDisplayName: "ينساب للتجارة العامة ذ.م.م",
  companyName: "ينساب للتجارة العامة ذ.م.م",
  nav: [
    { to: "/", label: "الرئيسية" },
    { to: "/about", label: "عن ينساب" },
    { to: "/brands", label: "العلامات" },
    { to: "/services", label: "الخدمات" },
    { to: "/partnerships", label: "التوزيع والشراكات" },
    { to: "/contact", label: "تواصل معنا" },
  ],
  ctaPrimary: "تواصل معنا",
  ctaSecondary: "كن شريكاً",
  footerIntro:
    "ينساب للتجارة العامة ذ.م.م شركة تجارة عامة مقرها دبي، تأسست عام 2010، وتعمل كشركة عائلية بروح مؤسسية وانضباط تجاري.",
  quickLinksLabel: "روابط سريعة",
  contactLabel: "التواصل",
  missingLabel: "يرجى التواصل عبر نموذج الاتصال",
  contactDetails: {
    phone: "+971 4 458 1655",
    email: "Info@yansabtrading.com",
    website: "www.yansabtrading.com",
    address: "Missing / Not found in source files",
    social: "Missing / Not found in source files",
  },
  home: {
    heroKicker: "مقرها دبي • تأسست 2010 • شركة عائلية",
    heroTitle: "شركة تجارة بُنيت على الثقة والانضباط والقيمة طويلة المدى.",
    heroBody:
      "ينساب شركة تجارة مقرها دبي بجذور عائلية ومعايير مؤسسية، مهيكلة للتوريد والتوزيع والتنفيذ باحترافية منضبطة عبر احتياجات تجارية متجددة.",
    heroHighlights: [
      "انضباط مؤسسي في التعامل والتنفيذ",
      "مرونة تجارية عبر فئات واحتياجات سوقية متعددة",
      "نهج طويل الأمد في الشراكات الموثوقة",
    ],
    trustItems: ["المقر: دبي", "منذ 2010", "ملكية عائلية", "تنفيذ متعدد القطاعات"],
    introTitle: "بُنيت لتتحرك مع السوق.",
    introBody:
      "تعمل ينساب بقوة الالتزام العائلي وانضباط المؤسسة، وتربط الطلب السوقي بسلاسل إمداد موثوقة عبر تنسيق وتنفيذ تجاري احترافي.",
    introCta: "اكتشف ينساب",
    scopeTitle: "منظومة الخدمات التجارية",
    scopeCards: sharedServicesAr,
    scopeCta: "استعرض جميع الخدمات",
    operatingModelTitle: "كيف تُقيَّم الفرص التجارية",
    operatingModelBody:
      "تُقيَّم كل فرصة وفق معايير تجارية عملية لدعم قرارات سليمة، وتقليل المخاطر، وبناء نمو قابل للتكرار.",
    operatingCriteria: [
      "حجم الطلب",
      "الربحية وهامش العائد",
      "موثوقية التوريد",
      "متطلبات الامتثال والتوثيق",
      "قابلية الاستمرارية والتوسع وتكرار الأعمال",
    ],
    whyTitle: "لماذا ينساب؟",
    whyBullets: [
      "التزام نابع من القيم العائلية وثقافة عمل قائمة على السمعة",
      "احترافية مؤسسية في التعامل والتوثيق والتنفيذ",
      "مرونة تجارية لاقتناص الفرص وتلبية متطلبات السوق",
      "نهج تشغيلي منضبط يدعم النمو المستدام",
      "عقلية طويلة الأمد ترتكز على الاستمرارية والثقة والشراكات القابلة للتوسع",
    ],
    partnershipTitle: "شراكات تُبنى بعناية وشفافية واستمرارية.",
    partnershipBody:
      "تنظر ينساب إلى الشراكات كتحالفات تجارية منظمة وليست معاملات منفصلة، مع وضوح عالٍ وتوقعات واقعية والتزام مستمر.",
    partnershipBullets: [
      "اختيار الشركاء بعناية وعلى أساس الموثوقية",
      "التمثيل المهني وحماية الثقة التجارية",
      "وضوح التواصل وواقعية التوقعات",
      "الاستمرارية وتكرار الأعمال وصناعة قيمة طويلة الأمد",
    ],
    governanceTitle: "أسس واضحة تقلل مخاطر التنفيذ.",
    governanceBody:
      "تعمل ينساب وفق أسس تجارية وإدارية واضحة تعزز الثقة وتقلل مخاطر التنفيذ.",
    governanceBullets: [
      "التوثيق التجاري السليم",
      "التحقق من الموردين ومصداقيتهم",
      "هياكل دفع مدروسة تجارياً",
      "الالتزام بمتطلبات الترخيص والجمارك والأنظمة المعمول بها",
      "إطار تشغيلي منضبط يدعم النمو ويعزز ثقة الشركاء",
    ],
    brandsTitle: "العلامات وخطوط الأعمال",
    brandsBody: "تدعم ينساب العلامات المملوكة وعلامات الشركاء ضمن إطار تنفيذي منضبط.",
    finalCtaTitle: "لنبنِ الخطوة التجارية القادمة بوضوح.",
    finalCtaBody:
      "سواء كنت مورداً أو شريكاً أو موزعاً أو مالك علامة، فإن ينساب مهيأة لدعم تنفيذ تجاري منضبط تكون الثقة في مركزه.",
    finalCtaButton: "ابدأ التواصل",
  },
  about: {
    pageTitle: "عن ينساب",
    intro: "بيت تجارة مقره دبي، بُني على الانضباط طويل المدى، والعلاقات الموثوقة، ومعايير تنفيذ جادة.",
    overview: [
      "ينساب للتجارة العامة ذ.م.م شركة تجارة عامة مقرها دبي، تأسست عام 2010، وتعمل كشركة عائلية بروح مؤسسية، وانضباط تجاري، ومرونة تشغيلية تدعم بناء القيمة على المدى الطويل.",
      "تتموضع الشركة لتوفير التوريد والتوزيع والتنفيذ عبر عدة فئات من المنتجات والاحتياجات التجارية.",
      "تعمل ينساب كمنصة تجارية موثوقة تربط الطلب السوقي بسلاسل إمداد تعتمد على علاقات قوية وعمليات منضبطة.",
    ],
    founderTitle: "رسالة المؤسسين",
    founderMessage: [
      "الأعمال المستدامة لا تُبنى على الصفقات وحدها، بل على الثقة، والوضوح، والثبات، والوفاء بالالتزامات.",
      "ويمنح موقع دبي الشركة قاعدة استراتيجية لربط الطلب الإقليمي بقنوات الإمداد الدولية مع الحفاظ على معايير عالية في السلوك المهني.",
      "طموحنا واضح وجاد: أن نمثل اسم ينساب باحترافية في كل صفقة، وكل شحنة، وكل علاقة نبنيها.",
    ],
    visionTitle: "الرؤية",
    visionBody:
      "أن تصبح ينساب اسماً تجارياً موثوقاً، معروفاً بالاعتمادية والانضباط في التنفيذ وصناعة قيمة تجارية طويلة الأمد داخل الإمارات والأسواق الإقليمية.",
    missionTitle: "المهمة",
    missionBody:
      "تقديم حلول موثوقة في التجارة والتوريد والمشتريات عبر بناء علاقات قوية مع الموردين واعتماد آليات تجارية واضحة وتنفيذ مهني داخل السوق.",
    valuesTitle: "القيم",
    valuesBody: "الثقة، الوضوح، الثبات، الانضباط في التنفيذ، الاستمرارية، والمسؤولية التجارية.",
  },
  services: {
    pageTitle: "الخدمات",
    intro:
      "تقدم ينساب قدرات تجارية عملية عبر التوريد والمشتريات والإمداد والتوزيع وتنفيذ العمليات ضمن ضبط مهني مؤسسي واضح.",
    cards: sharedServicesAr,
  },
  capabilities: {
    pageTitle: "القطاعات والقدرات التجارية",
    intro: "قدرات تجارية تشمل التوريد والإمداد والتوزيع والتنفيذ وفق متطلبات السوق العملية.",
    bullets: [
      "التجارة العامة والتوريد عبر عدة فئات",
      "خدمات المشتريات وفق متطلبات العملاء",
      "الجملة والتوزيع داخل الإمارات والأسواق الإقليمية المختارة",
      "تمثيل الموردين ودعم دخول الأسواق",
      "التنسيق التجاري وإدارة الموردين وضبط التوثيق",
      "التوريد التجاري وفق معايير الجودة والسعر والاعتمادية",
    ],
  },
  governance: {
    pageTitle: "الحوكمة والامتثال",
    intro: "تعمل ينساب على أسس تجارية وإدارية واضحة تعزز الثقة وتقلل مخاطر التنفيذ.",
    bullets: [
      "التوثيق التجاري السليم",
      "التحقق من الموردين ومصداقيتهم",
      "هياكل دفع مدروسة تجارياً",
      "الالتزام بمتطلبات الترخيص والجمارك والأنظمة ذات الصلة",
      "إطار تشغيلي منضبط يدعم النمو ويعزز ثقة الشركاء",
    ],
  },
  partnerships: {
    pageTitle: "التوزيع والشراكات",
    intro: "تؤمن ينساب بالشراكات التي تُبنى بعناية، وتُدار باحترافية، وتُصمم للنمو المستمر.",
    whyPartnerTitle: "لماذا الشراكة مع ينساب؟",
    bullets: [
      "اختيار الشركاء بعناية وعلى أساس الموثوقية",
      "التمثيل المهني وحماية الثقة التجارية",
      "وضوح التواصل وواقعية التوقعات",
      "الاستمرارية وتكرار الأعمال وصناعة قيمة طويلة الأمد للطرفين",
    ],
    journeyTitle: "رحلة الشراكة",
    journeySteps: [
      { title: "مواءمة استراتيجية أولية", body: "مواءمة تنفيذية حول جاذبية السوق وملاءمة الشريك والأهداف التجارية القابلة للقياس." },
      { title: "فهم المتطلبات", body: "تحديد المتطلبات التجارية والتشغيلية بدقة." },
      { title: "تقييم المورد أو السوق", body: "تقييم موثوقية المورد وملاءمة فرصة السوق." },
      { title: "هيكلة تجارية", body: "تصميم نموذج تجاري منضبط يشمل الشروط وهيكل الهوامش وحوكمة التنفيذ." },
      { title: "التوثيق والامتثال", body: "بناء إطار توثيق وامتثال محكم مع نقاط ضبط واضحة لتنفيذ منخفض المخاطر." },
      { title: "التنفيذ وإدارة العلاقة", body: "تنفيذ منسق مع متابعة أداء واستمرارية العلاقة." },
    ],
    partnerFormTitle: "كن شريكاً",
    partnerFormIntro:
      "يعمل ينساب مع الموردين وبائعي التجزئة والموزعين والشركاء التجاريين عبر نهج قائم على المهنية والتنظيم وصناعة قيمة متبادلة.",
    partnerFormFields: {
      name: "الاسم",
      company: "الشركة",
      country: "الدولة",
      businessType: "نوع النشاط",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الاستفسار",
    },
  },
  brands: {
    pageTitle: "العلامات وخطوط الأعمال",
    intro: "تدعم ينساب العلامات المملوكة وعلامات الشركاء ضمن إطار تنفيذي منضبط وتموضع تجاري طويل الأمد.",
    cards: [
      {
        name: "Somitta",
        website: "https://www.somitta.com/",
        tagline: "Feel The Sudanese Sense",
        category: "العطور والبخور ومنتجات الجمال",
        positioning: "مبنية على الأصالة وثراء التجربة الحسية وهوية مستلهمة من الجذور الثقافية.",
        status: "verified",
      },
      {
        name: "خط علامة إضافي",
        tagline: "التفاصيل متاحة عند الطلب",
        category: "يرجى التواصل معنا لتفاصيل الفئة",
        positioning: "تفاصيل التموضع التجاري متاحة عند الطلب",
        status: "missing",
      },
    ],
  },
  contact: {
    pageTitle: "ابدأ التواصل",
    intro:
      "للشراكات أو فرص التوريد أو مناقشات التوزيع أو الاستفسارات العامة، تواصل مع ينساب وسيقوم الفريق بالرد باحترافية ووضوح.",
    fields: {
      name: "الاسم",
      company: "الشركة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      inquiryType: "نوع الاستفسار",
      message: "الرسالة",
      submit: "إرسال الاستفسار",
    },
    inquiryOptions: [
      { value: "general", label: "استفسار عام" },
      { value: "partner", label: "استفسار شراكة" },
      { value: "supplier", label: "استفسار مورد" },
    ],
  },
};

export const contactDetails = sharedContact;

export const contentByLanguage: Record<SiteLanguage, LocaleContent> = {
  en: englishContent,
  ar: arabicContent,
};

export function getContent(language: SiteLanguage) {
  return contentByLanguage[language];
}
