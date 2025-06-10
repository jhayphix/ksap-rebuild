utils/
├── api/
│ ├── handleApiError.ts # Parses and formats API error responses
│ └── fetchWithToken.ts # Wrapper around fetch/axios with auth token

├── auth/
│ ├── getToken.ts # Get token from storage or cookie
│ ├── decodeToken.ts # Decode JWT token
│ └── isAuthorized.ts # Check if user has required role/permission

├── date/
│ ├── formatDate.ts # Format dates (e.g., to `DD/MM/YYYY`)
│ └── timeAgo.ts # Convert timestamp to “x minutes ago”

├── form/
│ ├── validateField.ts # Custom field validation logic
│ └── getInitialFormValues.ts # Extracts default values from form schema

├── file/
│ ├── formatFileSize.ts # Format bytes to readable size (e.g., KB, MB)
│ ├── getFileExtension.ts # Extract file extension
│ └── isValidFileType.ts # Check file type against allowed MIME types

├── string/
│ ├── capitalize.ts # Capitalize first letter
│ ├── truncate.ts # Truncate string with ellipsis
│ └── slugify.ts # Turn string into URL slug

├── math/
│ ├── roundTo.ts # Round number to fixed decimals
│ └── percentage.ts # Calculate percentage (e.g., for progress)

├── array/
│ ├── unique.ts # Remove duplicates from array
│ └── groupBy.ts # Group array of objects by a key

├── browser/
│ ├── scrollToTop.ts # Scroll window to top
│ └── copyToClipboard.ts # Copy text to clipboard

├── helpers/
│ ├── sleep.ts # Delay execution for x ms (e.g., `await sleep(500)`)
│ └── generateId.ts # Random string/ID generator
