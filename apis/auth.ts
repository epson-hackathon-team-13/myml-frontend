import axiosInstance from "@/axiosInstance/axiosInstance";
import {
  AuthLoginReq,
  AuthLoginRes,
  AuthLogoutReq,
  AuthSignUpReq,
} from "./dto/auth";

export const postLogin = (requestData: AuthLoginReq) =>
  axiosInstance.post<AuthLoginRes>("/api/login", requestData);

export const postLogout = (requestData: AuthLogoutReq) =>
  axiosInstance.post("/api/admin/auth/logout", requestData);

export const postSignUp = (requestData: AuthSignUpReq) =>
  axiosInstance.post("/api/user/sign-up", requestData);
