import axiosInstance from "@/axiosInstance/axiosInstance";
import { EpsonTokenReq } from "./dto/user";

export const postUserEmail = async (data: EpsonTokenReq) => {
  try {
    const res = await axiosInstance.post(`/api/epson/authenticate`, data);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
