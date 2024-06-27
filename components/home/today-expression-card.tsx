"use client";

import { Volume2Icon } from "lucide-react";
import { Button } from "../ui/button";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

// 음성 속도와 음 높이
const pitch = 0.9;
const rate = 0.9;

// 음성 출력 함수
export async function speak(textToRead: string, synth: SpeechSynthesis) {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (textToRead !== "") {
    const utterThis = new SpeechSynthesisUtterance(textToRead);
    utterThis.onend = function (event) {};
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
  }
}
const TodayExpressionCard = () => {
  const [isCorrect, setCorrect] = useState<boolean | null>(null);
  const [isShake, setShake] = useState(false);

  // 단어 음성 출력 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };

  // 컨페티 비활성화 업데이트
  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setCorrect(null);
      }, 3500);

    if (isCorrect) {
      timer();
    }

    return () => clearTimeout(timer());
  }, [isCorrect]);

  return (
    <div className="py-5 relative bg-etc-soft-yellow/50 rounded-md w-[50%] flex flex-col gap-3 px-6 font-medium">
      {isCorrect && (
        <div className="absolute top-0 left-0 right-0">
          <Confetti gravity={0.3} />
        </div>
      )}
      <p className="text-18 ">Weekly Korean Quiz</p>
      <div className="py-4 px-3 bg-white rounded-md">
        <div className="flex gap-2">
          <p className="text-18 font-semibold">너 누구야?</p>
          <Button
            variant="outline"
            size={"icon"}
            startIcon={<Volume2Icon className="w-4 h-4" />}
            onClick={() => onClickTTS("너 누구야?")}
          ></Button>
        </div>
        <span className="text-12">{`from <supernova - aespa>`}</span>

        <div className="flex mt-2 flex-col gap-2">
          <Button
            onClick={() => setCorrect(true)}
            variant={"secondary-outline"}
            className="text-black"
          >
            A. Who are you?
          </Button>
          <Button
            onClick={() => setCorrect(false)}
            variant={"secondary-outline"}
            className={`text-black ${isCorrect === false ? "animate-shake" : ""}`}
          >
            B. where are you?
          </Button>
          {isCorrect === false && <p>try again!</p>}
        </div>
      </div>
    </div>
  );
};

export default TodayExpressionCard;
