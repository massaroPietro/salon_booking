import {reactive} from "vue";
import i18n from "@/plugins/i18n";

const {t} = i18n.global

export function initFormState(fields, validationSchema) {
    const form = reactive({});
    const formErrors = reactive({});

    for (const field of fields) {
        form[field] = '';
        formErrors[field] = '';
    }

    formErrors['non_field_errors'] = '';

    return {
        form,
        formErrors,
        validateForm: () => {
            return new Promise((resolve, reject) => {
                validationSchema
                    .validate(form, {abortEarly: false})
                    .then(() => {
                        resetObject(formErrors)
                        resolve()
                    })
                    .catch((err) => {
                        resetObject(formErrors)
                        err.inner.forEach((error) => {
                            formErrors[error.path] = error.message;
                        });
                        reject(formErrors);
                    });
            });
        },
    };
}

export function resetObject(object) {
    for (const field in object) {
        object[field] = '';
    }
}

export function setBackendResponseErrors(err, formErrors) {
    console.log("ci sono")
    if (err.response && err.response.data) {
        for (const errorField in err.response.data) {
            if (typeof err.response.data[errorField] === "string") {
                if (isNaN(errorField) && formErrors[errorField].length === 0) {
                    formErrors[errorField] = err.response.data[errorField];
                } else {
                    if (formErrors['non_field_errors'].length === 0) {
                        formErrors["non_field_errors"] = err.response.data[errorField];
                    }
                }
            } else {
                formErrors[errorField] = err.response.data[errorField][0];
            }
        }
    }
}

export function humanizeDuration(duration) {
    const [hours, minutes] = duration.split(':').map(Number);

    const obj = {hours: hours, minutes: minutes}

    if (hours > 0 && minutes > 0) {
        return t("humanizeDuration.minutesAndHours", obj)
    } else if (hours > 0) {
        if (hours === 1) {
            return t("humanizeDuration.onlySingleHours", obj)
        } else {
            return t("humanizeDuration.onlyHours", obj)
        }
    } else {
        return t("humanizeDuration.onlyMinutes", obj)
    }
}
