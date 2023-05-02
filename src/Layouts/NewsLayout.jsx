import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightNav from "../Pages/Shared/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header />
      <Container>
        <Row>
       
          <Col lg={9}> <Outlet/> </Col>
          <Col lg={3}><RightNav/></Col>
        </Row>
      </Container>
      <Footer />
        </div>
    );
};

export default NewsLayout;