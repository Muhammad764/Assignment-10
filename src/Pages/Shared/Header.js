import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/">Dream <span className='text-warning'>Dot</span> Studio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto py-2">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="#pricing">Blogs</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;