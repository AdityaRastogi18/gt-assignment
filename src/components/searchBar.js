import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchList from "./searchList";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState({});
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    const getData = setTimeout(() => {
      axios.get(`https://api.mfapi.in/mf/search?q=${data}`).then((response) => {
        setInputValue(response.data);
      });
    }, 2000);
  }, [data]);
  const map = new Map(Object.entries(inputValue));
  let arr = [];
  map.forEach((value) => {
    arr.push(value);
  });
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box>
      <TextField id="outlined-basic" label="Mutual Funds" variant="outlined" placeholder="Mutual Funds"
        onChange={(event) => setData(event.target.value)}/>
      {arr.map((ele) => {
        return <SearchList props={ele} />;
      })}
    </Box>
  );
}
