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
};

export default apiEndpoints;
