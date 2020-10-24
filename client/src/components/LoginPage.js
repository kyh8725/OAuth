import React, { Component } from "react";
import { API_URL } from "../App";
import {Button} from "react-bootstrap";

class Login extends Component {
  login = () => {
    // Change location to /login server route while sending a redirect url
    // If user is coming from a page different than /, get the page they
    // are coming from, otherwise redirect to / after login
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    window.location = `${API_URL}/login/?from=${url}`;
  };
  loginGoogle = () => {
    // Change location to /login server route while sending a redirect url
    // If user is coming from a page different than /, get the page they
    // are coming from, otherwise redirect to / after login
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    window.location = `${API_URL}/google/?from=${url}`;
  };

  render() {
    return (
      <div className="login">
        <Button variant="secondary" onClick={this.login}>Log in with Github</Button>
        <Button variant="danger" onClick={this.loginGoogle}>Log in with Google+</Button>
      </div>
    );
  }
}

export default Login;
