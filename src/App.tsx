import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { formatDate } from './utils/data';

const App:React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  return (
    <div className="App">
      <div>{formatDate(selectedDate, 'DD MM YYY')}</div>
     <Calendar selectDate={selectDate} selectedDate={selectedDate} locale='ru'/>
    </div>
  );
}

export default App;
