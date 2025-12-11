import axios, {type AxiosInstance } from "axios";

class APIClient {
  private instance: AxiosInstance;

  constructor(baseURL: string = "http://localhost:5000") {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });

    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    // Attach token
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Handle responses
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response?.data);
        return Promise.reject(error);
      }
    );
  }

// Custom Wrapper Methods

 GET<T>(url: string, params?: Record<string, any>) {
  let { search = '', offset = 0, limit = 10, ...rest } = params || {};
    offset = Number(offset) || 0;
    limit = Number(limit) || 10;

  return this.instance.get<T>(url, {
    params: { search, offset, limit, ...rest },
  });
}


  POST<T>(url: string, data?: any) {
    return this.instance.post<T>(url, data);
  }

  PUT<T>(url: string, data?: any) {
    return this.instance.put<T>(url, data);
  }

  PATCH<T>(url: string, data?: any) {
    return this.instance.patch<T>(url, data);
  }

  DELETE<T>(url: string,params?: Record<string, any>) {
    return this.instance.delete<T>(url,{
      params
    });
  }
}


export const api = new APIClient("http://localhost:5000");


