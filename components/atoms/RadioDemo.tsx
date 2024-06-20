import React from "react";
import cn from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Label from "../ui/label";

export type RadioData = {
  defaultValue: string;
  radioGroup: { value: string }[];
  radioItemClass?: string;
  labelClass?: string;
  circleClass?: string;
  radioBoxClass?: string;
  radioGroupClass?: string;
};

function RadioDemo({ radioData }: { radioData: RadioData }) {
  return (
    <RadioGroup
      className={radioData.radioGroupClass}
      defaultValue={radioData.defaultValue}
    >
      {radioData.radioGroup.map((radio) => (
        <div
          key={radio.value}
          id="radioBox"
          className={cn("flex items-center space-x-2", radioData.radioBoxClass)}
        >
          <RadioGroupItem
            circleClassName={radioData.circleClass || ""}
            className={radioData.radioItemClass}
            value={radio.value}
            id={radio.value}
          />
          <Label className={radioData.labelClass} htmlFor={radio.value}>
            {radio.value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default RadioDemo;
