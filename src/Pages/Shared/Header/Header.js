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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/home">Be Healthy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link as={Link} to="/home">HOME</Nav.Link>
              <Nav.Link href="home#services">SERVICES</Nav.Link>
              <Nav.Link href="home#success">SUCCESS STORY</Nav.Link>
              <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>

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
