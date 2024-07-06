import React from 'react';
import { useCalendar } from './hooks/useCalendar';

import './Calendar.css';

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDay?: number;
};

export const Calendar: React.FC<CalendarProps> = ({ locale, selectDate, selectedDate, firstWeekDay = 2 }) => {
  const { state, functions } = useCalendar({firstWeekDay, locale, selectedDate})
  return (
  <div className='calendar'>
    <div className='calendar__header'>
      <div aria-hidden className='calendar__header__arrow__left' />
      {state.mode === 'days' && (
        <div aria-hidden onClick={() => functions.setMode('monthes')}>
          {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
        </div>
      )}
      {state.mode === 'monthes' && (
        <div aria-hidden onClick={() => functions.setMode('years')}>
          {state.selectedYear}
        </div>
      )}
      {state.mode === 'years' && (
        <div aria-hidden onClick={() => functions.setMode('days')}>
          {state.selectedYearsInterval[0]} -{' '}
          {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
        </div>
      )}      
      <div aria-hidden className='calendar__header__arrow__right' />
    </div>
  </div>
  );
};