import CountUp from "react-countup";
import { AgeInterface } from "../hooks/useAgeCalculator";

export default function AgeOutputItem({
  age,
  unit,
}: {
  age: AgeInterface;
  unit: string;
}) {
  return (
    <div>
      {age?.current[unit] != undefined ? (
        <CountUp
          start={age?.previous[unit] || 0}
          end={age?.current[unit] || 0}
          useEasing={false}
        />
      ) : (
        "--"
      )}{" "}
      <span className="text-offblack">{unit}</span>
    </div>
  );
}
