import React from 'react';
import { createDate, createMonth } from '../../../utils/data';

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
};

export const useCalendar = ({ locale, selectedDate: date }: UseCalendarParams) => {
  const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');

  const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));

  const [selectedMonath, setSelectedMonth] = React
    .useState(createMonth({ date: new Date(selectedDate.year, selectedDate.monthIndex), locale }));

  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);

  const monthesNames = React.useMemo(() => )
};
