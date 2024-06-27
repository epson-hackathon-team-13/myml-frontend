import { Song } from "@/apis/dto/song";
import { getSongList } from "@/apis/song";
import { toast } from "@/components/ui/use-toast";
import { wrapPromise } from "@/utils/wrap-promise";

import { useEffect, useState } from "react";

// 노래 리스트 요청 훅
export const useGetSongList = () => {
  const [res, setRes] = useState<{
    get: () => { data: Song[] };
  } | null>(null);

  useEffect(() => {
    const newRes = wrapPromise(getSongList());

    setRes(newRes);
  }, []);

  return res ? res.get().data : null;
};
