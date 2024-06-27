import axiosInstance from "@/axiosInstance/axiosInstance";
import { AuthLoginReq, AuthLoginRes, AuthLogoutReq } from "./dto/auth";

export const postLogin = (requestData: AuthLoginReq) =>
  axiosInstance.post<AuthLoginRes>("/login", requestData);

export const postLogout = (requestData: AuthLogoutReq) =>
  axiosInstance.post("/admin/auth/logout", requestData);
