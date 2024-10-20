import React from "react";

const Dropdowns = ({ items, setName, setRequired = false, style = null }) => {
  return (
    <select
      id="time"
      name={setName}
      required={setRequired}
      className="dropdown"
      style={style}
    >
      {items.map((e, i) => {
        return (
          <option key={i} value={e}>
            {e}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdowns;
