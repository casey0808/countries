import * as React from "react";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Header from './components/Header';
import MenuBar from "./components/MenuBar";
import CardList from "./components/CardList";

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: 'Nunito Sans'
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MenuBar />
      <CardList />
    </ThemeProvider>
  );
};

export default App;