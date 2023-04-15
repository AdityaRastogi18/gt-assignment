import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
export default function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count == 1){
        setCount(1);
    }
    else setCount(count - 1);
  };
  return (
    <div>
      <ButtonGroup size="small" aria-label="small outlined button group">
       <Button onClick={increment}>+</Button>
        <Button>{count}</Button>
        <Button onClick={decrement}>-</Button>
      </ButtonGroup>
    </div>
  );
}
