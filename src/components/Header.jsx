import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ButtonC from "./library/ButtonC";

const Header = ({ user = {}, signOut = () => {} }) => {
  return (
    <header>
      <Navbar
        className="c-accent-d py-0"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>MANGO AWS</Navbar.Brand>

          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>{user?.username}</Nav.Link>
              <ButtonC
                label="SIGN OUT"
                variant={"c-background"}
                className="m-1 fs-6"
                size="sm"
                onClick={signOut}
              ></ButtonC>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
