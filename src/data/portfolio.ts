import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Харисов Айдар",
  role: "python backend",
  contacts: {
    telegram: "https://t.me/Kharisov_Aidar",
    email: "kharisov.aidar.tim@yandex.ru",
    telegramHandle: "@Kharisov_Aidar"
  },
  competencies: [
    {
      title: "Продукт и технологии",
      items: [
        "Анализ бизнес-задач и процессов",
        "Формирование продуктовой концепции и MVP",
        "Выбор оптимальной архитектуры и стека"
      ],
      icon: "Box"
    },
    {
      title: "UX/UI",
      items: [
        "UX/UI-дизайн на основе логики продукта",
        "Прототипирование и тестирование",
        "Интерфейсы, удобные для пользователей и бизнеса"
      ],
      icon: "Palette"
    },
    {
      title: "Разработка цифровых продуктов",
      items: [
        "Веб-приложения",
        "Telegram Mini App",
        "Внутренние сервисы Telegram"
      ],
      icon: "Smartphone",
      large: true
    },
    {
      title: "Автоматизация и данные",
      items: [
        "AI-инструменты и чат-боты для бизнеса",
        "Аналитика, отчёты, BI",
        "Автоматизация рутинных процессов"
      ],
      icon: "Cloud"
    },
    {
      title: "Инфраструктура",
      items: [
        "Облачные решения и DevOps",
        "CI/CD, стабильность и масштабирование"
      ],
      icon: "Database"
    }
  ],
  cases: [
    {
      id: "season-party",
      title: "SeasonPartyBot",
      subtitle: "Сервис автоматизации продажи билетов на мероприятия",
      tags: ["Mini App", "Оплата", "Бизнес"],
      features: [
        "Mini App: Полноценный каталог",
        "Оплата: Внутри Telegram",
        "Бизнес: Автоматизация кассы 24/7"
      ],
      role: [
        "Проектирование логики Mini App и архитектуры базы данных",
        "Реализация пользовательского UI (интерфейса выбора событий)",
        "Интеграция шлюза для безопасного приема платежей",
        "Разработка защищенной админ-панели и системы сбора клиентской базы"
      ],
      images: ["input_file_2.png", "input_file_3.png"],
      accentColor: "#00FF9C"
    },
    {
      id: "avara-vpn",
      title: "AvaraVpnBot",
      subtitle: "Автоматизированный сервис управления VPN-доступами",
      tags: ["Service", "UI", "Админка"],
      features: [
        "Service: Покупка и продление",
        "UI: Управление ключами",
        "Админка: Мониторинг тарифов"
      ],
      role: [
        "Проектирование логики взаимодействия Mini App с серверной частью",
        "Создание графического интерфейса для личного кабинета пользователя",
        "Автоматизация выдачи, обновления и удаления ключей после оплаты",
        "Реализация админ-панели для мониторинга активных сессий"
      ],
      images: ["input_file_1.png", "input_file_0.png"],
      accentColor: "#00CCFF"
    }
  ]
};
