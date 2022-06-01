import React from "react";
import GIF from "../Images/header.gif";
import { Container, Row, Col } from "reactstrap";

const Header = ({ isMobile }) => {
  return (
    <div className="header" style={{ background: `${GIF}` }}>
      <Container>
        <div className="header-contents" data-aos="fade-up">
          <Row className="justify-content-between">
            <Col xs="12">
              <div className="header-img">
                <img src={GIF} alt="Chien Bernard" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
