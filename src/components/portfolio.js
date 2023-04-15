import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./searchBar";
import PopUp from "./popup";
import { Grid } from "@mui/material";
export default function Portfolio() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          m: 1,
          p: 1,
          justifyContent: "center",
          border: "1px solid",
          borderColor: "grey.300",
          borderRadius: 2,
        }}
      >
        MF Store
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, mx: 4 }}>
          <Grid item xs={4}>
            <SearchBar />
          </Grid>
          <Grid item xs={8} sx={{display: "flex", justifyContent: "center"}}>
            <Box>Portfolio</Box>
          </Grid>
        </Grid>
      </Box>
      <PopUp />
    </>
  );
}
