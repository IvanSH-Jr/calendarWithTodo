import React from 'react';
import { createDate, createMonth, getDaysByMonth, getMonthesNames } from '../../../utils/data';
import { getWeekDaysNames } from '../../../utils/data/getWeekDaysNames';

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
  firstWeekDay: number;
};

export const useCalendar = ({ firstWeekDay = 2, locale = 'default', selectedDate: date }: UseCalendarParams) => {
  const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');

  const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));

  const [selectedMonth, setSelectedMonth] = React
    .useState(createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }));

  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);

  const monthesNames = React.useMemo(() => getMonthesNames(locale), [locale]);
  const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDay, locale), [firstWeekDay, locale]);
  const days = React.useMemo(() => selectedMonth.createMonthDays(), [selectedMonth]);
  const calendarDays = React.useMemo(() => {
    const monthNumberOfDays = getDaysByMonth(selectedDate.monthIndex, selectedYear);
    console.log('current', monthNumberOfDays)
    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();
    console.log('prev', prevMonthDays)
    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();
    console.log('next', nextMonthDays)
  },
  [
   selectedMonth.year,
   selectedMonth.monthIndex,
   selectedYear
  ]);
  
  return {};
};
