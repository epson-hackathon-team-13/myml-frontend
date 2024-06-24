import { LoaderIcon } from "lucide-react";
import { ReactNode, Suspense } from "react";

export const LoadIcon = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center bottom-0 right-0 w-full h-full">
      <LoaderIcon className="animate-spin w-20 h-20 duration-1000" />
    </div>
  );
};

const Loading = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LoadIcon />}>{children}</Suspense>;
};

export default Loading;
