import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { addTweet } from "../actions/tweets";

class HomePage extends Component {

  componentDidMount(){
    this.callAPI()
        .then(res => {
          res.tweets.forEach((tweet) => {
            this.props.dispatch(addTweet({handle: tweet.account}))
          })
        })
        .catch(err => console.log(err));
    }

    callAPI = async () => {

      const axiosConfig = {
        method: "get",
        url: "/api/users/me/trackers"
      }

      const response = await axios(axiosConfig);

      if(response.status !== 200){
        throw Error(response.message);
      }

      return response.data;
    }

  render() {
    return (
      <div>
        <p>This is the home page!</p>
        {/*<p>{ this.state.name ? this.state.name : "Anonymous." }</p>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    name: "",
    tweets: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(HomePage); // "connect" is a higher order component.