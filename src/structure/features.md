features/
├── applications/                 # Scholarship application logic
│   ├── applicationApi.ts         # API calls for application CRUD and status updates
│   ├── applicationValidation.ts  # Validation rules for application forms
│   ├── components/               # Reusable application UI components
│   │   ├── ApplicationForm.tsx         # Form for submitting scholarship applications
│   │   ├── ApplicationList.tsx         # List applications (admin view)
│   │   ├── ApplicationReview.tsx       # Component for reviewers/admins to review apps
│   │   └── ApplicationStatusTracker.tsx# Tracks progress/status of application
│   ├── types.ts                 # Types/interfaces related to applications
│   └── useApplication.ts        # Custom hooks for application state and actions
│
├── auth/                         # Authentication related logic and UI
│   ├── authApi.ts                # API calls: login, logout, register, refresh token
│   ├── authSlice.ts              # Redux or Zustand slice for auth state (optional)
│   ├── components/               # Reusable auth UI components
│   │   ├── AuthButton.tsx              # Buttons for login/logout/register
│   │   ├── LoginForm.tsx               # Login form component
│   │   ├── PasswordResetForm.tsx       # Form to reset password
│   │   ├── RegisterForm.tsx           # Registration form component
│   │   └── UserMenu.tsx               # Dropdown or nav menu for logged-in user
│   ├── types.ts                 # Types/interfaces related to auth (User, Credentials)
│   └── useAuth.ts               # Custom hook for auth context/state management
│
└── scholarships/                # Scholarship management domain
    ├── components/              # Reusable scholarship UI parts
    │   ├── ScholarshipCard.tsx        # Displays brief scholarship info
    │   ├── ScholarshipFilter.tsx      # Filtering and search UI
    │   ├── ScholarshipForm.tsx        # Form for create/edit scholarships
    │   ├── ScholarshipStatusBadge.tsx # Status indicator (active, expired)
    │   └── ScholarshipTable.tsx       # Table view of scholarships
    ├── scholarshipApi.ts        # API requests (CRUD for scholarships)
    ├── scholarshipValidation.ts # Validation schemas for scholarship forms
    ├── types.ts                 # Types/interfaces related to scholarships
    └── useScholarship.ts        # Custom hooks for fetching/manipulating scholarships
