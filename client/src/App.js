import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import AuthButton from "./components/AuthButton";
import LoginPage from "./components/LoginPage";
import PublicPage from "./components/PublicPage";
import ProtectedPage from "./components/ProtectedPage";
import { Button } from 'react-bootstrap';
import "./styles/index.css";

// Authentication server URL
export const API_URL = "http://localhost:5000";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="app">          
        <AuthButton />       
              <Link to="/public"><Button variant="outline-primary"> Public Page </Button></Link>                
              <Link to="/protected"><Button variant="outline-success">Protected Page</Button></Link>     
          <Route path="/login" component={LoginPage} />
          <Route path="/public" component={PublicPage} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </div>
      </Router>
    );
  }
}
