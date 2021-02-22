//引入axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export default {
    login : (role,data) => axios.post(`${role}/login`,data),
    register : data => axios.post(`user/register`,data),
}
