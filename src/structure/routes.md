routes/
├── AppRouter.tsx           # Main <Router> component setup (BrowserRouter, Route layout)
├── index.tsx               # Main route entry file (exports all route configs)
├── routePaths.ts           # Centralized route path constants (e.g., `/login`, `/dashboard`)

├── publicRoutes.tsx        # Routes accessible without authentication
                            # e.g., Home, About, Contact, Login, Register

├── protectedRoutes.tsx     # Routes requiring authentication
                            # e.g., Profile, Submit Application, Dashboard

├── adminRoutes.tsx         # Admin-only routes
                            # e.g., Manage Scholarships, User Management

├── routeGuards/
│   ├── RequireAdmin.tsx    # Wrapper for admin-only access
│   └── RequireAuth.tsx     # Higher-order component or wrapper for auth-guarded routes
