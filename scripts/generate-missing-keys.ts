/**
 * file generate-missing-keys.ts
 * description Generate missing translation keys for all locales
 * module @/scripts/generate-missing-keys
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[script],[migration]
 */

// 缺失的翻译键（从TypeScript错误中提取）
const MISSING_KEYS = {
  // 问题与解决方案
  problemSolution_problemTitle: '',
  problemSolution_problem1: '',
  problemSolution_problem2: '',
  problemSolution_problem3: '',
  problemSolution_problem4: '',
  problemSolution_solutionTitle: '',
  problemSolution_solution1: '',
  problemSolution_solution2: '',
  problemSolution_solution3: '',
  problemSolution_solution4: '',

  // 服务
  services_title: '',
  services_subtitle: '',
  services_chatbot_name: '',
  services_chatbot_description: '',
  services_chatbot_cta: '',
  services_workflow_name: '',
  services_workflow_description: '',
  services_workflow_cta: '',
  services_integration_name: '',
  services_integration_description: '',
  services_integration_cta: '',
  services_analytics_name: '',
  services_analytics_description: '',
  services_analytics_cta: '',
  services_custom_name: '',
  services_custom_description: '',
  services_custom_cta: '',

  // 客户评价
  testimonials_title: '',
  testimonials_testimonial1_content: '',
  testimonials_testimonial1_name: '',
  testimonials_testimonial1_title: '',
  testimonials_testimonial2_content: '',
  testimonials_testimonial2_name: '',
  testimonials_testimonial2_title: '',
  testimonials_testimonial3_content: '',
  testimonials_testimonial3_name: '',
  testimonials_testimonial3_title: '',

  // 数据指标
  metrics_title: '',
  metrics_subtitle: '',
  metrics_timeSaved: '',
  metrics_roi: '',
  metrics_conversion: '',
  metrics_support: '',

  // CTA区域
  cta_title: '',
  cta_buttonPrimary: '',
  cta_buttonSecondary: '',

  // 页脚增强
  footer_email: '',
  footer_phone: '',
  footer_address: '',

  // 五高架构items（数组索引）
  fiveHighs_items: [],
  // 五标规范items（数组索引）
  fiveStandards_items: [],
  // 五维评估items（数组索引）
  fiveDimensions_items: [],
  // 闭环loops（数组索引）
  closedLoop_loops: [],
};

export default MISSING_KEYS;
