"use client";
import Loading from "@/components/molecules/loading";
import PageTab from "@/components/molecules/page-nav-bar";
import { LEARN_TAB } from "@/constants/learn";
import SongListBox from "./_components/song-list-box";
import { Suspense } from "react";

const LearnAllPage = () => {
  return (
    <div>
      <Suspense>
        <PageTab data={LEARN_TAB} />
      </Suspense>
      <div>
        <Loading>
          <SongListBox />
        </Loading>
      </div>
    </div>
  );
};

export default LearnAllPage;
