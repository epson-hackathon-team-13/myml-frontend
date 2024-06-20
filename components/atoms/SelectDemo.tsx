import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export type SelectData = {
  selectItem: string[];
  placeholder: string;
  selectLabel?: string;
  selectItemClass?: string;
  selectLabelClass?: string;
  triggerClass?: string;
  icon?: React.ReactNode;
  align?: "center" | "end" | "start";
  side?: "top" | "right" | "bottom" | "left";
  alignOffset?: number; // selectContent의 속성이 align: start 또는 align: end 일 때 이동할 픽셀 값
};

function SelectDemo({ selectData }: { selectData: SelectData }) {
  return (
    <Select>
      <SelectTrigger className={selectData.triggerClass}>
        <SelectValue placeholder={selectData.placeholder} />
      </SelectTrigger>
      <SelectContent
        position="popper"
        align={selectData.align || "start"}
        side={selectData.side || "bottom"}
        alignOffset={selectData.alignOffset || 0}
      >
        <SelectGroup>
          {selectData.selectLabel && (
            <SelectLabel className={selectData.selectLabelClass}>
              {selectData.selectLabel}
            </SelectLabel>
          )}
          {selectData.selectItem.map((select) => (
            <SelectItem
              key={select}
              className={selectData.selectItemClass}
              icon={selectData.icon || null}
              value={select}
            >
              {select}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectDemo;
