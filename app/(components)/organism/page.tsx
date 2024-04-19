import NavigationMenuDemo from "@/components/organism/NavigationDemo";

function OrganismPage() {
  return (
    <div>
      <h1 className="px-20 py-10 font-bold text-24">Organism Page</h1>
      <div className="p-20 mb-[100px] flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div>
          <p className="font-bold text-18 border-b py-3 mb-4">메뉴바</p>
          <NavigationMenuDemo />
        </div>
      </div>
    </div>
  );
}

export default OrganismPage;
