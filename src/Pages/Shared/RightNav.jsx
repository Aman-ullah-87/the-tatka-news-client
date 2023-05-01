import { Button,ListGroup } from "react-bootstrap";
import React from "react";
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from "../../Components/QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2" variant="outline-primary"> <FaGoogle/> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub/> Login with Google</Button>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaInstagram/> Facebook</ListGroup.Item>
     
    </ListGroup>
      </div>
      <QZone/>
    </div>
  );
};

export default RightNav;
