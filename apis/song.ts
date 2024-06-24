import axiosInstance from "@/axiosInstance/axiosInstance";
import { Song } from "./dto/song";
import axios from "axios";

export const getSongDetail = async (id: string): Promise<{ data: Song }> => {
  try {
    const res = await axiosInstance.get<{ data: Song }>(`/music/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSongList = async (): Promise<{ data: Song }> => {
  try {
    const res = await axiosInstance.get<{ data: Song }>(`/music`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getWordExam = async (searchTerm: string) => {
  try {
    const API_KEY = `6923A210DBDC949E00EB45C1C0B0BDF3`;
    const res = await axios.get(
      `https://krdict.korean.go.kr/api/search?key=${API_KEY}&q=${encodeURIComponent(searchTerm)}&translated=y&trans_lang=1`,
    );

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res.data, "text/xml");

    const translations = xmlDoc.getElementsByTagName("translation");
    for (let i = 0; i < translations.length; i++) {
      const transLang = translations[i]
        .getElementsByTagName("trans_lang")[0]
        .textContent?.trim();

      if (transLang === "영어") {
        const transWord =
          translations[i].getElementsByTagName("trans_word")[0].textContent;
        const transDfn =
          translations[i].getElementsByTagName("trans_dfn")[0].textContent;
        return { transWord, transDfn };
      }
      return res.data;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
