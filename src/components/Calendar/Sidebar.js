import React from "react";
import CreateEventsButton from "./CreateEventsButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventsButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}