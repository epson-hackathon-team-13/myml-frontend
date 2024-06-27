"use client";

import UserBox from "./_components/user-box";
import PageTab from "@/components/molecules/page-nav-bar";
import { MYPAGE_TAB } from "@/constants/mypage";
import Loading from "@/components/molecules/loading";
import AllBox from "./_components/all-box";

const MyPage = () => {
  return (
    <div className="mb-10">
      <Loading>
        <UserBox />
        <PageTab data={MYPAGE_TAB} />
        <AllBox />
      </Loading>
    </div>
  );
};

export default MyPage;
