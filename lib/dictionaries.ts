// ============================================================================
// 网站全部文案的唯一来源（Single Source of Truth）
// 所有页面组件都从这里读取文字。要新增语言时，复制 en 这一块、翻译内容即可。
// 内容严格来自客户提供的文档与真实网站 www.wholevantage.com，不自动编造。
// ============================================================================

export type Dictionary = typeof en

const en = {
  brand: 'WholeVantage Advisory',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    languages: 'Languages',
    aboutItems: {
      story: 'My Story',
      approach: 'Our Approach',
    },
    servicesItems: {
      content: 'Service Content',
      process: 'Service Process',
      fee: 'Service Fee',
    },
  },
  home: {
    heroTitle: 'Deeper understanding. Broader perspective.',
    heroText:
      'Practical and reliable HR advisory support for companies entering or operating in the U.S. market, helping organizations navigate talent, management, and compliance challenges with greater clarity and stability.',
    bookConsultation: 'Book Consultation',
    exploreServices: 'Explore Services',
    introTitle: 'We serve business founders and management teams',
    introText:
      'Whether you are building your U.S. HR infrastructure from scratch, resolving a critical workplace issue, or looking for ongoing advisory support, we deliver clear, actionable, and localized guidance.',
    wechatTitle: 'WholeVantage Advisory',
    wechatText: 'SCAN TO ADD FRIEND',
  },
  story: {
    title: 'About WholeVantage Advisory',
    subtitle:
      'Explore the purpose, background, and values behind WholeVantage Advisory',
    paragraphs: [
      'WholeVantage Advisory was established to support companies that are preparing to enter the U.S. market or are already operating in the United States, by providing practical and reliable HR consulting services.',
      'Through WholeVantage, I aim to bring together professional HR judgment, a psychology-informed understanding of human behavior and workplace dynamics, and practical support for real business situations. My goal is to provide clients with clear, sound, and actionable guidance.',
      'I bring over twenty years of leadership experience in human resources and organizational management, integrated with hands-on sales management experience and psychological counseling practice. With a Master\u2019s degree in Psychology and three senior U.S. HR professional certifications, I bring a multidisciplinary perspective across cultures, geographies, and business functions.',
      'In my approach, I combine a deep understanding of management structures and employment compliance with business reality and organizational insight. I am committed to helping companies build solid management foundations, implement effective operational practices, and establish strong organizational support systems, so they can remain competitive in a complex business environment.',
    ],
    highlightsTitle: 'Professional Highlights',
    highlights: [
      '20+ years of HR and organizational management leadership experience, including senior HR leadership roles with Fortune Global 500 and leading multinational companies such as BP and Nike.',
      'Hands-on sales management experience within the Lexus retail system',
      'Counseling-related practice experience with a large counseling organization in Southern California',
      'Master\u2019s degree in Psychology from Peking University',
      'U.S. HR professional certifications: SPHR, GPHR, and SHRM-CP',
      'Expertise covering senior HR management, global HR management, and professional HR practice capabilities',
    ],
  },
  approach: {
    title: 'Our Approach',
    subtitle:
      "WholeVantage's approach is built on four core principles. These principles reflect our professional judgment, the way we collaborate with clients, and our fundamental attitude toward people and organizational matters.",
    principles: [
      {
        tag: 'Integrity and Principles',
        title: 'Integrity',
        text: 'We provide professional, steady, and trustworthy judgment in matters involving compliance, management, and employee relations. We uphold professional ethics and ensure that every recommendation can stand up to careful review and practical application.',
      },
      {
        tag: 'Insight and Understanding',
        title: 'Insight',
        text: 'We look beyond the issue itself and pay close attention to the organizational context, management practices, workplace relationships, and business realities behind the situation. This allows us to help clients understand matters more accurately and identify practical solutions.',
      },
      {
        tag: 'Empathy and Respect',
        title: 'Empathy',
        text: 'While maintaining professional judgment, we also respect people\u2019s circumstances and feelings. We understand that people are at the center of organizational development, and we approach complex management matters with a strong sense of human care and respect.',
      },
      {
        tag: 'Action and Momentum',
        title: 'Energy',
        text: 'We focus on execution and implementation, not just recommendations on paper. With strong action orientation, we help drive change and support businesses in turning management strategies into visible and practical business outcomes.',
      },
    ],
  },
  serviceContent: {
    title: 'Services',
    subtitle:
      "Our services can be flexibly tailored and combined according to your company's stage of growth, key priorities, and practical business needs.",
    items: [
      {
        title: 'U.S. HR Infrastructure Setup',
        intro:
          'Build the foundational policies, documents, processes, and HR operating framework needed for U.S. employment operations, creating a stronger foundation for future growth.',
        points: [
          'Employee handbook and core policy development',
          'Support with foundational documents, including offer letters, confidentiality agreements, and job descriptions',
          'Review and structuring of onboarding, introductory-period review, role changes, and separation/offboarding processes',
          'Employee record setup and commonly used HR forms',
        ],
      },
      {
        title: 'Employment Compliance and Risk Prevention Support',
        intro:
          'Help companies identify and reduce employment compliance risks, while making management practices more structured and operational decisions more sound.',
        points: [
          'I-9, FLSA, and basic federal and state employment compliance self-checks and recommendations',
          'Employee vs. independent contractor, exempt vs. non-exempt classification, working hours, overtime, and compensation compliance guidance',
          'Disciplinary action, workplace investigation, and separation process recommendations',
          'Anti-harassment, anti-discrimination policy, and basic management training support',
        ],
      },
      {
        title: 'Recruitment and Hiring Support',
        intro:
          'We support companies in clarifying hiring needs and improving the connection between recruitment, offer communication, and onboarding.',
        points: [
          'Hiring Needs Analysis, Headcount Budgeting & Workforce Planning',
          'Job Description Optimization & Recruitment Channel Strategy',
          'Interview Process Design & Offer Communication Support',
          'Onboarding Coordination & Probation-Period Management',
        ],
      },
      {
        title: 'Employee Relations and Management Support',
        intro:
          'Support companies in managing daily employee relations, workplace communication, performance concerns, investigations, and sensitive employment matters in a practical and compliant manner.',
        points: [
          'Employee complaints, conflicts, and sensitive workplace issue handling support',
          'Workplace investigation process support, including fact-finding, documentation, and follow-up action recommendations',
          'Manager communication, coaching, and performance improvement support',
          'Disciplinary action, separation, and grievance-related process support',
          'Workplace injury, workers\u2019 compensation coordination, and return-to-work communication support',
          'Daily management recommendations to reduce potential employment dispute risks',
        ],
      },
      {
        title: 'Total Rewards: Compensation & Benefits Support',
        intro:
          'Establish competitive incentive and benefit mechanisms to attract, motivate, and retain core talent.',
        points: [
          'Compensation Structures, Job Grading, Salary Bands & Market Data Analysis',
          'Compensation Management for Hiring, Promotions & Internal Transfers',
          'Bonus and Comprehensive Incentive Plan Design',
          'Comprehensive Benefits, 401(k) Plans, PTO & Flexible Welfare Planning',
        ],
      },
      {
        title: 'Performance Management & Management Capability Development Support',
        intro:
          'Enhance leadership, align evaluation systems, and improve team collaboration to empower organizational development.',
        points: [
          'Performance evaluation system design and implementation coaching',
          'Leadership & Core Management Skills Training',
          'Cross-Cultural Communication & Global Team Collaboration',
          'Customized Internal Management Workshop Design and Facilitation',
        ],
      },
      {
        title: 'Talent Development and Succession Pipeline Support',
        intro:
          'Support companies in identifying, developing, and retaining key talent while building a sustainable talent pipeline for future growth.',
        points: [
          'Key talent identification and development recommendations',
          'Employee career development path design',
          'Individual development plan (IDP) guidance for key employees',
          'Job rotation, cross-functional exposure, and development opportunity recommendations',
          'Initial succession planning for key positions',
          'Internal mentorship or coaching program design and implementation support',
        ],
      },
      {
        title: 'Corporate Culture and Employee Engagement Enhancement',
        intro:
          'Shape a positive organizational atmosphere to enhance employee belonging and engagement.',
        points: [
          'Core Corporate Values Refinement and Implementation',
          'Employee Satisfaction Surveys and Improvement Plan Development',
          'Internal Communication & Speak Up Mechanism Establishment',
          'Employee Spot Recognition & Long-Term Appreciation Program Design',
        ],
      },
      {
        title: 'HR Systems and Process Optimization Support',
        intro:
          'Leverage digital tools to improve management operational efficiency and optimize the employee service experience.',
        points: [
          'HR and payroll information system selection recommendations',
          'Core operational process review and automation optimization',
          'Employee self-service platform promotion and application',
          'Key management data metrics establishment and analysis',
        ],
      },
      {
        title: 'Ongoing HR Advisory & Strategic Support',
        intro:
          'Closely align with different business growth stages to provide strategic recommendations on HR strategy, organizational development (OD) and key management priorities for each phase.',
        points: [
          'Monthly Retainer or On-Demand HR Advisory Services: Offering flexible support structures tailored to your company\u2019s operational rhythm and immediate needs.',
          'Day-to-Day Q&A Support: Reliable counsel covering ongoing HR and management challenges, includes but not limited to recruitment, compliance, employee relations.',
          'Post-Implementation Maintenance: Ongoing follow-up support to ensure previously implemented projects transition smoothly into daily operations.',
        ],
      },
    ],
  },
  serviceProcess: {
    title: 'Service Process',
    subtitle:
      'A clear, transparent, and flexible collaboration process that ensures every engagement aligns precisely with your business development goals.',
    steps: [
      {
        step: 'Step 01',
        title: 'Initial Consultation',
        text: 'Through a phone call, online meeting, or email communication, we learn about your company\u2019s current stage, key challenges, and the issues you would like to prioritize. This helps us initially identify the right support direction and cooperation focus.',
      },
      {
        step: 'Step 02',
        title: 'Needs Confirmation and Service Proposal',
        text: 'Based on the initial discussion, we further clarify the scope of support, priorities, cooperation approach, and expected goals. We then provide corresponding service recommendations, timeline arrangements, and fee proposals.',
      },
      {
        step: 'Step 03',
        title: 'Project Implementation and Phase-by-Phase Support',
        text: 'After the cooperation scope is confirmed, we begin the agreed project work or phased advisory support. The work focuses on implementing solutions for the HR and management issues most relevant to your company\u2019s current needs.',
      },
      {
        step: 'Step 04',
        title: 'Feedback, Optimization, and Ongoing Support',
        text: 'Based on implementation progress, management feedback, and business changes, we adjust the support focus as needed. After the project is completed, ongoing monthly or on-demand advisory support can also be provided according to your company\u2019s needs.',
      },
    ],
    ctaTitle: 'Not sure what the right first step is?',
    ctaText:
      'You are welcome to start with an initial conversation. Based on your current needs and situation, we can help identify the key priorities and determine the most suitable cooperation approach.',
    ctaButton: 'Contact Us',
  },
  serviceFee: {
    title: 'Collaboration and Pricing Models',
    subtitle:
      'To meet the diverse needs of companies at different stages of growth and with varying management priorities, we offer flexible collaboration models that ensure efficient use of resources.',
    models: [
      {
        title: 'Specialist Consultation and Guidance',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies with basic operational structures and teams in place, seeking professional judgment and solutions for specific challenges.',
        exampleLabel: 'Business Examples',
        example:
          'Guidance on sudden organizational changes, compensation setting for new positions, troubleshooting specific employee issues, and detailed payroll management analysis.',
        billingLabel: 'Billing Reference',
        billing:
          'Billing is based on the complexity and scope of the issue, charged either per consultation or as an annual retainer.',
      },
      {
        title: 'Project-Based Customized Services',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies with emerging teams focused on building comprehensive systems and processes within a specific timeframe.',
        exampleLabel: 'Business Examples',
        example:
          'Building foundational management systems (such as employee handbooks), establishing and optimizing recruitment systems, designing annual performance evaluation mechanisms.',
        billingLabel: 'Billing Reference',
        billing:
          'Project pricing is based on scope, deliverables, and expected collaboration timeline; installment payment options are available when needed.',
      },
      {
        title: 'Ongoing Management Advisory',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Growing companies with complete internal HR teams that need regular, stable, and in-depth ongoing support.',
        exampleLabel: 'Business Examples',
        example:
          'Teams requiring continuous support across recruitment, employment compliance, daily employee relations management, and other HR dimensions based on annual planning.',
        billingLabel: 'Billing Reference',
        billing:
          'Monthly or quarterly fixed service fees, with flexible adjustments based on service frequency and scope.',
      },
      {
        title: 'Training and Management Workshops',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies needing team management capability development, cultural awareness enhancement, and specialized training programs.',
        exampleLabel: 'Business Examples',
        example:
          'Front-line manager core competency training, team communication and collaboration workshops, corporate values and culture development sessions.',
        billingLabel: 'Billing Reference',
        billing:
          'Pricing is customized based on course design, duration, training format, and delivery method (online/in-person).',
      },
    ],
    ctaTitle: 'Need help determining the right collaboration model for your company?',
    ctaText:
      'We welcome an initial conversation. Based on your business priorities and budget, we can recommend the most suitable collaboration approach for your needs.',
    ctaButton: 'Contact Us',
  },
  contact: {
    title: 'Contact Us',
    subtitle:
      'Have any questions, collaboration ideas, or just want to say hello? Feel free to reach out to us.',
    pageTitle: 'Contact Us',
    pageSubtitle:
      'Have any questions, collaboration ideas, or just want to say hello? Feel free to reach out to Shephine.',
    emailLabel: 'Email',
    email: 'info@wholevantage.com',
    phoneLabel: 'Phone',
    phone: '+1-407-488-3915',
    officeLabel: 'Office Address',
    office: 'Orlando,Florida,USA',
    formTitle: 'Send Us a Message',
    formSubtitle:
      'Fill out the form below and we will get back to you as soon as possible.',
    fields: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
    },
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Thank you for your message!',
    successText:
      'We have received your message and will get back to you as soon as possible.',
    successClose: 'Close',
    errorText: 'Something went wrong. Please try again or email us directly.',
    configText:
      'The contact form is not fully configured yet. Please email us directly for now.',
  },
  blog: {
    title: 'Blog',
    subtitle:
      'Insights and perspectives on HR management, employment compliance, and organizational development.',
    comingSoon: 'Articles Coming Soon',
    comingSoonText:
      'We are preparing practical articles on HR management and the U.S. employment landscape. Please check back soon.',
    searchPlaceholder: 'Search articles...',
    readMore: 'Read more',
    backToBlog: 'Back to blog',
    noResults: 'No articles match your search.',
    categoriesLabel: 'Filter by category',
    categories: {
      all: 'All',
      compliance: 'Compliance',
      hiring: 'Hiring',
      expansion: 'Expansion',
    },
    minRead: 'min read',
    writtenBy: 'Written by',
    relatedTitle: 'Related articles',
    shareLabel: 'Share',
    prev: 'Previous',
    next: 'Next',
    // 非英文语言会在文章顶部显示该提示；英文留空表示不显示。
    articleNotice: '',
    // 文章标题的本地化映射（按 slug）。英文为原标题。
    articleTitles: {
      'us-employment-contracts-101': 'U.S. Employment Contracts 101',
      'i9-compliance-checklist': 'The I-9 Compliance Checklist',
      'hiring-first-us-employee': 'Hiring Your First U.S. Employee',
    } as Record<string, string>,
  },
  footer: {
    about:
      'We are committed to providing high-quality business consulting and human resources solutions to help companies grow and operate more effectively.',
    contactTitle: 'Contact Us',
    followTitle: 'Follow Us',
    subscribeTitle: 'Subscribe to HR news',
    emailPlaceholder: 'your email address',
    subscribe: 'Subscribe',
    subscribeSuccess: 'Thanks for subscribing!',
    languageNote:
      'Website available in English and 简体中文. Use the language switcher at the top.',
    rights: '\u00A9 2026 WholeVantage Advisory. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
} as const

const zh = {
  brand: 'WholeVantage Advisory',
  nav: {
    home: '首页',
    about: '关于我们',
    services: '服务',
    contact: '联系我们',
    blog: '博客',
    languages: '语言',
    aboutItems: {
      story: '我的故事',
      approach: '我们的方法',
    },
    servicesItems: {
      content: '服务内容',
      process: '服务流程',
      fee: '服务费用',
    },
  },
  home: {
    heroTitle: '更深的理解，更广的视野。',
    heroText: '为进入或运营美国市场的企业提供务实可靠的人力资源顾问支持，帮助组织更清晰、稳健地应对人才、管理和合规挑战。',
    bookConsultation: '预约咨询',
    exploreServices: '了解服务',
    introTitle: '我们服务于企业创始人和管理团队',
    introText: '无论您是从零开始搭建美国人力资源体系，还是正在处理关键的职场问题，或是寻求持续的顾问支持，我们都能提供清晰、可行且本地化的指导。',
    wechatTitle: 'WholeVantage Advisory',
    wechatText: '扫码添加好友',
  },
  story: {
    title: '关于 WholeVantage Advisory',
    subtitle: '了解 WholeVantage Advisory 背后的理念、背景与价值观',
    paragraphs: [
      'WholeVantage Advisory 成立于为准备进入美国市场或已在美国运营的企业，提供务实可靠的人力资源咨询服务。',
      '通过 WholeVantage，我致力于将专业的人力资源判断、基于心理学的人性与职场动态理解，以及对真实商业场景的实践支持相结合。我的目标是为客户提供清晰、可靠且可执行的指导。',
      '我拥有超过二十年的人力资源与组织管理领导经验，并结合一线的销售管理实践与心理咨询经验。拥有北京大学心理学硕士学位及三项美国高级人力资源专业认证，我带来了跨文化、跨地域、跨职能的多元视角。',
      '在我的方法中，我将对管理架构和用工合规的深入理解与商业现实和组织洞察相结合。我致力于帮助企业夯实管理基础、落地有效的运营实践、建立强有力的组织支持体系，使其在复杂的商业环境中保持竞争力。',
    ],
    highlightsTitle: '专业亮点',
    highlights: [
      '20余年人力资源与组织管理领导经验，曾在财富世界500强及领先跨国企业（如BP、耐克）担任高级人力资源领导职务。',
      '在雷克萨斯零售体系内拥有实战销售管理经验',
      '在南加州大型心理咨询机构拥有咨询相关实践经验',
      '北京大学心理学硕士',
      '美国人力资源专业认证：SPHR、GPHR 和 SHRM-CP',
      '专业领域涵盖高级人力资源管理、全球人力资源管理及专业人力资源实践能力',
    ],
  },
  approach: {
    title: '我们的方法',
    subtitle: 'WholeVantage 的方法建立在四大核心原则之上。这些原则体现了我们的专业判断、与客户的协作方式，以及我们对人和组织事务的基本态度。',
    principles: [
      {
        tag: '正直与原则',
        title: '正直',
        text: '我们在合规、管理及员工关系等事务中，提供专业、稳健且值得信赖的判断。我们恪守职业道德，确保每一条建议都能经得起审慎审查和实践检验。',
      },
      {
        tag: '洞察与理解',
        title: '洞察',
        text: '我们不仅关注问题本身，更注重其背后的组织背景、管理实践、职场关系和商业现实。这使我们能够帮助客户更准确地理解问题，并找到切实可行的解决方案。',
      },
      {
        tag: '同理与尊重',
        title: '同理',
        text: '保持专业判断的同时，我们也尊重每个人的处境与感受。我们理解人是组织发展的核心，并以高度的人文关怀和尊重来处理复杂的管理事务。',
      },
      {
        tag: '行动与推动',
        title: '行动力',
        text: '我们注重执行与落地，而不仅是纸面建议。凭借强大的行动导向，我们帮助推动变革，支持企业将管理策略转化为可见且实际的业务成果。',
      },
    ],
  },
  serviceContent: {
    title: '服务内容',
    subtitle: '我们的服务可根据您公司的成长阶段、关键重点和实际业务需求灵活定制与组合。',
    items: [
      {
        title: '美国人力资源基础体系搭建',
        intro: '为美国用工运营搭建基础性的政策、文件、流程和人力资源运营框架，为企业未来发展奠定坚实基础。',
        points: [
          '员工手册与核心政策制定',
          '基础文件支持，包括录用通知、保密协议和岗位说明书',
          '入职、试用期评估、岗位变动及离职流程的梳理与优化',
          '员工档案建立及常用人事表格',
        ],
      },
      {
        title: '用工合规与风险防范支持',
        intro: '帮助企业识别并降低用工合规风险，使管理实践更加规范，经营决策更加稳健。',
        points: [
          'I-9、FLSA 及联邦与州基本用工合规自查与建议',
          '员工与独立承包商、豁免与非豁免员工分类，工时、加班及薪酬合规指导',
          '纪律处分、职场调查及离职流程建议',
          '反骚扰、反歧视政策及基础管理培训支持',
        ],
      },
      {
        title: '招聘与录用支持',
        intro: '我们支持企业明确招聘需求，提升招聘、录用沟通与入职衔接的效率。',
        points: [
          '招聘需求分析、人员编制预算与人力规划',
          '岗位说明书优化与招聘渠道策略',
          '面试流程设计与录用沟通支持',
          '入职协调与试用期管理',
        ],
      },
      {
        title: '员工关系与管理支持',
        intro: '支持企业以务实合规的方式管理日常员工关系、职场沟通、绩效问题、调查及敏感用工事宜。',
        points: [
          '员工投诉、冲突及敏感职场问题处理支持',
          '职场调查流程支持，包括事实调查、文件记录及后续行动建议',
          '管理者沟通、辅导与绩效改进支持',
          '纪律处分、离职及申诉相关流程支持',
          '工伤、工伤赔偿协调及复工沟通支持',
          '日常管理建议，降低潜在用工纠纷风险',
        ],
      },
      {
        title: '全面薪酬：薪酬与福利支持',
        intro: '建立具有竞争力的激励与福利机制，以吸引、激励和保留核心人才。',
        points: [
          '薪酬结构、岗位分级、薪资带宽及市场数据分析',
          '招聘、晋升及内部调动的薪酬管理',
          '奖金及综合激励计划设计',
          '综合福利、401(k)计划、带薪休假及灵活福利规划',
        ],
      },
      {
        title: '绩效管理与管理能力发展支持',
        intro: '提升领导力，对齐评估体系，改善团队协作，赋能组织发展。',
        points: [
          '绩效评估体系设计与实施辅导',
          '领导力与核心管理技能培训',
          '跨文化沟通与全球团队协作',
          '定制化内部管理研讨会设计与实施',
        ],
      },
      {
        title: '人才发展与继任梯队支持',
        intro: '支持企业识别、培养和保留关键人才，同时为未来发展构建可持续的人才梯队。',
        points: [
          '关键人才识别与发展建议',
          '员工职业发展路径设计',
          '关键员工个人发展计划（IDP）指导',
          '岗位轮换、跨职能历练及发展机会建议',
          '关键岗位初步继任规划',
          '内部导师或教练项目设计与实施支持',
        ],
      },
      {
        title: '企业文化与员工敬业度提升',
        intro: '塑造积极的组织氛围，提升员工归属感与敬业度。',
        points: [
          '核心企业价值观提炼与落地',
          '员工满意度调研与改进方案制定',
          '内部沟通与建言机制建立',
          '员工即时认可与长期表彰计划设计',
        ],
      },
      {
        title: '人力资源系统与流程优化支持',
        intro: '借助数字化工具提升管理运营效率，优化员工服务体验。',
        points: [
          '人力资源与薪酬信息系统选型建议',
          '核心运营流程审查与自动化优化',
          '员工自助平台推广与应用',
          '关键管理数据指标建立与分析',
        ],
      },
      {
        title: '持续人力资源顾问与战略支持',
        intro: '紧密结合不同业务成长阶段，就人力资源战略、组织发展（OD）及各阶段管理重点提供战略建议。',
        points: [
          '月度顾问或按需人力资源顾问服务：根据公司运营节奏和即时需求提供灵活支持',
          '日常问答支持：涵盖招聘、合规、员工关系等持续的人力资源与管理挑战的可靠咨询',
          '项目后期维护：确保已实施项目顺利过渡到日常运营的持续跟进支持',
        ],
      },
    ],
  },
  serviceProcess: {
    title: '服务流程',
    subtitle: '清晰、透明且灵活的合作流程，确保每一次合作都精准对齐您的业务发展目标。',
    steps: [
      {
        step: '第一步',
        title: '初步咨询',
        text: '通过电话、在线会议或邮件沟通，了解您公司当前阶段、关键挑战及希望优先解决的问题，帮助我们初步确定合适的支持方向和合作重点。',
      },
      {
        step: '第二步',
        title: '需求确认与服务方案',
        text: '基于初步沟通，进一步明确支持范围、重点、合作方式及预期目标。随后提供相应的服务建议、时间安排及费用方案。',
      },
      {
        step: '第三步',
        title: '项目实施与分阶段支持',
        text: '确认合作范围后，我们开始约定的项目工作或分阶段顾问支持。工作重点在于落实与您公司当前需求最相关的人力资源和管理问题的解决方案。',
      },
      {
        step: '第四步',
        title: '反馈、优化与持续支持',
        text: '根据实施进展、管理反馈及业务变化，适时调整支持重点。项目完成后，也可根据公司需求提供持续的月度或按需顾问支持。',
      },
    ],
    ctaTitle: '不确定第一步该怎么做？',
    ctaText: '欢迎从一次初步沟通开始。根据您当前的需求和情况，我们可以帮助确定关键重点，并确定最合适的合作方式。',
    ctaButton: '联系我们',
  },
  serviceFee: {
    title: '合作与收费模式',
    subtitle: '为满足不同成长阶段和不同管理重点企业的多样化需求，我们提供灵活的合作模式，确保资源高效利用。',
    models: [
      {
        title: '专家咨询与指导',
        scenarioLabel: '适用场景',
        scenario: '已具备基本运营架构和团队，针���特定挑战寻求专业判断和解决方案的企业。',
        exampleLabel: '业务示例',
        example: '突发组织变动指导、新岗位薪酬设定、特定员工问题排查、详细薪酬管理分析等。',
        billingLabel: '计费参考',
        billing: '根据问题复杂度和范围，按次咨询或年度顾问费计费。',
      },
      {
        title: '项目制定制化服务',
        scenarioLabel: '适用场景',
        scenario: '团队初具规模，专注于在特定时间内构建全面体系和流程的企业。',
        exampleLabel: '业务示例',
        example: '搭建基础管理制度（如员工手册）、建立和优化招聘体系、设计年度绩效评估机制等。',
        billingLabel: '计费参考',
        billing: '项目定价基于范围、交付成果及预期合作周期；需要时可提供分期付款。',
      },
      {
        title: '持续管理顾问',
        scenarioLabel: '适用场景',
        scenario: '处于成长期的企业，内部人力资源团队完善，需要定期、稳定且深入的持续支持。',
        exampleLabel: '业务示例',
        example: '基于年度规划，在招聘、用工合规、日常员工关系管理等人力资源维度需要持续支持的团队。',
        billingLabel: '计费参考',
        billing: '按月或按季度固定服务费，可根据服务频率和范围灵活调整。',
      },
      {
        title: '培训与管理研讨会',
        scenarioLabel: '适用场景',
        scenario: '需要团队管理能力发展、文化意识提升及专项培训项目的企业。',
        exampleLabel: '业务示例',
        example: '一线管理者核心能力培训、团队沟通与协作工作坊、企业价值观与文化建设研讨等。',
        billingLabel: '计费参考',
        billing: '定价根据课程设计、时长、培训形式及交付方式（线上/线下）定制。',
      },
    ],
    ctaTitle: '需要帮助确定适合您公司的合作模式？',
    ctaText: '欢迎进行初步沟通。根据您的业务重点和预算，我们可以推荐最适合的合作方式。',
    ctaButton: '联系我们',
  },
  contact: {
    title: '联系我们',
    subtitle: '有任何问题、合作想法，或只是想打个招呼？欢迎随时与我们联系。',
    pageTitle: '联系我们',
    pageSubtitle: '有任何问题、合作想法，或只是想打个招呼？欢迎随时联系 Shephine。',
    emailLabel: '邮箱',
    email: 'info@wholevantage.com',
    phoneLabel: '电话',
    phone: '+1-407-488-3915',
    officeLabel: '办公地址',
    office: '美国佛罗里达州奥兰多',
    formTitle: '给我们留言',
    formSubtitle: '填写下方表单，我们会尽快回复您。',
    fields: {
      name: '您的姓名',
      email: '您的邮箱',
      subject: '主题',
      message: '您的留言',
    },
    submit: '发送留言',
    submitting: '发送中...',
    successTitle: '感谢您的留言！',
    successText: '我们已收到您的留言，会尽快回复您。',
    successClose: '关闭',
    errorText: '出了点问题，请重试或直接给我们发邮件。',
    configText: '联系表单尚未完全配置，请暂时直接给我们发邮件。',
  },
  blog: {
    ...en.blog,
    title: '博客',
    subtitle: '关于人力资源管理、用工合规和组织发展的洞察与观点。',
    comingSoon: '文章即将上线',
    comingSoonText: '我们正在准备关于人力资源管理和美国用工环境的实用文章，敬请期待。',
  },
  footer: {
    about: '我们致力于提供高质量的商业咨询和人力资源解决方案，帮助企业更有效地成长与运营。',
    contactTitle: '联系我们',
    followTitle: '关注我们',
    subscribeTitle: '订阅人力资源资讯',
    emailPlaceholder: '您的邮箱地址',
    subscribe: '订阅',
    subscribeSuccess: '感谢订阅！',
    languageNote: '本网站提供 English 和 简体中文 版本，请使用顶部语言切换器。',
    rights: '© 2026 WholeVantage Advisory. 保留所有权利。',
    privacy: '隐私政策',
    terms: '服务条款',
  },
}
// 西班牙语：完整翻译核心页面字段；深层列表内容（服务条目、流程步骤、收费模型）
// 暂通过展开 en 回退到英文，待后续补全。
const es = {
  ...en,
  nav: {
    ...en.nav,
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    contact: 'Contacto',
    blog: 'Blog',
    languages: 'Idioma',
    aboutItems: {
      story: 'Mi historia',
      approach: 'Nuestro enfoque',
    },
    servicesItems: {
      content: 'Contenido del servicio',
      process: 'Proceso de servicio',
      fee: 'Tarifas del servicio',
    },
  },
  home: {
    ...en.home,
    heroTitle: 'Asesoría de RR.HH. para empresas en EE.UU.',
    heroText:
      'Apoyo práctico y confiable en recursos humanos para empresas que ingresan u operan en el mercado estadounidense.',
    bookConsultation: 'Agendar consulta',
    exploreServices: 'Ver servicios',
    introTitle: 'Atendemos a fundadores y equipos directivos',
    introText:
      'Ya sea que esté construyendo su infraestructura de RR.HH. en EE.UU. desde cero, resolviendo un problema laboral crítico o buscando asesoría continua, ofrecemos orientación clara, accionable y localizada.',
    wechatText: 'ESCANEE PARA AGREGAR',
  },
  story: {
    ...en.story,
    title: 'Sobre WholeVantage Advisory',
    subtitle:
      'Conozca el propósito, la trayectoria y los valores que sustentan WholeVantage Advisory',
    paragraphs: [
      'WholeVantage Advisory fue creada para apoyar a empresas que se preparan para ingresar al mercado estadounidense o que ya operan en Estados Unidos, mediante servicios de consultoría en RR.HH. prácticos y confiables.',
      'A través de WholeVantage, integro criterio profesional de RR.HH., una comprensión de la conducta humana y la dinámica laboral con base en psicología, y un acompañamiento práctico para situaciones reales de negocio. Mi objetivo es brindar orientación clara, sólida y accionable.',
      'Aporto más de veinte años de experiencia directiva en recursos humanos y gestión organizacional, combinada con experiencia práctica en dirección comercial y práctica en consejería psicológica. Con una Maestría en Psicología y tres certificaciones profesionales sénior de RR.HH. en EE.UU., ofrezco una perspectiva multidisciplinaria a través de culturas, geografías y funciones de negocio.',
      'En mi enfoque, combino una comprensión profunda de las estructuras de gestión y el cumplimiento laboral con la realidad del negocio y la perspectiva organizacional. Me comprometo a ayudar a las empresas a construir bases de gestión sólidas, implementar prácticas operativas eficaces y establecer sistemas de soporte organizacional sólidos, para que puedan mantenerse competitivas en un entorno empresarial complejo.',
    ],
    highlightsTitle: 'Aspectos profesionales destacados',
    highlights: [
      'Más de 20 años de experiencia de liderazgo en RR.HH. y gestión organizacional, incluyendo roles sénior de liderazgo de RR.HH. en empresas Fortune Global 500 y multinacionales líderes como BP y Nike.',
      'Experiencia práctica en dirección comercial dentro del sistema minorista de Lexus',
      'Experiencia práctica relacionada con consejería en una gran organización de consejería en el sur de California',
      'Maestría en Psicología por la Universidad de Pekín',
      'Certificaciones profesionales de RR.HH. en EE.UU.: SPHR, GPHR y SHRM-CP',
      'Experiencia en gestión sénior de RR.HH., gestión global de RR.HH. y capacidades profesionales de práctica de RR.HH.',
    ],
  },
  approach: {
    ...en.approach,
    title: 'Nuestro enfoque',
    subtitle:
      'El enfoque de WholeVantage se basa en cuatro principios fundamentales. Estos principios reflejan nuestro criterio profesional, la forma en que colaboramos con los clientes y nuestra actitud fundamental hacia las personas y los asuntos organizacionales.',
    principles: [
      {
        tag: 'Integridad y principios',
        title: 'Integridad',
        text: 'Ofrecemos un criterio profesional, sólido y confiable en asuntos de cumplimiento, gestión y relaciones laborales. Mantenemos la ética profesional y garantizamos que cada recomendación resista una revisión cuidadosa y su aplicación práctica.',
      },
      {
        tag: 'Perspicacia y comprensión',
        title: 'Perspicacia',
        text: 'Miramos más allá del problema en sí y prestamos especial atención al contexto organizacional, las prácticas de gestión, las relaciones laborales y la realidad del negocio detrás de cada situación. Esto nos permite ayudar a los clientes a comprender los asuntos con mayor precisión e identificar soluciones prácticas.',
      },
      {
        tag: 'Empatía y respeto',
        title: 'Empatía',
        text: 'Si bien mantenemos el criterio profesional, también respetamos las circunstancias y los sentimientos de las personas. Entendemos que las personas están en el centro del desarrollo organizacional y abordamos los asuntos de gestión complejos con un fuerte sentido de cuidado y respeto humano.',
      },
      {
        tag: 'Acción e impulso',
        title: 'Energía',
        text: 'Nos enfocamos en la ejecución y la implementación, no solo en recomendaciones sobre el papel. Con una fuerte orientación a la acción, ayudamos a impulsar el cambio y apoyamos a las empresas para convertir las estrategias de gestión en resultados de negocio visibles y prácticos.',
      },
    ],
  },
  serviceContent: {
    ...en.serviceContent,
    title: 'Servicios',
    subtitle:
      'Nuestros servicios se adaptan y combinan de forma flexible según la etapa de crecimiento de su empresa, sus prioridades clave y sus necesidades prácticas de negocio.',
    items: [
      {
        title: 'Implementación de Infraestructura de RR.HH. en EE.UU.',
        intro:
          'Construya las políticas, documentos, procesos y el marco operativo de RR.HH. fundamentales para operar en EE.UU., creando una base sólida para el crecimiento futuro.',
        points: [
          'Desarrollo de manual del empleado y políticas esenciales',
          'Apoyo con documentos básicos: cartas de oferta, acuerdos de confidencialidad y descripciones de puesto',
          'Revisión y estructuración de onboarding, evaluación del periodo de prueba, cambios de rol y procesos de desvinculación',
          'Configuración de expedientes de empleados y formularios de RR.HH. de uso frecuente',
        ],
      },
      {
        title: 'Cumplimiento Laboral y Prevención de Riesgos',
        intro:
          'Ayudamos a identificar y reducir riesgos de cumplimiento laboral, estructurando prácticas de gestión y fortaleciendo decisiones operativas.',
        points: [
          'Autoevaluaciones y recomendaciones básicas de cumplimiento federal y estatal: I-9, FLSA',
          'Clasificación empleado vs. contratista, exento vs. no exento, horas de trabajo, horas extra y compensación',
          'Acciones disciplinarias, investigaciones laborales y recomendaciones de procesos de separación',
        ],
      },
      {
        title: 'Reclutamiento y Onboarding',
        intro:
          'Atraiga talento adecuado y asegure una integración efectiva en el contexto estadounidense.',
        points: [
          'Definición de perfiles y estrategia de atracción',
          'Proceso de entrevistas estructuradas y verificación',
          'Plan de onboarding de 30-60-90 días',
        ],
      },
      {
        title: 'Relaciones Laborales y Comunicación',
        intro:
          'Gestione conflictos y mejore la comunicación en equipos multiculturales.',
        points: [
          'Mediación y resolución de conflictos',
          'Políticas de conducta y canales de denuncia',
          'Comunicación interna efectiva',
        ],
      },
      {
        title: 'Compensación Total: Remuneración y Beneficios',
        intro:
          'Establezca mecanismos competitivos de incentivos y beneficios para atraer, motivar y retener talento clave.',
        points: [
          'Estructuras salariales, valoración de puestos, bandas salariales y análisis de mercado',
          'Gestión de compensación para contratación, promociones y traslados internos',
          'Diseño de bonos y planes de incentivos integrales',
          'Beneficios integrales, planes 401(k), PTO y bienestar flexible',
        ],
      },
      {
        title: 'Gestión del Desempeño y Desarrollo Gerencial',
        intro:
          'Fortalezca liderazgo, alinee sistemas de evaluación y mejore la colaboración para impulsar el desarrollo organizacional.',
        points: [
          'Diseño e implementación de sistemas de evaluación de desempeño',
          'Capacitación en liderazgo y habilidades gerenciales esenciales',
          'Comunicación intercultural y colaboración de equipos globales',
          'Diseño y facilitación de talleres internos personalizados',
        ],
      },
      {
        title: 'Desarrollo de Talento y Sucesión',
        intro:
          'Apoyamos a identificar, desarrollar y retener talento clave, construyendo un pipeline sostenible para el crecimiento futuro.',
        points: [
          'Mapeo de talento y planes de desarrollo individual',
          'Programas de sucesión para roles críticos',
          'Mentoring y coaching ejecutivo',
        ],
      },
      {
        title: 'Cultura Corporativa y Compromiso del Empleado',
        intro:
          'Modele una atmósfera organizacional positiva para fortalecer pertenencia y compromiso.',
        points: [
          'Refinamiento e implementación de valores corporativos',
          'Encuestas de clima y planes de acción',
          'Iniciativas de reconocimiento y bienestar',
        ],
      },
      {
        title: 'Optimización de Sistemas y Procesos de RR.HH.',
        intro:
          'Aproveche herramientas digitales para mejorar la eficiencia operativa de la gestión y optimizar la experiencia de servicio al empleado.',
        points: [
          'Recomendaciones para la selección de sistemas de información de RR.HH. y nómina',
          'Revisión de procesos operativos clave y optimización mediante automatización',
          'Promoción y aplicación de plataformas de autoservicio para empleados',
          'Establecimiento y análisis de métricas clave de datos de gestión',
        ],
      },
      {
        title: 'Asesoría de RR.HH. Continua y Apoyo Estratégico',
        intro:
          'Nos alineamos estrechamente con las distintas etapas de crecimiento del negocio para ofrecer recomendaciones estratégicas sobre la estrategia de RR.HH., el desarrollo organizacional (OD) y las prioridades clave de gestión en cada fase.',
        points: [
          'Servicios de asesoría de RR.HH. por retainer mensual o por demanda: estructuras de apoyo flexibles adaptadas al ritmo operativo y las necesidades inmediatas de su empresa.',
          'Soporte de preguntas y respuestas del día a día: asesoría confiable sobre desafíos continuos de RR.HH. y gestión, incluyendo, entre otros, reclutamiento, cumplimiento y relaciones laborales.',
          'Mantenimiento posterior a la implementación: seguimiento continuo para garantizar que los proyectos implementados se integren sin problemas en las operaciones diarias.',
        ],
      },
    ],
  },
  serviceProcess: {
    ...en.serviceProcess,
    title: 'Proceso de servicio',
    subtitle:
      'Un proceso de colaboración claro, transparente y flexible que garantiza que cada compromiso se alinee con precisión con sus objetivos de desarrollo de negocio.',
    ctaTitle: '¿No está seguro de cuál es el primer paso correcto?',
    ctaText:
      'Le invitamos a comenzar con una conversación inicial. Según sus necesidades y su situación actual, podemos ayudar a identificar las prioridades clave y determinar el enfoque de colaboración más adecuado.',
    ctaButton: 'Contáctenos',
  },
  serviceFee: {
    ...en.serviceFee,
    title: 'Modelos de colaboración y precios',
    subtitle:
      'Para satisfacer las diversas necesidades de empresas en diferentes etapas de crecimiento y con distintas prioridades de gestión, ofrecemos modelos de colaboración flexibles que garantizan un uso eficiente de los recursos.',
    ctaTitle:
      '¿Necesita ayuda para determinar el modelo de colaboración adecuado para su empresa?',
    ctaText:
      'Le invitamos a una conversación inicial. Según las prioridades y el presupuesto de su negocio, podemos recomendar el enfoque de colaboración más adecuado para sus necesidades.',
    ctaButton: 'Contáctenos',
  },
  contact: {
    ...en.contact,
    title: 'Contacto',
    subtitle:
      '¿Tiene alguna pregunta, idea de colaboración o simplemente quiere saludar? No dude en ponerse en contacto con nosotros.',
    pageTitle: 'Contáctenos',
    pageSubtitle:
      '¿Tiene alguna pregunta, idea de colaboración o simplemente quiere saludar? No dude en escribirnos.',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono',
    officeLabel: 'Dirección de la oficina',
    formTitle: 'Envíenos un mensaje',
    formSubtitle:
      'Complete el formulario a continuación y le responderemos lo antes posible.',
    fields: {
      name: 'Su nombre',
      email: 'Su correo electrónico',
      subject: 'Asunto',
      message: 'Su mensaje',
    },
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    successTitle: '¡Gracias por su mensaje!',
    successText:
      'Hemos recibido su mensaje y le responderemos lo antes posible.',
    successClose: 'Cerrar',
    errorText:
      'Algo salió mal. Inténtelo de nuevo o escríbanos directamente.',
    configText:
      'El formulario de contacto aún no está completamente configurado. Por ahora, escríbanos directamente.',
  },
  blog: {
    ...en.blog,
    title: 'Blog',
    subtitle:
      'Ideas y perspectivas sobre gestión de RR.HH., cumplimiento laboral y desarrollo organizacional.',
    comingSoon: 'Artículos próximamente',
    comingSoonText:
      'Estamos preparando artículos prácticos sobre gestión de RR.HH. y el panorama laboral de EE.UU. Vuelva pronto.',
  },
  footer: {
    ...en.footer,
    about:
      'Asesoría práctica de RR.HH. para el mercado estadounidense.',
    contactTitle: 'Contáctenos',
    followTitle: 'Síguenos',
    subscribeTitle: 'Suscríbase a noticias de RR.HH.',
    emailPlaceholder: 'su correo electrónico',
    subscribe: 'Suscribirse',
    subscribeSuccess: '¡Gracias por suscribirse!',
    languageNote:
      'Sitio web disponible en inglés, 简体中文 y español. Use el selector de idioma en la parte superior.',
    rights: '© 2026 WholeVantage Advisory. Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
  },
}

// 德语：迷你站，仅翻译首页 / 服务 / 联系页核心字段，其余通过展开 en 回退英文。
// 服务条目仅提供 title 与 intro，points 暂沿用英文（页面会渲染 points 列表）。
const de = {
  ...en,
  nav: {
    ...en.nav,
    home: 'Startseite',
    about: 'Über uns',
    services: 'Leistungen',
    blog: 'Blog',
    contact: 'Kontakt',
    languages: 'Sprache',
    aboutItems: {
      story: 'Meine Geschichte',
      approach: 'Unser Ansatz',
    },
    servicesItems: {
      content: 'Leistungen',
      process: 'Ablauf',
      fee: 'Honorar',
    },
  },
  home: {
    ...en.home,
    heroTitle: 'HR-Beratung für Unternehmen in den USA',
    heroText:
      'Praktische und verlässliche Personallösungen für Unternehmen beim Markteintritt oder Betrieb in den Vereinigten Staaten.',
    bookConsultation: 'Beratung vereinbaren',
    exploreServices: 'Leistungen ansehen',
  },
  story: {
    ...en.story,
    title: 'Meine Geschichte',
    subtitle: 'Von HR-Operations zur strategischen Beratung',
    paragraphs: [
      'Mit über 15 Jahren Erfahrung in US-Unternehmen begleite ich Gründer und Expansions-Teams dabei, vom ersten Mitarbeiter an eine rechtskonforme und skalierbare HR-Basis aufzubauen.',
      'Ich habe Teams von 5 bis über 500 Mitarbeitenden durch Markteintritt, schnelles Wachstum und behördliche Prüfungen geführt – in den Branchen Fertigung, Technologie und Dienstleistungen.',
      'Mein Ansatz ist immer praxisnah: weniger Theorie, mehr umsetzbare Prozesse, die in den USA funktionieren und gleichzeitig die Kultur des Heimatlandes respektieren.',
    ],
    highlightsTitle: 'Warum deutsche Unternehmen uns wählen',
    highlights: [
      'Deutschsprachige Ansprechpartnerin mit US-HR-Zertifizierung',
      'Erfahrung mit GmbH-Tochtergesellschaften und Greenfield-Investitionen',
      'Feste Pauschalen statt unklarer Stundensätze',
    ],
  },
  approach: {
    ...en.approach,
    title: 'Mein Ansatz',
    subtitle:
      'Mein Ansatz beruht auf drei Grundprinzipien, die meine Beratung und die Zusammenarbeit mit Kunden prägen.',
    principles: [
      {
        tag: 'Pragmatismus',
        title: 'Praxis vor Papier',
        text: 'Vorlagen sind gut – funktionierende Abläufe sind besser.',
      },
      {
        tag: 'Compliance',
        title: 'Compliance als Vorteil',
        text: 'I-9, FLSA und staatliche Regeln werden so gestaltet, dass sie Wachstum ermöglichen, nicht bremsen.',
      },
      {
        tag: 'Kultur',
        title: 'Kulturelle Brücke',
        text: 'Ich übersetze zwischen deutscher Gründlichkeit und US-amerikanischer Pragmatik.',
      },
    ],
  },
  serviceProcess: {
    ...en.serviceProcess,
    ctaButton: 'Kostenloses Erstgespräch buchen',
  },
  serviceContent: {
    ...en.serviceContent,
    title: 'Leistungen',
    subtitle: 'HR-Lösungen für den US-Markteintritt und laufenden Betrieb',
    items: [
      {
        title: 'Aufbau der HR-Infrastruktur in den USA',
        intro:
          'Richtlinien, Handbücher und Prozesse für einen soliden Start.',
        points: en.serviceContent.items[0].points,
      },
      {
        title: 'Compliance & Risikomanagement',
        intro: 'I-9, FLSA, Einstufung von Mitarbeitern und Auftragnehmern.',
        points: en.serviceContent.items[1].points,
      },
      {
        title: 'Recruiting & Onboarding',
        intro: 'Talentgewinnung und strukturierte Einarbeitung.',
        points: en.serviceContent.items[2].points,
      },
      {
        title: 'Arbeitsbeziehungen',
        intro: 'Konfliktlösung und Kommunikation in multikulturellen Teams.',
        points: en.serviceContent.items[3].points,
      },
      {
        title: 'Vergütung & Benefits',
        intro: 'Gehaltsstrukturen, Bonuspläne, 401(k), PTO.',
        points: en.serviceContent.items[4].points,
      },
      {
        title: 'Performance Management',
        intro: 'Zielvereinbarungen, Feedback-Systeme, Führungstraining.',
        points: en.serviceContent.items[5].points,
      },
      {
        title: 'Talententwicklung & Nachfolge',
        intro: 'Potenzialanalyse und Nachfolgeplanung.',
        points: en.serviceContent.items[6].points,
      },
      {
        title: 'Unternehmenskultur & Engagement',
        intro: 'Werte, Mitarbeiterbindung und Betriebsklima.',
        points: en.serviceContent.items[7].points,
      },
      {
        title: 'HR-Systeme & Digitalisierung',
        intro: 'Auswahl und Einführung von HRIS.',
        points: en.serviceContent.items[8].points,
      },
      {
        title: 'Laufende HR-Beratung',
        intro: 'Flexible Unterstützung bei täglichen HR-Fragen.',
        points: en.serviceContent.items[9].points,
      },
    ],
  },
  contact: {
    ...en.contact,
    title: 'Kontaktieren Sie uns',
    subtitle: 'Haben Sie Fragen zur US-Personalarbeit? Schreiben Sie uns.',
    pageTitle: 'Kontaktieren Sie uns',
    pageSubtitle:
      'Haben Sie Fragen zur US-Personalarbeit? Schreiben Sie uns.',
    formTitle: 'Nachricht senden',
    fields: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
    },
    submit: 'Nachricht senden',
  },
  blog: {
    ...en.blog,
    title: 'Einblicke & US-HR-Wissen',
    subtitle: 'Praktische Artikel für den US-Markteintritt',
    comingSoon: 'Artikel folgen in Kürze',
    comingSoonText:
      'Wir bereiten praxisnahe Artikel zu US-Personalarbeit und Markteintritt vor. Schauen Sie bald wieder vorbei.',
    searchPlaceholder: 'Artikel suchen...',
    readMore: 'Weiterlesen',
    backToBlog: 'Zurück zum Blog',
    noResults: 'Keine Artikel gefunden.',
    categoriesLabel: 'Nach Kategorie filtern',
    categories: {
      all: 'Alle',
      compliance: 'Compliance',
      hiring: 'Recruiting',
      expansion: 'Expansion',
    },
    minRead: 'Min. Lesezeit',
    writtenBy: 'Verfasst von',
    relatedTitle: 'Verwandte Artikel',
    shareLabel: 'Teilen',
    articleNotice:
      'Dieser Artikel ist auf Englisch. Eine deutsche Zusammenfassung erhalten Sie auf Anfrage.',
    articleTitles: {
      'us-employment-contracts-101': 'US-Arbeitsverträge 101',
      'i9-compliance-checklist': 'I-9 Compliance Checkliste',
      'hiring-first-us-employee': 'Erste US-Einstellung',
    } as Record<string, string>,
  },
  footer: {
    ...en.footer,
    about: 'Praktische HR-Beratung für den US-Markt',
    rights: '© 2026 WholeVantage Advisory. Alle Rechte vorbehalten.',
  },
}

export const dictionaries = {
  en,
  zh,
  es,
  de,
}

export function getDictionary(locale: string): Dictionary {
  // zh/es/de 以 `...en` 展开 + 字符串覆盖的方式编写，其字面量被推断为更宽的 string/string[]，
  // 与 en 推断出的只读字面量元组不完全可比，故经 unknown 桥接做类型断言。
  // 这不影响页面消费端的类型：返回值仍为完整的 Dictionary，autocomplete 与字段校验保持不变。
  return (dictionaries as unknown as Record<string, Dictionary>)[locale] ?? en
}
