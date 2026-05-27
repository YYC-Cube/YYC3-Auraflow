/**
 * i18n 国际化配置系统
 * 支持多语言切换，默认语言为中文
 * 10国语言：zh, en, ja, ko, fr, de, es, pt, ru, ar
 */

export type Locale = "zh" | "en"

export const defaultLocale: Locale = "zh"

export const locales: Locale[] = ["zh", "en"]

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
}

export const localeFlags: Record<Locale, string> = {
  zh: "🇨🇳",
  en: "🇺🇸",
}

/**
 * 翻译字典类型定义
 */
export interface Translations {
  // 导航栏
  nav: {
    services: string
    testimonials: string
    pricing: string
    contact: string
  }
  // 首页 Hero 区域
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    badge1: string
    badge2: string
  }
  // 问题与解决方案
  problemSolution: {
    problemTitle: string
    problem1: string
    problem2: string
    problem3: string
    problem4: string
    solutionTitle: string
    solution1: string
    solution2: string
    solution3: string
    solution4: string
  }
  // 服务
  services: {
    title: string
    subtitle: string
    chatbot: { name: string; description: string; cta: string }
    workflow: { name: string; description: string; cta: string }
    integration: { name: string; description: string; cta: string }
    analytics: { name: string; description: string; cta: string }
    custom: { name: string; description: string; cta: string }
  }
  // 客户评价
  testimonials: {
    title: string
    testimonial1: { content: string; name: string; title: string }
    testimonial2: { content: string; name: string; title: string }
    testimonial3: { content: string; name: string; title: string }
  }
  // 数据指标
  metrics: {
    title: string
    subtitle: string
    timeSaved: string
    roi: string
    conversion: string
    support: string
  }
  // 定价
  pricing: {
    title: string
    description: string
    starter: { name: string; description: string; buttonText: string; features: string[] }
    professional: { name: string; description: string; buttonText: string; features: string[] }
    enterprise: { name: string; description: string; buttonText: string; features: string[] }
  }
  // 流程
  process: {
    title: string
    subtitle: string
    step1: { title: string; description: string }
    step2: { title: string; description: string }
    step3: { title: string; description: string }
  }
  // CTA 区域
  cta: {
    title: string
    buttonPrimary: string
    buttonSecondary: string
  }
  // 页脚
  footer: {
    description: string
    servicesTitle: string
    companyTitle: string
    contactTitle: string
    aboutUs: string
    caseStudies: string
    blog: string
    careers: string
    contact: string
    email: string
    phone: string
    address: string
    copyright: string
    privacy: string
    terms: string
  }

  // ===== 团队文化新增字段 =====

  // 品牌
  brand: {
    fullName: string
    shortName: string
    motto: string
    mottoEn: string
  }

  // 五高架构
  fiveHighs: {
    sectionTitle: string
    sectionSubtitle: string
    tag: string
    items: Array<{
      title: string
      subtitle: string
      description: string
      metrics: string[]
    }>
  }

  // 五标规范
  fiveStandards: {
    sectionTitle: string
    sectionSubtitle: string
    tag: string
    items: Array<{
      title: string
      subtitle: string
      description: string
      features: string[]
      metric: string
      metricLabel: string
    }>
  }

  // 五维评估
  fiveDimensions: {
    sectionTitle: string
    sectionSubtitle: string
    tag: string
    items: Array<{
      title: string
      subtitle: string
      description: string
      metrics: Array<{ label: string; value: string; change: string }>
    }>
  }

  // 闭环理念
  closedLoop: {
    sectionTitle: string
    sectionSubtitle: string
    tag: string
    coreValue: string
    coreDescription: string
    badges: string[]
    loops: Array<{
      title: string
      subtitle: string
      description: string
      steps: Array<{ label: string; desc: string }>
      badgeText: string
    }>
  }
}

/**
 * 中文翻译
 */
export const zhTranslations: Translations = {
  nav: {
    services: "服务",
    testimonials: "客户评价",
    pricing: "定价",
    contact: "联系我们",
  },
  hero: {
    title: "AI 驱动业绩增长，降低运营成本",
    subtitle:
      "我们帮助企业自动化工作流程，构建智能聊天机器人，集成 7×24 小时工作的 AI 代理，提升生产力并推动业务增长。",
    ctaPrimary: "预约免费咨询",
    ctaSecondary: "查看案例研究",
    badge1: "无设置费用",
    badge2: "30 天投资回报保证",
  },
  problemSolution: {
    problemTitle: "还在手动管理一切？",
    problem1: "在重复性任务上花费大量时间，而这些任务本可以自动化",
    problem2: "因无法 7×24 小时响应咨询而错失潜在客户",
    problem3: "在不增加人员的情况下难以扩展运营规模",
    problem4: "在 AI 驱动的竞争对手面前失去竞争优势",
    solutionTitle: "我们构建真正有效的 AI 解决方案",
    solution1: "定制 AI 代理，即时处理客户咨询",
    solution2: "工作流自动化，每周节省 20+ 小时",
    solution3: "与现有工具和系统无缝集成",
    solution4: "实施后 30 天内实现可证明的投资回报",
  },
  services: {
    title: "我们的 AI 解决方案",
    subtitle: "全面的 AI 服务，旨在转型您的业务运营",
    chatbot: {
      name: "AI 聊天机器人与虚拟助手",
      description: "智能对话代理，通过自然语言处理 7×24 小时处理客户支持、潜在客户筛选和销售咨询。",
      cta: "了解更多",
    },
    workflow: {
      name: "工作流自动化",
      description: "简化重复流程，通过智能自动化系统消除手动任务，每周节省 20+ 小时。",
      cta: "了解更多",
    },
    integration: {
      name: "AI 集成服务",
      description: "通过自定义 API 将 AI 功能无缝集成到您现有的电子商务和企业系统中。",
      cta: "了解更多",
    },
    analytics: {
      name: "智能分析与洞察",
      description: "AI 驱动的分析，提供可操作的洞察和预测智能，助力更好的决策。",
      cta: "了解更多",
    },
    custom: {
      name: "定制 AI 开发",
      description: "量身定制的 AI 解决方案，满足您独特的业务需求，从机器学习模型到智能自动化系统。",
      cta: "了解更多",
    },
  },
  testimonials: {
    title: "受到成长型企业的信赖",
    testimonial1: {
      content:
        "AI 聊天机器人使我们的潜在客户转化率提高了 200%，并自动处理 90% 的客户咨询。第一个月就看到了明显的投资回报。",
      name: "Sarah Johnson",
      title: "CEO，TechStart Solutions",
    },
    testimonial2: {
      content: "工作流自动化每周为我们节省了 25 小时。我们的团队现在可以专注于战略增长，而不是重复性任务。",
      name: "Michael Chen",
      title: "运营总监，GrowthCorp",
    },
    testimonial3: {
      content: "AI 集成改变了我们的电子商务平台。通过个性化客户体验，销售额增长了 180%。",
      name: "Emily Rodriguez",
      title: "创始人，RetailMax",
    },
  },
  metrics: {
    title: "可衡量的重要成果",
    subtitle: "我们的客户看到了对其业务底线的即时影响",
    timeSaved: "手动任务节省时间",
    roi: "6 个月内平均投资回报率",
    conversion: "潜在客户转化率提升",
    support: "自动化客户支持",
  },
  pricing: {
    title: "选择您的 AI 转型计划",
    description: "灵活的定价方案，随您的业务增长而扩展\n所有计划包含设置、培训和 30 天退款保证",
    starter: {
      name: "入门版",
      description: "适合开始 AI 之旅的小型企业",
      buttonText: "开始免费试用",
      features: [
        "客户支持 AI 聊天机器人",
        "基础工作流自动化（3 个流程）",
        "电子邮件集成",
        "标准分析仪表板",
        "电子邮件支持",
        "30 天退款保证",
      ],
    },
    professional: {
      name: "专业版",
      description: "适合准备通过 AI 扩展的成长型企业",
      buttonText: "立即开始",
      features: [
        "高级 AI 聊天机器人与潜在客户筛选",
        "完整工作流自动化（10+ 流程）",
        "CRM 与电子商务集成",
        "高级分析与报告",
        "优先电话与电子邮件支持",
        "定制 AI 训练",
        "每月优化咨询",
        "ROI 跟踪与报告",
      ],
    },
    enterprise: {
      name: "企业版",
      description: "为大型组织提供完整的 AI 转型",
      buttonText: "联系销售",
      features: [
        "定制 AI 开发与部署",
        "无限工作流自动化",
        "完整系统集成",
        "专属 AI 策略师",
        "7×24 小时优先支持",
        "高级安全与合规",
        "白标解决方案",
        "季度业务审查",
        "定制培训与研讨会",
      ],
    },
  },
  process: {
    title: "简单的三步流程",
    subtitle: "从咨询到实施，我们让 AI 采用变得无缝",
    step1: {
      title: "预约咨询",
      description: "安排免费咨询，讨论您的业务需求并识别自动化机会",
    },
    step2: {
      title: "AI 策略",
      description: "我们分析您的工作流程，创建针对您特定业务目标的定制 AI 策略",
    },
    step3: {
      title: "实施",
      description: "我们的团队构建、测试和部署您的 AI 解决方案，提供持续支持和优化",
    },
  },
  cta: {
    title: "准备好用 AI 降低成本了吗？",
    buttonPrimary: "预约免费咨询",
    buttonSecondary: "致电 (555) 123-4567",
  },
  footer: {
    description: "通过智能自动化和前沿 AI 集成解决方案转型企业。",
    servicesTitle: "服务",
    companyTitle: "公司",
    contactTitle: "联系我们",
    aboutUs: "关于我们",
    caseStudies: "案例研究",
    blog: "博客",
    careers: "招聘",
    contact: "联系",
    email: "hello@aiagency.com",
    phone: "(555) 123-4567",
    address: "123 AI Street, Tech City",
    copyright: "© 2025 YYC³ AuraFlow. 保留所有权利。",
    privacy: "隐私政策",
    terms: "服务条款",
  },

  // 团队文化翻译
  brand: {
    fullName: "YYC³ (YanYuCloudCube)",
    shortName: "YYC³",
    motto: "言启千行代码，语枢万物智能",
    mottoEn: "Words Initiate Code, Language Pivots Intelligence",
  },

  fiveHighs: {
    sectionTitle: "五高架构体系",
    sectionSubtitle: "以技术卓越为基石，构建面向未来的智能应用基础设施",
    tag: "Five High Architecture",
    items: [
      {
        title: "高可用",
        subtitle: "High Availability",
        description: "99.99% SLA 保障，故障自动转移，多可用区部署",
        metrics: ["RPO<1min", "RTO<5s", "99.99% Uptime"],
      },
      {
        title: "高性能",
        subtitle: "High Performance",
        description: "Turbopack + Oxide 引擎，构建速度提升 40%+，CSS 编译提升 5 倍",
        metrics: ["2.5s Build", "<100ms Latency", "5x CSS Speed"],
      },
      {
        title: "高安全",
        subtitle: "High Security",
        description: "纵深防御体系，WAF/DDoS 防护，数据加密存储与传输",
        metrics: ["SOC 2", "GDPR", "Zero Trust"],
      },
      {
        title: "高扩展",
        subtitle: "High Scalability",
        description: "Kubernetes 弹性伸缩，水平/垂直扩展，微服务架构",
        metrics: ["Auto Scale", "Multi-Region", "Microservices"],
      },
      {
        title: "高智能",
        subtitle: "High Intelligence",
        description: "LLM + Agent 架构，AI 辅助开发，自适应优化系统",
        metrics: ["GPT-4 / GLM-4", "LangChain", "AutoGPT"],
      },
    ],
  },

  fiveStandards: {
    sectionTitle: "五标规范体系",
    sectionSubtitle: "以标准化驱动质量提升，以规范化保障交付一致性",
    tag: "Five Standards System",
    items: [
      {
        title: "标准化",
        subtitle: "Standardization",
        description: "统一技术标准与规范体系，确保团队协作效率与交付质量",
        features: ["项目命名规范", "代码风格统一", "文档格式标准化"],
        metric: "95%+",
        metricLabel: "标准化覆盖率",
      },
      {
        title: "规范化",
        subtitle: "Normalization",
        description: "完整的开发流程规范，确保代码质量与团队协作效率",
        features: ["Git 工作流", "代码审查机制", "架构设计规范"],
        metric: "100%",
        metricLabel: "流程遵循率",
      },
      {
        title: "自动化",
        subtitle: "Automation",
        description: "通过自动化工具链减少人工干预，提升交付效率与质量一致性",
        features: ["CI/CD 流水线", "自动测试部署", "依赖自动更新"],
        metric: "<5min",
        metricLabel: "部署时间",
      },
      {
        title: "可视化",
        subtitle: "Visualization",
        description: "清晰的 UI 层级、数据可视化、直观的监控仪表盘",
        features: ["监控仪表盘", "性能指标展示", "日志可视化"],
        metric: "Real-time",
        metricLabel: "监控频率",
      },
      {
        title: "智能化",
        subtitle: "Intelligence",
        description: "AI 辅助开发、智能推荐、自适应优化系统",
        features: ["AI 编程助手", "智能代码审查", "自动化测试生成"],
        metric: "AI-Powered",
        metricLabel: "核心能力",
      },
    ],
  },

  fiveDimensions: {
    sectionTitle: "五维评估体系",
    sectionSubtitle: "提供多维度、全方位的项目评估与决策支持框架",
    tag: "Five Dimensions Evaluation",
    items: [
      {
        title: "时间维度",
        subtitle: "Time Dimension",
        description: "版本演进时间线，开发效率优化，交付周期缩短",
        metrics: [
          { label: "构建速度", value: "2.5s", change: "-60%" },
          { label: "部署频率", value: "Daily", change: "+200%" },
          { label: "响应时间", value: "<100ms", change: "-40%" },
        ],
      },
      {
        title: "空间维度",
        subtitle: "Space Dimension",
        description: "代码组织架构，组件复用率，资源利用效率",
        metrics: [
          { label: "代码复用", value: "85%", change: "+25%" },
          { label: "Bundle Size", value: "<100KB", change: "-30%" },
          { label: "覆盖率", value: "95%+", change: "+15%" },
        ],
      },
      {
        title: "属性维度",
        subtitle: "Attribute Dimension",
        description: "质量属性矩阵，性能、安全、可维护性指标",
        metrics: [
          { label: "TypeScript", value: "0 Errors", change: "✓" },
          { label: "ESLint", value: "0 Warnings", change: "✓" },
          { label: "Build", value: "Success", change: "✓" },
        ],
      },
      {
        title: "事件维度",
        subtitle: "Event Dimension",
        description: "用户交互处理，错误追踪机制，变更追溯系统",
        metrics: [
          { label: "Error Rate", value: "0%", change: "-100%" },
          { label: "Uptime", value: "99.99%", change: "+0.01%" },
          { label: "Traceability", value: "100%", change: "✓" },
        ],
      },
      {
        title: "关联维度",
        subtitle: "Association Dimension",
        description: "依赖关系管理，生态系统连接，API 集成能力",
        metrics: [
          { label: "Dependencies", value: "Managed", change: "✓" },
          { label: "APIs", value: "RESTful", change: "✓" },
          { label: "Ecosystem", value: "Connected", change: "✓" },
        ],
      },
    ],
  },

  closedLoop: {
    sectionTitle: "闭环理念体系",
    sectionSubtitle: "从文档到代码再到服务，构建全链路闭环管理体系",
    tag: "Closed Loop Philosophy",
    coreValue: "上下文存档 · 规划衔接 · 总结同步 · 随时可启",
    coreDescription:
      "YYC³ 闭环理念确保每个环节都可追溯、可迭代、可复用。从文档创建到代码交付，从需求分析到服务运维，构建完整的全生命周期管理闭环。",
    badges: ["可复用", "可迭代", "可追溯", "可衔接"],
    loops: [
      {
        title: "文档闭环",
        subtitle: "Document Closed Loop",
        description: "可复用 → 可迭代 → 可追溯",
        steps: [
          { label: "创建", desc: "基于模版生成" },
          { label: "迭代", desc: "版本持续优化" },
          { label: "归档", desc: "完整上下文保存" },
          { label: "追溯", desc: "全链路可追踪" },
        ],
        badgeText: "Full Lifecycle Management",
      },
      {
        title: "代码闭环",
        subtitle: "Code Closed Loop",
        description: "Plan → Do → Check → Act → Archive (PDCA+)",
        steps: [
          { label: "Plan", desc: "规划任务目标" },
          { label: "Do", desc: "按计划执行" },
          { label: "Check", desc: "对照标准检查" },
          { label: "Act", desc: "处理并改进" },
          { label: "Archive", desc: "归档与同步" },
        ],
        badgeText: "Full Lifecycle Management",
      },
      {
        title: "服务闭环",
        subtitle: "Service Closed Loop",
        description: "需求 → 开发 → 交付 → 运维 → 演进",
        steps: [
          { label: "需求", desc: "明确业务目标" },
          { label: "开发", desc: "高质量实现" },
          { label: "交付", desc: "部署上线" },
          { label: "运维", desc: "监控保障" },
          { label: "演进", desc: "持续优化" },
        ],
        badgeText: "Full Lifecycle Management",
      },
    ],
  },
}

/**
 * 英文翻译
 */
export const enTranslations: Translations = {
  nav: { services: "Services", testimonials: "Testimonials", pricing: "Pricing", contact: "Contact" },
  hero: {
    title: "Results and Costs Reduced by AI",
    subtitle: "We help businesses automate workflows, build intelligent chatbots, and integrate AI agents that work 24/7 to boost productivity and drive growth.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "View Case Studies",
    badge1: "No Setup Fees",
    badge2: "30-Day ROI Guarantee",
  },
  problemSolution: {
    problemTitle: "Still Managing Everything Manually?",
    problem1: "Spending hours on repetitive tasks that could be automated",
    problem2: "Missing leads because you can't respond to inquiries 24/7",
    problem3: "Struggling to scale operations without hiring more staff",
    problem4: "Losing competitive edge to AI-powered competitors",
    solutionTitle: "We Build AI Solutions That Work",
    solution1: "Custom AI agents that handle customer inquiries instantly",
    solution2: "Workflow automation that saves 20+ hours per week",
    solution3: "Seamless integration with your existing tools and systems",
    solution4: "Proven ROI within 30 days of implementation",
  },
  services: {
    title: "Our AI Solutions",
    subtitle: "Comprehensive AI services designed to transform your business operations",
    chatbot: { name: "AI Chatbots & Virtual Assistants", description: "Intelligent conversational agents for 24/7 customer support.", cta: "Learn more" },
    workflow: { name: "Workflow Automation", description: "Streamline processes with intelligent automation systems.", cta: "Learn more" },
    integration: { name: "AI Integration Services", description: "Seamlessly integrate AI into existing systems.", cta: "Learn more" },
    analytics: { name: "Smart Analytics & Insights", description: "AI-powered analytics for better decision making.", cta: "Learn more" },
    custom: { name: "Custom AI Development", description: "Bespoke AI solutions tailored to your needs.", cta: "Learn more" },
  },
  testimonials: {
    title: "Trusted by Growing Businesses",
    testimonial1: { content: "The AI chatbot increased our lead conversion by 200%.", name: "Sarah Johnson", title: "CEO, TechStart Solutions" },
    testimonial2: { content: "Workflow automation saved us 25 hours per week.", name: "Michael Chen", title: "Operations Director, GrowthCorp" },
    testimonial3: { content: "Sales increased by 180% with personalized experiences.", name: "Emily Rodriguez", title: "Founder, RetailMax" },
  },
  metrics: { title: "Measurable Results That Matter", subtitle: "Our clients see immediate impact on their bottom line", timeSaved: "Time Saved on Manual Tasks", roi: "Average ROI Within 6 Months", conversion: "Increase in Lead Conversion", support: "Automated Customer Support" },
  pricing: {
    title: "Choose Your AI Transformation Plan",
    description: "Flexible pricing designed to scale with your business growth",
    starter: { name: "Starter", description: "Perfect for small businesses starting their AI journey", buttonText: "Start Free Trial", features: ["AI Chatbot for customer support", "Basic workflow automation (3 processes)", "Email integration", "Standard analytics dashboard", "Email support", "30-day money-back guarantee"] },
    professional: { name: "Professional", description: "Ideal for growing businesses ready to scale with AI", buttonText: "Get Started", features: ["Advanced AI chatbot with lead qualification", "Complete workflow automation (10+ processes)", "CRM & e-commerce integrations", "Advanced analytics & reporting", "Priority phone & email support", "Custom AI training", "Monthly optimization calls", "ROI tracking & reporting"] },
    enterprise: { name: "Enterprise", description: "Complete AI transformation for large organizations", buttonText: "Contact Sales", features: ["Custom AI development & deployment", "Unlimited workflow automation", "Full system integrations", "Dedicated AI strategist", "24/7 priority support", "Advanced security & compliance", "White-label solutions", "Quarterly business reviews", "Custom training & workshops"] },
  },
  process: { title: "Simple 3-Step Process", subtitle: "From consultation to implementation, we make AI adoption seamless", step1: { title: "Book a Call", description: "Schedule a free consultation to discuss your business needs" }, step2: { title: "AI Strategy", description: "We analyze your workflows and create a custom AI strategy" }, step3: { title: "Implementation", description: "Our team builds, tests, and deploys your AI solutions" } },
  cta: { title: "Ready to cut costs with AI?", buttonPrimary: "Book Free Consultation", buttonSecondary: "Call (555) 123-4567" },
  footer: { description: "Transforming businesses through intelligent automation.", servicesTitle: "Services", companyTitle: "Company", contactTitle: "Get in Touch", aboutUs: "About Us", caseStudies: "Case Studies", blog: "Blog", careers: "Careers", contact: "Contact", email: "hello@aiagency.com", phone: "(555) 123-4567", address: "123 AI Street, Tech City", copyright: "© 2025 YYC³ AuraFlow. All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Service" },

  brand: { fullName: "YYC³ (YanYuCloudCube)", shortName: "YYC³", motto: "Words Initiate Code, Language Pivots Intelligence", mottoEn: "Words Initiate Code, Language Pivots Intelligence" },

  fiveHighs: {
    sectionTitle: "Five High Architecture",
    sectionSubtitle: "Building future-ready intelligent application infrastructure based on technical excellence",
    tag: "Five High Architecture",
    items: [
      { title: "High Availability", subtitle: "High Availability", description: "99.99% SLA guarantee, automatic failover, multi-AZ deployment", metrics: ["RPO<1min", "RTO<5s", "99.99% Uptime"] },
      { title: "High Performance", subtitle: "High Performance", description: "Turbopack + Oxide engine, 40%+ faster builds, 5x CSS speedup", metrics: ["2.5s Build", "<100ms Latency", "5x CSS Speed"] },
      { title: "High Security", subtitle: "High Security", description: "Defense-in-depth architecture, WAF/DDoS protection, encrypted data", metrics: ["SOC 2", "GDPR", "Zero Trust"] },
      { title: "High Scalability", subtitle: "High Scalability", description: "Kubernetes elastic scaling, horizontal/vertical expansion", metrics: ["Auto Scale", "Multi-Region", "Microservices"] },
      { title: "High Intelligence", subtitle: "High Intelligence", description: "LLM + Agent architecture, AI-assisted development", metrics: ["GPT-4 / GLM-4", "LangChain", "AutoGPT"] },
    ],
  },

  fiveStandards: {
    sectionTitle: "Five Standards System",
    sectionSubtitle: "Driving quality improvement through standardization",
    tag: "Five Standards System",
    items: [
      { title: "Standardization", subtitle: "Standardization", description: "Unified technical standards ensuring team collaboration efficiency", features: ["Project naming conventions", "Unified code style", "Standardized documentation"], metric: "95%+", metricLabel: "Standardization Coverage" },
      { title: "Normalization", subtitle: "Normalization", description: "Complete development process specifications", features: ["Git workflow", "Code review mechanism", "Architecture design standards"], metric: "100%", metricLabel: "Process Compliance Rate" },
      { title: "Automation", subtitle: "Automation", description: "Reducing manual intervention through automated toolchains", features: ["CI/CD pipeline", "Automated testing & deployment", "Dependency auto-update"], metric: "<5min", metricLabel: "Deployment Time" },
      { title: "Visualization", subtitle: "Visualization", description: "Clear UI hierarchy, data visualization, intuitive dashboards", features: ["Monitoring dashboard", "Performance metrics display", "Log visualization"], metric: "Real-time", metricLabel: "Monitoring Frequency" },
      { title: "Intelligence", subtitle: "Intelligence", description: "AI-assisted development, intelligent recommendations", features: ["AI coding assistant", "Intelligent code review", "Automated test generation"], metric: "AI-Powered", metricLabel: "Core Capability" },
    ],
  },

  fiveDimensions: {
    sectionTitle: "Five Dimensions Evaluation",
    sectionSubtitle: "Providing multi-dimensional project evaluation framework",
    tag: "Five Dimensions Evaluation",
    items: [
      { title: "Time Dimension", subtitle: "Time Dimension", description: "Version evolution timeline, development efficiency optimization", metrics: [{ label: "Build Speed", value: "2.5s", change: "-60%" }, { label: "Deploy Frequency", value: "Daily", change: "+200%" }, { label: "Response Time", value: "<100ms", change: "-40%" }] },
      { title: "Space Dimension", subtitle: "Space Dimension", description: "Code organization architecture, component reuse rate", metrics: [{ label: "Code Reuse", value: "85%", change: "+25%" }, { label: "Bundle Size", value: "<100KB", change: "-30%" }, { label: "Coverage", value: "95%+", change: "+15%" }] },
      { title: "Attribute Dimension", subtitle: "Attribute Dimension", description: "Quality attribute matrix, performance/security indicators", metrics: [{ label: "TypeScript", value: "0 Errors", change: "✓" }, { label: "ESLint", value: "0 Warnings", change: "✓" }, { label: "Build", value: "Success", change: "✓" }] },
      { title: "Event Dimension", subtitle: "Event Dimension", description: "User interaction handling, error tracking mechanism", metrics: [{ label: "Error Rate", value: "0%", change: "-100%" }, { label: "Uptime", value: "99.99%", change: "+0.01%" }, { label: "Traceability", value: "100%", change: "✓" }] },
      { title: "Association Dimension", subtitle: "Association Dimension", description: "Dependency management, ecosystem connectivity", metrics: [{ label: "Dependencies", value: "Managed", change: "✓" }, { label: "APIs", value: "RESTful", change: "✓" }, { label: "Ecosystem", value: "Connected", change: "✓" }] },
    ],
  },

  closedLoop: {
    sectionTitle: "Closed Loop Philosophy",
    sectionSubtitle: "Building end-to-end closed-loop management from documentation to service",
    tag: "Closed Loop Philosophy",
    coreValue: "Context Archival · Planning Connection · Summary Sync · Ready Anytime",
    coreDescription: "YYC³ closed-loop philosophy ensures every stage is traceable, iterable, and reusable.",
    badges: ["Reusable", "Iterable", "Traceable", "Connectable"],
    loops: [
      { title: "Document Loop", subtitle: "Document Closed Loop", description: "Reusable → Iterable → Traceable", steps: [{ label: "Create", desc: "Template-based generation" }, { label: "Iterate", desc: "Continuous version optimization" }, { label: "Archive", desc: "Complete context preservation" }, { label: "Trace", desc: "Full-chain traceability" }], badgeText: "Full Lifecycle Management" },
      { title: "Code Loop", subtitle: "Code Closed Loop", description: "Plan → Do → Check → Act → Archive (PDCA+)", steps: [{ label: "Plan", desc: "Define task objectives" }, { label: "Do", desc: "Execute per plan" }, { label: "Check", desc: "Verify against standards" }, { label: "Act", desc: "Address and improve" }, { label: "Archive", desc: "Archive and sync" }], badgeText: "Full Lifecycle Management" },
      { title: "Service Loop", subtitle: "Service Closed Loop", description: "Requirements → Development → Delivery → Operations → Evolution", steps: [{ label: "Requirements", desc: "Define business goals" }, { label: "Development", desc: "High-quality implementation" }, { label: "Delivery", desc: "Deploy online" }, { label: "Operations", desc: "Monitoring assurance" }, { label: "Evolution", desc: "Continuous optimization" }], badgeText: "Full Lifecycle Management" },
    ],
  },
}

/**
 * 翻译字典
 */
export const translations: Record<Locale, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
}

/**
 * 获取翻译文本
 */
export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] || translations[defaultLocale]
}
