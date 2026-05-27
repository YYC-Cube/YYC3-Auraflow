# Contributing to YYC³ AuraFlow

感谢你对 YYC³ AuraFlow 项目的关注!我们欢迎并重视所有形式的贡献。

## 📋 目录

- [行为准则](#-行为准则)
- [如何贡献](#-如何贡献)
- [开发流程](#-开发流程)
- [代码规范](#-代码规范)
- [提交规范](#-提交规范)
- [Pull Request 流程](#pull-request-流程)
- [问题反馈](#-问题反馈)

---

## 🤝 行为准则

本项目遵循 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) 中的行为准则。参与本项目即表示您同意遵守这些准则。

**核心原则:**

- ✅ **尊重他人** - 以专业和尊重的态度交流
- ✅ **包容开放** - 欢迎不同背景的贡献者
- ✅ **建设性反馈** - 提供有价值的建议和改进
- ✅ **专注技术** - 讨论聚焦于技术和项目本身

---

## 🚀 如何贡献

### 贡献方式

1. **报告 Bug** - 发现问题时创建 Issue
2. **提出建议** - 功能改进或新功能建议
3. **提交代码** - 修复 Bug 或添加新功能
4. **改进文档** - 完善文档、翻译或示例
5. **代码审查** - 帮助审查 Pull Request

### 贡献者等级

| 等级 | 要求 | 权限 |
|------|------|------|
| **Contributor** | 1 个合并的 PR | 列入贡献者名单 |
| **Active Contributor** | 5 个合并的 PR | 获得 Reviewer 权限 |
| **Core Member** | 邀请制 | 项目维护权限 |

---

## 💻 开发流程

### 环境设置

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/<your-username>/YYC3-Auraflow.git
cd YYC3-Auraflow

# 2. 安装依赖
pnpm install

# 3. 创建功能分支
git checkout -b feature/your-feature-name

# 4. 启动开发服务器
pnpm dev
```

### 开发前检查清单

- [ ] 已阅读 [README.md](./README.md) 了解项目结构
- [ ] 已阅读本文档了解贡献流程
- [ ] 开发环境已正确设置 (Node.js 18+, pnpm 9+)
- [ ] 已安装推荐的 VS Code 扩展 (可选)

---

## 📝 代码规范

### TypeScript 规范

```typescript
// ✅ 正确: 使用明确的类型注解
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'default', 
  size = 'md', 
  children 
}: ButtonProps) {
  return (
    <button className={cn(variant, size)}>
      {children}
    </button>
  )
}

// ❌ 错误: 使用 any 类型
function badExample(props: any) {
  // ...
}
```

### React 组件规范

```tsx
// ✅ 正确: 函数式组件 + Hooks
'use client'

import { useState, useEffect } from 'react'

export function MyComponent({ title }: { title: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${title} (${count})`
  }, [title, count])

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  )
}
```

### 文件命名规范

```
components/
├── ui/
│   ├── button.tsx          # 组件文件 (PascalCase)
│   ├── use-toast.ts        # Hook 文件 (use- 前缀)
│   └── utils.ts            # 工具函数 (camelCase)

lib/
├── i18n.ts                 # 核心模块 (camelCase)
└── types.ts                # 类型定义 (camelCase 或 types 后缀)
```

### 导入顺序

```typescript
// 1. React 和 Next.js 相关
import React from 'react'
import Image from 'next/image'

// 2. 第三方库
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

// 3. 内部组件 (@/ 别名)
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

// 4. 类型导入
import type { ChartConfig } from './types'
```

---

## 🔀 Git 提交规范

### Commit Message 格式

采用 [Conventional Commits](https://www.conventionalcommits.org/) 规范:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Type 类型

| 类型 | 描述 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式 (不影响功能) |
| `refactor` | 重构 (不是新功能也不是修复) |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具/依赖变更 |

#### Scope 范围

常用的 scope 包括:

- `components` - UI 组件
- `hooks` - 自定义 Hooks
- `lib` - 工具函数
- `i18n` - 国际化
- `config` - 配置文件
- `docs` - 文档

#### 示例

```bash
# 新功能
feat(components): add dark mode toggle component

# Bug 修复
fix(hooks): resolve mobile detection issue on iOS

# 文档
docs(readme): update deployment instructions for GitHub Pages

# 重构
refactor(chart): simplify tooltip content logic

# 性能优化
perf(particles): optimize canvas rendering with requestAnimationFrame
```

---

## 🔄 Pull Request 流程

### PR 检查清单

在提交 PR 前,请确保:

#### 代码质量
- [ ] 代码通过 TypeScript 类型检查 (`pnpm type-check`)
- [ ] 代码通过 ESLint 检查 (`pnpm lint`)
- [ ] 新代码有适当的类型定义
- [ ] 复杂逻辑有必要的注释

#### 功能完整性
- [ ] 功能已完整实现并通过测试
- [ ] 没有引入新的编译错误或警告
- [ ] 响应式设计在不同屏幕尺寸下正常工作
- [ ] 国际化文本已添加到语言包中 (如适用)

#### 文档
- [ ] README.md 已更新 (如适用)
- [ ] CHANGELOG.md 已添加条目 (如适用)
- [ ] API 变更有相应文档说明

### PR 标题格式

```
<type>(<scope>): <简短描述>
```

示例:
- `feat(ui): add loading spinner component`
- `fix(i18n): correct Chinese translation for nav items`
- `docs(readme): add deployment section`

### PR 描述模板

```markdown
## 📝 变更描述

简要描述这个 PR 的变更内容...

## 🔧 变更类型

- [ ] Bug 修复
- [ ] 新功能
- [ ] Breaking Change
- [ ] 文档更新
- [ ] 其他: _______

## 📸 截图/演示 (UI 变更必填)

<!-- 添加截图或 GIF 展示变更效果 -->

## 🧪 测试步骤

描述如何测试此变更:

1. 运行 `pnpm dev`
2. 导航到...
3. 点击...
4. 预期结果: ...

## 📚 相关 Issue

Closes #IssueNumber
Fixes #IssueNumber

## ⚠️ 注意事项

列出审查者需要注意的事项...
```

---

## 🐛 问题反馈

### 报告 Bug

使用 [Issue Template](https://github.com/YYC-Cube/YYC3-Auraflow/issues/new?template=bug_report.md) 报告 Bug。

**必须包含的信息:**

1. **问题描述** - 清晰简洁地描述问题
2. **复现步骤** - 详细的重现步骤
3. **预期行为** - 你期望发生什么
4. **实际行为** - 实际发生了什么
5. **环境信息**
   - 操作系统和版本
   - 浏览器和版本
   - Node.js 版本
   - pnpm 版本
6. **截图** - 如果是 UI 问题,请提供截图

### 功能建议

使用 [Feature Request Template](https://github.com/YYC-Cube/YYC3-Auraflow/issues/new?template=feature_request.md) 提出新功能建议。

**建议包含:**

1. **功能描述** - 清晰的功能概述
2. **使用场景** - 为什么需要这个功能
3. **预期 API** - 如果是 API 变更,展示预期的接口设计
4. **替代方案** - 你考虑过的其他解决方案
5. **附加信息** - 任何其他相关信息

---

## 📊 贡献统计

我们会在以下位置记录和感谢贡献者:

- [README.md](./README.md) - Contributors 部分
- [CHANGELOG.md](./CHANGELOG.md) - 每个版本的贡献者列表
- GitHub 的 [Contributors 页面](https://github.com/YYC-Cube/YYC3-Auraflow/graphs/contributors)

---

## 💬 获取帮助

如果你有任何问题或需要帮助:

1. **查看文档** - 先查阅 README.md 和 docs/ 目录
2. **搜索 Issues** - 可能已有类似问题和解决方案
3. **创建 Discussion** - 在 GitHub Discussions 中提问
4. **联系维护者** - 通过 Issue 或 Discussion @mention 维护者

---

## 🙏 致谢

每一位贡献者都是 YYC³ AuraFlow 成功的重要部分!感谢你的时间和努力!

<div align="center">

**Happy Coding! 🚀**

*言启千行代码,语枢万物智能*

</div>
