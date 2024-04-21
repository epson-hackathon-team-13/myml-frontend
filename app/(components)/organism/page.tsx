"use client";

import NavigationMenuDemo, {
  NavigationData,
} from "@/components/organism/NavigationDemo";

function OrganismPage() {
  // 네비게이션 데이터 사용 예시
  const navigationData: NavigationData = [
    {
      key: "MENU",
      title: "세금 계산서",
      content: [
        {
          title: "부가가치세 신고",
          href: "/",
        },
        {
          title: "종합소득세 신고",
          href: "/",
        },
        {
          title: "양도소득세 신고",
          href: "/",
        },
      ],
    },
    {
      key: "MENU",
      title: "세금 신고",
      content: [
        {
          title: "부가가치세 신고",
          href: "/",
        },
        {
          title: "종합소득세 신고",
          href: "/",
        },
        {
          title: "양도소득세 신고",
          href: "/",
        },
      ],
    },
    {
      key: "MENU",
      title: "납부 고지",
      content: [
        {
          title: "세금 납부",
          href: "/",
        },
        {
          title: "납부 내역",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="px-20 py-10 font-bold text-24">Organism Page</h1>
      <div className="p-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] mx-auto">
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
