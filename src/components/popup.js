import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import Counter from "./counter";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [nav, setNav] = useState([]);

  const code = 100036;
  
  const getMetaData = (code) => {
    fetch("https://api.mfapi.in/mf/" + code)
      .then((response) => response.json())
      .then((data) => setData(data.meta));
  };
  const getNavData = (code) => {
    fetch("https://api.mfapi.in/mf/" + code)
      .then((response) => response.json())
      .then((data) => setNav(data.data[0]));
  };

  const handleOpen = () => {
    setOpen(true);
    getMetaData(code);
    getNavData(code);
  }

  const handleClose = () => setOpen(false);
  const { fund_house, scheme_type, scheme_category, scheme_name } = data;

  const navData = nav.nav;
  const date = nav.date;
  console.log(navData);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {scheme_name}
          </Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 !important",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {scheme_category}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {scheme_type}
            </Typography>
          </Container>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {fund_house}
          </Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 !important",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {navData}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {date}
            </Typography>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              padding: "0 !important",
              mt: 1,
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Units
            </Typography>
            <Counter />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 !important",
              mt: 3,
            }}
          >
            <Button variant="contained" color="success">
              Buy
            </Button>
            <Button variant="contained" color="error">
              Sell
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
