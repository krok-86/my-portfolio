import type { Dictionary } from "@/types/content";

export const ru: Dictionary = {
  profile: {
    name: "Konstantin Bykadorov",
    shortName: "KB",
    role: "Frontend Engineer",
    valueProposition:
      "Frontend-инженер с ~3 годами коммерческого опыта в разработке веб-приложений на React и TypeScript.",
    availability: "Открыт к предложениям",
    seeking: [
      "Frontend Engineer",
      "Middle Frontend Developer",
      "React Developer",
    ],
    heroStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
    ],
    snippetStack: ["React", "TypeScript", "Next.js"],
    about: [
      "Я разрабатываю и поддерживаю продакшен frontend-приложения: архитектура, переиспользуемый UI, интерфейсы с большим объёмом данных и сложные формы. Работаю вместе с дизайном и backend и слежу за тем, чтобы код оставался читаемым после первой версии.",
      "Сейчас в Garpix работаю над коммерческими приложениями на React + TypeScript — от UI Kit и интеграции с API до тестов и модернизации legacy-кода. Ищу позицию Frontend Engineer / Middle Frontend Developer в продуктовой команде, предпочтительно remote и в международной среде.",
    ],
  },
  header: {
    skipToContent: "К основному содержимому",
    primaryNav: "Основная навигация",
    email: "Почта",
    resume: "Резюме",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык",
  },
  nav: [
    { href: "#about", label: "Обо мне" },
    { href: "#experience", label: "Опыт" },
    { href: "#work", label: "Работы" },
    { href: "#contact", label: "Контакты" },
  ],
  hero: {
    viewExperience: "Смотреть опыт",
    contactMe: "Связаться",
    linkedin: "LinkedIn",
    email: "Почта",
    resume: "Резюме",
  },
  about: {
    eyebrow: "01 / about",
    title: "Обо мне",
  },
  experience: {
    eyebrow: "02 / experience",
    title: "Коммерческий опыт",
    description:
      "Короткий путь от trainee-задач до продакшен-приложений на React и TypeScript.",
    current: "Сейчас",
    education: "Магистратура, инженерное дело, Южный федеральный университет",
    roles: [
      {
        company: "Garpix",
        role: "Frontend Developer",
        period: "Октябрь 2024 — настоящее время",
        current: true,
        stack: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "React Hook Form",
          "Zod",
          "Jest",
          "React Testing Library",
          "Styled Components",
          "SCSS",
        ],
        responsibilities: [
          "Frontend-архитектура коммерческих веб-приложений на React + TypeScript",
          "Переиспользуемые UI-компоненты и развитие внутреннего UI Kit",
          "Интеграция с REST API: загрузка данных, кэширование, фильтрация, сортировка и пагинация",
          "Сложные многошаговые формы на React Hook Form и Zod",
          "Управление состоянием на Redux Toolkit и RTK Query",
          "Юнит-тесты на Jest и React Testing Library",
          "Модернизация legacy React/TypeScript кода",
          "Работа с дизайнерами и backend-разработчиками, code review, Agile/Scrum",
        ],
        results: [
          "Сократил boilerplate в сложных формах примерно на 30% за счёт React Hook Form + Zod",
          "Работал над масштабируемой frontend-архитектурой",
          "Участвовал в развитии и оптимизации UI Kit",
          "Модернизировал legacy React/TypeScript код",
        ],
      },
      {
        company: "Softailed",
        role: "Junior Frontend Developer",
        period: "Август 2024 — октябрь 2024",
        location: "Германия / удалённо",
        stack: ["Next.js", "SSR", "Strapi"],
        responsibilities: [
          "Клиентская разработка на Next.js, включая server-side rendering",
          "Интеграция frontend со Strapi",
          "Переиспользуемые UI-компоненты с единообразной адаптивной вёрсткой",
        ],
      },
      {
        company: "T1 Group",
        role: "Frontend Developer Intern",
        period: "Июнь 2024 — август 2024",
        stack: ["React", "TypeScript", "Redux Toolkit", "SPA"],
        responsibilities: [
          "Собрал frontend одностраничного приложения на React, TypeScript и Redux Toolkit",
          "Работал над fintech-проектом в кросс-функциональной команде",
        ],
      },
      {
        company: "Fusion Tech",
        role: "Trainee Frontend Developer",
        period: "Октябрь 2023 — май 2024",
        stack: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "Node.js",
          "Express",
          "TypeORM",
          "PostgreSQL",
          "REST API",
        ],
        responsibilities: [
          "Веб-интерфейсы на React и TypeScript",
          "Базовая серверная работа на Node.js, Express, TypeORM и PostgreSQL",
          "Интеграция с REST API и глобальное состояние на Redux Toolkit",
        ],
      },
    ],
  },
  focus: {
    eyebrow: "03 / focus",
    title: "Инженерный фокус",
    description: "То, чем я занимаюсь на практике, а не набор модных слов.",
    areas: [
      {
        title: "Frontend-архитектура",
        body: "Выстраиваю структуру React + TypeScript приложений так, чтобы их было проще развивать. Это и переиспользуемые паттерны, и понятный поток данных, и модернизация legacy-кода без переписывания ради переписывания.",
      },
      {
        title: "UI-системы",
        body: "Переиспользуемые компоненты и работа с UI Kit в продакшене: единообразие интерфейса, предсказуемые API компонентов и совместная работа с дизайном в Figma.",
      },
      {
        title: "Формы и данные",
        body: "Многошаговые формы, типизированная валидация и экраны с большим объёмом данных — загрузка, кэш, фильтрация, сортировка и пагинация — на React Hook Form, Zod и RTK Query.",
      },
      {
        title: "Тесты и качество",
        body: "Jest и React Testing Library для критичного UI и бизнес-логики. Code review — часть обычного процесса, а не исключение.",
      },
      {
        title: "AI-assisted разработка",
        body: "Cursor и GitHub Copilot для генерации кода, рефакторинга, сокращения boilerplate, тестов, отладки и сравнения подходов. Инженерные решения остаются за разработчиком.",
      },
    ],
  },
  stack: {
    eyebrow: "04 / stack",
    title: "Стек",
    description:
      "Инструменты из коммерческой работы. Без шкал вроде «React 90%» — сигнал даёт блок с опытом.",
    groups: [
      {
        title: "Основа",
        items: ["React", "TypeScript", "Next.js"],
      },
      {
        title: "Состояние и данные",
        items: ["Redux Toolkit", "RTK Query", "REST API"],
      },
      {
        title: "Формы",
        items: ["React Hook Form", "Zod"],
      },
      {
        title: "Тестирование",
        items: ["Jest", "React Testing Library"],
      },
      {
        title: "Стили и инструменты",
        items: ["Styled Components", "SCSS", "Vite", "Webpack", "Figma"],
      },
      {
        title: "Дополнительно",
        items: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Git",
          "Agile / Scrum",
          "Cursor",
          "GitHub Copilot",
        ],
      },
    ],
  },
  work: {
    eyebrow: "05 / work",
    title: "Избранные работы",
    description:
      "Категории коммерческих задач, а не публичное GitHub-портфолио.",
    disclaimer:
      "Примеры основаны на коммерческих проектах и не могут быть раскрыты публично.",
    samples: [
      {
        category: "UI / архитектура компонентов",
        body: "Слои переиспользуемых компонентов и работа с UI Kit в коммерческих React-приложениях — единообразие интерфейса, меньше дублирования и понятный путь для новых фич.",
      },
      {
        category: "Сложные формы и валидация",
        body: "Многошаговые формы на React Hook Form и Zod: типизированная валидация, меньше лишних ререндеров и меньше boilerplate на больших формах.",
      },
      {
        category: "Интерфейсы на данных",
        body: "Экраны на REST API с загрузкой, кэшированием, фильтрацией, сортировкой и пагинацией на Redux Toolkit и RTK Query.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / contact",
    title: "Открыт к предложениям на позицию Frontend Engineer",
    body: "Удалёнка и международные продуктовые команды. React / TypeScript. Роли Middle Frontend Developer и React Developer.",
    linkedin: "LinkedIn",
    downloadCv: "Скачать CV",
  },
  footer: {
    navLabel: "Подвал",
  },
  metadata: {
    title: "Konstantin Bykadorov — Frontend Engineer",
    description:
      "Frontend-инженер с ~3 годами коммерческого опыта в разработке веб-приложений на React и TypeScript.",
    ogLocale: "ru_RU",
    keywords: [
      "Frontend Engineer",
      "Frontend-разработчик",
      "Middle Frontend Developer",
      "React",
      "TypeScript",
      "Next.js",
      "Konstantin Bykadorov",
    ],
  },
};
