import DateFieldInput from "./DateFieldInput";
import { CalculatorDate } from "./App";
import SubmitButton from "./components/SubmitButton";

export default function DateInputArea({
  theDate,
  errorMessage,
  handleInput,
  onSubmit,
}: {
  theDate: CalculatorDate;
  errorMessage: {
    day: string | undefined;
    month: string | undefined;
    year: string | undefined;
  };
  handleInput: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="relative flex gap-4 pb-16 border-b border-lightgray mb-12 md:mb-0">
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
