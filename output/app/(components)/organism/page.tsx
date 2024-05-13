"use client";

import NavigationMenuDemo, {
  NavigationData,
} from "@/components/organism/NavigationDemo";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageName() {
  const page = useSearchParams().get("page");

  return (
    <div>
      {page && (
        <div className="flex items-center justify-center p-5 border-2 bg-gray-200 rounded-sm">
          <p>
            <span className="font-semibold">{page} </span>
            <span>{` 페이지 입니다.`}</span>
          </p>
        </div>
      )}
    </div>
  );
}

function OrganismPage() {
  // 네비게이션 데이터 사용 예시
  const navigationData: NavigationData = [
    {
      key: "MENU",
      title: "세금 계산서",
      content: [
        {
          title: "부가가치세 신고",
          href: "/organism?page=부가가치세",
        },
        {
          title: "종합소득세 신고",
          href: "/organism?page=종합소득세",
        },
        {
          title: "양도소득세 신고",
          href: "/organism?page=양도소득세",
        },
      ],
    },
    {
      key: "MENU",
      title: "세금 신고",
      content: [
        {
          title: "부가가치세 신고",
          href: "/organism?page=부가가치세",
        },
        {
          title: "종합소득세 신고",
          href: "/organism?page=종합소득세",
        },
        {
          title: "양도소득세 신고",
          href: "/organism?page=양도소득세",
        },
      ],
    },
    {
      key: "MENU",
      title: "납부 고지",
      content: [
        {
          title: "세금 납부",
          href: "/organism?page=세금납부",
        },
        {
          title: "납부 내역",
          href: "/organism?page=납부내역",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="px-20 text-gray-700 py-10 font-bold text-24">
        Organism Page
      </h2>
      <div className="p-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] mx-auto">
        {/* {page && (
          <div className="flex items-center justify-center p-5 border-2 bg-gray-200 rounded-sm">
            <p>
              <span className="font-semibold">{page} </span>
              <span>{` 페이지 입니다.`}</span>
            </p>
          </div>
        )} */}
        <Suspense>
          <PageName />
        </Suspense>
        <div className="mb-[100px]">
          <p className="font-bold text-18 border-b py-3 mb-4">
            메뉴바 horizontal.ver
          </p>
          <NavigationMenuDemo
            navigationData={navigationData}
            orientation="horizontal"
          />
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            메뉴바 vertical.ver
          </p>
          <NavigationMenuDemo
            navigationData={navigationData}
            orientation="vertical"
          />
        </div>
      </div>
    </div>
  );
}

export default OrganismPage;
