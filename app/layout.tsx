import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.naver.com"), // todo : 실제 도메인 주소
  title: "오늘묭해!",
  description: "요늘묭해에서 만나요",
  openGraph: {
    title: "오늘묭해!",
    description: "요늘묭해에서 만나요",
    images: ["http://..."], // todo : 실제 이미지 주소
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard max-w-[900px] px-5 min-w-[375px] mx-auto">
        {children}
      </body>
    </html>
  );
}
