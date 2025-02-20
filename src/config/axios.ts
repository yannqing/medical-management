import axios from "axios";
import { toast } from 'vue-sonner'

const service = axios.create({
  baseURL: 'http://212.64.18.207:8091',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    const url = (config.baseURL || "") + (config.url || "");

    // 验证请求路径 request url
    console.log("request url: ", url, ", request method: ", config.method);

    // 系统错误：请求头无法识别
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`,
      );
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
)

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.data) {
      toast.error(error.response.data.msg);
    }


    console.error('响应报错！！！error: ', error);
  },
)

export default service
