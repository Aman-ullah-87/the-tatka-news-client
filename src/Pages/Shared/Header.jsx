import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container,Navbar,Nav } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee className="text-success" speed={70}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/category/0' className=" text-decoration-none me-2" >Home</Link>
            <Link to='/about' className=" text-decoration-none me-2" >About</Link>
            
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
