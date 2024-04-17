import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";

export type InputData = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputClass?: string;
  children?: React.ReactNode;
  readonly?: boolean;
};

function InputDemo({ inputData }: { inputData: InputData }) {
  return (
    <div className="relative">
      <Input
        readOnly={inputData.readonly}
        className={inputData.inputClass}
        type={inputData.type}
        placeholder={inputData.placeholder}
      />
      {inputData.children}
    </div>
  );
}

export default InputDemo;
