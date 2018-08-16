import React from "react";

class TweetForm extends React.Component {
  state = {
    account: "",
    error: "",
  }

  onSubmit = (e) => {
    if(!this.state.account){
      e.preventDefault();
      this.setState(() => ({
        error: "Please add a handle.",
      }));
    } else {
      e.preventDefault();
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        account: this.state.account
      });
    }
  }
  onHandleChange = (e) => {
    const account = e.target.value;
    this.setState(() => ({ account }));
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input type="text"
            value={this.state.account}
            onChange={this.onHandleChange}
            placeholder="add handle..."
            id="handleSubmit"
          />
          <button>Add Handle</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
};

export default TweetForm;