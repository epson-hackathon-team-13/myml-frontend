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

export const getMyInfo = async () => {
  try {
    const res = await axiosInstance.get(`/api/user/logged-in`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
