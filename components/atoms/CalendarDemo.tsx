import React, { useState } from "react";
import { Calendar } from "../ui/calendar";

function SingleCalendarDemo({
  calendarClass = "",
}: {
  calendarClass?: string;
}) {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(e) => setDate(e as Date)}
      className={calendarClass}
    />
  );
}

export default SingleCalendarDemo;
