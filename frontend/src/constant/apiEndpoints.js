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
    salon: (slug) => `/salons/${slug}/`,
    checkSalonExists: () => `/salons/check-existence/`,
    salonEmployees: (slug) => `/salons/${slug}/employees/`,
    registerEmployee: (slug) => `/salons/${slug}/employees/register/`,
    employee: (id) => `/employees/${id}/`,
    workDay: (id) => `/employee/work-days/${id}/`,
    services: (slug) => `/salons/${slug}/services/`,
    service: (id) => `/services/${id}/`,
    employeeInvitations: (slug) => `/salons/${slug}/invitations/`,
    acceptInvitation: (id) => `/invitations/${id}/accept_invitation/`,
    rejectInvitation: (id) => `/invitations/${id}/reject_invitation/`,
    appointments: (slug) => `/salons/${slug}/appointments/`,
};

export default apiEndpoints;
