import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Fit Tuber</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#success">Success Story</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>

            </Nav>
            <Nav>

            {
                user ?
                  <button className="btn btn-dark" onClick={handleSignOut}>Log Out</button>
                :
                <div className="d-flex">
                  <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
                  <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                </div>
            }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
