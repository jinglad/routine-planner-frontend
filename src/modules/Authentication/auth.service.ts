import { appConfig } from "@/src/config";
import { LoginModel } from "./login.interface";
import axios from "axios";
import { RefreshTokenPostModel } from "@/src/shared/interface";

const login = async (credentials: LoginModel) => {
  const response = await axios.post(`${appConfig.base_url}/api/v1/auth/login`, {
    password: credentials.password,
    email: credentials.email,
  });
  return response;
};

const refreshAccessToken = async (tokenObject: RefreshTokenPostModel) => {
  const response = await axios.post(
    `${appConfig.base_url}/api/v1/auth/refresh-token`,
    {
      token: tokenObject.accessToken,
      refreshToken: tokenObject.refreshToken,
    }
  );
  return response;
};

export const AuthService = {
  login,
  refreshAccessToken,
};
