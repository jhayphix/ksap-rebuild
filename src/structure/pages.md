pages/
├── general/
│   ├── DashboardPage.tsx              # /dashboard
│   └── AdminPanelPage.tsx             # /admin-panel

├── auth/
│   ├── AuthSelectionPage.tsx          # /auth/choose
│
│   ├── applicant/
│   │   ├── RegisterApplicantPage.tsx      # /auth/applicant/register
│   │   ├── UpdateApplicantPage.tsx        # /auth/applicant/update
│   │   └── ViewApplicantProfilePage.tsx   # /auth/applicant/profile
│
│   ├── admin/
│   │   ├── RegisterAdminPage.tsx         # /auth/admin/register
│   │   ├── UpdateAdminPage.tsx           # /auth/admin/update
│   │   └── ViewAdminProfilePage.tsx      # /auth/admin/profile
│
│   └── ManageUsersPage.tsx               # /admin/users

├── applications/
│   ├── MyApplicationsPage.tsx           # /applications/my
│   ├── ViewApplicationPage.tsx          # /applications/:id
│   ├── CreateApplicationPage.tsx        # /applications/create
│   ├── UpdateApplicationPage.tsx        # /applications/:id/update
│   ├── EvaluateApplicationPage.tsx      # /applications/:id/evaluate
│   └── SearchApplicationPage.tsx        # /applications/search

├── scholarships/
│   ├── ViewScholarshipPage.tsx              # /scholarships/:id
│   ├── ScholarshipApplicationsPage.tsx      # /scholarships/:id/applicants
│   ├── CreateScholarshipPage.tsx            # /scholarships/create
│   ├── UpdateScholarshipPage.tsx            # /scholarships/:id/update

├── externalScholarships/
│   ├── ExternalScholarshipsPage.tsx         # /external-scholarships
│   ├── ViewExternalScholarshipPage.tsx      # /external-scholarships/:id
│   ├── CreateExternalScholarshipPage.tsx    # /external-scholarships/create
│   ├── UpdateExternalScholarshipPage.tsx    # /external-scholarships/:id/update

├── error/
│   └── NotFoundPage.tsx                     # 404 fallback