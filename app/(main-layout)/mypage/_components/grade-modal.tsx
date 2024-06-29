import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type ModalProps = {
  total: number;
  grade: number;
  onClickClose: () => void;
};

const GradeModal: React.FC<ModalProps> = ({ total, grade, onClickClose }) => {
  const [isCorrect, setCorrect] = useState<boolean | null>(null);

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
    <div className="fixed left-0 right-0 top-0 flex h-screen z-[9999] items-center justify-center bg-black bg-opacity-20">
      <div className="fixed top-0  left-0 right-0 w-full h-screen">
        {isCorrect && <Confetti gravity={0.3} />}
      </div>

      <div className="bg-white rounded-[12px] min-w-[280px] max-w-[320px]">
        <div className="p-6 flex h-[120px] justify-center items-center">
          <p className="text-center">{`Excellent. You guessed ${grade} out of ${total} correctly.`}</p>
        </div>
        <button
          onClick={onClickClose}
          className="body1-16-b w-full py-[13px] border-t border-black/10 text-primary"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default GradeModal;
