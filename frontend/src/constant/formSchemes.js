import * as yup from "yup";
import i18n from "@/plugins/i18n";
const {t} = i18n.global

const FormSchemes = {
    userRegistrationFormScheme: () => {
        return yup.object().shape({
            first_name: yup.string().required(t('generic.requiredField')),
            last_name: yup.string().required(t('generic.requiredField')),
            email: yup.string().email(t('errors.notValidEmail')).required(t('generic.requiredField')),
            password1: yup.string().required(t('generic.requiredField')),
            password2: yup.string().required(t('generic.requiredField')).test('password-match', t('errors.notMatchPassword'), function (value) {
                return this.parent.password1 === value;
            }),
        });
    },
    userLoginFormScheme: () => {
        return yup.object().shape({
            email: yup.string().email(t('errors.notValidEmail')).required(t('generic.requiredField')),
            password: yup
                .string()
                .required(t('generic.requiredField')),
        });
    }
}

export default FormSchemes;

