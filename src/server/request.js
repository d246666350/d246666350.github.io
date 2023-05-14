import axios from "axios";
import { router } from "@/route";
import { baseURL } from "./configure";
import { Toast } from "vant";

import { clearAllStorage, getLocalAccessToken } from "@/utils/localStorage";
const service = axios.create({
  baseURL,
  timeout: 30000,
});

// 异常拦截处理器
const errorHandler = (error) => {
  Toast.fail("请求错误");
  return Promise.reject(error);
};

// 添加请求拦截器
service.interceptors.request.use((response) => {
  response.headers.Authorization = getLocalAccessToken();
  return response;
}, errorHandler);

// 添加响应拦截器
service.interceptors.response.use((response) => {
  if (response.data.errcode == 0) {
    return Promise.resolve(response);
  } else if (response.data.errcode == 1001) {
    return Promise.reject(response);
  } else if (response.data.errcode == 2001 || response.data.errcode == 3001) {
    clearAllStorage();
    router.push("/login");
  } else {
    return Promise.reject(response);
  }
}, errorHandler);

export default service;
