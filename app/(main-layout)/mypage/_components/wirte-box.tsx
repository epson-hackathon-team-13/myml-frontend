import { speak } from "@/components/home/today-expression-card";
import { Button } from "@/components/ui/button";
import { useGetMyWordList } from "@/hook/song/use-get-my-word";
import { EraserIcon, Volume2Icon } from "lucide-react";
import { useRef } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";

const WriteBox = () => {
  const words = useGetMyWordList();
  const signRefs = useRef<(SignatureCanvas | null)[]>([]);

  // 서명 지우기 핸들러
  const handleClearSign = (index: number) => {
    signRefs.current[index]?.clear();
  };

  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };

  if (!words) return;
  return (
    <div className="flex flex-col gap-4 py-5">
      <div className="flex justify-between items-center">
        <p className="body1-16-b">{`Total (${words.length})`}</p>
      </div>
      <div>
        <div className="flex bg-[#C6C2B8]/50 flex-col gap-5 px-3 py-5 rounded-md ">
          <p className="bg-[#FFECCC] rounded-md p-2 body1-16-b max-w-max">
            Writing 3 times
          </p>
          <div className="flex flex-col w-full items-center gap-8 px-3">
            {words.map((word, i) => (
              <div
                key={word.word + word.transWord + i}
                className="flex w-full flex-col gap-2"
              >
                <p className="h3-24-b min-w-max flex gap-1">
                  <span className="bg-white px-[2px]">{word.word}</span>
                  <span className="text-black/20">{`|`}</span>
                  <span className="bg-white px-[2px]">{word.transWord}</span>
                  <Button
                    className="ml-1"
                    variant="outline"
                    size={"icon"}
                    startIcon={<Volume2Icon className="w-4 h-4" />}
                    onClick={() => onClickTTS(word.word)}
                  ></Button>
                </p>
                <div className="web:grid grid-cols-3 gap-3 flex flex-col">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="flex bg-white relative w-full items-center h-[150px] justify-center"
                    >
                      <p className="relative text-[70px] web:text-[85px] text-gray-100">
                        {word.word}
                      </p>
                      <ReactSignatureCanvas
                        ref={(el: any) => (signRefs.current[index] = el)}
                        canvasProps={{
                          className:
                            "w-full border h-[150px] border-gray-200 sigCanvas absolute top-0 bottom-0 left-0",
                        }}
                      />
                      <button
                        className="absolute top-0 right-0 mt-3 mr-3"
                        onClick={() => handleClearSign(index)}
                      >
                        <EraserIcon />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBox;
