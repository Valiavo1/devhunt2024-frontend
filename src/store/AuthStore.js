import {create} from "zustand";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";

export const useAuthStore = create((set) => ({
    user: null,
    login (username, password) {
        axios.post(SERVER_URL + `/login`, {
            "username" : username,
            "password" : password
        })
            .then(r => {
                set({user : r.data})
                setRole(r.data)
                window.location.reload()
                console.log(r.data)
            })
            .catch(e => {
                console.error(e.message)
            })
    },
    logout () {
        localStorage.removeItem("ADMIN_ACCESS")
        localStorage.removeItem("USER_ACCESS")
        window.location.reload()
    },
    setUser (user) {
        set({user : user})
    }
}))

const setRole = (user) => {
    localStorage.setItem('user_id', user.path)
    if (user.isAdmin)
        localStorage.setItem('ADMIN_ACCESS', 'hgdjklgfeafutfadvkjhgvdkayufodagfiyda;wglkgdali')
    else
        localStorage.setItem('USER_ACCESS', 'ghgdalygdaoyyuad-(&e179731hkuagiuufdsautyiadfouafufdgafkudfy')
}