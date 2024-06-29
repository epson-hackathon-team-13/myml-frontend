import { User } from "@/apis/dto/user";
import { getMyInfo } from "@/apis/user";
import { wrapPromise } from "@/utils/wrap-promise";

import { useEffect, useState } from "react";

// 노래 리스트 요청 훅
export const useGetMyInfo = () => {
  const [res, setRes] = useState<{
    get: () => { data: User };
  } | null>(null);

  useEffect(() => {
    const newRes = wrapPromise(getMyInfo());

    setRes(newRes);
  }, []);

  return res ? res.get().data : null;
};
