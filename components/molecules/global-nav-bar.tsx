"use client";

import { PencilIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GlobalNavBar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-4">
      <h1>
        <button
          className="bg-[#52BCFF] py-4 px-4 rounded-md text-24 max-w-max"
          onClick={() => router.push("/")}
        >
          <span className="sr-only">Ball Again</span>
          <p className="font-extrabold text-white">Ball Again</p>
        </button>
      </h1>
      <div className="flex gap-3 items-center">
        <button onClick={() => router.push("/songs?tab=all")}>
          <PencilIcon className="w-6 h-6" />
        </button>
        <button>
          <UserIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default GlobalNavBar;
