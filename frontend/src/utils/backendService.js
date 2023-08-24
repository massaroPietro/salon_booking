import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import i18n from "@/plugins/i18n";
import router from "@/router";
import toast from "@/plugins/toasts";
import {useAuthStore} from "@/store/auth";
import {callback} from "chart.js/helpers";
import {load} from "@amcharts/amcharts5/.internal/core/util/Net";
import {useCoreStore} from "@/store/core";

const {t} = i18n.global

function apiCaller(method, endpoint, requestData, callbacks = {}, loading = null) {
    if (loading) {
        loading = true;
    }
    axios({
        method: method,
        url: endpoint,
        data: requestData,
    })
        .then((response) => {
            if (callbacks.success_callback) {
                callbacks.success_callback(response);
            }
        })
        .catch((err) => {
            if (callbacks.error_callback) {
                callbacks.error_callback(err);
            }
        })
        .finally(() => {
            if (callbacks.finally_callback) {
                callbacks.finally_callback();
            }
            if (loading) {
                loading = false;
            }
        });
}

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

const createSpecificCallbacks = (callbacks, success_callback = null, error_callback = null, finally_callback = null) => {
    return {
        success_callback: (response) => {
            if (success_callback) {
                success_callback(response);
            }
            if (callbacks?.success_callback) {
                callbacks.success_callback(response);
            }
        },
        error_callback: (response) => {
            if (error_callback) {
                error_callback(response);
            }
            if (callbacks?.error_callback) {
                callbacks.error_callback(response);
            }
        },
        finally_callback: (response) => {
            if (finally_callback) {
                finally_callback(response);
            }
            if (callbacks?.finally_callback) {
                callbacks.finally_callback(response);
            }
        },
    };
};

const backendService = {
    logout(config = null) {
        let endpoint = apiEndpoints.logout();

        const specificCallbacks = createSpecificCallbacks(config, () => {
            router.push({name: "Login"})
            const store = useAuthStore();
            store.removeToken();
            const lang = navigator.language.substring(0, 2);
            axios.defaults.headers['Accept-Language'] = lang
            i18n.locale = lang;
        })

        apiCaller("post", endpoint, null, specificCallbacks);
    },
    getDashboardUser: (callbacks = null, getDashboardUser = true, storeUser = true) => {
        let endpoint = apiEndpoints.user();
        if (getDashboardUser) {
            endpoint = apiEndpoints.dashboardUser();
        }

        if (storeUser) {
            const authStore = useAuthStore();
            callbacks = createSpecificCallbacks(callbacks, (response) => {
                authStore.user = response.data;
            })
        }

        apiCaller("get", endpoint, null, callbacks)
    },
    getEmployees: (callbacks = {}, loading) => {
        const authStore = useAuthStore();
        const current_salon = authStore.getCurrentSalon();
        let endpoint = apiEndpoints.salonEmployees(current_salon.slug);

        apiCaller("get", endpoint, null, callbacks)
    },
    getEmployee: (id, callbacks = {}) => {
        let endpoint = apiEndpoints.employee(id);

        apiCaller("get", endpoint, null, callbacks);
    },
    googleLoginUser: (data, callbacks = {}, rememberUser = true) => {
        const endpoint = apiEndpoints.authGoogle();

        const specificCallbacks = createSpecificCallbacks(callbacks, (response) => {
            setUserInfoOnLogin(response, rememberUser);
        })

        apiCaller("post", endpoint, data, specificCallbacks);
    },
    loginUser: (data, callbacks = {}, rememberUser = true) => {
        const endpoint = apiEndpoints.login();

        const specificCallbacks = createSpecificCallbacks(callbacks, (response) => {
            setUserInfoOnLogin(response, rememberUser);
        })

        apiCaller("post", endpoint, data, specificCallbacks);
    },
    registerUser: (data, callbacks = {}) => {
        const endpoint = apiEndpoints.register();

        apiCaller("post", endpoint, data, callbacks);
    },
    resendVerificationEmail: (email, callbacks = {}) => {
        const endpoint = apiEndpoints.resendEmail();
        const data = {
            email: email
        };

        const specificCallbacks = createSpecificCallbacks(callbacks, () => {
            toast.success(t("generic.verificationEmailSent"));
        })

        apiCaller("post", endpoint, data, specificCallbacks);
    },
    changeLanguage(lang, callbacks = {}) {
        const endpoint = apiEndpoints.userSettings();
        const data = {
            lang: lang
        };

        apiCaller("patch", endpoint, data, callbacks);
    },
    changeSalon(salon, callbacks = {}) {
        const endpoint = apiEndpoints.userSettings();
        const data = {
            current_salon: salon
        };

        apiCaller("patch", endpoint, data, callbacks);
    },
    updateWorkDay(workDayID, data, callbacks = {}) {
        const endpoint = apiEndpoints.workDay(workDayID);

        apiCaller("put", endpoint, data, callbacks);
    },
    verifyEmail(key, callbacks = {}) {
        let endpoint = apiEndpoints.verifyEmail();
        const data = {
            key: key,
        }

        callbacks = createSpecificCallbacks(callbacks, () => {
            toast.success(t('auth.verifyEmailSuccess'));
            router.push({name: 'Login'})
        }, () => {
            toast.error(t('auth.verifyEmailError'));
            router.push({name: 'Login'})
        })

        apiCaller("post", endpoint, data, callbacks);
    },
    checkSalonExists(name, callbacks = {}) {
        const endpoint = apiEndpoints.checkSalonExists()
        const data = {
            name: name
        }
        apiCaller("post", endpoint, data, callbacks)
    },
    addNewSalon(data, callbacks = {}, loading) {
        const endpoint = apiEndpoints.salons();
        apiCaller("post", endpoint, data, callbacks, loading);
    },
    resetPassword(data, callbacks = {}, loader) {
        const endpoint = apiEndpoints.resetPassword();
        apiCaller("post", endpoint, data, callbacks, loader);
    },
    registerEmployee(salonSlug, data, callbacks = {}, loader) {
        const endpoint = apiEndpoints.registerEmployee(salonSlug)
        callbacks = createSpecificCallbacks(callbacks, () => {
            const coreStore = useCoreStore();
            coreStore.reloadPage();
            this.toast.success(this.$t("toasts.employeeRegistered"), {
                timeout: 5000
            })
        })
        apiCaller("post", endpoint, data, callbacks, loader);
    }
};

export default backendService;
