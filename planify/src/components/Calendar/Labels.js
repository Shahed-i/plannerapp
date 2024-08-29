import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const labelClassesMap = {
  Purple: "bg-purple-100",
  Orange: "bg-orange-100",
  Blue: "bg-blue-100",
  Green: "bg-green-100",
  Pink: "bg-pink-100",
  Yellow: "bg-yellow-100",
};

export default function Labels() {
  const { labels, updateLabel, clearAllLabels } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <p className="text-pink-500 font-bold mt-10">Labels</p>
      {labels.map(({ label: lbl, checked }, idx) => {
        const colorClass = labelClassesMap[lbl] || 'bg-gray-300'; // Default color if label is not in the map

        return (
          <label key={idx} className="items-center mt-3 block">
            <input
              type="checkbox"
              checked={checked}
              onChange={() =>
                updateLabel({ label: lbl, checked: !checked })
              }
              className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
              style={{
                accentColor: colorClass, // checkmark color
                backgroundColor: checked ? colorClass : 'transparent', // Checkbox background color when checked
                borderColor: checked ? colorClass : 'gray', // Border color when checked
              }}
            />
            <span className={`ml-2 capitalize ${colorClass.replace('bg-', 'text-')}`}>{lbl}</span> 
          </label>
        );
      })}

      <button
        className="mt-5 bg-pink-500 text-white py-1 px-3 rounded hover:bg-red-500"
        onClick={clearAllLabels}
      >
        Clear All Labels
      </button>
    </React.Fragment>
  );
}
