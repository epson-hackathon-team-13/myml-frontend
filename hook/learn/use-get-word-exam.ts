import { getWordExam } from "@/apis/song";
import { wrapPromise } from "@/utils/wrap-promise";

import { useEffect, useState } from "react";

// 단어 정보 요청 훅
export const useGetWordExam = (word: string) => {
  const [res, setRes] = useState<{
    get: () => { transWord: string; transDfn: string };
  } | null>(null);

  useEffect(() => {
    const newRes = wrapPromise(getWordExam(word));
    setRes(newRes);
  }, [word]);

  return res ? res.get() : null;
};
