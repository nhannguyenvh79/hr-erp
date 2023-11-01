import API from "./configAPI";
import handleRefreshToken from "./refreshToken";

export interface AuthAPI {
  login: (values: any) => Promise<any>;
  register: (values: any) => Promise<any>;
  getMe: () => Promise<any>;
  refreshToken: () => Promise<any>;
}

const authAPI: AuthAPI = {
  login: (values) => API.post("/auth/login", values),
  register: (values) => API.post("/auth/register", values),
  getMe: () => handleRefreshToken(() => API.get("/auth/me")),
  refreshToken: () => API.get("/auth/refresh"),
};

export default authAPI;
