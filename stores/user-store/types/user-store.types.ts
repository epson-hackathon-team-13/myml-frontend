export type AdminType = "SUPER_ADMIN" | "ADMIN";

export type User = {
  email: string;
  language: string;
  nickname: string;
  username: string;
  level: number;
};

export type UserStore = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: (data: () => void) => void;
  getLoginStatus: () => boolean;
};

export type SetState<T> = (
  partial: Partial<T> | ((state: T) => Partial<T>),
) => void;
