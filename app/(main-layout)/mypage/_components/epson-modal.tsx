import Link from "next/link";

type EpsonModalProps = {
  setModal: (data: {
    epson: boolean;
    email: boolean;
    username: string;
    iframe: boolean;
  }) => void;
};

const EpsonModal: React.FC<EpsonModalProps> = ({ setModal }) => {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-screen items-center z-10 justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-[12px] max-w-[320px]">
        <div className="p-6 relative flex gap-3 flex-col h-[120px] justify-center items-center">
          <p className="text-center body1-16-r">
            <span>Are you using </span>
            <Link
              href={"https://epson.com/Support/Printers/sh/s1"}
              target="_blank"
              className="body1-16-b text-primary underline"
            >
              Epson Connect
            </Link>
            <span> ?</span>
          </p>
        </div>
        <div className="flex border-t">
          <button
            onClick={() =>
              setModal({
                epson: false,
                email: false,
                username: "",
                iframe: true,
              })
            }
            className="body1-16-r border-r w-full py-[13px] border-black/10 text-black/50"
          >
            No
          </button>
          <button
            onClick={() =>
              setModal({
                epson: false,
                email: true,
                username: "",
                iframe: false,
              })
            }
            className="body1-16-b w-full py-[13px] border-black/10 text-primary"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EpsonModal;
