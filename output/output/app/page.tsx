import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen relative justify-center flex-col items-center p-24">
      <h1 className="mt-0">한다글다글!@</h1>
      <div className=" mt-[200px] flex gap-20">
        <button type="button">
          <Link href="/atom">Atom Component</Link>
        </button>
        <button type="button">
          <Link href="/molecule">Molecule Component</Link>
        </button>
        <button type="button">
          <Link href="/organism">Organism Component</Link>
        </button>
      </div>
    </main>
  );
}
