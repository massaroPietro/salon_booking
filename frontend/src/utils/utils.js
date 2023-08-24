import {reactive} from "vue";

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

export function setBackendResposeErrors(err, formErrors) {
    if (err.response && err.response.data) {
        for (const errorField in err.response.data) {
            formErrors[errorField] = err.response.data[errorField][0];
        }
    }
}

