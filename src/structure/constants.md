constants/
├── app/
│ └── app.ts # General app-level constants (title, limits, version)
│
├── auth/
│ ├── roles.ts # User roles (e.g., ADMIN, APPLICANT)
│ └── statusCodes.ts # HTTP or app-specific status codes related to auth
│
├── forms/
│ ├── form.ts # Reusable form config (field limits, default values)
│ ├── regex.ts # Commonly used regex patterns (email, phone, etc.)
│ └── validation.ts # Shared validation rule fragments
│
├── messages/
│ └── messages.ts # Static message strings (errors, success, tooltips)
│
├── routes/
│ └── routes.ts # Central list of app routes (paths and names)
│
├── theme/
│ └── colors.ts # Centralized color values (charts, badges, etc.)

What should go into constants/:
The constants/ directory is meant to store static values that are reused throughout your app. These values should not change at runtime and help avoid duplication, magic strings, or hardcoded values.

Use constants/ for:

Static configuration (app title, version, default settings)

Route paths

User roles

Regex patterns

Form limits and defaults

Common strings (error/success messages)

Status codes

Shared validation rule pieces

Colors used in UI (for charts, badges, etc.)
