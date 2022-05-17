import { Button } from 'react-bootstrap'; 
import React, { useEffect, useState } from "react";

export const TemparatureCelcius = () => {
  return (
    <div>
      <h2>Temparature</h2>
      <Button variant="success">Update</Button>
    </div>
  );
};
const Weather = () => {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    setTemp(temp + 5);
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h2> It is {temp}</h2>
       </div>
  );
};

export default Weather;
