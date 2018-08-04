import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount(){
    this.callAPI()
        .then(res => console.log(res));
        .catch(err => console.log(err));
    }

    callAPI = async () => {
      const response = await fetch("/api/test");
      const body = await response.json();

      if(response.status !== 200){
        throw Error(body.message);
      }

      return body;
    }

  render() {
    return (
      <div>
        This is the home page bro!
      </div>
    )
  }
}

export default HomePage;