import React from 'react';
import { createDate, createMonth, getMonthesNames } from '../../../utils/data';
import { getWeekDaysNames } from '../../../utils/data/getWeekDaysNames';

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
  firstWeekDay: number;
};

export const useCalendar = ({ firstWeekDay = 2, locale = 'default', selectedDate: date }: UseCalendarParams) => {
  const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');

  const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));

  const [selectedMonath, setSelectedMonth] = React
    .useState(createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }));

  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);

  const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
  const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDay, locale), [])
  console.log(weekDaysNames);
  return {};
};
