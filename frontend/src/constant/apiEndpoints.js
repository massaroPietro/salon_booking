const apiEndpoints = {
    user: () => `/auth/user/`,
    login: () => `/auth/login/`,
    logout: () => `/auth/logout/`,
    userSettings: (userId) => `/user/${userId}/settings/`,
    authGoogle: () => `/auth/google/`,
};

export default apiEndpoints;
