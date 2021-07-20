import React from "react";

const CalcDisplay = ({ currTheme, displayText }) => {
  return (
    <div className={`calc-display ${"calc-display-theme" + currTheme}`}>
      <h4 id="display" className={`${"normal-text-theme" + currTheme}`}>
        {displayText}
      </h4>
    </div>
  );
};

export default CalcDisplay;
