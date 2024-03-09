import { appConfig } from "@/src/config";
import { LoginModel, RegistrationModel } from "./login.interface";
import axios from "axios";
import { RefreshTokenPostModel } from "@/src/shared/interface";
import { axiosInstance } from "@/src/http-config/axios.interceptor";

const login = async (credentials: LoginModel) => {
  const response = await axiosInstance.post(`/api/v1/auth/login`, {
    password: credentials.password,
    email: credentials.email,
  });
  return response;
};

const registration = async (data: RegistrationModel) => {
  const response = await axiosInstance.post(`/api/v1/user/registration`, {
    password: data.password,
    email: data.email,
    name: data.name,
  });
  return response;
};

const refreshAccessToken = async (tokenObject: RefreshTokenPostModel) => {
  const response = await axiosInstance.post(`/api/v1/auth/refresh-token`, {
    token: tokenObject.accessToken,
    refreshToken: tokenObject.refreshToken,
  });
  return response;
};

export const AuthService = {
  login,
  refreshAccessToken,
  registration,
};
