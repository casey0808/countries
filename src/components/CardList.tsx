// import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./Card";
import { EMApis } from "../constants";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function ResponsiveGrid() {
  const countryList = localStorage.getItem("countryList")
    ? JSON.parse(localStorage.getItem("countryList") || "{}")
    : [];
  const getCountryList = useCallback(async () => {
    const res = await (await fetch(EMApis.ALL)).json();
    console.log(res);
    localStorage.setItem("countryList", JSON.stringify(res));
    return res;
  }, []);

  useEffect(() => {
    if (!countryList?.length) {
      getCountryList();
    }
  }, [countryList]);

  return (
    <Box sx={{ flexGrow: 1, margin: "40px 36px" }}>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 8 }}
        columnSpacing={{ xs: 1, sm: 2, md: 4}}
      >
        {countryList?.map((country: any) => (
          <Grid item xs={1} sm={3} md={3} key={country.fifa}>
            <ActionAreaCard {...country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
