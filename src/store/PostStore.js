import {create} from "zustand";
import axios from "axios";
import {SERVER_URL} from "../utils/URL";

export const usePostStore = create((set) => ({
    post: null,
    fetchPost () {

    },
    addPost(title, description, type, attachment) {
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
            })
            .catch(error => {
                console.error(error);
            });
    }


}))
