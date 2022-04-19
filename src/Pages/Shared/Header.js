import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/">Dream <span className='text-warning'>Dot</span> Studio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto py-2">
      <Nav.Link as={Link} to="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
                {
                  user ?
                    <Nav.Link onClick={handleSignOut}  as={Link}  to="login">Sing out</Nav.Link>
                    :
                  <Nav.Link as={Link} to="login">Login</Nav.Link>
                }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;