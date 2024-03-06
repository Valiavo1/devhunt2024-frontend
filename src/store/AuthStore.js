import {create} from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    login (username, password) {
        if (username === "admin")
            localStorage.setItem("ADMIN_ACCESS", "fgfauyf_-a_t&àeè&ày_hge&oiaehçà_e917Y1EPGagoaggioduf")
        else
            localStorage.setItem("USER_ACCESS", "fgfauyf_-a_t&àeè&ày_hge&oiaehçà_e917Y1EPGagoaggioduf")
        window.location.reload()
    },
    logout () {
        localStorage.removeItem("ADMIN_ACCESS")
        localStorage.removeItem("USER_ACCESS")
        window.location.reload()
    }
}))