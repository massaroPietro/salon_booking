import {useAuthStore} from "@/store/auth";

export default function auth({to, next}) {
    const store = useAuthStore();

    if (store.isAuthenticated) {
        return next();
    }
    return next({name: "Login", query: {to: to.path}});
}

export function IsCurrentSalonOwner({to, next}) {
    const store = useAuthStore();

    const current_salon = store.getCurrentSalon();

    if (current_salon) {
        if (store.user.id === current_salon.owner) {
            return next();
        }
    }

    return next({name: "home"});
}
