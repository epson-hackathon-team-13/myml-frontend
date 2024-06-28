import { useGetMyWordList } from "@/hook/song/use-get-my-word";
import { useGetMyInfo } from "@/hook/user/use-get-my-info";
import { PencilIcon } from "lucide-react";
import React from "react";

const UserBox = () => {
  const user = useGetMyInfo();
  const words = useGetMyWordList();

  if (!user || !words) return;
  return (
    <div>
      <div className="p-5 bg-secondary/40 flex-col web:flex-row gap-3 web:gap-0 items-start flex justify-between web:items-center web:h-[230px] rounded-md">
        <div className="web:h1-36-r h2-28-r">
          <p>안녕하세요. </p>
          <div className="flex gap-2 items-center">
            <span>
              나는{" "}
              <strong className="font-extrabold">
                {user.nickname || "정보 없음"}
              </strong>
              입니다.
            </span>
            <button>
              <PencilIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-3 p-3 px-5 rounded-md">
          <p className="web:h3-24-b text-[20px] font-semibold">
            Learning Status 🔥
          </p>
          <div className="flex gap-3">
            <div className="bg-[#FFECCC]/50 flex justify-center flex-col items-center rounded-md px-3 py-1">
              <p>song</p>
              <p className="body2-14-b">2</p>
            </div>
            <div className="bg-[#FFECCC]/50 flex justify-center flex-col items-center rounded-md px-3 py-1">
              <p>word</p>
              <p className="body2-14-b">{words.length}</p>
            </div>
            <div className="bg-[#FFECCC]/50 flex justify-center flex-col items-center rounded-md px-3 py-1">
              <p>level</p>
              <p className="body2-14-b">{user.level}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
