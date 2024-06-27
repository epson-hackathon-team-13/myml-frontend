"use client";

import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EpsonTokenReq } from "@/apis/dto/user";
import { postUserEmail } from "@/apis/user";
import { EmailFormSchema } from "@/constants/epson";
import { useState } from "react";

const useAddEmail = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
  });

  const onSubmit = async (data: EpsonTokenReq) => {
    try {
      setLoading(true);
      const res = await postUserEmail({ ...data });
    } catch (error: any) {
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "Invalid email. Please try again.",
        });
      }
      toast({
        variant: "destructive",
        title: "Invalid email. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return { form, loading, onSubmit };
};

export default useAddEmail;
