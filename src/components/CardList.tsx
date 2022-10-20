// import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./Card";
import { EMApis } from "../constants";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function ResponsiveGrid() {
  const [countryList, setCountryList] = useState([]);

  const getCountryList = useCallback(async () => {
    const res = await (await fetch(EMApis.ALL)).json();
    console.log(res);
    setCountryList(res);
    return res;
  }, []);

  useEffect(() => {
    if (!countryList?.length) {
      getCountryList();
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, margin: '40px 36px' }}>
      <Grid
        container
        spacing={{ xs: 1, md: 6 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
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
