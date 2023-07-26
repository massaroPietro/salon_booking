import {useAuthStore} from "@/store/auth";

export default function auth ({ to, next }){
  const store = useAuthStore();

  if (store.isAuthenticated) {
    return next();
  }
  return next({ name: "Login", query: {to: to.path}});
}
