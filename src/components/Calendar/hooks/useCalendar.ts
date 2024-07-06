import React from 'react';
import { createDate, createMonth, getDaysByMonth, getMonthesNames } from '../../../utils/data';
import { getWeekDaysNames } from '../../../utils/data/getWeekDaysNames';

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
  firstWeekDay: number;
};

const DAYS_IN_WEEK = 7;

const getYearsInterval = (year: number) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, index) => startYear + index);
};

export const useCalendar = ({ firstWeekDay = 2, locale = 'default', selectedDate: date }: UseCalendarParams) => {
  const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');

  const [selectedDay, setSelectedDay] = React.useState(createDate({ date }));

  const [selectedMonth, setSelectedMonth] = React
    .useState(createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale }));

  const [selectedYear, setSelectedYear] = React.useState(selectedDay.year);

  const [selectedYearsInterval, setSelectedYearsInterval] = React.useState(
    getYearsInterval(selectedDay.year)
  );

  const monthesNames = React.useMemo(() => getMonthesNames(locale), [locale]);
  const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDay, locale), [firstWeekDay, locale]);
  const days = React.useMemo(() => selectedMonth.createMonthDays(), [selectedMonth]);
  const calendarDays = React.useMemo(() => {
    const monthNumberOfDays = getDaysByMonth(selectedDay.monthIndex, selectedYear);

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[monthNumberOfDays - 1];

    const shiftIndex = firstWeekDay - 1;

    const numberOfPrevDays = firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? DAYS_IN_WEEK - (firstWeekDay - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex;
    
    const numberOfNextDays =
    DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
      ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
      : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;
    
    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
      result[i] = days[i - numberOfPrevDays];
    }
    console.log(nextMonthDays)
    console.log(totalCalendarDays)
    for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
      console.log('dddd')
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
      
    }
    return result;
  },
  [
    selectedMonth.year,
    selectedMonth.monthIndex,
    selectedYear
  ]);
  
  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearsInterval
    },
    functions: {
      setMode,
      setSelectedDay
    }
  };
};
