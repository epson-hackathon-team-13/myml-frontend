import { speak } from "@/components/home/today-expression-card";
import { Button } from "@/components/ui/button";
import { EraserIcon, Volume2Icon } from "lucide-react";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const QuestionCard = ({
  word,
  res,
}: {
  word: string;
  res: { transWord: string; transDfn: string };
}) => {
  const signRef = useRef<any>();

  // 서명 지우기 핸들러
  const handleClearSign = () => {
    signRef.current.clear();
  };

  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex bg-secondary/20 px-3 py-5 rounded-md flex-col gap-5">
        <p className="bg-secondary rounded-md p-2 body1-16-b max-w-max">
          Speaking 3 times
        </p>
        <div className="flex items-center">
          <div className="px-3 min-w-[145px] flex items-center gap-2 shrink-0">
            <p className="h3-24-b min-w-max flex gap-1">
              <span>{word}</span>
              <span className="text-black/20">{`|`}</span>
              <span>{res.transWord}</span>
            </p>
            <Button
              variant="outline"
              size={"icon"}
              startIcon={<Volume2Icon className="w-4 h-4" />}
              onClick={() => onClickTTS(word)}
            ></Button>
          </div>
          <div className="">
            <p>{`definition: ${res.transDfn}`}</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FFECCC]/20 flex-col gap-5 px-3 py-5 rounded-md ">
        <p className="bg-[#FFECCC] rounded-md p-2 body1-16-b max-w-max">
          Writing 3 times
        </p>
        <div className="flex gap-3 px-3">
          <div className="flex bg-white relative w-[300px] items-center h-[150px] justify-center">
            <p className="relative text-[60px] z-100 text-gray-100">{word}</p>

            <SignatureCanvas
              ref={signRef}
              canvasProps={{
                className:
                  "w-full border border-gray-200 sigCanvas absolute top-0 left-0",
              }}
            />
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={handleClearSign}
            >
              <EraserIcon />
            </button>
          </div>
          <div className="flex bg-white relative w-[300px] items-center h-[150px] justify-center">
            {/* <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform text-gray-500 web:hidden"> */}
            <p className="relative text-[60px] z-100 text-gray-100">{word}</p>

            <SignatureCanvas
              ref={signRef}
              canvasProps={{
                className:
                  "w-full border border-gray-200 sigCanvas absolute top-0 left-0",
              }}
            />
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={handleClearSign}
            >
              <EraserIcon />
            </button>
          </div>
          <div className="flex bg-white relative w-[300px] items-center h-[150px] justify-center">
            {/* <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform text-gray-500 web:hidden"> */}
            <p className="relative text-[60px] z-100 text-gray-100">{word}</p>

            <SignatureCanvas
              ref={signRef}
              canvasProps={{
                className:
                  "w-full border border-gray-200 sigCanvas absolute top-0 left-0",
              }}
            />
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={handleClearSign}
            >
              <EraserIcon />
            </button>
          </div>
        </div>
      </div>
      <Button className="bg-primary/90 text-28 text-white ml-auto font-bold max-w-max py-8">
        Add this word to My List
      </Button>
    </div>
  );
};

export default QuestionCard;
