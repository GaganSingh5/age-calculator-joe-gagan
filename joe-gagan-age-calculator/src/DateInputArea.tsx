import DateFieldInput from "./DateFieldInput";
import { CalculatorDate } from "./App";
import SubmitButton from "./components/SubmitButton";

export default function DateInputArea({
  theDate,
  setTheDate,
  errorMessage,
  onSubmit,
}: {
  theDate: CalculatorDate;
  setTheDate: React.Dispatch<React.SetStateAction<CalculatorDate>>;
  errorMessage: {
    day: string | undefined;
    month: string | undefined;
    year: string | undefined;
  };
  onSubmit: () => void;
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
    <div className="relative flex gap-4 pb-12 border-b border-lightgray mb-12 md:mb-0">
      <DateFieldInput
        label="Day"
        value={theDate.days ? theDate.days.toString() : undefined}
        placeholder={"DD"}
        errorMessage={errorMessage.day}
        onChange={(e) => handleInput(e, "days")}
      />
      <DateFieldInput
        label="Month"
        value={theDate.months ? theDate.months.toString() : undefined}
        placeholder={"MM"}
        errorMessage={errorMessage.month}
        onChange={(e) => handleInput(e, "months")}
      />
      <DateFieldInput
        label="Year"
        value={theDate.years ? theDate.years.toString() : undefined}
        placeholder={"YYYY"}
        errorMessage={errorMessage.year}
        onChange={(e) => handleInput(e, "years")}
      />
      <div className="absolute w-full bottom-0 ">
        <SubmitButton onSubmit={onSubmit} />
      </div>
    </div>
  );
}
