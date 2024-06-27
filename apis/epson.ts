import axiosInstance from "@/axiosInstance/axiosInstance";
import { EpsonPrintReq } from "./dto/epson";

export const postPrintFile = async (data: EpsonPrintReq) => {
  try {
    const res = await axiosInstance.post(`/api/epson/print`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
