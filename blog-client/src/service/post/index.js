import { API } from "@/utils/request";

export const postService = {
    addPost(data) {
        return API.post("postAdd", data, {
            'Accept': "multipart/form-data",
        });
    },
    getPost(data) {
        return API.get(`posts?page=${data}`);
    },
    getSinglePost() {
        return API.get(`posts`);
    },
    getDetailPost(data) {
        return API.post(`post/${data}`);
    },
    deletePost(id) {
        return API.delete(`postDelete/${id}`)
    },
    updatePost(data) {
        return API.put(`posts/${data.id}`, {title: data.title, content: data.content})
    }
}