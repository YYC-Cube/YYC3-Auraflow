/**
 * file zh-CN.ts
 * description 简体中文翻译包 - YYC³ AuraFlow
 * module @/lib/locales/zh-CN
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[locale],[zh-CN]
 */

import type { TranslationMap } from '@yyc3/i18n-core';

export const zhCN: TranslationMap = {
  // ===== 品牌标识 =====
  brand_fullName: 'YYC³ (YanYuCloudCube)',
  brand_shortName: 'YYC³',
  brand_motto: '言启千行代码，语枢万物智能',
  brand_mottoEn: 'Words Initiate Code, Language Pivots Intelligence',

  // ===== 导航栏 =====
  nav_services: '服务',
  nav_testimonials: '客户案例',
  nav_pricing: '定价',
  nav_contact: '联系我们',

  // ===== Hero 区域 =====
  hero_title: 'AI 驱动的智能应用开发平台',
  hero_subtitle:
    '基于五高架构、五标规范、五维评估体系的 AI 驱动智能应用开发平台，助力企业实现数字化转型与智能化升级。',
  hero_ctaPrimary: '立即体验',
  hero_ctaSecondary: '了解更多',
  hero_badge1: '零部署成本',
  hero_badge2: '30天ROI保障',

  // ===== 五高架构 =====
  fiveHighs_sectionTitle: '五高架构体系',
  fiveHighs_sectionSubtitle: '基于技术卓越构建面向未来的智能应用基础设施',
  fiveHighs_tag: '五高架构',

  // 五高项目1：高可用性
  fiveHighs_item0_title: '高可用性',
  fiveHighs_item0_subtitle: 'High Availability',
  fiveHighs_item0_description: '99.99% SLA 保障，自动故障转移，多可用区部署',
  fiveHighs_item0_metric0: 'RPO<1min',
  fiveHighs_item0_metric1: 'RTO<5s',
  fiveHighs_item0_metric2: '99.99% 可用率',

  // 五高项目2：高性能
  fiveHighs_item1_title: '高性能',
  fiveHighs_item1_subtitle: 'High Performance',
  fiveHighs_item1_description:
    'Turbopack + Oxide 引擎，构建速度提升40%+，CSS处理速度5倍提升',
  fiveHighs_item1_metric0: '2.5s 构建',
  fiveHighs_item1_metric1: '<100ms 延迟',
  fiveHighs_item1_metric2: '5x CSS速度',

  // 五高项目3：高安全性
  fiveHighs_item2_title: '高安全性',
  fiveHighs_item2_subtitle: 'High Security',
  fiveHighs_item2_description: '纵深防御架构，WAF/DDoS防护，数据全链路加密',
  fiveHighs_item2_metric0: 'SOC 2 认证',
  fiveHighs_item2_metric1: 'GDPR 合规',
  fiveHighs_item2_metric2: '零信任架构',

  // 五高项目4：高扩展性
  fiveHighs_item3_title: '高扩展性',
  fiveHighs_item3_subtitle: 'High Scalability',
  fiveHighs_item3_description: 'Kubernetes 弹性伸缩，水平/垂直双维度扩展能力',
  fiveHighs_item3_metric0: '自动伸缩',
  fiveHighs_item3_metric1: '多区域部署',
  fiveHighs_item3_metric2: '微服务架构',

  // 五高项目5：高智能
  fiveHighs_item4_title: '高智能',
  fiveHighs_item4_subtitle: 'High Intelligence',
  fiveHighs_item4_description: 'LLM + Agent 架构，AI 辅助开发与智能运维',
  fiveHighs_item4_metric0: 'GPT-4 / GLM-4',
  fiveHighs_item4_metric1: 'LangChain',
  fiveHighs_item4_metric2: 'AutoGPT',

  // ===== 五标规范 =====
  fiveStandards_sectionTitle: '五标规范体系',
  fiveStandards_sectionSubtitle: '通过标准化驱动质量持续改进',
  fiveStandards_tag: '五标规范',

  // 五标项目1：标准化
  fiveStandards_item0_title: '标准化',
  fiveStandards_item0_subtitle: 'Standardization',
  fiveStandards_item0_description: '统一的技术标准确保团队协作效率最大化',
  fiveStandards_item0_feature0: '项目命名规范',
  fiveStandards_item0_feature1: '统一代码风格',
  fiveStandards_item0_feature2: '标准化文档体系',
  fiveStandards_item0_metric: '95%+',
  fiveStandards_item0_metricLabel: '标准化覆盖率',

  // 五标项目2：规范化
  fiveStandards_item1_title: '规范化',
  fiveStandards_item1_subtitle: 'Normalization',
  fiveStandards_item1_description: '完整的开发流程与操作规范',
  fiveStandards_item1_feature0: 'Git 工作流',
  fiveStandards_item1_feature1: '代码审查机制',
  fiveStandards_item1_feature2: '架构设计标准',
  fiveStandards_item1_metric: '100%',
  fiveStandards_item1_metricLabel: '流程合规率',

  // 五标项目3：自动化
  fiveStandards_item2_title: '自动化',
  fiveStandards_item2_subtitle: 'Automation',
  fiveStandards_item2_description: '通过自动化工具链减少人工干预',
  fiveStandards_item2_feature0: 'CI/CD 流水线',
  fiveStandards_item2_feature1: '自动化测试与部署',
  fiveStandards_item2_feature2: '依赖自动更新',
  fiveStandards_item2_metric: '<5分钟',
  fiveStandards_item2_metricLabel: '部署时间',

  // 五标项目4：可视化
  fiveStandards_item3_title: '可视化',
  fiveStandards_item3_subtitle: 'Visualization',
  fiveStandards_item3_description: '清晰的UI层级、数据可视化、直观的仪表盘',
  fiveStandards_item3_feature0: '监控仪表盘',
  fiveStandards_item3_feature1: '性能指标展示',
  fiveStandards_item3_feature2: '日志可视化',
  fiveStandards_item3_metric: '实时',
  fiveStandards_item3_metricLabel: '监控频率',

  // 五标项目5：智能化
  fiveStandards_item4_title: '智能化',
  fiveStandards_item4_subtitle: 'Intelligence',
  fiveStandards_item4_description: 'AI辅助开发、智能推荐与自动优化',
  fiveStandards_item4_feature0: 'AI 编码助手',
  fiveStandards_item4_feature1: '智能代码审查',
  fiveStandards_item4_feature2: '自动化测试生成',
  fiveStandards_item4_metric: 'AI驱动',
  fiveStandards_item4_metricLabel: '核心能力',

  // ===== 五维评估 =====
  fiveDimensions_sectionTitle: '五维评估体系',
  fiveDimensions_sectionSubtitle: '提供多维度的项目评估框架',
  fiveDimensions_tag: '五维评估',

  // 五维项目1：时间维
  fiveDimensions_item0_title: '时间维',
  fiveDimensions_item0_subtitle: 'Time Dimension',
  fiveDimensions_item0_description: '版本演进时间线、开发效率优化',
  fiveDimensions_item0_metric0_label: '构建速度',
  fiveDimensions_item0_metric0_value: '2.5s',
  fiveDimensions_item0_metric0_change: '-60%',
  fiveDimensions_item0_metric1_label: '发布频率',
  fiveDimensions_item0_metric1_value: '每日',
  fiveDimensions_item0_metric1_change: '+200%',
  fiveDimensions_item0_metric2_label: '响应时间',
  fiveDimensions_item0_metric2_value: '<100ms',
  fiveDimensions_item0_metric2_change: '-40%',

  // 五维项目2：空间维
  fiveDimensions_item1_title: '空间维',
  fiveDimensions_item1_subtitle: 'Space Dimension',
  fiveDimensions_item1_description: '代码组织架构、组件复用率',
  fiveDimensions_item1_metric0_label: '代码复用',
  fiveDimensions_item1_metric0_value: '85%',
  fiveDimensions_item1_metric0_change: '+25%',
  fiveDimensions_item1_metric1_label: '包体积',
  fiveDimensions_item1_metric1_value: '<100KB',
  fiveDimensions_item1_metric1_change: '-30%',
  fiveDimensions_item1_metric2_label: '测试覆盖',
  fiveDimensions_item1_metric2_value: '95%+',
  fiveDimensions_item1_metric2_change: '+15%',

  // 五维项目3：属性维
  fiveDimensions_item2_title: '属性维',
  fiveDimensions_item2_subtitle: 'Attribute Dimension',
  fiveDimensions_item2_description: '质量属性矩阵、性能/安全指标',
  fiveDimensions_item2_metric0_label: 'TypeScript',
  fiveDimensions_item2_metric0_value: '0 错误',
  fiveDimensions_item2_metric0_change: '✓',
  fiveDimensions_item2_metric1_label: 'ESLint',
  fiveDimensions_item2_metric1_value: '0 警告',
  fiveDimensions_item2_metric1_change: '✓',
  fiveDimensions_item2_metric2_label: '构建状态',
  fiveDimensions_item2_metric2_value: '成功',
  fiveDimensions_item2_metric2_change: '✓',

  // 五维项目4：事件维
  fiveDimensions_item3_title: '事件维',
  fiveDimensions_item3_subtitle: 'Event Dimension',
  fiveDimensions_item3_description: '用户交互处理、错误追踪机制',
  fiveDimensions_item3_metric0_label: '错误率',
  fiveDimensions_item3_metric0_value: '0%',
  fiveDimensions_item3_metric0_change: '-100%',
  fiveDimensions_item3_metric1_label: '可用率',
  fiveDimensions_item3_metric1_value: '99.99%',
  fiveDimensions_item3_metric1_change: '+0.01%',
  fiveDimensions_item3_metric2_label: '可追溯性',
  fiveDimensions_item3_metric2_value: '100%',
  fiveDimensions_item3_metric2_change: '✓',

  // 五维项目5：关联维
  fiveDimensions_item4_title: '关联维',
  fiveDimensions_item4_subtitle: 'Association Dimension',
  fiveDimensions_item4_description: '依赖管理、生态连接性',
  fiveDimensions_item4_metric0_label: '依赖管理',
  fiveDimensions_item4_metric0_value: '受控',
  fiveDimensions_item4_metric0_change: '✓',
  fiveDimensions_item4_metric1_label: 'API 设计',
  fiveDimensions_item4_metric1_value: 'RESTful',
  fiveDimensions_item4_metric1_change: '✓',
  fiveDimensions_item4_metric2_label: '生态系统',
  fiveDimensions_item4_metric2_value: '已连接',
  fiveDimensions_item4_metric2_change: '✓',

  // ===== 闭环理念 =====
  closedLoop_sectionTitle: '闭环理念体验',
  closedLoop_sectionSubtitle: '从文档到服务构建端到端闭环管理体系',
  closedLoop_tag: '闭环理念',
  closedLoop_coreValue: '上下文存档 · 规划衔接 · 总结同步 · 随时可用',
  closedLoop_coreDescription: 'YYC³ 闭环理念确保每个阶段都可追溯、可迭代、可复用。',
  closedLoop_badge0: '可复用',
  closedLoop_badge1: '可迭代',
  closedLoop_badge2: '可追溯',
  closedLoop_badge3: '可连接',

  // 闭环1：文档闭环
  closedLoop_loop0_title: '文档闭环',
  closedLoop_loop0_subtitle: 'Document Closed Loop',
  closedLoop_loop0_description: '可复用 → 可迭代 → 可追溯',
  closedLoop_loop0_step0_label: '创建',
  closedLoop_loop0_step0_desc: '基于模版生成',
  closedLoop_loop0_step1_label: '迭代',
  closedLoop_loop0_step1_desc: '持续版本优化',
  closedLoop_loop0_step2_label: '归档',
  closedLoop_loop0_step2_desc: '完整上下文保存',
  closedLoop_loop0_step3_label: '追溯',
  closedLoop_loop0_step3_desc: '全链路可追溯',
  closedLoop_loop0_badgeText: '全生命周期管理',

  // 闭环2：代码闭环
  closedLoop_loop1_title: '代码闭环',
  closedLoop_loop1_subtitle: 'Code Closed Loop',
  closedLoop_loop1_description: '计划 → 执行 → 检查 → 改进 → 归档 (PDCA+)',
  closedLoop_loop1_step0_label: '规划',
  closedLoop_loop1_step0_desc: '定义任务目标',
  closedLoop_loop1_step1_label: '执行',
  closedLoop_loop1_step1_desc: '按计划实施',
  closedLoop_loop1_step2_label: '检查',
  closedLoop_loop1_step2_desc: '对照标准验证',
  closedLoop_loop1_step3_label: '改进',
  closedLoop_loop1_step3_desc: '问题整改优化',
  closedLoop_loop1_step4_label: '归档',
  closedLoop_loop1_step4_desc: '归档并同步',
  closedLoop_loop1_badgeText: '全生命周期管理',

  // 闭环3：服务闭环
  closedLoop_loop2_title: '服务闭环',
  closedLoop_loop2_subtitle: 'Service Closed Loop',
  closedLoop_loop2_description: '需求 → 开发 → 交付 → 运维 → 演进',
  closedLoop_loop2_step0_label: '需求',
  closedLoop_loop2_step0_desc: '定义业务目标',
  closedLoop_loop2_step1_label: '开发',
  closedLoop_loop2_step1_desc: '高质量实现',
  closedLoop_loop2_step2_label: '交付',
  closedLoop_loop2_step2_desc: '部署上线',
  closedLoop_loop2_step3_label: '运维',
  closedLoop_loop2_step3_desc: '监控保障',
  closedLoop_loop2_step4_label: '演进',
  closedLoop_loop2_step4_desc: '持续优化',
  closedLoop_loop2_badgeText: '全生命周期管理',

  // ===== SEO 相关 =====
  seo_title: 'YYC³ AuraFlow - AI 驱动的智能应用开发平台',
  seo_description:
    '基于五高架构、五标规范、五维评估体系的AI驱动智能应用开发平台。',
  seo_keyword0: 'YYC³',
  seo_keyword1: 'YanYuCloudCube',
  seo_keyword2: 'AI',
  seo_keyword3: 'Next.js',
  seo_keyword4: 'React',
  seo_keyword5: 'TypeScript',
  seo_keyword6: '五高架构',
  seo_keyword7: '五标规范',
  seo_keyword8: '闭环管理',

  // ===== 服务条款页面 =====
  terms_title: '服务条款',
  terms_lastUpdated: '最后更新：2024年12月',
  terms_backToHome: '返回首页',
  terms_acceptanceOfTerms: '接受条款',
  terms_acceptanceDescription:
    '通过访问和使用我们的AI服务，您接受并同意受本协议条款和条件的约束。',
  terms_serviceDescription_title: '服务描述',
  terms_serviceDescription_intro: 'AI Agency 提供人工智能解决方案，包括但不限于：',
  terms_serviceDescription_item0: 'AI聊天机器人开发和部署',
  terms_serviceDescription_item1: '工作流自动化系统',
  terms_serviceDescription_item2: 'AI集成服务',
  terms_serviceDescription_item3: '定制AI解决方案开发',
  terms_userResponsibilities_title: '用户责任',
  terms_userResponsibilities_intro: '您同意：',

  // ===== 隐私政策页面 =====
  privacy_title: '隐私政策',
  privacy_lastUpdated: '最后更新：2024年12月',
  privacy_backToHome: '返回首页',
  privacy_introduction_title: '引言',
  privacy_introduction_description:
    '我们重视您的隐私。本隐私政策说明了我们如何收集、使用和保护您的个人信息。',
  privacy_dataCollection_title: '数据收集',
  privacy_dataCollection_description: '我们可能收集以下类型的信息：',

  // ===== 定价页面 =====
  pricing_title: '选择您的AI转型计划',
  pricing_description: '灵活的定价方案，随您的业务增长而扩展\n所有计划包含设置、培训和30天退款保证',
  pricing_starter_name: '入门版',
  pricing_starter_description: '适合开始AI之旅的小型企业',
  pricing_starter_buttonText: '开始免费试用',
  pricing_starter_feature0: '客户支持AI聊天机器人',
  pricing_starter_feature1: '基础工作流自动化（3个流程）',
  pricing_starter_feature2: '电子邮件集成',
  pricing_starter_feature3: '标准分析仪表板',
  pricing_starter_feature4: '电子邮件支持',
  pricing_starter_feature5: '30天退款保证',
  pricing_professional_name: '专业版',
  pricing_professional_description: '适合准备通过AI扩展的成长型企业',
  pricing_professional_buttonText: '立即开始',
  pricing_enterprise_name: '企业版',
  pricing_enterprise_description: '为需要全面AI能力的大型企业量身定制',
  pricing_enterprise_buttonText: '联系销售团队',

  // ===== 导航栏增强 =====
  nav_home: '首页',
  nav_about: '关于我们',
  nav_features: '功能特性',

  // ===== 按钮通用文本 =====
  button_learnMore: '了解更多',
  button_getStarted: '开始使用',
  button_viewDemo: '查看演示',
  button_contactUs: '联系我们',
  button_readMore: '阅读更多',

  // ===== 页脚 =====
  footer_description:
    'YYC³ AuraFlow - 基于五高架构、五标规范、五维评估体系的AI驱动智能应用开发平台。',
  footer_servicesTitle: '服务',
  footer_companyTitle: '公司',
  footer_contactTitle: '联系方式',
  footer_aboutUs: '关于我们',
  footer_caseStudies: '案例研究',
  footer_blog: '博客',
  footer_careers: '招聘',
  footer_privacy: '隐私政策',
  footer_terms: '服务条款',
  footer_copyright: '© 2024 YYC³ (YanYuCloudCube). 保留所有权利。',

  // ===== 问题与解决方案 =====
  problemSolution_problemTitle: '还在手动管理一切？',
  problemSolution_problem1: '在重复性任务上花费大量时间，而这些任务本可以自动化',
  problemSolution_problem2: '因无法7×24小时响应咨询而错失潜在客户',
  problemSolution_problem3: '在不增加人员的情况下难以扩展运营规模',
  problemSolution_problem4: '在AI驱动的竞争对手面前失去竞争优势',
  problemSolution_solutionTitle: '我们构建真正有效的AI解决方案',
  problemSolution_solution1: '定制AI代理，即时处理客户咨询',
  problemSolution_solution2: '工作流自动化，每周节省20+小时',
  problemSolution_solution3: '与现有工具和系统无缝集成',
  problemSolution_solution4: '实施后30天内实现可证明的投资回报',

  // ===== 服务 =====
  services_title: '我们的AI解决方案',
  services_subtitle: '全面的AI服务，旨在转型您的业务运营',
  services_chatbot_name: 'AI聊天机器人与虚拟助手',
  services_chatbot_description:
    '智能对话代理，通过自然语言处理7×24小时处理客户支持、潜在客户筛选和销售咨询。',
  services_chatbot_cta: '了解更多',
  services_workflow_name: '工作流自动化',
  services_workflow_description:
    '简化重复流程，通过智能自动化系统消除手动任务，每周节省20+小时。',
  services_workflow_cta: '了解更多',
  services_integration_name: 'AI集成服务',
  services_integration_description:
    '通过自定义API将AI功能无缝集成到您现有的电子商务和企业系统中。',
  services_integration_cta: '了解更多',
  services_analytics_name: '智能分析与洞察',
  services_analytics_description:
    'AI驱动的分析，提供可操作的洞察和预测智能，助力更好的决策。',
  services_analytics_cta: '了解更多',
  services_custom_name: '定制AI开发',
  services_custom_description:
    '量身定制的AI解决方案，满足您独特的业务需求，从机器学习模型到智能自动化系统。',
  services_custom_cta: '了解更多',

  // ===== 客户评价 =====
  testimonials_title: '受到成长型企业的信赖',
  testimonials_testimonial1_content:
    'AI聊天机器人使我们的潜在客户转化率提高了200%，并自动处理90%的客户咨询。第一个月就看到了明显的投资回报。',
  testimonials_testimonial1_name: 'Sarah Johnson',
  testimonials_testimonial1_title: 'CEO，TechStart Solutions',
  testimonials_testimonial2_content:
    '工作流自动化每周为我们节省了25小时。我们的团队现在可以专注于战略增长，而不是重复性任务。',
  testimonials_testimonial2_name: 'Michael Chen',
  testimonials_testimonial2_title: '运营总监，GrowthCorp',
  testimonials_testimonial3_content:
    'AI集成改变了我们的电子商务平台。通过个性化客户体验，销售额增长了180%。',
  testimonials_testimonial3_name: 'Emily Rodriguez',
  testimonials_testimonial3_title: '创始人，RetailMax',

  // ===== 数据指标 =====
  metrics_title: '可衡量的重要成果',
  metrics_subtitle: '我们的客户看到了对其业务底线的即时影响',
  metrics_timeSaved: '手动任务节省时间',
  metrics_roi: '6个月内平均投资回报率',
  metrics_conversion: '潜在客户转化率提升',
  metrics_support: '自动化客户支持',

  // ===== CTA区域 =====
  cta_title: '准备好开始您的AI转型之旅了吗？',
  cta_buttonPrimary: '预约免费咨询',
  cta_buttonSecondary: '查看定价方案',

  // ===== 页脚增强 =====
  footer_email: 'admin@0379.email',
  footer_phone: '+86 0379-XXXX-XXXX',
  footer_address: '中国·洛阳·洛龙区',
};
