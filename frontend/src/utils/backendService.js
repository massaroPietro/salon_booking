import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import i18n from "@/plugins/i18n";
import router from "@/router";
import toast from "@/plugins/toasts";
import {useAuthStore} from "@/store/auth";
import {useCoreStore} from "@/store/core";
import {setBackendResposeErrors} from "@/utils/utils";

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

    router.push("/")
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
            if (config?.error_callback) {
                config.error_callback(err);
            }

            if (config?.formErrors) {
                setBackendResposeErrors(err, config.formErrors)
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
        error_callback: (response) => {
            if (error_callback) {
                error_callback(response);
            }
            if (config?.error_callback) {
                config.error_callback(response);
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
                authStore.user = response.data;
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
            toast.success(t("toasts.serviceAdded"), {
                timeout: 5000
            })
        })
        apiCaller("post", endpoint, data, config);
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

        apiCaller("put", endpoint, data, config);
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
};

export default backendService;
