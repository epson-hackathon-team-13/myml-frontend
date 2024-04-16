import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen relative justify-center flex-col items-center p-24">
      <h1 className="mt-0">한다글다글</h1>
      <div className=" mt-[200px] flex gap-20">
        <button type="button">
          <Link href="/atom">아톰 컴포넌트</Link>
        </button>
        <button type="button">아톰 컴포넌트</button>
        <button type="button">아톰 컴포넌트</button>
      </div>
    </main>
  );
}
