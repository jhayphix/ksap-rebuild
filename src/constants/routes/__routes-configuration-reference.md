# Route Configuration Reference

This file explains the structure and purpose of each property used in the route configuration objects across the project.

## Overview

All routes are defined as named objects grouped by feature (e.g., `authRoutes`, `applicationRoutes`). Each route object contains metadata used for routing, navigation UI, and permission control.

---

## Route Properties

| Property     | Type                        | Required | Description |
|--------------|-----------------------------|----------|-------------|
| `title`      | `string`                    | ✅       | Human-readable name shown in navigation elements like sidebars or breadcrumbs. |
| `path`       | `string`                    | ✅       | Static or dynamic URL path used by the router. Dynamic segments are prefixed with `:` (e.g., `/applications/:id`). |
| `getPath`    | `(id: string) => string`    | ❌       | A helper function to generate the full path by replacing dynamic segments (e.g., `:id`) with actual values. |
| `icon`       | `JSX.Element`               | ✅       | Icon component rendered alongside the title in UI menus (typically from `react-icons`). |
| `end`        | `boolean`                   | ✅       | Indicates whether the route should match exactly (`true`) or allow sub-routes (`false`). Mirrors the `end` prop of `react-router`. |
| `roles`      | `string[]`                  | ❌       | (Optional) Array of user roles permitted to access the route (e.g., `["ADMIN", "APPLICANT"]`). Useful for role-based access control. |
| `permissions`| `string[]`                  | ❌       | (Optional) Fine-grained permissions required to access the route (e.g., `["MANAGE_USERS", "VIEW_APPLICATIONS"]`). |
| `layout`     | `string`                    | ❌       | (Optional) Layout identifier (e.g., `"admin"`, `"applicant"`, `"public"`) to control how the route is displayed in the app shell. |

---

## Example

```ts
export const applicationRoutes = {
  createApplication: {
    title: "Create Application",
    path: "/applications/:id/create",
    getPath: (id: string) => `/applications/${id}/create`,
    icon: <FaPlusCircle size={20} />,
    end: false,
    roles: ["APPLICANT"],
    layout: "applicant",
  },
};
