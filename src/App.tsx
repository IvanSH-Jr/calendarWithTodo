import React from 'react';
import { createDate } from './utils/data/createDate';

const App:React.FC = () => {
  const test = createDate();
  console.log(test);
  console.log(new Date(2024, 2, 16))
  return (
    <div className="App">
      {test.year}
    </div>
  );
}

export default App;
