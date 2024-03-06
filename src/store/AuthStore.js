import {create} from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    login (username, password) {
        console.log(username, password)
    }
}))