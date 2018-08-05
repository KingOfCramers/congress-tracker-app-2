import React from 'react';

import Tweet from "./Tweet";
import dummyData from "./dummyData"; // this s

const Tweets = (props) => (
  <div>
    {dummyData.data.tweets.map((data,i) => <Tweet key={i} data={data} />)}
  </div>
);

export default Tweets;