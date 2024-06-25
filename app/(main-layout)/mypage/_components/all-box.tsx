import { WORD, WRITE } from "@/constants/mypage";
import { useSearchParams } from "next/navigation";
import React from "react";
import WordBox from "./word-box";
import WriteBox from "./wirte-box";

const AllBox = () => {
  const tab = useSearchParams().get("tab");
  return (
    <div>
      {tab === WORD && <WordBox />}
      {tab === WRITE && <WriteBox />}
    </div>
  );
};

export default AllBox;
