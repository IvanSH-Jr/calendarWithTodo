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
  const {} = useCalendar({firstWeekDay, locale, selectedDate})
  return (
  <div className='calendar'>
    <div className='calendar__header'>
      <div aria-hidden className='calendar__header__arrow__left' />
      12344
      <div aria-hidden className='calendar__header__arrow__right' />
    </div>
  </div>
  );
};