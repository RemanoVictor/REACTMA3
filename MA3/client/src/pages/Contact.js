import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    firstname: "",
    number: "",
    email: "",
    message: "",
    firstnameError: true,
    numberError: true,
    emailError: true,
    messageError: true
  };

  handleChange = input => {
    let name = input.target.name;
    let value = input.target.value;
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
    let numberPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;

    switch (name) {
      case "firstname":
        value !== ""
          ? this.setState({ firstnameError: false })
          : this.setState({ firstnameError: true });
        break;
      case "number":
        numberPattern.test(value)
          ? this.setState({ numberError: false })
          : this.setState({ numberError: true });
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
    const { firstname } = this.state;
    alert(
      `Hey ${firstname}, Thanks for reaching out. We will get back to you ASAP!`
    );
  };

  render() {
    const {
      firstnameError,
      numberError,
      emailError,
      messageError
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
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
                Please enter a valid firstname
              </p>
              <br />
              <p>Enter your number</p>
              <input
                type="number"
                name="number"
                onChange={this.handleChange}
                className="form-control"
              />
              <p className={numberError ? "error" : "error_hide"}>
                Please enter a valid number
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
                Please enter a valid email
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
                Please enter a valid message
              </p>
              <br />
              <input
                type="submit"
                disabled={
                  firstnameError || numberError || emailError || messageError
                }
                className="btn"
              />
            </form>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}
