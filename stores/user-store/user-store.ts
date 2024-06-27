import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Admin, SetState, UserStore } from "./types/user-store.types";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "@/utils/storageUtils";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { AuthLogoutReq } from "@/apis/dto/auth";
import { postLogout } from "@/apis/auth";

const store = (set: SetState<UserStore>): UserStore => ({
  admin: getLocalStorageValue<Admin | null>("admin", null),
  accessToken: Cookies.get("access-token") || null,
  refreshToken: Cookies.get("refresh-token") || null,

  // 로그인 상태 업데이트
  getLoginStatus: () =>
    !!Cookies.get("access-token") && !!Cookies.get("refresh-token"),

  // 액세스 토큰 쿠키에 저장
  setAccessToken: (token) => {
    Cookies.set("access-token", token, { expires: 1 });
    set({ accessToken: token });
  },
  // 리프레쉬 토큰 쿠키에 저장
  setRefreshToken: (token) => {
    Cookies.set("refresh-token", token, { expires: 7 });
    set({ refreshToken: token });
  },
  // 사용자 정보 로컬 스토리지에 저장
  setUser: (admin) => {
    setLocalStorageValue("admin", admin);
    set({ admin });
  },

  logout: async (handleSuccessLogout: () => void) => {
    try {
      const requestData: AuthLogoutReq = {
        refreshToken: Cookies.get("refresh-token") as string,
      };
      await postLogout(requestData);
      toast({
        variant: "default",
        title: "로그아웃 성공",
        description: `로그아웃에 성공했습니다.`,
      });
      handleSuccessLogout();
      localStorage.removeItem("admin");
      Cookies.set("access-token", "", { expires: 0 });
      Cookies.set("refresh-token", "", { expires: 0 });
      set({ admin: null, accessToken: null, refreshToken: null });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "로그아웃 실패",
        description: `로그아웃에 실패했습니다.`,
      });
      localStorage.removeItem("admin");
      Cookies.set("access-token", "", { expires: 0 });
      Cookies.set("refresh-token", "", { expires: 0 });
      set({ admin: null, accessToken: null, refreshToken: null });
      handleSuccessLogout();
      console.error("로그아웃 에러", error);
    }
  },
});

// node_env에 따라서 dev면 데브툴 사용 스토어로 생성
export const useUserStore = create(
  process.env.NEXT_PUBLIC_APP_ENV === "dev" ? devtools(store) : store,
);
