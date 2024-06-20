import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselPlugin,
} from "@/components/ui/carousel";
import cn from "@/lib/utils";
import { CardContent } from "../ui/card";

export type CarouselData = {
  carouselArr: { content: string }[];
  carouselContainerClass?: string;
  contentClass?: string;
  CardClass?: string;
  itemClass?: string;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical"; // 캐러샐 이동 방향 / 기본값 : horizontal
  opts?: {
    active?: boolean; // 캐러샐 이동 활성화 여부 / 기본값 : true
    dragFree?: boolean; // 모멘텀 스크롤 여부 / 기본값 : false
    duration?: number; // 캐러샐 이동 애니메이션 시간 / 기본값 : 20 (20~60 사이가 권장값)
    loop?: boolean; // 캐러샐 루프 여부 / 기본값 : false
    align?: "start" | "end" | "center"; // 캐러샐 루프가 true일때 캐러샐 아이템 정렬 기준 / 기본값 : center
  };
};

function CarouselDemo({ carouselData }: { carouselData: CarouselData }) {
  return (
    <Carousel
      plugins={carouselData.plugins || undefined}
      opts={carouselData.opts}
      orientation={carouselData.orientation || "horizontal"}
      className={cn("w-full", carouselData.carouselContainerClass)}
    >
      <CarouselContent className={carouselData.contentClass}>
        {carouselData.carouselArr.map((carousel) => (
          <CarouselItem
            key={carousel.content}
            className={carouselData.itemClass}
          >
            <CardContent
              className={cn(
                "flex items-center justify-center aspect-square border",
                carouselData.CardClass,
              )}
            >
              {carousel.content}
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default CarouselDemo;
