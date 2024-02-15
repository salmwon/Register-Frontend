import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
<Navbar expand="lg" className="" style={{background:'skyblue'}}>
<i class="fa-solid fa-graduation-cap fa-bounce ms-5 fa-2x me-1"></i>
        <Navbar.Brand href="#home" className=''>Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Link to={'/'} style={{textDecoration:'none'}}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#">Service</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header