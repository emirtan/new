import {store} from "@/store";
import toast from "react-hot-toast";

async function request(props) {

    const {url, method, body, options} = props
    const settings = {
        success: false,
        error: true,
        ...options
    }

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'multipart/form-data'
    }

    const states = store.getState()

    if (states?.auth?.token) {
        headers['Authorization'] = `Bearer ${states?.auth?.token}`
    }

    const fetchOptions = {
        method,
        headers,
    }

    if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put' || method.toLowerCase() === 'patch') {
        fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(import.meta.env.VITE_API_URL + '/' + url, fetchOptions)
    const result = await response.json()
    if (response?.status !== 200) {
        if (result?.error === 'token_not_provided') {
            // store.dispatch(_logout())
        }
        if (settings?.error) {
            toast.error(result?.meta?.messages?.error?.join(', '))
        }
        throw(result?.meta?.messages?.error)
    }
    return result

}

export const API = {
    post: (url, data, headers) => request({
        method: 'POST',
        body: data,
        headers: headers,
        url,
    }),
    get: url => request({
        method: 'GET',
        url,
    }),
    put: (url, data) => request({
        method: 'PUT',
        body: data,
        url,
    }),
    delete: (url, data) => request({
        method: 'DELETE',
        body: data,
        url,
    })
}