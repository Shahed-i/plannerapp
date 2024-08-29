import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

export default function Week() {
  const { selectedWeek, setDaySelected, savedEvents, labels, setSelectedEvent, setShowEventModel } = useContext(GlobalContext);

  if (!selectedWeek || !Array.isArray(selectedWeek)) return null;

  const labelClassesMap = {
    Purple: "bg-purple-100",
    Orange: "bg-orange-100",
    Blue: "bg-blue-100",
    Green: "bg-green-100",
    Pink: "bg-pink-100",
    Yellow: "bg-yellow-100",
  };

  const getTasksForDay = (day) => {
    return savedEvents.filter((event) =>
      day.isSame(dayjs(event.date), 'day')
    );
  };

  const getLabelClass = (label) => {
    const labelClass = labelClassesMap[label] || "bg-gray-200";
    return labelClass;
  };

  const handleTaskClick = (task) => {
    setSelectedEvent(task);
    setShowEventModel(true);

  return (
    <div className="h-screen w-full p-4">
      <div className="grid grid-cols-7 gap-2 h-full">
        {selectedWeek.map((day, index) => {
          const tasks = getTasksForDay(day);

          return (
            <div
              key={index}
              className="w-full p-4 border border-pink-200 rounded-md hover:bg-pink-100 cursor-pointer"
              onClick={() => setDaySelected(day)}
            >
              <div className="font-bold text-center">{day.format('D')}</div>
              <div className="text-center text-sm text-gray-600">{day.format('dddd')}</div>
              <div className="mt-2 space-y-1">
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`text-xs text-gray-800 p-1 rounded ${getLabelClass(task.label)}`}
                      onClick={(e) => {
                      e.stopPropagation();
                      handleTaskClick(task);
                    }}
                    
                    >
                      {task.title}
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-pink-500 text-center">No tasks</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}}