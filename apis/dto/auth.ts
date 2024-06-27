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

export type AuthLoginRes = {
  accessToken: string;
  refreshToken: string;
  admin: {
    id: string;
    name: string;
    adminType: AdminType;
  };
};

export type AuthLogoutReq = {
  refreshToken: string;
};
