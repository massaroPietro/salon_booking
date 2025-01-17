import {reactive} from "vue";
import i18n from "@/plugins/i18n";
import toast from "@/plugins/toasts";

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
    if (err?.code === 'ERR_NETWORK') {
        formErrors["non_field_errors"] = t('errors.serverOffline')
    } else if (err.response && err.response.data) {
        if (err.response.status === 500) {
            formErrors["non_field_errors"] = t('errors.serverError')
        } else if (err.response.data) {
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
}

export function humanizeDuration(duration) {
    const [hours, minutes] = duration.split(':').map(Number);

    const obj = {hours: hours, minutes: minutes}
    let str = "";
    if (hours > 0) {
        if (hours === 1) {
            str += t("humanizeDuration.onlySingleHours", obj)
        } else {
            str += t("humanizeDuration.onlyHours", obj)
        }
    }
    if (minutes > 0) {
        let tmpStr = "";
        if (hours > 0) {
            tmpStr = " " + t("generic.and") + " ";
        }
        tmpStr += t("humanizeDuration.onlyMinutes", obj)
        str += tmpStr;
    }

    return str;
}

export function sumDurations(duration1, duration2) {
    const [hours1, minutes1] = duration1.split(":").map(Number);
    const [hours2, minutes2] = duration2.split(":").map(Number);

    let totalHours = hours1 + hours2;
    let totalMinutes = minutes1 + minutes2;

    if (totalMinutes >= 60) {
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes %= 60;
    }

    return `${String(totalHours).padStart(2, "0")}:${String(totalMinutes).padStart(2, "0")}:00`;
}

export function sumDurationsList(durations) {
    if (durations.length === 0) {
        return "00:00:00";
    }
    if (durations.length === 1) {
        return durations[0];
    }
    let duration = durations[0];
    for (let i = 1; i < durations.length; i++) {
        duration = sumDurations(duration, durations[i]);
    }
    return duration;
}

export function getClientTimezoneOffset() {
    return new Date().getTimezoneOffset();
}

export function formatWorkDays(workDays, x = 1) {
    if (Array.isArray(workDays)) {
        return workDays.map((work_day) => {
            return formatSingleWorkDay(work_day, x)
        });
    } else if (typeof workDays === 'object') {
        return formatSingleWorkDay(workDays, x);
    }

    return [];
}


function formatSingleWorkDay(workDay, x) {
    const formattedWorkRanges = workDay.work_ranges.map(workRange => {
        let [fromHours, fromMinutes] = workRange.from_hour.split(':');
        let [toHours, toMinutes] = workRange.to_hour.split(':');

        let fromHour = new Date();
        fromHour.setHours(parseInt(fromHours, 10));
        fromHour.setMinutes(parseInt(fromMinutes, 10));
        fromHour = new Date(fromHour.getTime() - getClientTimezoneOffset() * 60 * 1000 * x);

        let toHour = new Date();
        toHour.setHours(parseInt(toHours, 10));
        toHour.setMinutes(parseInt(toMinutes, 10));
        toHour = new Date(toHour.getTime() - getClientTimezoneOffset() * 60 * 1000 * x);
        return {
            ...workRange,
            from_hour: formatTime(fromHour),
            to_hour: formatTime(toHour),
        };
    });

    return {
        ...workDay,
        work_ranges: formattedWorkRanges,
    };
}


function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}:00`;
}
