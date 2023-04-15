import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import PortfolioList from "./portfolioList";

export default function SearchList(props) {
  const [checked, setChecked] = React.useState([1]);
  const value = props.props.schemeName;
  const newChecked = [...checked];
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
 
  return (
    <>
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <ListItem
        key={value}
        secondaryAction={
          <Checkbox
            edge="end"
            onChange={handleToggle(value)}
            checked={checked.indexOf(value) !== -1}
          />
        }
        disablePadding
      >
        <ListItemButton >
          <ListItemText id={value} primary={`${value}`} />
        </ListItemButton>
      </ListItem>
      
    </List>
    <PortfolioList props={newChecked} />
    </>
  );
}
