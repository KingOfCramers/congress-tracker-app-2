import React from 'react';
import TweetList from "./TweetList";
import TweetFilter from "./TweetFilter";

const TweetDashboard = () => (
  <div>
    <TweetFilter />
    <TweetList />
  </div>
);

export default TweetDashboard;