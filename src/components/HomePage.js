import React, { Component } from 'react';
import axios from "axios";

class HomePage extends Component {
  state = {
    data: ""
  }

  componentDidMount(){
    this.callAPI()
        .then(res => this.setState({data: res.data}))
        .catch(err => console.log(err));
    }

    callAPI = async () => {
      const response = await axios.get("/api/test");
      console.log(response)

      if(response.status !== 200){
        throw Error(response.message);
      }

      return response.data;
    }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}

export default HomePage;