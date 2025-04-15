import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

class Axios {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    timeout: 10000
  };

  constructor() {
    this.instance = axios.create(this.baseConfig);
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.instance.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete(url, config);
  }
}

const http = new Axios();
export default http;
