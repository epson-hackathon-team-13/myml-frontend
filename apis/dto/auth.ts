import { AdminType } from "@/stores/user-store/types/user-store.types";

export type AuthRefreshReq = {
  refreshToken: string;
};

export type AuthRefreshRes = {
  accessToken: string;
};

export type AuthLoginReq = {
  email: string;
  password: string;
};

export type AuthSignUpReq = {
  email: string;
  password: string;
  username: string;
  nickname: string;
  language: string;
  level: number;
};

export type AuthLoginRes = {
  email: string;
  language: string;
  level: number;
  nickname: string;
  username: string;
};

export type AuthLogoutReq = {
  refreshToken: string;
};
