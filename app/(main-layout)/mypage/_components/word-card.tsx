import { speak } from "@/components/home/today-expression-card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Volume2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

type WordCardProps = {
  data: {
    word: string;
    transWord: string;
    description: string;
    title: string;
    musicId: number;
    artist: string;
  };
};

const WordCard: React.FC<WordCardProps> = ({ data }) => {
  const router = useRouter();

  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };

  // 노래 타이틀 버튼 핸들러
  const onClickTitle = () => {
    router.push(`/learn/${data.musicId}`);
  };
  return (
    <div className="flex bg-etc-soft-yellow/30 gap-3 flex-col justify-center px-5 h-[150px] rounded-md">
      <div className="flex justify-between items-center">
        <div className="min-w-[145px] flex items-center gap-2 shrink-0">
          <p className="h2-28-b min-w-max flex gap-2">
            <span className="bg-white px-1">{data.word}</span>
            <span className="text-black/20">{`|`}</span>
            <span className="bg-white px-1">{data.transWord}</span>
          </p>
          <Button
            variant="outline"
            size={"icon"}
            startIcon={<Volume2Icon className="w-4 h-4" />}
            onClick={() => onClickTTS(data.word)}
          ></Button>
        </div>
        <button
          onClick={onClickTitle}
          className="flex bg-[#C6C2B8] body2-14-b px-3 py-1 rounded-full gap-1 items-center"
        >
          <p>
            <span>{data.title} - </span>
            <span>{data.artist}</span>
          </p>
          <ChevronRight />
        </button>
      </div>
      <div className="text-[18px]">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default WordCard;
