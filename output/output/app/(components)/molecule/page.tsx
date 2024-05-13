"use client";

import CarouselDemo, {
  CarouselData,
} from "@/components/molecules/CarouselDemo";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import TooltipDemo, { TooltipData } from "@/components/molecules/TooltipDemo";
import ToggleGroupDemo, {
  ToggleData,
} from "../../../components/molecules/ToggleGroupDemo";

function MoleculePage() {
  // 캐러샐 컴포넌트 데이터 사용 예시
  const carouselData: CarouselData = {
    carouselArr: [
      { content: "광고 1" },
      { content: "광고 2" },
      { content: "광고 3" },
    ],
  };
  const carouselData2: CarouselData = {
    opts: { loop: true },
    carouselArr: [{ content: "1" }, { content: "2" }, { content: "3" }],
  };
  const carouselData3: CarouselData = {
    opts: { loop: true },
    itemClass: "basis-1/2",
    carouselArr: [{ content: "1" }, { content: "2" }, { content: "3" }],
  };
  const carouselData4: CarouselData = {
    orientation: "vertical",
    CardClass: " h-[100px]",
    itemClass: "basis-1/2 flex items-center justify-center",
    contentClass: "h-[200px]",
    carouselArr: [
      { content: "1" },
      { content: "2" },
      { content: "3" },
      { content: "4" },
    ],
  };
  const carouselData5: CarouselData = {
    opts: { loop: true },
    itemClass: "basis-1/2",
    carouselContainerClass: "basis-1/2",
    plugins: [
      Autoplay({
        delay: 2000,
      }),
    ],
    carouselArr: [{ content: "1" }, { content: "2" }, { content: "3" }],
  };

  // 토글 그룹 컴포넌트 데이터 사용 예시
  const [selectedToggle, setToggle] = useState<string | string[]>([]);
  const toggleData: ToggleData = {
    groupArray: ["지금 결제", "나중에 결제", "복합 결제"],
    groupType: "single",
    itemClass: "text-20 px-5 py-10 border",
  };
  const [selectedToggle2, setToggle2] = useState<string | string[]>([]);
  const toggleData2: ToggleData = {
    groupArray: ["토핑 추가", "시럽 추가", "우유 추가"],
    itemClass:
      "text-20 px-5 py-10 border data-[state=on]:bg-blue-300 data-[state=on]:bg-opacity-30 data-[state=off]:text-gray-400",
    groupType: "multiple",
  };

  // 툴팁 컴포넌트 데이터 사용 예시
  const tooltipData: TooltipData[] = [
    {
      delayDuration: 50,
      buttonText: "구매",
      tooltipText: "2,000원 더 구매하면 무료배송",
    },
    {
      delayDuration: 50,
      buttonText: "클릭",
      tooltipText: "클릭하지 마세요",
      isDefaultOpen: true,
    },
    {
      buttonText: "제출하기",
      tooltipText: "클릭 전 확인하세요.",
      side: "bottom",
    },
  ];
  return (
    <div>
      <h1 className="px-20 text-gray-700 py-10 font-bold text-24">
        Molecule Page
      </h1>
      <div className="p-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">캐러샐</p>
          <div className="w-[300px] mx-auto">
            <CarouselDemo carouselData={carouselData} />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캐러샐 loop.ver
          </p>
          <div className="w-[300px] mx-auto">
            <CarouselDemo carouselData={carouselData2} />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캐러샐 division.ver
          </p>
          <div className="w-[500px] mx-auto">
            <CarouselDemo carouselData={carouselData3} />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캐러샐 vertical.ver
          </p>
          <div className="w-[300px] my-[100px]">
            <CarouselDemo carouselData={carouselData4} />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            캐러샐 animation.ver
          </p>
          <div className="w-[500px] mx-auto">
            <CarouselDemo carouselData={carouselData5} />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            토글 그룹 single.ver
          </p>
          <div>
            <ToggleGroupDemo
              setToggle={setToggle}
              selectedToggle={selectedToggle}
              toggleData={toggleData}
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">
            토글 그룹 multiple.ver
          </p>
          <div className="">
            <ToggleGroupDemo
              toggleData={toggleData2}
              selectedToggle={selectedToggle2}
              setToggle={setToggle2}
            />
          </div>
        </div>

        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">툴팁</p>
          <div className="my-10 pl-10 flex gap-20">
            {tooltipData.map((tooltip) => (
              <TooltipDemo key={tooltip.buttonText} tooltipData={tooltip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoleculePage;
