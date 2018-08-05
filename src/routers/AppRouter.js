import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "../components/HomePage";
import Header from "../components/Header.js";
import FourOhFour from "../components/FourOhFour";
import HelpPage from "../components/HelpPage";
import Tweets from "../components/Tweets";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tweets" component={Tweets} />
        <Route path="/help" component={HelpPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;