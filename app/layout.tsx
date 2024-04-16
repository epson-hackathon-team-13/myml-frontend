import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.naver.com"), // 실제 도메인 연결해야함
  title: "한다글다글",
  description: "한다글다글 컴포넌트 레포지토리",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} font-Pretendard`}>{children}</body>
    </html>
  );
}
