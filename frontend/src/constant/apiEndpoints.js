const apiEndpoints = {
    user: () => `/auth/user/`,
    login: () => `/auth/login/`,
    register: () => `/auth/register/`,
    logout: () => `/auth/logout/`,
    resendEmail: () => `/auth/register/resend-email/`,
    userSettings: (userId) => `/user/${userId}/settings/`,
    authGoogle: () => `/auth/google/`,
};

export default apiEndpoints;
