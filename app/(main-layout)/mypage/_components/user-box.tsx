import { PencilIcon, UserIcon } from "lucide-react";
import React from "react";

const UserBox = () => {
  return (
    <div>
      <div className="p-5 bg-secondary/40 flex justify-between items-center h-[230px] rounded-md">
        <div className="h1-36-r">
          <p>안녕하세요. </p>
          <div className="flex gap-2 items-center">
            <span>
              나는 <strong className="font-extrabold">지수</strong>입니다.
            </span>
            <button>
              <PencilIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-3 p-3 px-5 rounded-md">
          <p className="h3-24-b">Learning Status 🔥</p>
          <div className="flex gap-3">
            <div className="bg-[#FFECCC]/50 rounded-md px-3 py-1">
              <p>song</p>
              <p>2</p>
            </div>
            <div className="bg-[#FFECCC]/50 rounded-md px-3 py-1">
              <p>word</p>
              <p>3</p>
            </div>
            <div className="bg-[#FFECCC]/50 rounded-md px-3 py-1">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
