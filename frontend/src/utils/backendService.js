import axios from "@/plugins/axios";
import apiEndpoints from "@/constant/apiEndpoints";
import i18n from "@/plugins/i18n";
import router from "@/router";
import toast from "@/plugins/toasts";
import {useAuthStore} from "@/store/auth";
const {t} = i18n.global

function apiCaller(method, endpoint, requestData, callbacks = {}) {
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
        });
}

const backendService = {
    getCurrentUser: () => {

    },
    loginUser: (data, callbacks = {}) => {
        const endpoint = apiEndpoints.login();

        const specificCallbacks = {
            success_callback: (response) => {
                const token = response.data.key;
                const authStore = useAuthStore();
                authStore.setToken(token, this.checkbox);
                authStore.user = response.data.user;

                if (response.data.user.settings) {
                    i18n.locale = response.data.user.settings.lang;
                }

                router.push("/")

                toast.success(t("toasts.successLogin"), {
                    timeout: 2000
                });

                if (callbacks.success_callback) {
                    callbacks.success_callback(response);
                }
            },
            error_callback: callbacks.error_callback,
            finally_callback: callbacks.finally_callback
        }

        apiCaller("post", endpoint, data, specificCallbacks);
    },
    registerUser: (data, callbacks = {}) => {
        const endpoint = apiEndpoints.register();

        apiCaller("post", endpoint, data, callbacks);
    },
    resendVerificationEmail: (email, callbacks = {}) => {
        const endpoint = apiEndpoints.resendEmail();
        const requestData = {
            email: email
        };

        const specificCallbacks = {
            success_callback: (response) => {
                toast.success(t("generic.verificationEmailSent"));
                if (callbacks.success_callback) {
                    callbacks.success_callback(response);
                }
            },
            error_callback: callbacks.error_callback,
            finally_callback: callbacks.finally_callback
        };

        apiCaller("post", endpoint, requestData, specificCallbacks);
    },
};

export default backendService;
