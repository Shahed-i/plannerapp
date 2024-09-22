import React, {useState, useEffect, useReducer, useMemo } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs";
  
  function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "push":
        return [...state, payload];
      case "update":
        return state.map((evt) =>
          evt.id === payload.id ? payload : evt
        );
      case "delete":
        return state.filter((evt) => evt.id !== payload.id);
      default:
        throw new Error();
    }
  }
  function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }
  
  export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModel, setShowEventModel] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const [view, setView] = useState("month");
    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer,
      [],
      initEvents
    );

    const [selectedWeek, setSelectedWeek] = useState(dayjs().startOf('week').toDate());
  
    function nextWeek() {
      setSelectedWeek((prevWeek) => prevWeek.map((day) => day.add(7, "day")));
      setDaySelected((prevDay) => prevDay.add(7, "day"));
    }
  
    function prevWeek() {
      setSelectedWeek((prevWeek) => prevWeek.map((day) => day.subtract(7, "day")));
      setDaySelected((prevDay) => prevDay.subtract(7, "day"));
    }
  
    const filteredEvents = useMemo(() => {
      return savedEvents.filter((evt) =>
        labels
          .filter((lbl) => lbl.checked)
          .map((lbl) => lbl.label)
          .includes(evt.label)
      );
    }, [savedEvents, labels]);
  
    useEffect(() => {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
      if (!selectedWeek) {
        setSelectedWeek(dayjs().startOf('week').toDate());
      }
    }, [selectedWeek]);


    useEffect(() => {
      setLabels((prevLabels) => {
        return [...new Set(savedEvents.map((evt) => evt.label))].map(
          (label) => {
            const currentLabel = prevLabels.find(
              (lbl) => lbl.label === label
            );
            return {
              label,
              checked: currentLabel ? currentLabel.checked : true,
            };
          }
        );
      });
    }, [savedEvents]);
  
    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
      }
    }, [smallCalendarMonth]);
  
    useEffect(() => {
      if (!showEventModel) {
        setSelectedEvent(null);
      }
    }, [showEventModel]);
  
    function updateLabel(label) {
      setLabels(
        labels.map((lbl) => (lbl.label === label.label ? label : lbl))
      );
    }

    function clearAllLabels() {
      setLabels([]); // Clear all labels in state
      localStorage.removeItem("savedEvents"); // Optionally clear localStorage if you want to reset saved events too
    }
  
    return (
      <GlobalContext.Provider
        value={{
          monthIndex,
          setMonthIndex,
          smallCalendarMonth,
          setSmallCalendarMonth,
          daySelected,
          setDaySelected,
          showEventModel,
          setShowEventModel,
          dispatchCalEvent,
          selectedEvent,
          setSelectedEvent,
          savedEvents,
          setLabels,
          labels,
          updateLabel,
          filteredEvents,
          clearAllLabels,
          view,
          setView,
          selectedWeek,
          setSelectedWeek,
          nextWeek,
          prevWeek,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  }