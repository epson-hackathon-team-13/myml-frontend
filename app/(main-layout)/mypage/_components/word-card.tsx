import { speak } from "@/components/home/today-expression-card";
import Modal from "@/components/molecules/modal";
import TwoButtonModal from "@/components/molecules/two-button-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, Volume2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const [modal, setModal] = useState(false);
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
    <div className="flex relative bg-etc-soft-yellow/30 gap-3 flex-col justify-center px-5 h-[150px] rounded-md">
      {modal && (
        <TwoButtonModal
          title="Do you want to go review?"
          secondBtnText="Yes"
          firstBtnText="It's Okay"
          onClickButton={onClickTitle}
          setModal={setModal}
        />
      )}
      <div className="flex justify-between items-center">
        <div className="min-w-[145px] flex items-center gap-2 shrink-0">
          <p className="h2-28-b min-w-max flex gap-2">
            <span className=" px-1">{data.word}</span>
            <span className="text-black/20">{`|`}</span>
            <span className=" px-1">{data.transWord}</span>
          </p>
          <Button
            variant="outline"
            size={"icon"}
            startIcon={<Volume2Icon className="w-4 h-4" />}
            onClick={() => onClickTTS(data.word)}
          ></Button>
        </div>
        <button
          onClick={() => setModal(true)}
          className="flex absolute top-0 right-0 mt-5 mr-4 bg-[#C6C2B8] body2-14-b px-3 py-1 rounded-full gap-1 items-center"
        >
          <p>
            <span>{data.title} - </span>
            <span>{data.artist}</span>
          </p>
          <ChevronRight className="ml-auto -mr-1" />
        </button>
      </div>
      <div className="body1-16-r web:text-[18px]">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default WordCard;
