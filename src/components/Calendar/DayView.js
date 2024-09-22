import React from "react";
import Day from "./Day";

export default function DayView({ day }) {
  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-1">
      <Day day={day} rowIdx={0} />
    </div>
  );
}
