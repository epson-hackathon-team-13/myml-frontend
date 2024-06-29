import { EXAM, WORD, WRITE } from "@/constants/mypage";
import { useSearchParams } from "next/navigation";
import React from "react";
import WordBox from "./word-box";
import WriteBox from "./write-box";
import ExamBox from "./exam-box";

const AllBox = () => {
  const tab = useSearchParams().get("tab");

  return (
    <div>
      {tab === WORD && <WordBox />}
      {tab === WRITE && <WriteBox />}
      {tab === EXAM && <ExamBox />}
    </div>
  );
};

export default AllBox;
