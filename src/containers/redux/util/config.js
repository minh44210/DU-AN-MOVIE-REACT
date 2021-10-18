import axios from "axios";

export const DOMAIN = "https://movienew.cybersoft.edu.vn";
export const DOMAIN2 = "https://movie0706.cybersoft.edu.vn";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";
export const USER_LOGIN = "USER_LOGIN";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN,
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
export default api;
