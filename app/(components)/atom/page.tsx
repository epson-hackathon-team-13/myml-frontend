"use client";

import AccordionDemo from "@/components/atoms/AccordionDemo";
import AvatarDemo from "@/components/atoms/AvatarDemo";
import BreadcrumbDemo from "@/components/atoms/BreadCrumbDemo";
import ButtonDemo, { ButtonData } from "@/components/atoms/ButtonDemo";
import SingleCalendarDemo from "@/components/atoms/CalendarDemo";
import CheckBoxDemo, { CheckBoxData } from "@/components/atoms/CheckBoxDemo";
import InputDemo, { InputData } from "@/components/atoms/InputDemo";
import ProgressDemo, { ProgressData } from "@/components/atoms/ProgressDemo";
import RadioDemo, { RadioData } from "@/components/atoms/RadioDemo";
import RangeCalendarDemo from "@/components/atoms/RangeCalendarDemo";
import SelectDemo, { SelectData } from "@/components/atoms/SelectDemo";
import { Badge } from "@/components/ui/badge";
import { Check, EyeIcon, SearchIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2 flex justify-center",
    },
    {
      text: "닫기",
      buttonType: "outline",
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "destructive",
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "link",
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "secondary",
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "ghost",
      clickHandler: () => null,
      buttonClass: "w-[80px] h-[40px] gap-2 flex-row-reverse",
    },
  ];
  const buttonData2: ButtonData[] = [
    {
      text: "닫기",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "outline",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "destructive",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "link",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "secondary",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
    {
      text: "닫기",
      buttonType: "ghost",
      clickHandler: () => null,
      children: <XIcon />,
      buttonClass: "w-[80px] h-[40px] gap-2",
    },
  ];

  // 체크박스 컴포넌트 데이터 사용 예시
  const checkboxData: CheckBoxData[] = [{ text: "여성" }, { text: "남성" }];

  // 인풋 컴포넌트 데이터 사용 예시
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "wltn",
    logo: "한다글다글",
    search: "",
  });
  const inputData: InputData[] = [
    {
      type: "text",
      onChangeValue: (value: string) =>
        setInputValue({ ...inputValue, name: value }),
      placeholder: "이름을 입력해 주세요.",
      value: inputValue.name,
    },
    {
      inputClass: "relative pr-9",
      type: "password",
      value: inputValue.password,
      onChangeValue: (value: string) =>
        setInputValue({ ...inputValue, password: value }),
      placeholder: "비밀번호를 입력해 주세요.",
      children: (
        <EyeIcon className="absolute cursor-pointer text-gray-600 right-0 top-0 mt-[8px] mr-2" />
      ),
    },
    {
      type: "text",
      onChangeValue: (value: string) =>
        setInputValue({ ...inputValue, logo: value }),
      value: inputValue.logo,
      placeholder: "",
      readonly: true,
      inputClass: "focus-visible:ring-0 text-gray-600 bg-gray-100",
    },
    {
      inputClass: "relative pr-9",
      onChangeValue: (value: string) =>
        setInputValue({ ...inputValue, search: value }),
      type: "text",
      value: inputValue.search,
      placeholder: "검색어를 입력해 주세요.",
      children: (
        <SearchIcon className="absolute cursor-pointer right-0 top-0 text-gray-800 mt-[8px] mr-2" />
      ),
    },
  ];

  // 프로그레스 컴포넌트 데이터 사용 예시
  const [progressValue] = useState({
    first: 0,
    second: 12,
    third: 30,
  });
  const progressData: ProgressData[] = [
    {
      progress: progressValue.first,
    },
    {
      progress: progressValue.second,
      barClass: "bg-red-100",
    },
    {
      progress: progressValue.third,
    },
  ];

  // 라디오 컴포넌트 데이터 사용 예시
  const radioData: RadioData = {
    defaultValue: "both",
    radioGroup: [{ value: "woman" }, { value: "man" }, { value: "both" }],
  };
  const radioData2: RadioData = {
    defaultValue: "both",
    radioGroup: [{ value: "woman" }, { value: "man" }, { value: "both" }],
    circleClass: "text-green-800",
  };
  const radioData3: RadioData = {
    defaultValue: "both",
    radioGroup: [{ value: "woman" }, { value: "man" }, { value: "both" }],
    circleClass: "text-pink-600",
  };

  // 셀렉트 컴포넌트 데이터 사용 예시
  const selectData: SelectData = {
    placeholder: "수강신청",
    selectItem: ["기초 선형대수학", "[일반] 화학 실험1", "[일반] 화학 실험2"],
  };
  const selectData2: SelectData = {
    placeholder: "재활용 분류",
    selectItem: ["플라스틱", "유리", "종이류", "페트"],
    icon: <Check className="mr-2 w-5 h-5" />,
  };
  const selectData3: SelectData = {
    placeholder: "추가 상품",
    selectItem: ["공책", "필통", "지우개와 연필", "에어팟"],
    icon: <Check className="mr-2 w-5 h-5" />,
    selectItemClass: "focus:bg-pink-100",
  };

  return (
    <div className="px-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] py-10 mx-auto">
      <h2 className="text-gray-700 py-10 font-bold text-24">Atom Page</h2>
      <div>
        <p className="font-bold text-18 border-b py-3">아코디언 right.ver</p>
        <AccordionDemo accordionData={accordionData} chevronDirection="right" />
      </div>
      <div>
        <p className="font-bold text-18 border-b py-3">아코디언 left.ver</p>
        <AccordionDemo accordionData={accordionData} chevronDirection="left" />
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
            <ButtonDemo key={btnData.text} buttonData={btnData} />
          ))}
        </div>
      </div>
      <div>
        <p className="font-bold text-18 border-b py-3">버튼 icon.ver</p>
        <div className="flex items-start gap-3 mt-5">
          {buttonData2.map((btnData) => (
            <ButtonDemo key={btnData.text} buttonData={btnData} />
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
        <p className="font-bold text-18 border-b py-3 mb-4">캘린더 range.ver</p>
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
        <p className="font-bold text-18 border-b py-3 mb-4">입력창</p>
        <div className="flex gap-3">
          {inputData.map((input) => (
            <InputDemo key={input.placeholder} inputData={input} />
          ))}
        </div>
      </div>
      <div>
        <p className="font-bold text-18 border-b py-3 mb-4">프로그레스 바</p>
        <div className="flex flex-col gap-3">
          {progressData.map((data, i) => (
            <div key={data.progress + i} className="flex gap-3 items-center">
              <p className="shrink-0 w-[50px]">{data.progress} %</p>
              <ProgressDemo key={data.progress} progressData={data} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-bold text-18 border-b py-3 mb-4">라디오 체크</p>
        <div className="flex gap-20">
          <RadioDemo radioData={radioData} />
          <RadioDemo radioData={radioData2} />
          <RadioDemo radioData={radioData3} />
        </div>
      </div>
      <div className="pb-[100px]">
        <p className="font-bold text-18 border-b py-3 mb-4">셀렉트 박스</p>
        <div className="flex gap-20">
          <SelectDemo selectData={selectData} />
          <SelectDemo selectData={selectData2} />
          <SelectDemo selectData={selectData3} />
        </div>
      </div>
    </div>
  );
}
export default AtomPage;
