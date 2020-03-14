import React, { Component } from "react";

import axios from "axios";
import { STRAPI_API } from "./../constants/constant";

export default class Contact extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    firstnameError: true,
    lastnameError: true,
    emailError: true,
    messageError: true
  };

  componentDidMount() {}

  handleChange = input => {
    let name = input.target.name;
    let value = input.target.value;
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;

    switch (name) {
      case "firstname":
        value !== ""
          ? this.setState({ firstnameError: false })
          : this.setState({ firstnameError: true });
        break;
      case "lastname":
        value !== ""
          ? this.setState({ lastnameError: false })
          : this.setState({ lastnameError: true });
        break;
      case "email":
        emailPattern.test(value)
          ? this.setState({ emailError: false })
          : this.setState({ emailError: true });
        break;
      case "message":
        value !== ""
          ? this.setState({ messageError: false })
          : this.setState({ messageError: true });
        break;
      default:
    }

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstname, lastname, email, message } = this.state;
    axios
      .post(STRAPI_API + "contacts", {
        Name: firstname,
        Surname: lastname,
        Email: email,
        Message: message
      })
      .then(result => {
        console.log(result);
        alert("Thank you for making contact, we will reply as soon as we can.");
      })
      .catch(err => {
        console.log("computer says no!");
      });
  };

  render() {
    const {
      firstnameError,
      lastnameError,
      emailError,
      messageError
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1> Contact Form </h1>
            <form onSubmit={this.handleSubmit}>
              <p>Enter your name</p>
              <input
                type="text"
                name="firstname"
                onChange={this.handleChange}
                className="form-control"
              />
              <p className={firstnameError ? "error" : "error_hide"}>
                error on firstname
              </p>
              <br />
              <p>Enter your lastname</p>
              <input
                type="text"
                name="lastname"
                onChange={this.handleChange}
                className="form-control"
              />
              <p className={lastnameError ? "error" : "error_hide"}>
                error on lastname
              </p>
              <br />
              <p>Enter your email</p>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                className="form-control"
              />
              <p className={emailError ? "error" : "error_hide"}>
                error on email
              </p>
              <br />
              <p>Enter your message</p>
              <input
                type="text"
                name="message"
                onChange={this.handleChange}
                className="form-control"
              />
              <p className={messageError ? "error" : "error_hide"}>
                error on message
              </p>
              <br />
              <input
                type="submit"
                disabled={
                  firstnameError || lastnameError || emailError || messageError
                }
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
