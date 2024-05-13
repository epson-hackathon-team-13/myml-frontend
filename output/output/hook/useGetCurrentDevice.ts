import { useEffect, useState } from "react";

// 브라우저 width 측정 훅
const useGetCurrentDevice = () => {
  const [width, setWidth] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (window === undefined) {
      return undefined;
    }
    // width resize 핸들러
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!width) return null;

  // todo : 상수 처리
  if (width <= 768) {
    return "mob";
  }
  if (width <= 1200) {
    return "tab";
  }
  return "web";
};

export default useGetCurrentDevice;
