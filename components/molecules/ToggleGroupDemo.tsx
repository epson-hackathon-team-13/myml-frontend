import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

export type ToggleData = {
  groupType: "multiple" | "single";
  groupClass?: string;
  groupArray: string[];
  variant?: "default" | "outline";
  isDisabled?: boolean;
  itemClass?: string;
};

function ToggleGroupDemo({ toggleData }: { toggleData: ToggleData }) {
  return (
    <ToggleGroup
      disabled={toggleData.isDisabled}
      variant={toggleData.variant}
      className={toggleData.groupClass}
      type={toggleData.groupType}
    >
      {toggleData.groupArray.map((toggle) => (
        <ToggleGroupItem
          className={toggleData.itemClass}
          value={toggle}
          aria-label={toggle}
        >
          {toggle}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default ToggleGroupDemo;
