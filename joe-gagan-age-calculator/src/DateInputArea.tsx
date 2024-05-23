import DateFieldInput from "./DateFieldInput";
import { CalculatorDate } from "./App";

export default function DateInputArea({
  theDate,
  setTheDate,
}: {
  theDate: CalculatorDate;
  setTheDate: React.Dispatch<React.SetStateAction<CalculatorDate>>;
}) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setTheDate({
        ...theDate,
        [key]: 0,
      });
    } else {
      setTheDate({
        ...theDate,
        [key]: value,
      });
    }
  };

  return (
    <div className="flex gap-4 pb-12 border-b border-lightgray">
      <DateFieldInput
        label="Day"
        value={theDate.days.toString()}
        onChange={(e) => handleInput(e, "days")}
      />
      <DateFieldInput
        label="Month"
        value={theDate.months.toString()}
        onChange={(e) => handleInput(e, "months")}
      />
      <DateFieldInput
        label="Year"
        value={theDate.years.toString()}
        onChange={(e) => handleInput(e, "years")}
      />
    </div>
  );
}
