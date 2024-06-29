"use client";

import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { useUserStore } from "@/stores/user-store/user-store";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLogin } from "@/apis/auth";
import { LoginFormSchema } from "@/constants/auth";
import { useState } from "react";

const useLoggedIn = () => {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");
  const [err, setErr] = useState(null);
  const { setUser, setAccessToken, setRefreshToken } = useUserStore();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    try {
      const res = await postLogin({ ...data });

      const user = {
        email: res.data.email,
        language: res.data.language,
        level: res.data.level,
        nickname: res.data.nickname,
        username: res.data.username,
      };

      setUser(user);
      if (next) {
        window.location.href = next;
        return;
      }
      window.location.href = `/`;
    } catch (error: any) {
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "Invalid username or password. Please try again.",
        });
        return setErr(error.response.status);
      }
      toast({
        variant: "destructive",
        title: "Please try again.",
      });
      return setErr(error.response.status);
    }
  };
  return { form, onSubmit, err };
};

export default useLoggedIn;
