src/
│
├── assets/                          # Static assets (images, logos, etc.)
├── components/                      # Reusable UI components (Button, Card, Modal)
├── constants/                       # Static values (roles, statuses)
├── contexts/                        # React Context providers (auth, theme)
├── features/                        # Feature-specific logic, layouts and components
├── hooks/                           # Custom React hooks
├── pages/                           # Route-based components (Home, Login, Dashboard)
├── routes/                          # App routes with auth guards
├── services/                        # API calls (axios instances, authService, scholarshipService)
                                     # The service layer is your direct interface with the backend. It contains logic to make network requests.
├── store/ (optional)                # State management (Zustand, Redux)
├── styles/                          # Base global styles, Tailwind component/util overrides and Custom 
├── types/                           # TypeScript type definitions
├── utils/                           # Helper functions (formatDate, validateEmail)
│
├── App.tsx                          # Root app component
├── env.d.ts                         # Type definitions for env vars
├── index.css                        # Tailwind base styles
├── main.tsx                         # Entry point
└── vite.config.ts                   # Vite configuration

