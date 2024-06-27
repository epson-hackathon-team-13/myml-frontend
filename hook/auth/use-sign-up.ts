"use client";

import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { useUserStore } from "@/stores/user-store/user-store";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLogin, postSignUp } from "@/apis/auth";
import { SignUpFormSchema } from "@/constants/auth";

const useSignUp = () => {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const { setUser, setAccessToken, setRefreshToken } = useUserStore();

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignUpFormSchema>) => {
    try {
      const response = await postSignUp({ ...data });
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setUser(response.data.admin);
      if (next) {
        window.location.href = next;
        return;
      }
      window.location.href = `/`;
    } catch (error: any) {
      console.log("eerr", error);
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "아이디 또는 비밀번호를 확인해주세요.",
          description: `아이디 또는 비밀번호가 올바르지 않습니다.`,
        });
        return;
      }
      toast({
        variant: "destructive",
        title: "로그인 실패",
        description: `로그인을 다시 시도해주세요. ${error}`,
      });
    }
  };
  return { form, onSubmit };
};

export default useSignUp;
