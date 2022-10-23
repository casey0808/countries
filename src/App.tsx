import * as React from "react";
import "./App.css";
import Header from './components/Header';
import MenuBar from "./components/MenuBar";
import CardList from "./components/CardList";


const App = () => {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
};

export default App;