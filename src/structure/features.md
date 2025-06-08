features/
├── auth/ # Authentication related logic and UI
│ ├── components/ # Reusable auth UI components
│ │ ├── LoginForm.tsx # Login form component
│ │ ├── RegisterForm.tsx # Registration form component
│ │ ├── UserMenu.tsx # Dropdown or nav menu for logged-in user
│ │ ├── PasswordResetForm.tsx # Form to reset password
│ │ └── AuthButton.tsx # Buttons for login/logout/register
│ │
│ ├── authSlice.ts # Redux or Zustand slice for auth state (optional)
│ ├── authApi.ts # API calls: login, logout, register, refresh token
│ ├── useAuth.ts # Custom hook for auth context/state management
│ └── types.ts # Types/interfaces related to auth (User, Credentials)
│
├── scholarships/ # Scholarship management domain
│ ├── components/ # Reusable scholarship UI parts
│ │ ├── ScholarshipCard.tsx # Displays brief scholarship info
│ │ ├── ScholarshipForm.tsx # Form for create/edit scholarships
│ │ ├── ScholarshipTable.tsx # Table view of scholarships
│ │ ├── ScholarshipFilter.tsx# Filtering and search UI
│ │ └── ScholarshipStatusBadge.tsx # Status indicator (active, expired)
│ │
│ ├── scholarshipApi.ts # API requests (CRUD for scholarships)
│ ├── useScholarship.ts # Custom hooks for fetching/manipulating scholarships
│ ├── scholarshipValidation.ts # Validation schemas for scholarship forms
│ └── types.ts # Types/interfaces related to scholarships
│
├── applications/ # Scholarship application logic
│ ├── components/ # Reusable application UI components
│ │ ├── ApplicationForm.tsx # Form for submitting scholarship applications
│ │ ├── ApplicationStatusTracker.tsx # Tracks progress/status of application
│ │ ├── ApplicationList.tsx # List applications (admin view)
│ │ └── ApplicationReview.tsx # Component for reviewers/admins to review apps
│ │
│ ├── applicationApi.ts # API calls for application CRUD and status updates
│ ├── useApplication.ts # Custom hooks for application state and actions
│ ├── applicationValidation.ts # Validation rules for application forms
│ └── types.ts # Types/interfaces related to applications
