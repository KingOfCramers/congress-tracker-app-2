import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

// Components
import Login from "./components/Login";
import Home from "./components/Home";

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ Login }/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));
registerServiceWorker();
