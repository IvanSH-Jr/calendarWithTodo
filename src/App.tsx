import React from 'react';
import { Calendar } from './components/Calendar/Calendar';

const App:React.FC = () => {
  const [selectedDate, selectDate] = React.useState(new Date());
  return (
    <div className="App">
     <Calendar selectDate={selectDate} selectedDate={selectedDate} locale='ru'/>
    </div>
  );
}

export default App;
