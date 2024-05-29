import { useState } from "react";
import {
  validateDay,
  validateMonth,
  validateYear,
  getMaxDaysInMonth,
} from "../validationLogic";
import {
  subYears,
  subMonths,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

export interface CalculatorDate {
  years: number | undefined;
  months: number | undefined;
  days: number | undefined;
  [key: string]: number | undefined;
}

export interface ErrorMessage {
  year: string | undefined;
  month: string | undefined;
  day: string | undefined;
}

export interface AgeInterface {
  previous: CalculatorDate;
  current: CalculatorDate;
}

export default function useAgeCalculator() {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    year: undefined,
    month: undefined,
    day: undefined,
  });

  const [theDate, setTheDate] = useState<CalculatorDate>({
    days: 0,
    months: 0,
    years: 0,
  });

  const [age, setAge] = useState<AgeInterface>({
    previous: {
      years: undefined,
      months: undefined,
      days: undefined,
    },
    current: {
      years: undefined,
      months: undefined,
      days: undefined,
    },
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const value = parseInt(e.target.value);

    validateDateInput(e, setErrorMessage);

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

  function validateDateInput(
    e: React.ChangeEvent<HTMLInputElement>,
    setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>
  ) {
    const value = parseInt(e.target.value);
    const field: string = e.target.id;
    const lcField = field.toLowerCase();

    const day = field === "Day" ? value : theDate.days;
    const month = field === "Month" ? value : theDate.months;
    const year = field === "Year" ? value : theDate.years || 2000;

    const validator = {
      day: validateDay,
      month: validateMonth,
      year: validateYear,
    };

    setErrorMessage((msg) => ({
      ...msg,
      [lcField]: undefined,
    }));

    if (month && day && day > getMaxDaysInMonth(month, year)) {
      setErrorMessage((msg) => ({
        ...msg,
        day: `Must be a valid day`,
      }));
    } else {
      setErrorMessage((msg) => ({
        ...msg,
        day: undefined,
      }));
    }

    if (e.target.value === "") {
      setErrorMessage((msg) => ({
        ...msg,
        [lcField]: `${field} is required`,
      }));
    } else if (!validator[lcField as keyof typeof validator](value)) {
      setErrorMessage((msg) => ({
        ...msg,
        [lcField]: `Must be a valid ${lcField}`,
      }));
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      theDate.days &&
      theDate.months &&
      theDate.years &&
      !errorMessage.day &&
      !errorMessage.month &&
      !errorMessage.year
    ) {
      const workingDate = new Date(
        theDate.years,
        theDate.months - 1,
        theDate.days
      );
      // Resolve the issue with inconsistent interpretation of two-digit years
      workingDate.setFullYear(theDate.years);
      setAge((age) => ({
        previous: age.current,
        current: calculateAge(workingDate),
      }));
    } else {
      setAge((age) => ({
        previous: age.current,
        current: {
          years: undefined,
          months: undefined,
          days: undefined,
        },
      }));
    }
  };

  function calculateAge(date = new Date()) {
    let workingDate = new Date();
    const years = differenceInYears(workingDate, date);
    workingDate = subYears(workingDate, years);
    const months = differenceInMonths(workingDate, date);
    workingDate = subMonths(workingDate, months);
    const days = differenceInDays(workingDate, date);
    return {
      years,
      months,
      days,
    } as CalculatorDate;
  }

  return {
    errorMessage,
    theDate,
    age,
    handleInput,
    onSubmit,
  };
}
