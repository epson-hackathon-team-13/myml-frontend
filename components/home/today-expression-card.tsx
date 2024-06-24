"use client";

import { Volume2Icon } from "lucide-react";

import { Button } from "../ui/button";

const pitch = 0.9;
const rate = 0.9;
// async function populateVoiceList(synth: SpeechSynthesis) {
//   try {
//     const voices = await synth.getVoices().sort(function (a, b) {
//       const aname = a.name.toUpperCase();
//       const bname = b.name.toUpperCase();
//       if (aname < bname) return -1;
//       else if (aname === bname) return 0;
//       else return +1;
//     });

//     return voices;
//   } catch (error) {
//     throw new Error("Failure retrieving voices");
//   }
// }

export async function speak(textToRead: string, synth: SpeechSynthesis) {
  //   if (speechSynthesis.onvoiceschanged !== undefined) {
  //     speechSynthesis.onvoiceschanged = () => populateVoiceList;
  //   }

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
  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };
  return (
    <div className="py-5 bg-[#FFECCC]/50 rounded-md w-[50%] flex flex-col gap-3 px-6 font-medium">
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
          <Button variant={"secondary-outline"} className="text-black">
            A. Who are you?
          </Button>
          <Button variant={"secondary-outline"} className="text-black">
            B. where are you?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodayExpressionCard;