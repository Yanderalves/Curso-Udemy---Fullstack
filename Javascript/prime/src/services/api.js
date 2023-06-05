import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "711af964167649042b4d9a42e48cca92",
        language: "pt-BR"
    }
})

export default api;