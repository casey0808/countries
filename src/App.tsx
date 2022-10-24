import * as React from "react";
import "./App.css";
import Header from './components/Header';
import CardList from "./components/CardList";

const App = () => {

  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
};

export default App;