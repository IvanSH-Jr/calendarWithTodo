import React from 'react';
import { createMonth } from './utils/data/createMonth';

const App:React.FC = () => {
  const test = createMonth();
  console.log(test.createMonthDays());
  console.log(new Date(2024, 2, 16))
  return (
    <div className="App">
      {test.year}
    </div>
  );
}

export default App;
