# 变更日志

本项目的所有重要变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本管理遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2025-05-27

### 新增

- 项目正式命名为 **YYC³ AuraFlow**
- 品牌系统：YYC³ logo、favicon、多尺寸图标、品牌顶图
- 国际化系统（中/英文切换，基于 React Context API）
- 响应式导航栏（含移动端菜单、语言切换）
- Hero 区域（Spline 3D 场景 + Spotlight 聚光灯效果）
- 问题与解决方案展示区域
- 服务展示（Bento Grid 布局）
- 客户评价模块
- 数据指标展示
- 定价方案（含月/年切换 + Confetti 动效）
- 三步流程展示
- CTA 区域（Canvas 粒子闪烁 + 渐变背景动画）
- Footer（品牌信息、社交链接、联系方式）
- 隐私政策页面
- 服务条款页面

### 变更

- 粒子效果组件（sparkles.tsx）从 `@tsparticles/react` 迁移到原生 Canvas API
- Button 组件添加 `forwardRef` 支持
- Spotlight 组件添加 `fill` prop 支持
- 开发服务器端口固定为 3114
- 项目元数据更新为 YYC³ AuraFlow 品牌

### 技术栈

- Next.js 14.2 + React 19 + TypeScript 5
- Tailwind CSS 4.1 + shadcn/ui + Radix UI
- Framer Motion + Spline + Three.js
- pnpm 包管理
