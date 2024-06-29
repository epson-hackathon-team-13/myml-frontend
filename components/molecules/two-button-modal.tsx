type TwoButtonModalProps = {
  title: string;
  firstBtnText: string;
  secondBtnText: string;
  setModal: (data: boolean) => void;
  onClickButton: () => void;
};

const TwoButtonModal: React.FC<TwoButtonModalProps> = ({
  title,
  firstBtnText,
  secondBtnText,
  setModal,
  onClickButton,
}) => {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-screen items-center z-10 justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-[12px] max-w-[320px]">
        <div className="p-6 flex h-[120px] justify-center items-center">
          <p className="text-center">{title}</p>
        </div>
        <div className="flex border-t">
          <button
            onClick={() => setModal(false)}
            className="body1-16-r border-r w-full py-[13px] border-black/10 text-black/50"
          >
            {firstBtnText}
          </button>
          <button
            onClick={onClickButton}
            className="body1-16-b w-full py-[13px] border-black/10 text-primary"
          >
            {secondBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoButtonModal;
