contexts/
├── AdminContext.tsx # Admin-only state and actions (dashboard, permissions)
├── ApplicationContext.tsx # (Optional) Manages form data or draft application state
├── AuthContext.tsx # Provides auth state and actions (user, login, logout)
├── LanguageContext.tsx # i18n: current language, switchLanguage()
├── NotificationContext.tsx # Manages global toasts/notifications
├── ScholarshipContext.tsx # (Optional) Provides scholarship data globally
├── ThemeContext.tsx # Provides light/dark theme toggle and current theme
├── UserContext.tsx # Provides user profile info, preferences
│
└── index.ts # Re-export all contexts from one place
