<div align="center">

  <img src="public/yyc3-Family.png" alt="YYC³ AuraFlow Banner" width="100%">

  <h1>🚀 YYC³ AuraFlow</h1>

  <p><strong>AI 驱动业绩增长 · 降低运营成本 · 智能应用落地专家</strong></p>

  <p>现代化的 AI 代理服务官网 | Next.js 16 + React 19 + TypeScript + Tailwind CSS v4</p>

  <p>
    <a href="https://aureflow.yyc3.top"><b>🌐 在线预览</b></a> •
    <a href="https://github.com/YYC-Cube/YYC3-Auraflow/issues"><b>🐛 问题反馈</b></a> •
    <a href="https://github.com/YYC-Cube/YYC3-Auraflow/discussions"><b>💬 社区讨论</b></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.4-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/shadcn/ui-latest-000000?style=flat-square" alt="shadcn/ui">
    <img src="https://img.shields.io/badge/Radix_UI-latest-7E5CEF?style=flat-square" alt="Radix UI">
    <img src="https://img.shields.io/badge/pnpm-9-F69220?style=flat-square&logo=pnpm&logoColor=white" alt="pnpm">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome">
    <img src="https://img.shields.io/github/actions/workflow/status/YYC-Cube/YYC3-Auraflow/deploy.yml?label=CI%2FCD&style=flat-square" alt="CI/CD">
  </p>

</div>

---

## ✨ 项目亮点

### 🎯 为什么选择 YYC³ AuraFlow?

- � **极致性能** - Next.js 16 Turbopack 构建,首屏加载 < 1.5s
- 🎨 **精美设计** - 现代化 UI + 高级动画效果 (Spotlight/Spline/Particles)
- 🌍 **国际化** - 支持 10 种语言,中英双语完整切换
- ♿ **无障碍** - 基于 Radix UI,符合 WCAG 标准
- 🔒 **类型安全** - TypeScript Strict 模式,零 any 类型
- 📱 **响应式** - 移动优先设计,完美适配所有设备
- 🤖 **AI 集成** - AI 驱动的智能交互体验
- ⚡ **自动化部署** - GitHub Pages + CI/CD 全自动部署

---

## �📋 目录

- [快速开始](#-快速开始)
- [技术栈](#-技术栈)
- [项目结构](#-项目结构)
- [核心功能](#-核心功能)
- [架构设计](#-架构设计)
- [开发指南](#-开发指南)
- [CI/CD 部署](#cicd-部署)
- [性能指标](#-性能指标)
- [贡献指南](#-贡献指南)
- [许可信息](#-许可信息)

---

## � 快速开始

### 📦 一键部署到 GitHub Pages (推荐)

[![Deploy to GitHub Pages](https://github.com/codespaces/new.svg)](https://github.com/YYC-Cube/YYC3-Auraflow/fork)

点击上方按钮 Fork 并启用 GitHub Pages 即可!

### 💻 本地开发

#### 先决条件

```bash
Node.js >= 18
pnpm >= 9
```

#### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/YYC-Cube/YYC3-Auraflow.git
cd YYC3-Auraflow

# 安装依赖
pnpm install

# 启动开发服务器 (端口 3119)
pnpm dev

# 构建生产版本
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

访问 [http://localhost:3119](http://localhost:3119) 查看效果

---

## 🛠️ 技术栈

| 层级 | 技术 | 版本 | 用途 |
|------|------|------|------|
| **框架** | ![Next.js](https://img.shields.io/badge/-16.2.4-000000?style=flat-square&logo=next.js) | **16.2.4** | React 全栈框架,Turbopack |
| **UI 库** | ![React](https://img.shields.io/badge/-19.2.4-61DAFB?style=flat-square&logo=react) | **19.2.4** | 用户界面构建 |
| **语言** | ![TypeScript](https://img.shields.io/badge/-5.6-3178C6?style=flat-square&logo=typescript) | **5.6** | 类型安全 |
| **样式** | ![Tailwind CSS](https://img.shields.io/badge/-4.3-06B6D4?style=flat-square&logo=tailwindcss) | **4.3** | 原子化 CSS (Oxide 引擎) |
| **组件库** | shadcn/ui + Radix UI | latest | 无障碍可复用组件 |
| **图标** | Lucide React | latest | 图标系统 |
| **动画** | Framer Motion | latest | 声明式动画 |
| **3D 渲染** | Spline + Three.js | latest | 3D 场景集成 |
| **粒子效果** | @tsparticles | latest | Canvas 粒子系统 |
| **图表** | Recharts | 3.8.1 | 数据可视化 |
| **表单** | React Hook Form + Zod | latest | 表单验证 |
| **包管理** | ![pnpm](https://img.shields.io/badge/-9-F69220?style=flat-square&logo=pnpm) | **9** | 高效依赖管理 |

---

## 📁 项目结构

```
yyc3-auraflow/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # CI/CD 自动部署工作流
│       └── ci.yml              # 代码质量检查
│
├── app/                        # Next.js App Router
│   ├── layout.tsx             # 根布局 (metadata + SEO)
│   ├── page.tsx               # 主页
│   ├── globals.css            # 全局样式
│   ├── privacy/               # 隐私政策页
│   └── terms/                 # 服务条款页
│
├── components/
│   ├── theme-provider.tsx     # 主题提供者
│   └── ui/                    # UI 组件库 (63+ 组件)
│       ├── navbar.tsx         # 导航栏
│       ├── pricing.tsx        # 定价方案
│       ├── bento-grid.tsx     # Bento 布局
│       ├── spotlight.tsx      # 聚光灯效果
│       ├── sparkles.tsx       # 粒子动画
│       ├── spline-scene.tsx   # 3D 场景
│       ├── chart.tsx          # 图表组件
│       └── yyc3-logo.tsx      # Logo 组件
│
├── contexts/
│   └── locale-context.tsx     # 国际化上下文
│
├── lib/
│   ├── i18n*.ts               # i18n 核心模块
│   ├── locales/              # 10 种语言包
│   │   ├── zh-CN.ts          # 中文
│   │   ├── en.ts             # 英文
│   │   ├── ja.ts             # 日文
│   │   └── ...               # 其他语言
│   └── utils.ts              # 工具函数
│
├── hooks/                     # 自定义 Hooks
│   ├── use-mobile.ts         # 移动端检测
│   ├── use-toast.ts          # Toast 通知
│   └── use-translation.ts    # 翻译 Hook
│
├── public/
│   ├── yyc3-dist/            # 品牌资源
│   │   ├── manifest.json     # PWA 配置
│   │   └── *.png             # 多尺寸图标
│   └── .nojekyll             # GitHub Pages 配置
│
├── docs/                      # 完整的项目文档体系
│   ├── 00-项目总览索引/
│   ├── 01-启动规划阶段/
│   ├── 02-项目设计阶段/
│   ├── 03-开发实施阶段/
│   ├── 04-测试审核阶段/
│   ├── 05-交付部署阶段/
│   ├── YYC3-团队通用-标规闭环/
│   │   ├── reports/          # 验收报告
│   │   └── YYC3-全局统一-验收标准.md
│   └── ...
│
├── .github/workflows/         # GitHub Actions 工作流
├── next.config.mjs           # Next.js 配置 (静态导出)
├── package.json              # 项目依赖
├── tsconfig.json             # TypeScript 配置
├── netlify.toml              # Netlify 备选部署配置
├── README.md                 # 本文件
├── LICENSE                   # MIT 许可证
├── CONTRIBUTING.md           # 贡献指南
└── CHANGELOG.md              # 变更日志
```

---

## ✨ 核心功能

### 🌍 1. 国际化系统 (i18n)

- ✅ 基于 Context API 的轻量级解决方案
- ✅ 支持 **10 种语言**: 中文、英文、日文、韩文、阿拉伯语、德语、法语、西班牙语、葡萄牙语、俄语
- ✅ localStorage 持久化用户偏好
- ✅ 完全类型安全的翻译字典

### 📱 2. 响应式设计

- ✅ 移动优先的响应式布局
- ✅ 自适应导航栏 (移动端汉堡菜单)
- ✅ 流畅的断点转换和交互优化

### 🎨 3. 高级动画效果

| 动画 | 技术 | 效果描述 |
|------|------|----------|
| **聚光灯** | Custom Hook | 鼠标跟随的光晕效果 |
| **粒子闪烁** | @tsparticles | Canvas 粒子系统 |
| **3D 场景** | Spline + Three.js | 交互式 3D 模型展示 |
| **渐变背景** | CSS Animation | 呼吸式渐变背景 |
| **卡片悬停** | Framer Motion | 平滑的卡片交互反馈 |

### 🏷️ 4. 品牌系统

- ✅ YYC³ 统一品牌资源管理
- ✅ 多尺寸图标适配 (16px ~ 512px)
- ✅ PWA manifest.json 配置
- ✅ Open Graph 和 Twitter Card 元数据
- ✅ 可复用的 Logo 组件 (`<YYC3Logo />`)

### 📊 5. 数据可视化

- ✅ Recharts 图表集成
- ✅ 自定义 Tooltip 和 Legend 组件
- ✅ 支持多种图表类型 (折线图、柱状图、饼图等)

---

## 🏗️ 架构设计

本项目遵循 **五高架构原则**:

```
╔══════════════════════════════════════════════════╗
║                五高架构体系                       ║
╠═════════╦═════════╦═════════╦═════════╬═════════╣
║ 高可用  ║ 高性能  ║ 高安全  ║ 高扩展  ║ 高智能  ║
╠═════════╬═════════╬═════════╬═════════╬═════════╣
║ SSR+CSR ║ Tree    ║ CSP    ║ 模块化  ║ AI驱动  ║
║ 混合渲染 ║ Shaking ║ Headers ║ 插件式  ║ 自动化  ║
║ 优雅降级 ║ 缓存策略 ║ 输入验证 ║ i18n扩展 ║ 智能体验 ║
╚═════════╩═════════╩═════════╩═════════╩═════════╝
```

### 技术决策

| 决策点 | 选择 | 原因 |
|--------|------|------|
| 渲染模式 | Static Export (SSG) | GitHub Pages 兼容,SEO 优化 |
| 状态管理 | React Context | 轻量级,无需 Redux/Zustand |
| 样式方案 | Tailwind CSS v4 | 原子化,高性能,Oxide 引擎 |
| 动画库 | Framer Motion | 声明式 API,性能优秀 |
| 3D 方案 | Spline | 设计师友好,低代码集成 |
| 包管理器 | pnpm | 快速节省磁盘空间,严格依赖 |

---

## 👨‍💻 开发指南

### 代码规范

```typescript
// ✅ 正确示例: 使用 TypeScript 严格模式
interface ComponentProps {
  title: string
  count?: number
}

export function MyComponent({ title, count = 0 }: ComponentProps) {
  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <span className="text-muted-foreground">{count}</span>
    </div>
  )
}
```

### 命名约定

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `SparklesCore`, `ChartTooltipContent` |
| 文件 | kebab-case | `sparkles.tsx`, `use-mobile.ts` |
| 函数/Hook | camelCase | `createParticles`, `useLocale` |
| 常量 | UPPER_SNAKE_CASE | `DEFAULT_LOCALE`, `THEMES` |
| 类型接口 | PascalCase | `ChartConfig`, `ChartPayload` |

### Git 工作流

```bash
# 创建功能分支
git checkout -b feature/amazing-feature

# 提交更改 (使用规范的 commit message)
git add .
git commit -m("feat: add amazing new component")

# 推送到远程
git push origin feature/amazing-feature

# 创建 Pull Request 到 main 分支
```

**Commit Message 规范:**

| 类型 | 描述 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: add dark mode support` |
| `fix` | Bug 修复 | `fix: resolve mobile menu overflow` |
| `docs` | 文档更新 | `docs: update README with deployment guide` |
| `style` | 代码格式 | `style: format code with prettier` |
| `refactor` | 重构 | `refactor: simplify chart component logic` |
| `perf` | 性能优化 | `perf: optimize particle system rendering` |
| `test` | 测试相关 | `test: add unit tests for utils` |
| `chore` | 构建/工具 | `chore: upgrade dependencies` |

### 可用脚本

| 命令 | 说明 | 用途 |
|------|------|------|
| `pnpm dev` | 开发服务器 | 端口 3119,热重载 |
| `pnpm build` | 生产构建 | 生成静态文件到 `out/` |
| `pnpm export` | 导出静态站 | 同 build (output: 'export') |
| `pnpm start` | 启动生产服务 | 预览构建结果 |
| `pnpm lint` | ESLint 检查 | 代码质量保证 |
| `pnpm type-check` | TypeScript 检查 | 类型安全验证 |
| `pnpm preview` | 构建并预览 | 完整的生产环境模拟 |

---

## � CI/CD 部署

### 🚀 GitHub Pages 自动部署

本项目已配置完整的 **GitHub Actions CI/CD** 工作流:

#### 工作流触发条件

- ✅ 推送到 `main` 分支 → 自动构建并部署
- ✅ Pull Request 到 `main` → 运行代码检查
- ✅ 手动触发 (`workflow_dispatch`) → 按需部署

#### 部署流程

```
Push to Main
    ↓
[Checkout Code]
    ↓
[Setup Node.js 20 + pnpm 9]
    ↓
[Install Dependencies] ← pnpm install --frozen-lockfile
    ↓
[Run Linting]        ← pnpm lint
    ↓
[Build Project]      ← next build (Static Export)
    ↓
[Upload Artifact]    ← Upload ./out directory
    ↓
[Deploy to Pages]    ← GitHub Pages Action
    ↓
✅ Live at: https://aureflow.yyc3.top
```

#### 关键配置文件

| 文件 | 用途 |
|------|------|
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | 主部署工作流 |
| [.github/workflows/ci.yml](.github/workflows/ci.yml) | 代码质量检查 |
| [next.config.mjs](next.config.mjs) | 静态导出配置 |
| [netlify.toml](netlify.toml) | Netlify 备选部署 |

#### 手动部署步骤

```bash
# 1. 克隆仓库
git clone https://github.com/YYC-Cube/YYC3-Auraflow.git
cd YYC3-Auraflow

# 2. 安装依赖
pnpm install

# 3. 构建静态站点
pnpm build

# 4. 部署到 GitHub Pages
# 方式 A: 推送 out/ 目录到 gh-pages 分支
# 方式 B: 使用 GitHub Actions (推荐,已配置)

# 5. 访问 https://aureflow.yyc3.top
```

### 🌐 其他平台部署

#### Vercel (一键部署)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YYC-Cube/YYC3-Auraflow)

#### Netlify

已包含 [netlify.toml](netlify.toml) 配置文件,可直接导入。

#### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📊 性能指标

### 构建性能

| 指标 | 数值 | 评级 |
|------|------|------|
| **构建时间** | **2.6 秒** | ⭐⭐⭐⭐⭐ A+ |
| **TypeScript 检查** | **3ms** | ⭐⭐⭐⭐⭐ A+ |
| **页面生成** | **200ms (5 页)** | ⭐⭐⭐⭐⭐ A+ |
| **输出大小** | **~2MB (gzip 后)** | ⭐⭐⭐⭐ A |
| **首次内容绘制 (FCP)** | **~1.2s** | ⭐⭐⭐⭐⭐ A+ |

### 代码质量

| 指标 | 数值 | 目标 | 状态 |
|------|------|------|------|
| TypeScript 错误 | **0** | = 0 | ✅ 达标 |
| ESLint 错误 | **0** | ≤ 5 | ✅ 超标 |
| 组件平均大小 | **142 行** | < 300 行 | ✅ 优秀 |
| 测试覆盖率 | - | ≥ 80% | ⏳ 待添加 |
| Bundle 大小 | 合理 | < 500KB | ✅ 优秀 |

### 最新验收报告

> **综合得分: 94.80 / 100 (A+ 优秀)**
> 详细报告见: [docs/YYC3-团队通用-标规闭环/YYC3-项目闭环-验收系统/reports/YYC3-闭环验证报告-v2.0.0.md](docs/YYC3-团队通用-标规闭环/YYC3-项目闭环-验收系统/reports/YYC3-闭环验证报告-v2.0.0.md)

---

## 🤝 贡献指南

我们欢迎所有形式的贡献!无论是新功能、Bug 修复、文档改进还是问题报告。

### 如何贡献?

1. **Fork** 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m('feat: add AmazingFeature')`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 **Pull Request**

详细指南请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

### 贡献者规范

- ✅ 遵循 TypeScript Strict 模式
- ✅ 编写有意义的 Commit Messages
- ✅ 保持代码格式一致 (ESLint + Prettier)
- ✅ 为新组件添加必要的类型定义
- ✅ 更新相关文档 (如果适用)

---

## 📄 许可信息

本项目基于 [MIT License](./LICENSE) 开源。

```
MIT License

Copyright (c) 2025 YYC³ AuraFlow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 致谢

感谢以下开源项目和社区:

- [Next.js](https://nextjs.org/) - React 全栈框架
- [React](https://react.dev/) - 用户界面库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Radix UI](https://www.radix-ui.com/) - 无障碍组件原语
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Spline](https://spline.design/) - 3D 设计工具
- [Lucide](https://lucide.dev/) - 图标库
- 以及所有其他优秀的开源贡献者

---

<div align="center">

### 🌟 如果这个项目对你有帮助,请给一个 Star! ⭐

<p><strong>言启千行代码,语枢万物智能</strong></p>

<p>
  <b>YYC³ AuraFlow</b> ·
  <a href="https://aureflow.yyc3.top">在线预览</a> ·
  <a href="https://github.com/YYC-Cube/YYC3-Auraflow/issues">问题反馈</a>
</p>

<p>
  Made with ❤️ by <a href="https://github.com/YYC-Cube"><b>YYC³ Team</b></a>
</p>

<p>
  <sub>最后更新: 2026-05-27 · 基于 <a href="https://github.com/YYC-Cube/YYC3-Auraflow/commits/main">最新提交</a></sub>
</p>

</div>
