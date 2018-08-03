import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

// Components
import Login from "./components/Login";

class Home extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    this.callAPI()
      .then(res => this.setState({data: res.data}))
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

  render(){
    return (
      <div>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));
registerServiceWorker();
