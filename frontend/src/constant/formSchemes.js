import * as yup from "yup";
import {useI18n} from "vue-i18n";


const FormSchemes = {
    UserRegistrationFormScheme: () => {
        const {t} = useI18n();
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
}

export default FormSchemes;

