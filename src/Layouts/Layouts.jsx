import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../Pages/Shared/LeftNav";
import RightNav from "../Pages/Shared/RightNav";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}><LeftNav/> </Col>
          <Col lg={6}> <Outlet/> </Col>
          <Col lg={3}><RightNav/></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layouts;
