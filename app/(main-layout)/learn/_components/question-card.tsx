import { Song, SongWordPostReq } from "@/apis/dto/song";
import { speak } from "@/components/home/today-expression-card";
import { Button } from "@/components/ui/button";
import useAddMyWord from "@/hook/song/use-add-my-word";
import { EraserIcon, Volume2Icon } from "lucide-react";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const QuestionCard = ({
  songInfo,
  word,
  res,
}: {
  songInfo: Song;
  word: string;
  res: { transWord: string; transDfn: string };
}) => {
  const signRefs = useRef<(SignatureCanvas | null)[]>([]);
  const { onSubmit } = useAddMyWord();

  // 서명 지우기 핸들러
  const handleClearSign = (index: number) => {
    signRefs.current[index]?.clear();
  };

  // 문제 소리 듣기 핸들러
  const onClickTTS = (text: string) => {
    speechSynthesis.cancel();
    speak(text, window.speechSynthesis);
  };

  // 문제 추가 버튼 핸들러
  const onClickAddWord = () => {
    const newData: SongWordPostReq = {
      word,
      transWord: res.transWord,
      description: res.transDfn,
      musicId: Number(songInfo.id),
      gender: songInfo.gender,
      artist: songInfo.artist,
      title: songInfo.title,
      imageUrl: songInfo.imageUrl,
    };
    onSubmit({ ...newData });
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
        <div className="flex flex-col web:grid grid-cols-3 items-center gap-3 px-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="flex bg-white relative w-full items-center h-[150px] justify-center"
            >
              <p className="relative text-[70px] web:text-[85px] text-gray-100">
                {word}
              </p>
              <SignatureCanvas
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
      <Button
        onClick={onClickAddWord}
        className="bg-primary/90 text-28 text-white ml-auto font-bold max-w-max py-8"
      >
        Add this word to My List
      </Button>
    </div>
  );
};

export default QuestionCard;
