# 🎓 Scholarships Data Layer Guide

This guide explains how **Services**, **Hooks**, and **Context** work together when fetching and using scholarship data in a React app.

---

## 💡 How They Relate

| Layer   | Purpose                              | Used By                       |
| ------- | ------------------------------------ | ----------------------------- |
| Service | Talks to backend (API only)          | Used by hooks                 |
| Hook    | Manages data lifecycle (loading etc) | Used in components/contexts   |
| Context | Shares hook data globally            | Used by many components/pages |

---

## 🔁 When to Use (or Skip) Context

- ✅ **Use only the hook** if scholarships are needed in one place (e.g., `/scholarships` page).
- ✅ **Wrap in context** if the data is used in multiple parts of the app (e.g., filters, sidebar stats, dashboard widgets).

---

## 1. Service Layer

**Responsibility:** Handles the raw API request logic.

📄 File: `services/scholarshipService.ts`

```ts
// services/scholarshipService.ts
import axios from "axios";

export async function fetchScholarships() {
  return await axios.get("/api/scholarships");
}
```

---

## 2. Hook Layer

**Responsibility:** Manages loading, error handling, and state. Ideal for reuse in components or context.

📄 File: `hooks/useScholarships.ts`

```ts
// hooks/useScholarships.ts
import { useEffect, useState } from "react";
import { fetchScholarships } from "@/services/scholarshipService";

export function useScholarships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchScholarships()
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
```

---

## 3. Context Layer (Optional)

**Responsibility:** Shares the scholarship data globally if it's needed in many places.

### 🧩 Context Provider

📄 File: `contexts/ScholarshipContext.tsx`

```tsx
// contexts/ScholarshipContext.tsx
import { createContext, useContext } from "react";
import { useScholarships } from "@/hooks/useScholarships";

const ScholarshipContext = createContext(null);

export function ScholarshipProvider({ children }) {
  const scholarships = useScholarships(); // uses the hook

  return (
    <ScholarshipContext.Provider value={scholarships}>
      {children}
    </ScholarshipContext.Provider>
  );
}
```

### 🔌 Context Hook

📄 File: `hooks/useScholarshipContext.ts`

```ts
// hooks/useScholarshipContext.ts
import { useContext } from "react";
import { ScholarshipContext } from "@/contexts/ScholarshipContext";

export function useScholarshipContext() {
  return useContext(ScholarshipContext);
}
```

---

## ✅ Summary

- Use **service** to talk to the backend.
- Use **hook** to manage API data with state and side effects.
- Use **context** only if the same data is needed across many components.
