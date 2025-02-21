import axios from "axios";
import { whiteList } from '@/constant/router'

const service = axios.create({
  baseURL: 'http://212.64.18.207:8091',
  // baseURL: 'http://localhost:8080',
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

    // 非白名单路径放置 token
    if (!whiteList.includes(config.url || 'null')) {
      config.headers['token'] = localStorage.getItem('token');
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
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.error('响应拦截器报错：error=>: ', error);
    return Promise.reject(error);
  },
)

export default service
