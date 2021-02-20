// Navbar Component
// All components that should appear on the Navbar should be added here,
// not on index.js.


// React
import React, { Component } from "react";
// CSS
import './navbar.css';
// Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// Assets


export default class WanderNavbar extends Component {
  render() {
    return (
      <Navbar className='sticky-top' bg="light" expand='lg'>
        <Navbar.Brand className='mx-auto' href="/Home">
          Wander a guide to exploring seattle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/Home" className="ml-auto">home</Nav.Link>
            <Nav.Link href="/About" className="ml-auto">about</Nav.Link>
            <Nav.Link href="/Browse" className="ml-auto">browse</Nav.Link>
            <Nav.Link href="/Account" className="ml-auto">my account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}