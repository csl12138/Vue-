import Vue from "vue"
import axios from "axios"

axios.interceptors.response.use(resp => {
    if (resp.status === 200) {
        return resp.data;
    }
}, error => {
    if (error.response) {
        console.log("响应时错误", error.msg);
        return Promise.reject(error);
    } else if (error.request) {
        console.log("请求时错误", error.msg);
        return Promise.reject(error);
    } else {
        console.log("请求未发出", error.msg);
        return Promise.reject(error);
    }
})

Vue.prototype.$axios = axios;
