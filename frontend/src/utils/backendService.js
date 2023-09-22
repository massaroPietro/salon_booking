import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import i18n from "@/plugins/i18n";
import router from "@/router";
import toast from "@/plugins/toasts";
import {useAuthStore} from "@/store/auth";
import {useCoreStore} from "@/store/core";
import {setBackendResponseErrors} from "@/utils/utils";
import emitter from "@/plugins/mitt";

const {t} = i18n.global

function setUserInfoOnLogin(response, rememberUser) {
    const token = response.data.key;
    const authStore = useAuthStore();

    authStore.setToken(token, rememberUser);
    authStore.user = response.data.user;

    if (response.data.user.settings) {
        i18n.locale = response.data.user.settings.lang;
    }

    toast.success(t("toasts.successLogin"), {
        timeout: 2000
    });
    const toPath = router.currentRoute.value.query.to || '/'

    router.push(toPath);
    if (response.data.user.employee_invitations?.length > 0) {
        emitter.emit("openInvitationsModal")
    }
}

function apiCaller(method, endpoint, requestData, config, headers = {}) {
    if (config?.loader) {
        config.loader()
    }

    axios({
        method: method,
        url: endpoint,
        data: requestData,
        headers: headers,
        params: config?.params,
        signal: config?.signal
    })
        .then((response) => {
            if (config?.dataTarget) {
                Object.assign(config.dataTarget, response.data);
            }

            if (config?.success_callback) {
                config.success_callback(response);
            }
        })
        .catch((err) => {
            if (config?.formErrors) {
                setBackendResponseErrors(err, config?.formErrors)
            }

            if (config?.error_callback) {
                config.error_callback(err);
            }
        })
        .finally(() => {
            if (config?.finally_callback) {
                config.finally_callback();
            }

            if (config?.loader) {
                config.loader()
            }
        });
}

const createSpecificCallbacks = (config, success_callback = null, error_callback = null, finally_callback = null) => {
    return {
        ...config,
        success_callback: (response) => {
            if (success_callback) {
                success_callback(response);
            }
            if (config?.success_callback) {
                config.success_callback(response);
            }
        },
        error_callback: (err) => {
            if (!config?.formErrors) {
                if (Array.isArray(err?.response?.data) && err?.response?.status === 400) {
                    toast.error(err.response.data[0], {
                        timeout: err.response.data[0].length > 70 ? 6000 : 5000,
                    })
                } else if (err?.response?.status === 500) {
                    toast.error(t('errors.serverError'))
                }
            }
            if (error_callback) {
                error_callback(err);
            }
            if (config?.error_callback) {
                config.error_callback(err);
            }
        },
        finally_callback: (response) => {
            if (finally_callback) {
                finally_callback(response);
            }
            if (config?.finally_callback) {
                config.finally_callback(response);
            }
        },
    };
};

const backendService = {
    logout(config = null) {
        let endpoint = apiEndpoints.logout();

        config = createSpecificCallbacks(config, () => {
            router.push({name: "Login"})
            const store = useAuthStore();
            store.removeToken();
            const lang = navigator.language.substring(0, 2);
            axios.defaults.headers['Accept-Language'] = lang
            i18n.locale = lang;
        })

        apiCaller("post", endpoint, null, config);
    },
    getDashboardUser: (config = null, getDashboardUser = true, storeUser = true) => {
        let endpoint = apiEndpoints.user();
        if (getDashboardUser) {
            endpoint = apiEndpoints.dashboardUser();
        }

        if (storeUser) {
            const authStore = useAuthStore();
            config = createSpecificCallbacks(config, (response) => {
                const currentSalonId = response.data.settings.current_salon;
                const salons = response.data.salons;

                if (!salons.some(salon => salon.id === currentSalonId)) {
                    if (salons.length > 0) {
                        response.data.settings.current_salon = salons[0].id;
                    }
                }

                authStore.user = response.data;

                if (response.data.employee_invitations?.length > 0) {
                    emitter.emit("openInvitationsModal")
                }
            })
        }

        apiCaller("get", endpoint, null, config)
    },
    getEmployees: (config) => {
        const authStore = useAuthStore();
        const current_salon = authStore.getCurrentSalon;
        let endpoint = apiEndpoints.salonEmployees(current_salon.slug);

        config = createSpecificCallbacks(config, (response) => {
            const currentSalon = authStore.getCurrentSalon;
            if (currentSalon && currentSalon.employees) {
                currentSalon.employees = response.data.map(newEmployee => {
                    const existingEmployee = currentSalon?.employees.find(e => e.id === newEmployee.id);
                    return {...existingEmployee, ...newEmployee};
                });
            }
        });


        apiCaller("get", endpoint, null, config)
    },
    getSalons: (config) => {
        const endpoint = apiEndpoints.salons();

        apiCaller("get", endpoint, null, config);
    },
    getSalon: (slug, config = null) => {
        let endpoint = apiEndpoints.salon(slug);
        config = createSpecificCallbacks(config, (response) => {
            const authStore = useAuthStore();
            authStore.setSalon(response.data.id, response.data)
        })
        apiCaller("get", endpoint, null, config);
    },
    getEmployee: (id, config) => {
        let endpoint = apiEndpoints.employee(id);

        config = createSpecificCallbacks(config, (response) => {
            const authStore = useAuthStore();
            if (authStore.getCurrentSalon && authStore.getCurrentSalon.employees) {
                authStore.setEmployee(id, response.data)
            }
        })

        apiCaller("get", endpoint, null, config);
    },
    getServices: (config) => {
        const authStore = useAuthStore();
        const currentSalon = authStore.getCurrentSalon;
        const endpoint = apiEndpoints.services(currentSalon?.slug);

        config = createSpecificCallbacks(config, (response) => {
            const currentSalon = authStore.getCurrentSalon;
            if (currentSalon && currentSalon?.services) {
                currentSalon.services = response.data.map(newService => {
                    const existingService = currentSalon?.services.find(e => e.id === newService.id);
                    return {...existingService, ...newService};
                });
            }
        });

        apiCaller("get", endpoint, null, config);
    },
    addService: (data, config) => {
        const authStore = useAuthStore();
        const currentSalon = authStore.getCurrentSalon;
        const endpoint = apiEndpoints.services(currentSalon?.slug);

        config = createSpecificCallbacks(config, () => {
            const coreStore = useCoreStore();
            coreStore.reloadPage();
            toast.success(t("toasts.serviceAdded"))
        })
        apiCaller("post", endpoint, data, config);
    },
    updateService: (id, data, config) => {
        const endpoint = apiEndpoints.service(id);
        const authStore = useAuthStore();
        config = createSpecificCallbacks(config, (response) => {
            authStore.setService(id, response.data);
            toast.success(t('toasts.serviceUpdated'))
        })

        apiCaller("patch", endpoint, data, config);
    },
    getService: (id, config) => {
        let endpoint = apiEndpoints.service(id);

        config = createSpecificCallbacks(config, (response) => {
            const authStore = useAuthStore();
            authStore.setService(id, response.data)
        })

        apiCaller("get", endpoint, null, config);
    },
    googleLoginUser: (data, config, rememberUser = true) => {
        const endpoint = apiEndpoints.authGoogle();

        config = createSpecificCallbacks(config, (response) => {
            setUserInfoOnLogin(response, rememberUser);
        })

        apiCaller("post", endpoint, data, config);
    },
    loginUser: (data, config, rememberUser = true) => {
        const endpoint = apiEndpoints.login();

        config = createSpecificCallbacks(config, (response) => {
            setUserInfoOnLogin(response, rememberUser);
        })

        apiCaller("post", endpoint, data, config);
    },
    registerUser: (data, config) => {
        const endpoint = apiEndpoints.register();

        apiCaller("post", endpoint, data, config);
    },
    resendVerificationEmail: (email, config) => {
        const endpoint = apiEndpoints.resendEmail();
        const data = {
            email: email
        };

        config = createSpecificCallbacks(config, () => {
            toast.success(t("generic.verificationEmailSent"));
        })

        apiCaller("post", endpoint, data, config);
    },
    changeLanguage(lang, config = null) {
        const endpoint = apiEndpoints.userSettings();
        const data = {
            lang: lang
        };

        apiCaller("patch", endpoint, data, config);
    },
    changeSalon(salon, config = null) {
        const endpoint = apiEndpoints.userSettings();
        const data = {
            current_salon: salon
        };

        apiCaller("patch", endpoint, data, config);
    },
    updateWorkDay(workDayID, data, config) {
        const endpoint = apiEndpoints.workDay(workDayID);
        apiCaller("patch", endpoint, data, config);
    },
    verifyEmail(key, config) {
        let endpoint = apiEndpoints.verifyEmail();
        const data = {
            key: key,
        }

        config = createSpecificCallbacks(config, () => {
            toast.success(t('auth.verifyEmailSuccess'));
            router.push({name: 'Login'})
        }, () => {
            toast.error(t('auth.verifyEmailError'));
            router.push("/")
        })

        apiCaller("post", endpoint, data, config);
    },
    checkSalonExists(name, config) {
        const endpoint = apiEndpoints.checkSalonExists()
        const data = {
            name: name
        }
        apiCaller("post", endpoint, data, config)
    },
    addNewSalon(data, config) {
        const endpoint = apiEndpoints.salons();

        config = createSpecificCallbacks(config, () => {
            toast.success(t("app.salons.salonAddedSuccessfully"), {
                timeout: 2000
            });
        })

        apiCaller("post", endpoint, data, config);
    },
    resetPassword(data, config) {
        const endpoint = apiEndpoints.resetPassword();
        apiCaller("post", endpoint, data, config);
    },
    registerEmployee(salonSlug, data, config) {
        const endpoint = apiEndpoints.registerEmployee(salonSlug)
        config = createSpecificCallbacks(config, () => {
            const coreStore = useCoreStore();
            coreStore.reloadPage()
            toast.success(t("toasts.employeeRegistered"), {
                timeout: 5000
            })
        })
        apiCaller("post", endpoint, data, config);
    },
    updateEmployeePic(employeeID, file, config) {
        const formData = new FormData();
        formData.append("pic", file);
        let endpoint = apiEndpoints.employee(employeeID);

        const headers = {
            "Content-Type": "multipart/form-data",
        };

        config = createSpecificCallbacks(config, (response) => {
            const authStore = useAuthStore();
            authStore.setEmployee(employeeID, response.data)
            toast.success(t('app.employees.updatedPic'));
        })
        apiCaller("patch", endpoint, formData, config, headers);
    },
    updateServiceImage(serviceID, file, config) {
        const formData = new FormData();
        formData.append("image", file);
        let endpoint = apiEndpoints.service(serviceID);

        const headers = {
            "Content-Type": "multipart/form-data",
        };

        config = createSpecificCallbacks(config, (response) => {
            toast.success(t('app.employees.updatedPic'));
        })


        apiCaller("patch", endpoint, formData, config, headers);
    },
    deleteService(serviceID, config = null) {
        const endpoint = apiEndpoints.service(serviceID);


        config = createSpecificCallbacks(config, () => {
            const authStore = useAuthStore();
            authStore.deleteService(serviceID);
        });


        apiCaller('delete', endpoint, null, config);
    },
    sendEmployeeInvitation(email, config) {
        const authStore = useAuthStore();
        const current_salon = authStore.getCurrentSalon;
        const endpoint = apiEndpoints.employeeInvitations(current_salon.slug)
        const data = {
            email: email
        }
        config = createSpecificCallbacks(config, () => {
            toast.success(t("toasts.invitationSent"))
        })
        apiCaller("post", endpoint, data, config)
    },
    acceptEmployeeInvitation(id, config) {
        const endpoint = apiEndpoints.acceptInvitation(id);

        apiCaller("post", endpoint, null, config);
    },
    rejectEmployeeInvitation(id, config) {
        const endpoint = apiEndpoints.rejectInvitation(id);

        apiCaller("post", endpoint, null, config);
    },
    getAppointments(config) {
        const authStore = useAuthStore();
        const salonSlug = authStore.getCurrentSalon?.slug;
        const endpoint = apiEndpoints.appointments(salonSlug);

        config = createSpecificCallbacks(config, (response) => {
            authStore.addAppointments(response.data);
        })

        apiCaller("get", endpoint, null, config);
    },
    addAppointment(data, config) {
        const authStore = useAuthStore();
        const salonSlug = authStore.getCurrentSalon.slug;
        const endpoint = apiEndpoints.appointments(salonSlug);

        config = createSpecificCallbacks(config, (response) => {
            authStore.addAppointments([response.data]);
        })

        apiCaller("post", endpoint, data, config)
    },
    updateAppointment(data, config) {
        const endpoint = apiEndpoints.appointment(data.id);
        const authStore = useAuthStore();

        config = createSpecificCallbacks(config, (response) => {
            authStore.setAppointment(response.data);
        })

        apiCaller("patch", endpoint, data, config)
    },
    deleteAppointment(id, config) {
        const endpoint = apiEndpoints.appointment(id);
        apiCaller("delete", endpoint, null, config)
    }
};

export default backendService;
