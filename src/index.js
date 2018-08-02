import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

// Components
import Login from "./components/Login";

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Login}/>

    </div>
  </BrowserRouter>
)

ReactDOM.render(<Login />, document.getElementById("app"));
registerServiceWorker();
