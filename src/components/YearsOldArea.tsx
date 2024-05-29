import { CalculatorDate } from "../App";

function YearsOldArea({ years, months, days }: CalculatorDate) {
  return (
    <div className="date__container flex flex-col pt-4 md:pt-8 text-purple max-md:text-5xl md:text-[6.5rem] font-bold italic leading-[1]">
      <div className="years__container">
        {years != undefined ? years : "--"}{" "}
        <span className="text-offblack">years</span>
      </div>
      <div className="months__container">
        {months != undefined ? months : "--"}{" "}
        <span className="text-offblack">months</span>
      </div>
      <div className="date__container">
        {days != undefined ? days : "--"}{" "}
        <span className="text-offblack">days</span>
      </div>
    </div>
  );
}

export default YearsOldArea;
