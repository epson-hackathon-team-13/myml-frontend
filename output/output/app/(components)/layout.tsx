import Link from "next/link";
import "../globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="max-w-[1200px] mx-auto py-5">
        <Link href="/" className="flex gap-3 items-center">
          <Image src="/png/logo.png" width={50} height={50} alt="한다글다글" />
          <h1 className="text-36 font-bold">한다글다글</h1>
        </Link>
      </header>
      <main className="max-w-[1200px] mx-auto">
        <div className="font-Pretendard">{children}</div>
      </main>
    </>
  );
}
