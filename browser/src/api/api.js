//引入axios
import axios from "axios";

export default {
    //登陆注册
    login : data => axios.post(`home/login`,data),
    register : data => axios.post(`home/register`,data),
    //用户
    updateProfile : data => axios.post(`user/updateProfile`,data),
    updateAdmin : data => axios.post(`user/updateAdmin`,data),
    //生源信息
    saveSource : data => axios.post(`source/save`,data),
    findSource : () => axios.get(`source/find`),
    updateSource : data => axios.post(`source/update`,data),
    //就业信息
    saveJob : data => axios.post(`job/save`,data),
    findJob : () => axios.get(`job/find`),
    updateJob : data => axios.post(`job/update`,data),
    //简历信息
    saveResume : data => axios.post(`resume/save`,data),
    findResume : () => axios.get(`resume/find`),
    updateResume : data => axios.post(`resume/update`,data),
    //获取用户列表
    getUsers : data => axios.post(`user/getUsers`,data),
    //修改用户状态
    changeStatus : data => axios.post(`user/changeStatus`,data),
    //获取用户信息
    getUserInfo : () => axios.get(`user/getUserInfo`),
}
