import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// todo : 구글 폰트 사용 설명 주석 추가
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.naver.com"), // todo : 실제 도메인 주소
  title: "한다글다글",
  description: "한다글다글 컴포넌트 레포지토리",
  openGraph: {
    title: "한다글다글",
    description: "한다글다글 컴포넌트 레포지토리",
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
      <body
        className={`${inter.className} font-Pretendard max-w-[900px] px-5 min-w-[375px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
