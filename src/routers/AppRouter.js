import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "../components/Header.js";
import FourOhFour from "../components/FourOhFour";
import HelpPage from "../components/HelpPage";
import HomePage from "../components/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;