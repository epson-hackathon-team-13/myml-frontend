import { Song } from "@/apis/dto/song";
import { getSongDetail } from "@/apis/song";
import { wrapPromise } from "@/utils/wrap-promise";

import { useEffect, useState } from "react";

// 노래 상세 정보 요청 훅
export const useGetSongDetail = (id: string) => {
  const [res, setRes] = useState<{
    get: () => { data: Song };
  } | null>(null);

  useEffect(() => {
    const newRes = wrapPromise(getSongDetail(id));
    setRes(newRes);
  }, []);

  return res ? res.get().data : null;
};
