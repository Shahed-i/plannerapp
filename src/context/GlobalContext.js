import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModel: false,
  setShowEventModel: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
  clearAllLabels: () => {},
  view: "month",
  setView: () => {}, 
  selectedWeek: null, 
  setSelectedWeek: () => {}, 
  nextWeek: () => {},
  prevWeek: () => {},
});

export default GlobalContext;