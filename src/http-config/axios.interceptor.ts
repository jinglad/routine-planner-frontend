import axios from "axios";
import { appConfig } from "../config";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
  baseURL: appConfig.base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceWithAuth = async () => {
  const session = await getSession();
  return axios.create({
    baseURL: appConfig.base_url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};
