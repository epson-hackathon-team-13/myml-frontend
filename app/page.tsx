"use client";
import Banner from "@/components/home/banner";
import SlangCard from "@/components/home/slang-card";
import TodayExpressionCard from "@/components/home/today-expression-card";
import GlobalNavBar from "@/components/molecules/global-nav-bar";
export default function Home() {
  return (
    <main>
      <GlobalNavBar />
      <Banner />
      <div className="flex mt-2 gap-2">
        <TodayExpressionCard />
        <SlangCard />
      </div>
    </main>
  );
}
