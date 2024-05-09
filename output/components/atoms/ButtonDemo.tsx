import React from "react";
import { Button } from "../ui/button";

export type ButtonData = {
  text: string;
  clickHandler: () => void;
  children?: React.ReactNode;
  buttonClass?: string;
  buttonType?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

function ButtonDemo({ buttonData }: { buttonData: ButtonData }) {
  return (
    <Button
      variant={buttonData.buttonType}
      className={buttonData.buttonClass}
      onClick={buttonData.clickHandler}
    >
      {buttonData.children && <div>{buttonData.children}</div>}
      <p>{buttonData.text}</p>
    </Button>
  );
}

export default ButtonDemo;
