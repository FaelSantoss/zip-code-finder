import axios from "axios";

// 12230570/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;