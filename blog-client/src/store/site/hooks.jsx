import { useSelector } from "react-redux";

export const useSiteLayout = () => {
    return useSelector(state => state.site)
}