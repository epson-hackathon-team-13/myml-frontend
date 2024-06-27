"use client";

import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { EpsonPrintReq } from "@/apis/dto/epson";
import { postPrintFile } from "@/apis/epson";

const useAddPrintFile = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await postPrintFile(data);
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
  return { loading, onSubmit };
};

export default useAddPrintFile;
