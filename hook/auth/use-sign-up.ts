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
    defaultValues: {
      language: "en",
      level: 1,
    },
  });

  const onSubmit = async (data: z.infer<typeof SignUpFormSchema>) => {
    const newData = {
      ...data,
      level: 1,
      language: "en",
    };
    try {
      const response = await postSignUp({ ...newData });
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

      toast({
        variant: "destructive",
        title: "Please Try again",
      });
    }
  };
  return { form, onSubmit };
};

export default useSignUp;
