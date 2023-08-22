const apiEndpoints = {
    user: () => `/auth/user/`,
    dashboardUser: () => `/auth/dashboard-user/`,
    login: () => `/auth/login/`,
    register: () => `/auth/register/`,
    logout: () => `/auth/logout/`,
    resendEmail: () => `/auth/register/resend-email/`,
    resetPassword: () => `/auth/password/reset/`,
    userSettings: () => `auth/dashboard-user/settings/`,
    authGoogle: () => `/auth/google/`,
    verifyEmail: () => `/auth/register/verify-email/`,

    // Salons
    salons: () => `/salons/`,
    checkSalonExists: () => `/salons/check-existence/`,
    salonEmployees: (slug) => `/salons/${slug}/employees/`,
    registerEmployee: (slug) => `/salons/${slug}/employees/register/`,
    employee: (id) => `/employees/${id}/`,
    workDay: (id) => `/work-days/${id}/`,
};

export default apiEndpoints;
