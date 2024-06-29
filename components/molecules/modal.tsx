type ModalProps = {
  title: string;
  onClickClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, onClickClose }) => {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-screen z-[9999] items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-[12px] min-w-[280px] max-w-[320px]">
        <div className="p-6 flex h-[120px] justify-center items-center">
          <p className="text-center">{title}</p>
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

export default Modal;
