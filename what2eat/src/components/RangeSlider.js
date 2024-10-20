import React from 'react';
import Slider from '@mui/material/Slider';

function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
    />
  );
}