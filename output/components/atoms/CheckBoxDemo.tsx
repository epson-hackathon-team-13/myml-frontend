import React from "react";
import Checkbox from "../ui/checkbox";

export type CheckBoxData = {
  text: string;
  containerClass?: string;
  checkboxClass?: string;
  textClass?: string;
};

function CheckBoxDemo({ checkBoxData }: { checkBoxData: CheckBoxData }) {
  return (
    <div
      className={`flex items-center space-x-2 ${checkBoxData.containerClass}`}
    >
      <Checkbox id={checkBoxData.text} className={checkBoxData.checkboxClass} />
      <label
        htmlFor={checkBoxData.text}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${checkBoxData.textClass}`}
      >
        {checkBoxData.text}
      </label>
    </div>
  );
}

export default CheckBoxDemo;
