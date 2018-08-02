import React from "react";
import axios from "axios";

export default class Home extends React.Component {

  state = { user: [] };

  componentDidMount(){
    axios.get("api/users/me")
       .then((res) => {
         console.log(res.data)
       })
       .catch((e) => {
       });
  }
  render(){
    return (
      <div>
        {this.state.user}
        Hi!
      </div>
    );
  }
}