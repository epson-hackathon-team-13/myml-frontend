"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type PageTabType = {
  text: string;
  value: string;
}[];

type PageTabProps = {
  data: PageTabType;
  isTransparent?: boolean;
  type?: "EXAM" | "LECTURE";
  currentPath?: string;
};

const PageTab = ({ data, isTransparent, type, currentPath }: PageTabProps) => {
  const path = usePathname();
  const originalPath =
    type === "LECTURE" ? currentPath + `&tab=` : path + `?tab=`; // tab 파라미터를 합성한 path

  const router = useRouter();
  const currentTab = useSearchParams().get("tab");

  return (
    <div
      className={`px-[35px] border-b flex gap-8 ${isTransparent ? "" : "bg-white"} ${type === "EXAM" && "px-0"}`}
    >
      {data.map((tab) => (
        <button
          onClick={() => router.push(`${originalPath}${tab.value}`)}
          className={`h-[55px] text-[14px] px-2 ${currentTab === tab.value ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-500"}`}
          key={tab.text}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

export default PageTab;
