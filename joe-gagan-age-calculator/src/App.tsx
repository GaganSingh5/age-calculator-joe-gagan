import { useState } from "react";
import DateInputArea from "./DateInputArea";
import SubmitButton from "./components/SubmitButton";
import YearsOldArea from "./components/YearsOldArea";

export interface CalculatorDate {
  years: number;
  months: number;
  days: number;
}

function App() {
  const [theDate, setTheDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  } as CalculatorDate);
  const [calculatedAge, setCalculatedAge] = useState({
    days: 0,
    months: 0,
    years: 0,
  } as CalculatorDate);
  const onSubmit = () => {
    if (theDate.days > 0 && theDate.months > 0 && theDate.years) {
      const todaysDate: Date = new Date();
      console.log(todaysDate.getMonth());

      const date: Date = new Date(
        theDate.years,
        theDate.months - 1,
        theDate.days
      );
      const diff = todaysDate - date;
      const months = todaysDate.getMonth() - date.getMonth();
      const days = todaysDate.getDay() - date.getDay();

      setCalculatedAge({
        years,
        months,
        days,
      });

      console.log(years, months, days);
    }
  };

  return (
    <>
      <main className="bg-white p-14 rounded-[1.5rem] rounded-br-[12.5rem]">
        <DateInputArea theDate={theDate} setTheDate={setTheDate} />
        <SubmitButton submit={onSubmit} />
        <YearsOldArea
          years={calculatedAge.years}
          months={calculatedAge.months}
          days={calculatedAge.days}
        />
      </main>
    </>
  );
}

export default App;
