import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavigateBar from "./NavigateBar";

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
      <NavigateBar/>
    </Container>
  );
};

export default Header;
