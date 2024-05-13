import { DateRange } from "react-day-picker";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

function RangeCalendarDemo({ calendarClass = "" }: { calendarClass?: string }) {
  const [selectedRange, setSelectedRange] = useState<DateRange>();

  return (
    <Calendar
      mode="range"
      className={calendarClass}
      selected={selectedRange}
      onSelect={(e) => setSelectedRange(e)}
    />
  );
}

export default RangeCalendarDemo;
