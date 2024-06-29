import { Song } from "@/apis/dto/song";
import { Button } from "@/components/ui/button";
import {
  EraserIcon,
  MessageCircleQuestionIcon,
  Volume2Icon,
} from "lucide-react";
import ReactSignatureCanvas from "react-signature-canvas";

const QuestionBlurBox = () => {
  return (
    <div className="relative min-h-">
      <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 h-full">
        <p className="bg-primary/90 text-white body1-16-b items-center flex gap-1 p-5 rounded-lg relative shadow-lg z-10">
          <span>Click on the</span>
          <span>
            <MessageCircleQuestionIcon />
          </span>
          <span>to unlock the quiz!</span>
        </p>
      </div>
      <div className="flex flex-col blur-[4px]  relative gap-5 mb-10">
        <div className="flex bg-secondary/20 px-3 py-5 rounded-md flex-col gap-5">
          <p className="bg-secondary rounded-md p-2 body1-16-b max-w-max">
            Speaking 3 times
          </p>
          <div className="flex items-center">
            <div className="px-3 min-w-[145px] flex items-center gap-2 shrink-0">
              <p className="h3-24-b min-w-max flex gap-1">
                <span>사랑</span>
                <span className="text-black/20">{`|`}</span>
                <span>love</span>
              </p>
              <Button
                variant="outline"
                size={"icon"}
                startIcon={<Volume2Icon className="w-4 h-4" />}
              ></Button>
            </div>
            <div className="">
              <p>{`definition: The attitude of liking or enjoying something very much.`}</p>
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
                  사랑
                </p>
                <ReactSignatureCanvas
                  canvasProps={{
                    className:
                      "w-full border h-[150px] border-gray-200 sigCanvas absolute top-0 bottom-0 left-0",
                  }}
                />
                <button className="absolute top-0 right-0 mt-3 mr-3">
                  <EraserIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Button className="bg-primary/90 text-28 text-white ml-auto font-bold max-w-max py-8">
          Add this word to My List
        </Button>
      </div>
    </div>
  );
};

export default QuestionBlurBox;
