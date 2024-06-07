export default function Home() {
  return (
    <main className="flex border min-h-screen relative justify-center flex-col items-center p-24">
      <div className="flex flex-col gap-6">
        <p>Color Guide</p>
        <p className="text-18 animation">Black</p>
        <div className="flex gap-4">
          <p className="bg-black/80 w-10 h-10" />
          <p className="bg-black/50 w-10 h-10" />
          <p className="bg-black/20 w-10 h-10" />
          <p className="bg-black/10 w-10 h-10" />
          <p className="bg-black/5 w-10 h-10" />
          <p className="bg-black/2 w-10 h-10" />
        </div>
        <p className="text-18">White</p>
        <div className="flex gap-4">
          <p className="bg-white w-10 h-10" />
          <p className="bg-white/80 w-10 h-10" />
          <p className="bg-white/50 w-10 h-10" />
          <p className="bg-white/20 w-10 h-10" />
          <p className="bg-white/10 w-10 h-10" />
        </div>
        <p className="text-18">Primary Color</p>
        <div className="flex gap-4">
          <p className="bg-primary w-10 h-10" />
          <p className="bg-primary/50 w-10 h-10" />
          <p className="bg-primary/20 w-10 h-10" />
          <p className="bg-primary/10 w-10 h-10" />
          <p className="bg-primary/5 w-10 h-10" />
        </div>
        <p className="text-18">Secondary Color</p>
        <div className="flex gap-4">
          <p className="bg-secondary w-10 h-10" />
          <p className="bg-secondary/50 w-10 h-10" />
          <p className="bg-secondary/20 w-10 h-10" />
          <p className="bg-secondary/10 w-10 h-10" />
          <p className="bg-secondary/5 w-10 h-10" />
        </div>
        <p className="text-18">Etc Color</p>
        <div className="flex gap-4">
          <p className="bg-etc-blue w-10 h-10" />
          <p className="bg-etc-soft-blue w-10 h-10" />
        </div>

        <div className="flex gap-4">
          <p className="bg-etc-green w-10 h-10" />
          <p className="bg-etc-soft-green w-10 h-10" />
        </div>

        <div className="flex gap-4">
          <p className="bg-etc-orange w-10 h-10" />
          <p className="bg-etc-soft-orange w-10 h-10" />
        </div>

        <div className="flex gap-4">
          <p className="bg-etc-red w-10 h-10" />
          <p className="bg-etc-soft-red w-10 h-10" />
        </div>

        <div>
          <p className="text-18 mb-3">Interaction Color</p>
          <div className="flex gap-4">
            <p className="bg-error w-10 h-10" />
            <p className="bg-success w-10 h-10" />
            <p className="bg-warning w-10 h-10" />
          </div>
        </div>
        <p>Typo Guide</p>
        <div>
          <p className="h1-36-r">H1/36/Regular</p>
          <p className="h1-36-b">H1/36/B</p>
          <p className="h2-28-r">H2/28/R</p>
          <p className="h2-28-b">H2/28/B</p>
          <p className="h2-28-b">H2/28/B</p>
        </div>
      </div>
    </main>
  );
}
