routes/
├── AppRouter.tsx              # Your main router setup (where <BrowserRouter> is used)
├── index.tsx                  # Entry file exporting all route configs (aggregates all routes)
├── routePaths.ts              # Centralized route constants (path strings, labels, icons)

├── publicRoutes.tsx           # Routes accessible to all (unauthenticated or not)
│                              # e.g., home, dashboard, external scholarships, test
├── guestRoutes.tsx            # Routes for guests only (not logged in)
│                              # e.g., auth selection
├── protectedRoutes.tsx        # Routes for all authenticated users
│                              # e.g., view scholarship
│
├── applicantRoutes.tsx        # Routes exclusive to authenticated applicants
│   ├── registered.tsx         # For registered applicants
│   └── notRegistered.tsx      # For unregistered applicants
│
├── adminRoutes.tsx            # Routes for authenticated admins
│   └── superAdminRoutes.tsx   # Routes for super admins only

├── routeGuards/
│   ├── RequireAuth.tsx        # AuthMiddleware wrapper
│   ├── RequireGuest.tsx       # GuestMiddleware wrapper
│   ├── RequireAdmin.tsx       # AdminMiddleware wrapper
│   ├── RequireSuperAdmin.tsx  # SuperAdminMiddleware wrapper
│   ├── RequireApplicant.tsx   # ApplicantMiddleware wrapper
│   ├── RequireRegistered.tsx  # RegisteredMiddleware wrapper
│   └── RequireNotRegistered.tsx # ApplicantNotRegisteredMiddleware wrapper
