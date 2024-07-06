import React from 'react';
import { checkDateIsEqual, checkIsToday } from '../../utils/data';
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
    <div className='calendar__body'>
      {state.mode === 'days' && (
        <>
          <div className='calendar__week__names'>
            {state.weekDaysNames.map((weekDaysName) => (
              <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
            ))}
          </div>
          <div className='calendar__days'>
            {
              state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date);
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex; 

                return (
                  <div className='calendar__day' key={`${day.dayNumber} - ${day.monthIndex}`}>
                    {day.dayNumber}
                  </div>
                )
              })
            }
          </div>
        </>
      )}
    </div>
  </div>
  );
};