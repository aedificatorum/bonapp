import React from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";
import Planner from "./Planner";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <Navbar />
        <Planner />
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
