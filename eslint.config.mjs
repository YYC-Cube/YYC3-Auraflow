import eslintConfigNext from "eslint-config-next";

const eslintConfig = [
  ...eslintConfigNext,
  {
    rules: {
      // TypeScript 相关规则
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      
      // React 相关规则
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      
      // React Compiler 规则 (React 19 严格模式)
      // 禁用以下规则，因为它们是常见的有效 React 模式
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/impure-in-render": "off",
      
      // 通用规则
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
    },
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      ".pnpm-store/",
      "public/",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];

export default eslintConfig;