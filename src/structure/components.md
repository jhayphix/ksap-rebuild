components/
├── common/ # Generic reusable UI components used app-wide
│ ├── Button.tsx # Standard button with variants (primary, secondary)
│ ├── Modal.tsx # Modal/dialog wrapper component
│ ├── Spinner.tsx # Loading spinner
│ ├── Tooltip.tsx # Tooltip wrapper
│ ├── Dropdown.tsx # Generic dropdown menu
│ ├── Input.tsx # Custom input with label and error handling
│ ├── Checkbox.tsx # Checkbox input component
│ ├── RadioGroup.tsx # Radio button group component
│ └── Avatar.tsx # User avatar component
│
├── layout/ # Layout-specific components (header, footer, nav)
│ ├── Header.tsx # Top navigation bar
│ ├── Footer.tsx # Footer section
│ ├── Sidebar.tsx # Sidebar navigation
│ ├── Breadcrumbs.tsx # Breadcrumb navigation
│ └── Container.tsx # Content wrapper with consistent padding/margin
│
├── forms/ # Form-related components, reusable fields
│ ├── TextField.tsx # Text input with label and validation states
│ ├── Select.tsx # Dropdown select input
│ ├── DatePicker.tsx # Date picker input
│ ├── FileUpload.tsx # File upload field with preview
│ ├── FormError.tsx # Displays validation error messages
│ └── FormSection.tsx # Section wrapper for grouping form fields
│
├── scholarships/ # Scholarship-specific UI components
│ ├── ScholarshipCard.tsx # Card displaying scholarship summary info
│ ├── ScholarshipList.tsx # List or grid of scholarship cards
│ ├── ScholarshipFilter.tsx # Filters for scholarship search
│ ├── ScholarshipStatusBadge.tsx # Status indicator (active, expired)
│ └── ScholarshipForm.tsx # Scholarship create/edit form fields
│
├── applications/ # Application-specific UI components
│ ├── ApplicationForm.tsx # Form for submitting or editing application
│ ├── ApplicationStatusTracker.tsx # Visual tracker for application progress
│ ├── ApplicationList.tsx # List of submitted applications
│ └── ApplicationReviewCard.tsx # Card for admin/reviewer to review applications
│
├── auth/ # Auth-related UI components
│ ├── LoginForm.tsx # Login form
│ ├── RegisterForm.tsx # Registration form
│ ├── PasswordResetForm.tsx # Password reset form
│ └── UserMenu.tsx # User dropdown menu when logged in
│
├── notifications/ # Toasts, alerts, and notifications
│ ├── Toast.tsx # Toast notification component
│ ├── Alert.tsx # Inline alert component
│ └── NotificationCenter.tsx # Container for multiple notifications
│
├── tables/ # Table components and helpers
│ ├── DataTable.tsx # Generic table component
│ ├── TableHeader.tsx # Table header row
│ ├── TableRow.tsx # Table row component
│ └── Pagination.tsx # Pagination controls
