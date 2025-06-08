src/
│
├── assets/ # Static assets (images, logos, etc.)
├── components/ # Reusable UI components (Button, Card, Modal)
├── features/ # Feature-specific logic, layouts and components
├── styles/ # Base global styles, Tailwind component/util overrides and Custom keyframes/transitions
├── hooks/ # Custom React hooks
├── pages/ # Route-based components (Home, Login, Dashboard)
├── routes/ # App routes with auth guards
├── services/ # API calls (axios instances, authService, scholarshipService)
├── contexts/ # React Context providers (auth, theme)
├── utils/ # Helper functions (formatDate, validateEmail)
├── types/ # TypeScript type definitions
├── constants/ # Static values (roles, statuses)
├── store/ (optional) # State management (Zustand, Redux)
├── App.tsx # Root app component
├── main.tsx # Entry point
├── index.css # Tailwind base styles
├── vite.config.ts # Vite configuration
└── env.d.ts # Type definitions for env vars
