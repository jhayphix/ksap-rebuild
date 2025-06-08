routes/
├── index.tsx # Main route entry file (exports all route configs)
│
├── publicRoutes.tsx # Routes accessible without authentication
│ # e.g., Home, About, Contact, Login, Register
│
├── protectedRoutes.tsx # Routes requiring authentication
│ # e.g., Profile, Submit Application, Dashboard
│
├── adminRoutes.tsx # Admin-only routes
│ # e.g., Manage Scholarships, User Management
│
├── AppRouter.tsx # Main <Router> component setup (BrowserRouter, Route layout)
│
├── routeGuards/
│ ├── RequireAuth.tsx # Higher-order component or wrapper for auth-guarded routes
│ └── RequireAdmin.tsx # Wrapper for admin-only access
│
└── routePaths.ts # Centralized route path constants (e.g., `/login`, `/dashboard`)
