import { _hideFooterAndNavbar, _showFooterAndNavbar } from "@/store/site";
import { store } from "@/store";

const siteActions = {
    hideFooterAndNavbar() {
        store.dispatch(_hideFooterAndNavbar())
    },
    showFooterAndNavbar() {
        store.dispatch(_showFooterAndNavbar())
    }
}

export default siteActions