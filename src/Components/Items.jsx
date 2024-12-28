import React, { useState } from 'react';

const Items = (props) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <span
        className="items"
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          flexGrow: 1, // Allows the item text to take up available space
          textAlign: "left" // Ensure text is left-aligned
        }}
      >
        {props.data}
      </span>
      <span
        className="items"
        style={{
          padding: "5px",
          cursor: "pointer",
          fontSize: "1.5em",
        }}
        onClick={toggleCheckbox}
      >
        {isChecked ? "🗹" : "☐"}
      </span>
    </div>
  );
}

export default Items;
