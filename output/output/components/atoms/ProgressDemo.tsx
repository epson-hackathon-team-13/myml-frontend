import React from "react";
import Progress from "../ui/progress";

export type ProgressData = {
  progress: number;
  progressClass?: string;
  barClass?: string;
};

function ProgressDemo({ progressData }: { progressData: ProgressData }) {
  return (
    <Progress
      barClassName={progressData.barClass || ""}
      className={progressData.progressClass}
      value={progressData.progress}
    />
  );
}

export default ProgressDemo;
