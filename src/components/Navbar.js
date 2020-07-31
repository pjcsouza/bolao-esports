import React from 'react';
import { Button,Navbar,NavDropdown, Nav, Form,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// import { Container } from './styles';

function NavbarHome() {
  return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Bolao ESports</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Dados CBLOL</Nav.Link>
      
      
    </Nav>
    <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
        
      </NavDropdown>
  </Navbar.Collapse>
</Navbar>);
}

export default NavbarHome;