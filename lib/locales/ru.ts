/**
 * file ru.ts
 * description Русский пакет перевода - YYC³ AuraFlow
 * module @/lib/locales/ru
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[locale],[ru]
 */

import type { TranslationMap } from '@yyc3/i18n-core';

export const ru: TranslationMap = {
  brand_fullName: 'YYC³ (YanYuCloudCube)',
  brand_shortName: 'YYC³',
  brand_motto: 'Слова инициируют код, язык поворачивает интеллект',
  brand_mottoEn: 'Words Initiate Code, Language Pivots Intelligence',

  nav_services: 'Услуги',
  nav_testimonials: 'Отзывы',
  nav_pricing: 'Цены',
  nav_contact: 'Контакты',

  hero_title:
    'Платформа разработки интеллектуальных приложений на базе ИИ',
  hero_subtitle:
    'Платформа разработки интеллектуальных приложений на базе ИИ, основанная на Архитектуре Пяти Высоких, Системе Пяти Стандартов и Рамке Оценки Пяти Измерений.',
  hero_ctaPrimary: 'Начать сейчас',
  hero_ctaSecondary: 'Узнать больше',
  hero_badge1: 'Нулевая стоимость развертывания',
  hero_badge2: 'Гарантия ROI 30 дней',

  fiveHighs_sectionTitle: 'Система Архитектуры Пяти Высоких',
  fiveHighs_sectionSubtitle:
    'Построение интеллектуальной инфраструктуры, ориентированной на будущее, на основе технического превосходства',
  fiveHighs_tag: 'Архитектура Пяти Высоких',

  fiveHighs_item0_title: 'Высокая доступность',
  fiveHighs_item0_subtitle: 'High Availability',
  fiveHighs_item0_description:
    'Гарантия SLA 99.99%, автоматическое переключение, мульти-AZ развертывание',
  fiveHighs_item0_metric0: 'RPO<1мин',
  fiveHighs_item0_metric1: 'RTO<5с',
  fiveHighs_item0_metric2: 'Доступность 99.99%',

  fiveHighs_item1_title: 'Высокая производительность',
  fiveHighs_item1_subtitle: 'High Performance',
  fiveHighs_item1_description:
    'Движок Turbopack + Oxide, сборка на 40%+ быстрее, ускорение CSS в 5 раз',
  fiveHighs_item1_metric0: 'Сборка 2.5с',
  fiveHighs_item1_metric1: 'Задержка <100мс',
  fiveHighs_item1_metric2: 'Скорость CSS 5x',

  fiveHighs_item2_title: 'Высокая безопасность',
  fiveHighs_item2_subtitle: 'High Security',
  fiveHighs_item2_description:
    'Архитектура глубокой защиты, защита WAF/DDoS, шифрование данных',
  fiveHighs_item2_metric0: 'Сертификат SOC 2',
  fiveHighs_item2_metric1: 'Соответствие GDPR',
  fiveHighs_item2_metric2: 'Архитектура Zero Trust',

  fiveHighs_item3_title: 'Высокая масштабируемость',
  fiveHighs_item3_subtitle: 'High Scalability',
  fiveHighs_item3_description:
    'Эластичное масштабирование Kubernetes, горизонтальное/вертикальное расширение',
  fiveHighs_item3_metric0: 'Автомасштабирование',
  fiveHighs_item3_metric1: 'Мультирегиональное развертывание',
  fiveHighs_item3_metric2: 'Микросервисная архитектура',

  fiveHighs_item4_title: 'Высокий интеллект',
  fiveHighs_item4_subtitle: 'High Intelligence',
  fiveHighs_item4_description:
    'Архитектура LLM + Agent, разработка и операции с поддержкой ИИ',
  fiveHighs_item4_metric0: 'GPT-4 / GLM-4',
  fiveHighs_item4_metric1: 'LangChain',
  fiveHighs_item4_metric2: 'AutoGPT',

  fiveStandards_sectionTitle: 'Система Пяти Стандартов',
  fiveStandards_sectionSubtitle:
    'Стимулирование непрерывного улучшения качества через стандартизацию',
  fiveStandards_tag: 'Система Пяти Стандартов',

  fiveStandards_item0_title: 'Стандартизация',
  fiveStandards_item0_subtitle: 'Standardization',
  fiveStandards_item0_description:
    'Унифицированные технические стандарты обеспечивают максимальную эффективность командной работы',
  fiveStandards_item0_feature0: 'Соглашения об именовании проектов',
  fiveStandards_item0_feature1: 'Единый стиль кода',
  fiveStandards_item0_feature2: 'Стандартизированная система документации',
  fiveStandards_item0_metric: '95%+',
  fiveStandards_item0_metricLabel: 'Покрытие стандартизации',

  fiveStandards_item1_title: 'Нормализация',
  fiveStandards_item1_subtitle: 'Normalization',
  fiveStandards_item1_description:
    'Полные спецификации процесса разработки',
  fiveStandards_item1_feature0: 'Рабочий процесс Git',
  fiveStandards_item1_feature1: 'Механизм обзора кода',
  fiveStandards_item1_feature2: 'Стандарты проектирования архитектуры',
  fiveStandards_item1_metric: '100%',
  fiveStandards_item1_metricLabel: 'Степень соответствия процессов',

  fiveStandards_item2_title: 'Автоматизация',
  fiveStandards_item2_subtitle: 'Automation',
  fiveStandards_item2_description:
    'Снижение ручного вмешательства через автоматизированные цепочки инструментов',
  fiveStandards_item2_feature0: 'Конвейер CI/CD',
  fiveStandards_item2_feature1: 'Автоматическое тестирование и развертывание',
  fiveStandards_item2_feature2: 'Автообновление зависимостей',
  fiveStandards_item2_metric: '<5мин',
  fiveStandards_item2_metricLabel: 'Время развертывания',

  fiveStandards_item3_title: 'Визуализация',
  fiveStandards_item3_subtitle: 'Visualization',
  fiveStandards_item3_description:
    'Четкая иерархия UI, визуализация данных, интуитивные дашборды',
  fiveStandards_item3_feature0: 'Дашборд мониторинга',
  fiveStandards_item3_feature1: 'Отображение метрик производительности',
  fiveStandards_item3_feature2: 'Визуализация журналов',
  fiveStandards_item3_metric: 'Реальное время',
  fiveStandards_item3_metricLabel: 'Частота мониторинга',

  fiveStandards_item4_title: 'Интеллектуализация',
  fiveStandards_item4_subtitle: 'Intelligence',
  fiveStandards_item4_description:
    'Разработка с поддержкой ИИ, интеллектуальные рекомендации',
  fiveStandards_item4_feature0: 'ИИ-ассистент кодирования',
  fiveStandards_item4_feature1: 'Интеллектуальный обзор кода',
  fiveStandards_item4_feature2: 'Автоматическая генерация тестов',
  fiveStandards_item4_metric: 'На базе ИИ',
  fiveStandards_item4_metricLabel: 'Ключевая способность',

  fiveDimensions_sectionTitle: 'Система Оценки Пяти Измерений',
  fiveDimensions_sectionSubtitle:
    'Предоставление многомерного рамки оценки проектов',
  fiveDimensions_tag: 'Оценка Пяти Измерений',

  fiveDimensions_item0_title: 'Измерение времени',
  fiveDimensions_item0_subtitle: 'Time Dimension',
  fiveDimensions_item0_description:
    'Таймлайн эволюции версий, оптимизация эффективности разработки',
  fiveDimensions_item0_metric0_label: 'Скорость сборки',
  fiveDimensions_item0_metric0_value: '2.5с',
  fiveDimensions_item0_metric0_change: '-60%',
  fiveDimensions_item0_metric1_label: 'Частота развертывания',
  fiveDimensions_item0_metric1_value: 'Ежедневно',
  fiveDimensions_item0_metric1_change: '+200%',
  fiveDimensions_item0_metric2_label: 'Время отклика',
  fiveDimensions_item0_metric2_value: '<100мс',
  fiveDimensions_item0_metric2_change: '-40%',

  fiveDimensions_item1_title: 'Измерение пространства',
  fiveDimensions_item1_subtitle: 'Space Dimension',
  fiveDimensions_item1_description:
    'Архитектура организации кода, коэффициент повторного использования компонентов',
  fiveDimensions_item1_metric0_label: 'Повторное использование кода',
  fiveDimensions_item1_metric0_value: '85%',
  fiveDimensions_item1_metric0_change: '+25%',
  fiveDimensions_item1_metric1_label: 'Размер бандла',
  fiveDimensions_item1_metric1_value: '<100КБ',
  fiveDimensions_item1_metric1_change: '-30%',
  fiveDimensions_item1_metric2_label: 'Покрытие тестами',
  fiveDimensions_item1_metric2_value: '95%+',
  fiveDimensions_item1_metric2_change: '+15%',

  fiveDimensions_item2_title: 'Измерение атрибутов',
  fiveDimensions_item2_subtitle: 'Attribute Dimension',
  fiveDimensions_item2_description:
    'Матрица атрибутов качества, показатели производительности/безопасности',
  fiveDimensions_item2_metric0_label: 'TypeScript',
  fiveDimensions_item2_metric0_value: '0 Ошибок',
  fiveDimensions_item2_metric0_change: '✓',
  fiveDimensions_item2_metric1_label: 'ESLint',
  fiveDimensions_item2_metric1_value: '0 Предупреждений',
  fiveDimensions_item2_metric1_change: '✓',
  fiveDimensions_item2_metric2_label: 'Статус сборки',
  fiveDimensions_item2_metric2_value: 'Успех',
  fiveDimensions_item2_metric2_change: '✓',

  fiveDimensions_item3_title: 'Измерение событий',
  fiveDimensions_item3_subtitle: 'Event Dimension',
  fiveDimensions_item3_description:
    'Обработка взаимодействий пользователей, механизм отслеживания ошибок',
  fiveDimensions_item3_metric0_label: 'Коэффициент ошибок',
  fiveDimensions_item3_metric0_value: '0%',
  fiveDimensions_item3_metric0_change: '-100%',
  fiveDimensions_item3_metric1_label: 'Доступность',
  fiveDimensions_item3_metric1_value: '99.99%',
  fiveDimensions_item3_metric1_change: '+0.01%',
  fiveDimensions_item3_metric2_label: 'Прослеживаемость',
  fiveDimensions_item3_metric2_value: '100%',
  fiveDimensions_item3_metric2_change: '✓',

  fiveDimensions_item4_title: 'Измерение ассоциаций',
  fiveDimensions_item4_subtitle: 'Association Dimension',
  fiveDimensions_item4_description:
    'Управление зависимостями, связанность экосистемы',
  fiveDimensions_item4_metric0_label: 'Управление зависимостями',
  fiveDimensions_item4_metric0_value: 'Управляется',
  fiveDimensions_item4_metric0_change: '✓',
  fiveDimensions_item4_metric1_label: 'Проектирование API',
  fiveDimensions_item4_metric1_value: 'RESTful',
  fiveDimensions_item4_metric1_change: '✓',
  fiveDimensions_item4_metric2_label: 'Экосистема',
  fiveDimensions_item4_metric2_value: 'Подключена',
  fiveDimensions_item4_metric2_change: '✓',

  closedLoop_sectionTitle: 'Философия Замкнутого Цикла',
  closedLoop_sectionSubtitle:
    'Построение сквозного управления замкнутым циклом от документации до сервиса',
  closedLoop_tag: 'Философия Замкнутого Цикла',
  closedLoop_coreValue:
    'Архивация контекста · Связь планирования · Синхронизация резюме · Готовность в любой момент',
  closedLoop_coreDescription:
    'Философия замкнутого цикла YYC³ гарантирует, что каждый этап прослеживаем, итерируем и повторно используем.',
  closedLoop_badge0: 'Повторно используемый',
  closedLoop_badge1: 'Итерируемый',
  closedLoop_badge2: 'Прослеживаемый',
  closedLoop_badge3: 'Соединяемый',

  closedLoop_loop0_title: 'Цикл документа',
  closedLoop_loop0_subtitle: 'Document Closed Loop',
  closedLoop_loop0_description: 'Повторно используемый → Итерируемый → Прослеживаемый',
  closedLoop_loop0_step0_label: 'Создать',
  closedLoop_loop0_step0_desc: 'Генерация на основе шаблона',
  closedLoop_loop0_step1_label: 'Итерировать',
  closedLoop_loop0_step1_desc: 'Непрерывная оптимизация версий',
  closedLoop_loop0_step2_label: 'Архивировать',
  closedLoop_loop0_step2_desc: 'Полное сохранение контекста',
  closedLoop_loop0_step3_label: 'Отслеживать',
  closedLoop_loop0_step3_desc: 'Полная прослеживаемость цепочки',
  closedLoop_loop0_badgeText: 'Управление полным жизненным циклом',

  closedLoop_loop1_title: 'Цикл кода',
  closedLoop_loop1_subtitle: 'Code Closed Loop',
  closedLoop_loop1_description: 'Планировать → Делать → Проверять → Действовать → Архивировать (PDCA+)',
  closedLoop_loop1_step0_label: 'Планировать',
  closedLoop_loop1_step0_desc: 'Определить цели задач',
  closedLoop_loop1_step1_label: 'Делать',
  closedLoop_loop1_step1_desc: 'Выполнять по плану',
  closedLoop_loop1_step2_label: 'Проверять',
  closedLoop_loop1_step2_desc: 'Проверять по стандартам',
  closedLoop_loop1_step3_label: 'Действовать',
  closedLoop_loop1_step3_desc: 'Решать и улучшать',
  closedLoop_loop1_step4_label: 'Архивировать',
  closedLoop_loop1_step4_desc: 'Архивировать и синхронизировать',
  closedLoop_loop1_badgeText: 'Управление полным жизненным циклом',

  closedLoop_loop2_title: 'Цикл сервиса',
  closedLoop_loop2_subtitle: 'Service Closed Loop',
  closedLoop_loop2_description:
    'Требования → Разработка → Доставка → Операции → Эволюция',
  closedLoop_loop2_step0_label: 'Требования',
  closedLoop_loop2_step0_desc: 'Определить бизнес-цели',
  closedLoop_loop2_step1_label: 'Разработка',
  closedLoop_loop2_step1_desc: 'Качественная реализация',
  closedLoop_loop2_step2_label: 'Доставка',
  closedLoop_loop2_step2_desc: 'Онлайн развертывание',
  closedLoop_loop2_step3_label: 'Операции',
  closedLoop_loop2_step3_desc: 'Обеспечение мониторинга',
  closedLoop_loop2_step4_label: 'Эволюция',
  closedLoop_loop2_step4_desc: 'Непрерывная оптимизация',
  closedLoop_loop2_badgeText: 'Управление полным жизненным циклом',

  seo_title:
    'YYC³ AuraFlow - Платформа интеллектуальных приложений на базе ИИ',
  seo_description:
    'Платформа разработки интеллектуальных приложений на базе ИИ, основанная на Архитектуре Пяти Высоких, Системе Пяти Стандартов и Рамке Оценки Пяти Измерений.',
  seo_keyword0: 'YYC³',
  seo_keyword1: 'YanYuCloudCube',
  seo_keyword2: 'ИИ',
  seo_keyword3: 'Next.js',
  seo_keyword4: 'React',
  seo_keyword5: 'TypeScript',
  seo_keyword6: 'Архитектура Пяти Высоких',
  seo_keyword7: 'Система Пяти Стандартов',
  seo_keyword8: 'Управление замкнутым циклом',
};
