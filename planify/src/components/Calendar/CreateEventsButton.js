import React, { useContext } from "react";
import plusImg from "../../icons/plus.png";
import GlobalContext from "../../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEventModel } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModel(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}