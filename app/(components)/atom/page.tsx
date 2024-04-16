import AccordionDemo from "@/components/atoms/AccordionDemo";
import AvatarDemo from "@/components/atoms/AvatarDemo";
import BreadcrumbDemo from "@/components/atoms/BreadCrumbDemo";
import { Badge } from "@/components/ui/badge";
import React from "react";

function AtomPage() {
  const accordionData = [
    { title: "질문 1", content: "대답 1" },
    { title: "질문 2", content: "대답 2" },
    { title: "질문 3", content: "대답 3" },
  ];

  return (
    <div>
      <h1 className="px-20 py-10 font-bold text-24">AtomPage</h1>
      <div className="p-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div>
          <p className="font-bold text-18 border-b py-3">아코디언 right.ver</p>
          <AccordionDemo
            accordionData={accordionData}
            chevronDirection="right"
          />
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">아코디언 left.ver</p>
          <AccordionDemo
            accordionData={accordionData}
            chevronDirection="left"
          />
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">아바타</p>
          <div className="flex">
            <AvatarDemo
              avatarData={{
                src: "",
                alt: "지수 프로필 사진",
                fallback: "지수",
              }}
            />
            <AvatarDemo
              avatarClass="w-[100px] h-[100px]"
              avatarData={{
                src: "",
                alt: "지수 프로필 사진",
                fallback: "지수",
              }}
            />
            <AvatarDemo
              avatarClass="bg-gray-600"
              avatarData={{
                src: "",
                alt: "지수 프로필 사진",
                fallback: "지수",
              }}
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">뱃지</p>
          <div className="flex items-start">
            <Badge className="bg-white border w-[100px] border-gray-300 h-[100px] text-gray-700 hover:bg-gray-300">
              jisoo
            </Badge>
            <Badge className="w-[40px] h-[40px]">jisu</Badge>
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">브레드 크럼블</p>
          <div className="flex items-start">
            <BreadcrumbDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtomPage;
