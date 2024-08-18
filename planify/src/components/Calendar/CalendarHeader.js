import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../icons/logo.png";
import GlobalContext from "../../context/GlobalContext";

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    function handlePrevMonth() {
      setMonthIndex(monthIndex - 1);
    }

    function handleNextMonth() {
      setMonthIndex(monthIndex + 1);
    }

    function handleReset() {
      setMonthIndex(
        monthIndex === dayjs().month()
          ? monthIndex + Math.random()
          : dayjs().month()
      );
    }
    
    return (
      <header className="px-4 py-2 flex items-center">
        <img src={logo} alt="calendar" className="mr-2 w-8 h-8" />
        <h1 className="mr-10 text-l text-pink-500 font-bold">
          Calendar
        </h1>
        <button onClick={handleReset} className="border rounded py-2 px-4 mr-5 text-sm">Today</button>
        <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-pink-500 mx-2">chevron_left</span>
        </button>

        <h2 className="mx-4 text-l text-pink-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>

        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-pink-500 mx-2">chevron_right</span>
        </button>
        
      </header>
    );
  }