export type AdminType = "SUPER_ADMIN" | "ADMIN";

export type Admin = {
  id: string;
  name: string;
  adminType: AdminType;
};

export type UserStore = {
  admin: Admin | null;
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUser: (user: Admin) => void;
  logout: (data: () => void) => void;
  getLoginStatus: () => boolean;
};

export type SetState<T> = (
  partial: Partial<T> | ((state: T) => Partial<T>),
) => void;
