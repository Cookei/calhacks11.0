import React, { useState } from 'react';

function NumberInput() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <input 
        type="number" 
        value={value} 
        onChange={handleChange} 
      />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default NumberInput;






