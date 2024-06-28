import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { formatDate } from './utils/data';
import './static/css/global.css';

const App:React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  return (
    <div className='app__container'>
      <div className='date__container'>{formatDate(selectedDate, 'DD MM YYY')}</div>
     <Calendar selectDate={selectDate} selectedDate={selectedDate} locale='ru'/>
    </div>
  );
}

export default App;
