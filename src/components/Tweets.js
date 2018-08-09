import React from 'react';
import Tweet from "./Tweet";
import { connect } from "react-redux";

const Tweets = (props) => (
  <div>
    <h2>Tweets</h2>
    {props.tweets.map((data,i) => <Tweet key={i} data={data} /> )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
};

export default connect(mapStateToProps)(Tweets);