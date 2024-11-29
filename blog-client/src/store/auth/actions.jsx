import { _logout, _setUser, _removeUser, _removeToken, _setToken } from "@/store/auth";
import { store } from "@/store";

const authActions = {
    setUser(data) {
        store.dispatch(_setUser(data))
    },
    setToken(token) {
        store.dispatch(_setToken(token))
    },
    removeToken() {
        store.dispatch(_removeToken())
    },
    removeUser() {
        store.dispatch(_removeUser())
    },
    logout() {
        store.dispatch(_logout())
    }
}

export default authActions