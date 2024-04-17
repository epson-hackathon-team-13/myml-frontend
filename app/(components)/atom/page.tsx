"use client";

import AccordionDemo from "@/components/atoms/AccordionDemo";
import AvatarDemo from "@/components/atoms/AvatarDemo";
import BreadcrumbDemo from "@/components/atoms/BreadCrumbDemo";
import ButtonDemo, { ButtonData } from "@/components/atoms/ButtonDemo";
import SingleCalendarDemo from "@/components/atoms/CalendarDemo";
import CheckBoxDemo, { CheckBoxData } from "@/components/atoms/CheckBoxDemo";
import InputDemo, { InputData } from "@/components/atoms/InputDemo";
import RangeCalendarDemo from "@/components/atoms/RangeCalendarDemo";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, SearchCodeIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

function AtomPage() {
  // 아코디언 컴포넌트 데이터 사용 예시
  const accordionData = [
    { title: "질문 1", content: "대답 1" },
    { title: "질문 2", content: "대답 2" },
    { title: "질문 3", content: "대답 3" },
  ];

  // 브레드크럼 컴포넌트 데이터 사용 예시
  const currentPath = usePathname();
  const breadcrumData = [
    [{ title: "홈페이지", href: "/" }],
    [{ title: "컴포넌트", href: "/component" }],
    [{ title: "아톰", href: "/atom" }],
  ] as { title: string; href: string }[][];

  // 버튼 컴포넌트 데이터 사용 예시
  const buttonData: ButtonData[] = [
    {
      text: "닫기",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2 flex justify-center",
    },
    {
      text: "닫기",
      buttonType: "outline",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "destructive",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "link",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "secondary",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "ghost",
      clickHandler: () => console.log("hi"),
      buttonClass: "w-[80px] h-[40px] gap-2 flex-row-reverse",
    },
  ];
  const buttonData2: ButtonData[] = [
    {
      text: "닫기",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "outline",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "destructive",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "link",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "secondary",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "ghost",
      clickHandler: () => console.log("hi"),
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
  ];

  // 체크박스 컴포넌트 데이터 사용 예시
  const checkboxData: CheckBoxData[] = [{ text: "여성" }, { text: "남성" }];

  // 인풋 컴포넌트 데이터 사용 예시
  const inputData: InputData[] = [
    { type: "text", placeholder: "이름을 입력해 주세요." },
    {
      inputClass: "relative pr-9",
      type: "password",
      placeholder: "비밀번호를 입력해 주세요.",
      children: (
        <EyeIcon className="absolute cursor-pointer text-gray-600 right-0 top-0 mt-[8px] mr-2" />
      ),
    },
    {
      type: "text",
      placeholder: "한다글다글",
      readonly: true,
      inputClass: "focus-visible:ring-0 placeholder:text-gray-600 bg-gray-100",
    },
    {
      inputClass: "relative pr-9",
      type: "password",
      placeholder: "검색어를 입력해 주세요.",
      children: (
        <SearchCodeIcon className="absolute cursor-pointer right-0 top-0 text-gray-800 mt-[8px] mr-2" />
      ),
    },
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
          <div className="flex items-start mt-5">
            <BreadcrumbDemo
              currentPath={currentPath}
              breadcrumData={breadcrumData}
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">버튼 text.ver</p>
          <div className="flex items-start gap-3 mt-5">
            {buttonData.map((btnData) => (
              <ButtonDemo buttonData={btnData} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3">버튼 icon.ver</p>
          <div className="flex items-start gap-3 mt-5">
            {buttonData2.map((btnData) => (
              <ButtonDemo buttonData={btnData} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캘린더 single.ver
          </p>
          <SingleCalendarDemo calendarClass="w-[300px] border shadow-md flex justify-center" />
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캘린더 range.ver
          </p>
          <RangeCalendarDemo calendarClass="w-[300px] border shadow-md flex justify-center" />
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">체크박스</p>
          <div className="flex gap-3">
            {checkboxData.map((checkbox) => (
              <CheckBoxDemo key={checkbox.text} checkBoxData={checkbox} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">인풋</p>
          <div className="flex gap-3">
            {inputData.map((input) => (
              <InputDemo key={input.placeholder} inputData={input} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AtomPage;
