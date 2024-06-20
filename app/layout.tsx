import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ballagain.com"),
  title: "Ball Again",
  description: "Let's learn korean with your favorite k-pop song!",
  openGraph: {
    title: "Ball Again",
    description: "Let's learn korean with your favorite k-pop song!",
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
      <body className="font-Pretendard max-w-[1200px] px-5 min-w-[375px] mx-auto">
        {children}
      </body>
    </html>
  );
}
