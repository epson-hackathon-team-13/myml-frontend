"use client";

import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { postImgOcr } from "@/apis/ocr";

const useAddOcrImg = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await postImgOcr(data);
      setSuccess(true);
    } catch (error: any) {
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "Please try again.",
        });
      }
      toast({
        variant: "destructive",
        title: "Please try again.",
      });
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return { loading, onSubmit, success };
};

export default useAddOcrImg;
