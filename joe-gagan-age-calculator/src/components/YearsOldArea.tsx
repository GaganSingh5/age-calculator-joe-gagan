import React from "react";

interface CalculatorDate {
  years: number;
  months: number;
  days: number;
}

function YearsOldArea({ years, months, days }: CalculatorDate) {
  return (
    <div className="date__container flex flex-col">
      <div className="years__container text-purple text-7xl font-bold">
        {years > 0 ? years : "--"} <span className="text-offblack">years</span>
      </div>
      <div className="months__container text-purple text-7xl font-bold">
        {months > 0 ? months : "--"}{" "}
        <span className="text-offblack">months</span>
      </div>
      <div className="date__container text-purple text-7xl font-bold">
        {days > 0 ? days : "--"} <span className="text-offblack">days</span>
      </div>
    </div>
  );
}

export default YearsOldArea;
