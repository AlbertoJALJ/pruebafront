import axios from "axios";

export const stores = axios.create({
    baseURL: "http://localhost:3000/",
});
