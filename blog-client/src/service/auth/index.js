import { API } from "@/utils/request";
import authActions from "@/store/auth/actions"

export const authService = {
    login(data) {
        return API.post("login", data);
    },
    register(data) {
        return API.post('register', data)
    },
    getUser() {
        return API.post('check');
    },
    logout() {
        authActions.removeToken();
        authActions.removeUser();
    },
}