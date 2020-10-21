import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import PublicPage from "./components/PublicPage";
import ProtectedPage from "./components/ProtectedPage";
import "./styles/index.css";

// Authentication server URL
export const API_URL = "http://localhost:5000";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="app">                           
          <Route path="/login" component={LoginPage} />
          <Route path="/public" component={PublicPage} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </div>
      </Router>
    );
  }
}
