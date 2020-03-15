import React, { Component } from "react";
import axios from "axios";

import { STRAPI_API } from "./../constants/constant";

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

    axios
      .post(STRAPI_API + "auth/local", {
        identifier: this.state.username,
        password: this.state.password
      })
      .then(response => {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("user", response.data.user.username);
        sessionStorage.setItem("email", response.data.user.email);
        this.props.updateLoginStatus();
      })
      .catch(error => {
        console.log("error 404. You done fucked up");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="[ col-sm-4 ]"></div>
          <div className="[ col-sm-4 ] [ login ]">
            <h1> Log in </h1>
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
              <input type="submit" className="btn btn-primary" />
            </form>
          </div>
          <div className="[ col-sm-4 ]"></div>
        </div>
      </div>
    );
  }
}
