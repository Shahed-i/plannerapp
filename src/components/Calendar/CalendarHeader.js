import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../icons/logo.png";
import GlobalContext from "../../context/GlobalContext";

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex, view, setView, selectedWeek, prevWeek, nextWeek, daySelected, setDaySelected} = useContext(GlobalContext);

    function handlePrev() {
      if (view === "month") {
        setMonthIndex(monthIndex - 1);
    } else if (view === "week") {
        prevWeek();
    } else {
        setDaySelected(daySelected.subtract(1, view));
    }
    }

    function handleNext() {
      if (view === "month") {
        setMonthIndex(monthIndex + 1);
    } else if (view === "week") {
        nextWeek();
    } else {
        setDaySelected(daySelected.add(1, view));
    }
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
        <h1 className="mr-10 text-l text-pink-400 font-bold">
          Calendar
        </h1>
        <button onClick={handleReset} className="border rounded py-2 px-4 mr-5 text-sm">Today</button>
        
        <button onClick={() => setView("month")} className={`border rounded py-2 px-4 mr-5 text-sm ${view === "month" ? "bg-pink-500 text-white" : ""}`}>Month</button>
        <button onClick={() => setView("week")} className={`border rounded py-2 px-4 mr-5 text-sm ${view === "week" ? "bg-pink-500 text-white" : ""}`}>Week</button>
        <button onClick={() => setView("day")} className={`border rounded py-2 px-4 mr-5 text-sm ${view === "day" ? "bg-pink-500 text-white" : ""}`}>Day</button>


        <button onClick={handlePrev}>
        <span className="material-icons-outlined cursor-pointer text-pink-400 mx-2">chevron_left</span>
        </button>

        <h2 className="mx-4 text-l text-pink-400 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>

        <button onClick={handleNext}>
          <span className="material-icons-outlined cursor-pointer text-pink-400 mx-2">chevron_right</span>
        </button>
        
      </header>
    );
  }