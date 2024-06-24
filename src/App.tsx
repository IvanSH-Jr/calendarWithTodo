import React from 'react';
import { getMonthesNames } from './utils/data';
import { Calendar } from './components/Calendar/Calendar';

const App:React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  console.log(getMonthesNames())
  return (
    <div className="App">
     <Calendar selectDate={selectDate} selectedDate={selectedDate} locale='ru'/>
    </div>
  );
}

export default App;
