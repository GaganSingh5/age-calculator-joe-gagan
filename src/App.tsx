import { useState } from "react";
import {
  subYears,
  subMonths,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

import DateInputArea from "./DateInputArea";
import YearsOldArea from "./components/YearsOldArea";

export interface CalculatorDate {
  years: number | undefined;
  months: number | undefined;
  days: number | undefined;
}

function App() {
  const [errorMessage, setErrorMessage] = useState({
    day: undefined as string | undefined,
    month: undefined as string | undefined,
    year: undefined as string | undefined,
  });

  const [theDate, setTheDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  } as CalculatorDate);

  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  } as CalculatorDate);
  const onSubmit = () => {
    if (!theDate.days) {
      setErrorMessage({
        ...errorMessage,
        day: "Day is required",
      });
    }

    if (!theDate.months) {
      setErrorMessage((msg) => ({
        ...msg,
        month: "Month is required",
      }));
    }

    if (!theDate.years) {
      setErrorMessage((msg) => ({
        ...msg,
        year: "Year is required",
      }));
    }

    if (theDate.days && (theDate.days > 31 || theDate.days < 1)) {
      setErrorMessage((msg) => ({
        ...msg,
        day: "Must be a valid day",
      }));
    }

    if (theDate.months && (theDate.months > 12 || theDate.months < 1)) {
      setErrorMessage((msg) => ({
        ...msg,
        month: "Must be a valid month",
      }));
    }

    if (
      theDate.years &&
      (theDate.years < 1 || theDate.years > new Date().getFullYear())
    ) {
      setErrorMessage((msg) => ({
        ...msg,
        year: "Must be a valid year",
      }));
    }

    console.log(errorMessage);

    if (theDate.days && theDate.months && theDate.years) {
      setAge(
        calculateAge(new Date(theDate.years, theDate.months - 1, theDate.days))
      );
    } else {
      setAge({
        years: undefined,
        months: undefined,
        days: undefined,
      });
    }
  };

  function getYears(date: Date, workingDate: Date = new Date()) {
    return differenceInYears(workingDate, date);
  }

  function getMonths(date: Date, workingDate: Date = new Date()) {
    return differenceInMonths(workingDate, date);
  }

  function getDays(date: Date, workingDate: Date = new Date()) {
    return differenceInDays(workingDate, date);
  }

  function calculateAge(date: Date) {
    let workingDate = new Date();
    const years = getYears(date, workingDate);
    workingDate = subYears(workingDate, years);
    const months = getMonths(date, workingDate);
    workingDate = subMonths(workingDate, months);
    const days = getDays(date, workingDate);
    return {
      years,
      months,
      days,
    } as CalculatorDate;
  }

  return (
    <>
      <main className="bg-white p-14 rounded-[1.5rem] rounded-br-[12.5rem] mx-8 lg:w-[840px]">
        <DateInputArea
          theDate={theDate}
          setTheDate={setTheDate}
          errorMessage={errorMessage}
          onSubmit={onSubmit}
        />
        <YearsOldArea years={age.years} months={age.months} days={age.days} />
      </main>
    </>
  );
}

export default App;
