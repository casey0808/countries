// import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./Card";
import { EMApis, EMFields, IItem, regions } from "../constants";
import { useCallback, useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  TextField,
  InputAdornment,
  CircularProgress,
  Container,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function ResponsiveGrid() {
  const countryList = localStorage.getItem("countryList")
    ? JSON.parse(localStorage.getItem("countryList") || "{}")
    : [];

  const [customList, setCustomList] = useState(countryList);
  const [region, setRegion] = useState("All");
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);

  const getCountryList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await (await fetch(EMApis.ALL)).json();
      console.log(res);
      localStorage.setItem("countryList", JSON.stringify(res));
      setCustomList(res);
    } catch (e) {
      console.log("error===>", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (countryList?.length) {
      let list = countryList;
      if (region !== EMFields.ALL) {
        list = countryList?.filter(
          (country: IItem) => country?.region === region
        );
        // setCustomList(list);
      }
      if (searchField) {
        list = list?.filter((country: IItem) =>
          country?.name?.common
            .toLowerCase()
            .includes(searchField.toLowerCase())
        );
      }
      setCustomList(list);
    }
  }, [region, searchField]);

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
    setSearchField("");
  };

  const onSearchChange = (event: any) => {
    const text = event.target.value as string;
    setSearchField(text);
  };

  useEffect(() => {
    if (!countryList?.length) {
      getCountryList();
    }
  }, [countryList]);

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 6,
          justifyContent: "space-between",
          marginLeft: 4,
          marginRight: 9,
          rowGap: 2,
        }}
        color="default"
      >
        <TextField
          id="outlined-search"
          placeholder="Search for a country..."
          type="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
          onChange={onSearchChange}
        />
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="region"
              onChange={handleChange}
            >
              {regions.map((region) => {
                return (
                  <MenuItem value={region} key={region}>
                    {region}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
      {!countryList?.length && loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "100vw",
          }}
        >
          <CircularProgress />
        </Box>
      ) : customList?.length ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexGrow: 1,
            marginLeft: 8,
            marginTop: 8,
            overflow: "hidden",
            // whiteSpace: 'wrap'
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 2, md: 6 }}
            columnSpacing={{ xs: 1, sm: 3, md: 4 }}
          >
            {customList?.map((country: IItem) => {
              return (
                <Grid item xs={11} sm={5} lg={3} key={country.cioc}>
                  <ActionAreaCard {...country} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "100vw",
            fontSize: "46px",
          }}
        >
          Not Found ;_;
        </Box>
      )}
    </>
  );
}
