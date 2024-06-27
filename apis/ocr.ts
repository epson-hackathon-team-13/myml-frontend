import axiosInstance from "@/axiosInstance/axiosInstance";

export const postImgOcr = async (data: FormData) => {
  try {
    const res = await axiosInstance.post(`/api/ocr/extract`, data);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
