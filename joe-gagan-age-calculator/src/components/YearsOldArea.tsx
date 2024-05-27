import React from "react";
import { CalculatorDate } from "../App";

function YearsOldArea({ years, months, days }: CalculatorDate) {
  return (
    <div className="date__container flex flex-col text-purple max-md:text-5xl md:text-[6.5rem] font-bold italic leading-[1]">
      <div className="years__container">
        {years || "--"} <span className="text-offblack">years</span>
      </div>
      <div className="months__container">
        {months || "--"} <span className="text-offblack">months</span>
      </div>
      <div className="date__container">
        {days || "--"} <span className="text-offblack">days</span>
      </div>
    </div>
  );
}

export default YearsOldArea;
