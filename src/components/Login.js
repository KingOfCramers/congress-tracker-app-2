import React from "react";
import axios from "axios";

export default class Login extends React.Component {

  login(e) {
    e.preventDefault();
    var email = e.target.elements.email.value;
    var password = e.target.elements.password.value;
    axios.post("api/users/login", {
      email: email,
      password: password
    })
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.login}>
          <legend>Login</legend>
          <label>Email:</label>
          <input type='text' name='email'/>
          <label>Password:</label>
          <input type='text' name='password'/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}