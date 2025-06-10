components/
├── applications/                         # Application-specific UI components
│   ├── ApplicationForm.tsx              # Form for submitting or editing application
│   ├── ApplicationList.tsx              # List of submitted applications
│   ├── ApplicationReviewCard.tsx        # Card for admin/reviewer to review applications
│   └── ApplicationStatusTracker.tsx     # Visual tracker for application progress
│
├── auth/                                # Auth-related UI components
│   ├── LoginForm.tsx                    # Login form
│   ├── PasswordResetForm.tsx            # Password reset form
│   ├── RegisterForm.tsx                 # Registration form
│   └── UserMenu.tsx                     # User dropdown menu when logged in
│
├── common/                              # Generic reusable UI components used app-wide
│   ├── Avatar.tsx                       # User avatar component
│   ├── Button.tsx                       # Standard button with variants (primary, secondary)
│   ├── Checkbox.tsx                     # Checkbox input component
│   ├── Dropdown.tsx                     # Generic dropdown menu
│   ├── Input.tsx                        # Custom input with label and error handling
│   ├── Modal.tsx                        # Modal/dialog wrapper component
│   ├── RadioGroup.tsx                   # Radio button group component
│   ├── Spinner.tsx                      # Loading spinner
│   └── Tooltip.tsx                      # Tooltip wrapper
│
├── forms/                               # Form-related components, reusable fields
│   ├── DatePicker.tsx                   # Date picker input
│   ├── FileUpload.tsx                   # File upload field with preview
│   ├── FormError.tsx                    # Displays validation error messages
│   ├── FormSection.tsx                  # Section wrapper for grouping form fields
│   ├── Select.tsx                       # Dropdown select input
│   └── TextField.tsx                    # Text input with label and validation states
│
├── layout/                              # Layout-specific components (header, footer, nav)
│   ├── Breadcrumbs.tsx                  # Breadcrumb navigation
│   ├── Container.tsx                    # Content wrapper with consistent padding/margin
│   ├── Footer.tsx                       # Footer section
│   ├── Header.tsx                       # Top navigation bar
│   └── Sidebar.tsx                      # Sidebar navigation
│
├── notifications/                       # Toasts, alerts, and notifications
│   ├── Alert.tsx                        # Inline alert component
│   ├── NotificationCenter.tsx           # Container for multiple notifications
│   └── Toast.tsx                        # Toast notification component
│
├── scholarships/                        # Scholarship-specific UI components
│   ├── ScholarshipCard.tsx              # Card displaying scholarship summary info
│   ├── ScholarshipFilter.tsx            # Filters for scholarship search
│   ├── ScholarshipForm.tsx              # Scholarship create/edit form fields
│   ├── ScholarshipList.tsx              # List or grid of scholarship cards
│   └── ScholarshipStatusBadge.tsx       # Status indicator (active, expired)
│
├── tables/                              # Table components and helpers
│   ├── DataTable.tsx                    # Generic table component
│   ├── Pagination.tsx                   # Pagination controls
│   ├── TableHeader.tsx                  # Table header row
│   └── TableRow.tsx                     # Table row component
