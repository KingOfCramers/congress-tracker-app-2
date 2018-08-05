import React, { Component } from 'react';
import axios from "axios";

class HomePage extends Component {
  state = {
    name: ""
  }

  componentDidMount(){
    this.callAPI()
        .then(res => this.setState({ name: res.data.name }))
        .catch(err => console.log(err));
    }

    callAPI = async () => {
      const response = await axios.get("/api/test");

      if(response.status !== 200){
        throw Error(response.message);
      }

      return response;
    }

  render() {
    return (
      <div>
        <p>This is the home page!</p>
        <p>{ this.state.name !== "" ? this.state.name : "Backend request is commented out." }</p>
      </div>
    )
  }
}

export default HomePage;