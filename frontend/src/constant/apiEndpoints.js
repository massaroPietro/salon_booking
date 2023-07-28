const apiEndpoints = {
    user: () => `/auth/user/`,
    login: () => `/auth/login/`,
    register: () => `/auth/register/`,
    logout: () => `/auth/logout/`,
    userSettings: (userId) => `/user/${userId}/settings/`,
    authGoogle: () => `/auth/google/`,
};

export default apiEndpoints;
