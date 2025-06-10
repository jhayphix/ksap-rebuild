types/
├── api/
│ ├── ApiResponse.ts # Generic API response types
│ └── Pagination.ts # Pagination-related interfaces (page, limit, total, etc.)

├── auth/
│ ├── Auth.ts # Login payload, Register payload, JWT user, etc.
│ └── Role.ts # Role enums/types like "admin", "applicant"

├── user/
│ └── User.ts # Base user object (id, name, email, role, etc.)

├── scholarships/
│ └── Scholarship.ts # Scholarship entity type, form payload, filters

├── applications/
│ └── Application.ts # Application form values, statuses, reviewer comments, etc.

├── forms/
│ ├── FormField.ts # Type definitions for dynamic form fields
│ └── Validation.ts # Field rules (for building Zod/Yup schema with types)

├── common/
│ ├── Option.ts # Generic dropdown/select option
│ ├── Status.ts # Reusable status enums (pending, success, failed)
│ └── ID.ts # Generic ID type (string | number)

---

This structure keeps each feature's types localized, but still shareable when necessary. Let me know if you want to auto-generate types from a schema or define them via Zod or Yup.
