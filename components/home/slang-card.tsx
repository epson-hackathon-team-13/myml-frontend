"use client";

import { Volume2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { speak } from "./today-expression-card";

const SlangCard = () => {
  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };
  return (
    <div className="py-5 bg-secondary/50 rounded-md w-[50%] flex flex-col gap-3 px-6 font-medium">
      <p className="text-18 ">Korean Slang</p>
      <div className="py-4 px-3 h-[170px] bg-white rounded-md">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-18 font-semibold">폼 미쳤다.</p>
            <Button
              variant="outline"
              size={"icon"}
              startIcon={<Volume2Icon className="w-4 h-4" />}
              onClick={() => onClickTTS("폼 미쳤다.")}
            ></Button>
          </div>

          <p>
            <span>
              {`The term is a combination of "form", which means shape or skill,
              and "미쳤다", which means unusual. It is used to express
              admiration for someone's ability or condition.`}
            </span>
            <span>
              {`It is used similarly to phrases like "You killed it" or "You
              nailed it."`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlangCard;
