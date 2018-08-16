import React from 'react';
import TweetList from "./TweetList";
import TweetFilter from "./TweetFilter";
import TweetForm from "./TweetForm";
import { connect } from "react-redux";
import { addTweet } from "../actions/tweets";

const TweetDashboard = (props) => (
  <div>
    <TweetFilter />
    <TweetList />
    <TweetForm onSubmit={(tweet) => {
      props.dispatch(addTweet({ handle: tweet.account }));
    }} />
  </div>
);

export default connect()(TweetDashboard);