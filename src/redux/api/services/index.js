import axios from "axios";


const baseURL = import.meta.env.VITE_BASE_URL_SERVER;
 export const jsonAxios= axios.create({
    baseURL,
    headers:{
        "Content-Type": "application/json",
},
});