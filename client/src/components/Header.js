import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export default function Header() {
    return (
        <>
        <div className="header">
        <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/home">
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
          <Nav.Link href="/home"><strong>HOME</strong> </Nav.Link>
      <Nav.Link href="/vehicles"><strong>VEHICLES</strong></Nav.Link>
        <Link to="/protected"> <img
        alt=""
        src="/login.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Link>   
       <Link to="/protected"> <img
        alt=""
        src="/shopping-cart.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Link>  
          </Nav>      
        </Navbar.Collapse>
      </Navbar>
      </div>
      </>
      )
}
