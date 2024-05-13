import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type ToggleData = {
  groupType: "multiple" | "single";
  groupClass?: string;
  groupArray: string[];
  variant?: "default" | "outline";
  isDisabled?: boolean;
  itemClass?: string;
};

function ToggleGroupDemo({
  toggleData,
  setToggle,
  selectedToggle,
}: {
  setToggle: (data: string | string[]) => void;
  selectedToggle: string | string[];
  toggleData: ToggleData;
}) {
  return (
    <ToggleGroup
      onValueChange={(values: string | string[]) => setToggle(values)}
      disabled={toggleData.isDisabled}
      variant={toggleData.variant}
      className={toggleData.groupClass}
      type={toggleData.groupType}
    >
      {toggleData.groupArray.map((toggle) => (
        <div key={toggle} className="relative">
          <ToggleGroupItem
            className={`relative active ${toggleData.itemClass}`}
            value={toggle}
            aria-label={toggle}
            data-state={selectedToggle.includes(toggle) ? "on" : "off"}
          >
            {toggle}
          </ToggleGroupItem>
        </div>
      ))}
    </ToggleGroup>
  );
}

export default ToggleGroupDemo;
