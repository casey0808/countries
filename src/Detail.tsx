import * as React from "react";
import "./App.css";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import Header from './components/Header';
import CountryDetail from "./components/CountryDetail";

const Detail = () => {
  return (
    <div className="App">
      <Header />
      <CountryDetail />
    </div>
  );
};

export default Detail;