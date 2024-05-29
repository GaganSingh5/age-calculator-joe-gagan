function validateDay(day: number | undefined) {
  return day && day > 0 && day < 32;
}

function validateMonth(month: number | undefined) {
  return month && month > 0 && month < 13;
}

function validateYear(year: number | undefined) {
  return year && year > 0 && year <= new Date().getFullYear();
}

function getMaxDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  // Resolve the issue with inconsistent interpretation of two-digit years
  date.setFullYear(year);
  return date.getDate();
}

export { validateDay, validateMonth, validateYear, getMaxDaysInMonth };
