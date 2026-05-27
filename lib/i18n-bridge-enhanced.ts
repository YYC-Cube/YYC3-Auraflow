/**
 * file i18n-bridge-enhanced.ts
 * description Enhanced i18n Bridge - 完整的嵌套结构转换支持
 * module @/lib/i18n-bridge-enhanced
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[bridge],[enhanced]
 */

import type { TranslationMap } from '@yyc3/i18n-core';

/**
 * 将扁平的TranslationMap转换为完整的嵌套对象
 */
export function flattenToNestedComplete(flatMap: TranslationMap): Record<string, any> {
  const nested: Record<string, any> = {};

  Object.entries(flatMap).forEach(([key, value]) => {
    // 处理下划线分隔的键（如 problemSolution_problemTitle）
    if (key.includes('_')) {
      const parts = key.split('_');
      let current = nested;

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        // 检查是否是数组索引（如 item0, step1）
        const arrayMatch = part.match(/^(item|step)(\d+)$/);
        if (arrayMatch) {
          const index = parseInt(arrayMatch[2], 10);
          if (!Array.isArray(current[parts[i - 1]])) {
            current[parts[i - 1]] = [];
          }
          // 创建新对象用于数组元素
          if (!current[parts[i - 1]][index]) {
            current[parts[i - 1]][index] = {};
          }
          current = current[parts[i - 1]][index];
        } else {
          if (!current[part]) {
            current[part] = {};
          }
          current = current[part];
        }
      }

      const lastPart = parts[parts.length - 1];
      // 检查最后一个部分是否是数组索引
      const lastArrayMatch = lastPart.match(/^(item|step)(\d+)$/);
      if (lastArrayMatch && Array.isArray(current)) {
        const lastIndex = parseInt(lastArrayMatch[2], 10);
        while (current.length <= lastIndex) {
          current.push({});
        }
        // 这里需要特殊处理，因为current是数组
        // 实际上这种情况下应该是父级对象的属性
      } else {
        current[lastPart] = value;
      }
    } else {
      // 简单的键，直接赋值
      nested[key] = value;
    }
  });

  return nested;
}

/**
 * 创建支持点分路径访问的代理对象
 */
export function createProxyTranslator(flatMap: TranslationMap): Record<string, any> {
  const handler = {
    get(target: any, prop: string, receiver: any) {
      // 如果是直接存在的属性
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      }

      // 尝试构建扁平键名
      const flatKey = prop;

      // 查找所有以该前缀开头的键
      const matchingKeys = Object.keys(flatMap).filter((key) =>
        key.startsWith(flatKey + '_') || key === flatKey
      );

      if (matchingKeys.length === 1 && matchingKeys[0] === flatKey) {
        return flatMap[flatKey];
      }

      if (matchingKeys.length > 0) {
        // 返回新的代理对象
        return new Proxy(
          {},
          {
            get(_, subProp: string) {
              const fullKey = `${flatKey}_${subProp}`;
              if (fullKey in flatMap) {
                return flatMap[fullKey];
              }

              // 继续递归查找
              const subMatchingKeys = Object.keys(flatMap).filter((key) =>
                key.startsWith(fullKey + '_') || key === fullKey
              );

              if (subMatchingKeys.length > 0) {
                return new Proxy({}, arguments.callee);
              }

              return undefined;
            },
          }
        );
      }

      return undefined;
    },
  };

  return new Proxy(flatMap, handler);
}
