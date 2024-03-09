import {create} from "zustand";

export const useFlashMessageStore = create((set) => ({
    message: null,
    type: null,
    showMessage: false,
    setMessage (showMessage, message, type) {
        set({message: message, showMessage: showMessage, type: type})
        setTimeout(() => {
            set({message: null, showMessage: false, type: null})
        }, 2000)
    }
}))