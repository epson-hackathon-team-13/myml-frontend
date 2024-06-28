import Modal from "@/components/molecules/modal";
import TwoButtonModal from "@/components/molecules/two-button-modal";
import { Button } from "@/components/ui/button";
import useAddOcrImg from "@/hook/ocr/use-add-ocr-img";
import { useGetMyWordList } from "@/hook/song/use-get-my-word";
import { EraserIcon, Volume2Icon } from "lucide-react";
import { useRef, useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";
import GradeModal from "./grade-modal";

const ExamBox = () => {
  const words = useGetMyWordList();
  const signRefs = useRef<(SignatureCanvas | null)[]>([]);
  const [modal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { loading, onSubmit, success } = useAddOcrImg();

  // 서명 지우기 핸들러
  const handleClearSign = (index: number) => {
    signRefs.current[index]?.clear();
  };

  if (!words) return null;

  // 이미지 결합 및 전송 핸들러
  const handleSubmit = async () => {
    const canvasWidth = 400;
    const canvasHeight = 150;
    const combinedCanvas = document.createElement("canvas");
    const totalHeight = canvasHeight * words.length;

    combinedCanvas.width = canvasWidth;
    combinedCanvas.height = totalHeight;

    const ctx = combinedCanvas.getContext("2d");

    signRefs.current.forEach((signCanvas, index) => {
      if (signCanvas) {
        const imageData = signCanvas.toDataURL();
        const image = new Image();
        image.src = imageData;

        image.onload = () => {
          ctx?.drawImage(
            image,
            0,
            canvasHeight * index,
            canvasWidth,
            canvasHeight,
          );

          if (index === signRefs.current.length - 1) {
            combinedCanvas.toBlob(async (blob) => {
              if (!blob) return;
              const formData = new FormData();
              formData.append("file", blob, "combined-image.png");

              const blobUrl = URL.createObjectURL(blob);
              console.log(blobUrl);

              await onSubmit(formData);

              setModal(false);
              setSubmitted(true);
            });
          }
        };
      }
    });
  };
  return (
    <div className="flex flex-col gap-4 py-5">
      {submitted && (
        <GradeModal
          total={words.length}
          grade={2}
          onClickClose={() => setSubmitted(false)}
        />
      )}
      {modal && (
        <TwoButtonModal
          title="Do you want to submit?"
          firstBtnText="No"
          secondBtnText="Yes"
          onClickButton={handleSubmit}
          setModal={setModal}
        />
      )}
      <div>
        <div className="flex bg-[#FFEFCA]/50 pb-10 flex-col items-center gap-5 web:px-6 px-3 py-5 rounded-md ">
          <p className="body1-16-b bg-[#3E3A32] text-[#FFEFCA] px-2 max-w-max web:h3-24-b mb-3">
            Write the Korean alphabet of the description
          </p>
          <div className="flex flex-col max-w-[400px] w-full items-center gap-8">
            {words.map((word, i) => (
              <div
                key={word.word + word.transWord + i}
                className="flex w-full flex-col gap-2"
              >
                <p className="body1-16-b flex gap-1">
                  <span>{`Q${i + 1}. `}</span>
                  <span className="bg-white px-[2px] whitespace-pre-line">
                    {word.description}
                  </span>
                </p>
                <div className="web:grid grid-cols-3 gap-3 flex flex-col">
                  <div className="flex bg-white relative w-[100vw] max-w-[400px] items-center h-[150px] justify-center">
                    <ReactSignatureCanvas
                      ref={(el: any) => (signRefs.current[i] = el)}
                      canvasProps={{
                        className:
                          "w-full border h-[150px] border-gray-200 sigCanvas absolute top-0 bottom-0 left-0",
                      }}
                    />
                    <button
                      className="absolute top-0 right-0 mt-3 mr-3"
                      onClick={() => handleClearSign(i)}
                    >
                      <EraserIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-5">
          <Button
            onClick={() => setModal(true)}
            className="w-full web:max-w-[500px] mx-auto"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamBox;
