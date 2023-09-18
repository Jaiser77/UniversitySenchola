import React from 'react'
import { Navbar, Nav,  Container } from 'react-bootstrap';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navs() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='nav-logo'>Senchola University<span style={{color:'green',fontSize:'2rem'}}>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link className='mt-1' href="#Home">Home</Nav.Link>
            <Nav.Link className='mt-1' as={Link} to="/About" href="#about" >About us</Nav.Link>
            <Nav.Link  className='mt-1' href="#Services">Services</Nav.Link>
            <Nav.Link className='mt-1' href="#Whysenchola">Why Senchola</Nav.Link>
            <Nav.Link className='mt-1' href="#Form">Form</Nav.Link>
            <Nav.Link className='mt-1' as={Link} to="/Contact" href="#contact">Contact Us</Nav.Link>
           
            <Nav.Link className='nav-login' href="#login"><Button className="rounded-pill nav-btn1"> login</Button></Nav.Link>
            <Nav.Link className='nav-signup' href="#signup"><Button className='rounded-pill nav-btn2'> Signup</Button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs



