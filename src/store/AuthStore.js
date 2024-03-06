import {create} from "zustand";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";

export const useAuthStore = create((set) => ({
    user: null,
    login (username, password) {
        axios.post(SERVER_URL + `/login`)
            .then(r => {
                set({user : r.data})
                console.log(r.data)
            })
            .catch(e => {
                console.error(e)
            })
    },
    logout () {
        localStorage.removeItem("ADMIN_ACCESS")
        localStorage.removeItem("USER_ACCESS")
        window.location.reload()
    }
}))