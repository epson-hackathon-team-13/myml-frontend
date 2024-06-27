import { MySongWordRes } from "@/apis/dto/song";
import { getMyWordList } from "@/apis/song";
import { wrapPromise } from "@/utils/wrap-promise";
import { useEffect, useState } from "react";

// 내 단어장 리스트 조회 훅
export const useGetMyWordList = () => {
  const [res, setRes] = useState<{
    get: () => { data: MySongWordRes[] };
  } | null>(null);

  useEffect(() => {
    const newRes = wrapPromise(getMyWordList());
    setRes(newRes);
  }, []);

  return res ? res.get().data : null;
};
