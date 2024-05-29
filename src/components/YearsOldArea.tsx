import { AgeInterface } from "../hooks/useAgeCalculator";
import AgeOutputItem from "./AgeOutputItem";

function YearsOldArea({ age }: { age: AgeInterface }) {
  return (
    <div className="date__container flex flex-col pt-4 md:pt-8 text-purple max-md:text-5xl md:text-[6.5rem] font-bold italic leading-[1]">
      <AgeOutputItem age={age} unit="years" />
      <AgeOutputItem age={age} unit="months" />
      <AgeOutputItem age={age} unit="days" />
    </div>
  );
}

export default YearsOldArea;
