import React from 'react';
import { createYear } from './utils/data';
// import { Calendar } from './components/Calendar/Calendar';

const App:React.FC = () => {
  const test = createYear();
  console.log(test.createYearMonthes());
  console.log(new Date(2024, 2, 16))
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
