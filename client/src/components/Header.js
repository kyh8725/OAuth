import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";

export default function Header() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="100"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/public"><Button variant="light"><strong>Home </strong></Button></Link>
            <Link to="/Vehicles"><Button variant="light"><strong>Vehicles </strong></Button></Link>
        <Link to="/protected"> <img
        alt=""
        src="/login.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Link>   
       <Link to="/protected"> <img
        alt=""
        src="/shopping-cart.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Link>   
          </Nav>      
        </Navbar.Collapse>
      </Navbar>
      </>
      )
}
