import { speak } from "@/components/home/today-expression-card";
import { Button } from "@/components/ui/button";
import { Volume2Icon } from "lucide-react";

const QuestionCard = ({
  word,
  res,
}: {
  word: string;
  res: { transWord: string; transDfn: string };
}) => {
  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
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
      <div className="flex flex-col gap-5 mb-10">
        <p className="bg-secondary rounded-md p-2 body1-16-b max-w-max">
          개발 중인 부분입니다.
        </p>
        <div className="flex items-center"></div>
      </div>
      <Button className="text-black text-16">Add this word to My List</Button>
    </div>
  );
};

export default QuestionCard;
