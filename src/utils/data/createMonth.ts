import { createDate } from './createDate';
import { getDaysByMonth } from './getDaysByMonth';
interface CreateMonthParams {
  date?: Date;
  locale?: string;
};

export const createMonth = (params?:CreateMonthParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';

  const myDate = createDate({ date, locale });
  const { month, monthIndex, monthNumber, year } = myDate;

  const getDay = (dayNumber: number) => 
    createDate({ date: new Date(year, monthIndex, dayNumber), locale });

  const createMonthDays = () => {
    const days = [];
    for (let i = 0; i <= getDaysByMonth(monthIndex, year) - 1; i++) {
      days[i] = getDay(i + 1);
    }

    return days;
  };

  return {
    getDay,
    month,
    monthIndex,
    monthNumber,
    year,
    createMonthDays,
  };
};