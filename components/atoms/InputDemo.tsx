import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";

export type InputData = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputClass?: string;
  children?: React.ReactNode;
  readonly?: boolean;
  value: string;
  onChangeValue: (data: string) => void;
};

function InputDemo({ inputData }: { inputData: InputData }) {
  return (
    <div className="relative">
      <Input
        readOnly={inputData.readonly}
        className={inputData.inputClass}
        type={inputData.type}
        placeholder={inputData.placeholder}
        value={inputData.value}
        onChange={(e) => inputData.onChangeValue(e.target.value)}
      />
      {inputData.children}
    </div>
  );
}

export default InputDemo;
