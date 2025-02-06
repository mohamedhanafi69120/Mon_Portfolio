import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "boxicons/css/boxicons.min.css";

import "./sass/main.scss"; // Import main.scss here

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
