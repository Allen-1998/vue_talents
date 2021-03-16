//引入axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export default {
    login : (role,data) => axios.post(`${role}/login`,data),
    register : data => axios.post(`user/register`,data),
    updateProfile : data => axios.post(`user/updateProfile`,data),
    updateAdmin : data => axios.post(`user/updateAdmin`,data),

    saveSource : data => axios.post(`source/save`,data),
    findSource : () => axios.get(`source/find`),
    updateSource : data => axios.post(`source/update`,data),

    saveJob : data => axios.post(`job/save`,data),
    findJob : () => axios.get(`job/find`),
    updateJob : data => axios.post(`job/update`,data),
    
    saveResume : data => axios.post(`resume/save`,data),
    findResume : () => axios.get(`resume/find`),
    updateResume : data => axios.post(`resume/update`,data),
}
