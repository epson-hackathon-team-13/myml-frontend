import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex border min-h-screen relative justify-center flex-col items-center p-24">
      <Button>1</Button>
      <Button disabled>2</Button>
      <Button size={"md"}>3</Button>
      <Button variant={"outline"}>3</Button>
    </main>
  );
}
