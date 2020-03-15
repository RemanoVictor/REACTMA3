import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = input => {
    let name = input.target.name;
    let value = input.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    sessionStorage.setItem("username", this.state.username);
    sessionStorage.setItem("password", this.state.password);
    this.props.updateLoginStatus();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="[ col-sm-4 ]"></div>
          <div className="[ col-sm-4 ] [ login ]">
            <h1> Login </h1>
            <form onSubmit={this.handleSubmit}>
              <p> Enter Username </p>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <p> Password </p>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                className="form-control"
              />
              <br />
              <input type="submit" className="btn" />
            </form>
          </div>
          <div className="[ col-sm-4 ]"></div>
        </div>
      </div>
    );
  }
}
