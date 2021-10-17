import axios from "axios";
import { TOKEN } from "./../../../util/config";

const api = axios.create({
	baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use(
	(config) => {
		config.headers = {
			...config.headers,
			TokenCybersoft: TOKEN,
			Authorization: localStorage.getItem("UserAdmin")
				? "Bearer" + JSON.parse(localStorage.getItem("UserAdmin")).accessToken : "",
		};
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
)

export default api;