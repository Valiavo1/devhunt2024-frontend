import {create} from "zustand";
import axios, {post} from "axios";
import {SERVER_URL} from "../utils/URL";

export const usePostStore = create((set) => ({
    posts: [],
    fetchPost () {
        axios.get(SERVER_URL + `/post`)
            .then(r => {
                set({posts : r.data})
                console.log(r.data)
            })
            .catch(e => {
                console.error(e)
            })
    },
    addPost: async (title, description, type, attachment) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("json_data", JSON.stringify({
                title: title,
                description: description,
                type: type,
                user_id: localStorage.getItem('user_id')
            }));

            formData.append("piecesJointe", attachment[0]);

            axios.post(SERVER_URL + `/post`, formData)
                .then(response => {
                    console.log(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    console.error(error);
                    reject(error)
                });
        });
    },
}))
