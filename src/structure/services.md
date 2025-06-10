services/
├── api/
│ ├── httpClient.ts # Axios (or fetch) base config (baseURL, interceptors)
│ └── request.ts # Wrapper utilities for GET, POST, etc. with error handling
│
├── auth/
│ ├── authService.ts # login, logout, register, refreshToken, getCurrentUser
│ └── tokenService.ts # LocalStorage/SessionStorage token management
│
├── user/
│ └── userService.ts # getUserProfile, updateUserProfile, deleteUser, etc.
│
├── scholarship/
│ └── scholarshipService.ts # CRUD operations for scholarships
│
├── application/
│ └── applicationService.ts # submitApplication, getApplication, updateStatus, etc.
│
├── file/
│ ├── fileUploadService.ts # Upload, delete, or retrieve files (e.g., for documents, avatars)
│ └── fileValidation.ts # Validate type, size, and format
│
├── email/
│ └── emailService.ts # triggerPasswordReset, sendNotification, etc.
│
├── notification/
│ └── notificationService.ts # In-app notification logic (create, fetch, markAsRead)
│
├── payment/
│ └── paymentService.ts # Integrate with Stripe, Paystack, etc. if needed
│
└── utils/
└── serviceUtils.ts # Shared helpers (e.g., buildQueryString, handleError)
