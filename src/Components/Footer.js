import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center footerRow">
          <Col xs="12" className="footer-logo-container">
            <a href="mailto:chienbernardband@gmail.com" alt="Envoyez un e-mail">
              <FontAwesomeIcon className="footer-logo" icon={faEnvelope} />
              <p>
                <b>Booking</b>
                <br />
                chienbernardband[AT]gmail[DOT]com
                <br />
                +33(0)6-65-78-22-60 (Axel)
              </p>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="3" className="footer-logo-container">
            <a
              href="https://facebook.com/chienbernardband"
              target="_blank"
              rel="noopener noreferrer"
              alt="Facebook"
            >
              <FontAwesomeIcon className="footer-logo" icon={faFacebook} />
              <p style={{ fontSize: "0.8rem" }}>Facebook</p>
            </a>
          </Col>
          <Col xs="3" className="footer-logo-container">
            <a
              href="https://instagram.com/chienbernard"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram"
            >
              <FontAwesomeIcon className="footer-logo" icon={faInstagram} />
              <p style={{ fontSize: "0.8rem" }}>Instagram</p>
            </a>
          </Col>
          <Col xs="3" className="footer-logo-container">
            <a
              href="https://youtube.com/channel/UCGpC7xJC-lZhsIqDskbVi9g"
              target="_blank"
              rel="noopener noreferrer"
              alt="Youtube"
            >
              <FontAwesomeIcon className="footer-logo" icon={faYoutube} />
              <p style={{ fontSize: "0.8rem" }}>Youtube</p>
            </a>
          </Col>
          <Col xs="3" className="footer-logo-container">
            <a
              href="https://chienbernard.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Bandcamp"
            >
              <FontAwesomeIcon className="footer-logo" icon={faBandcamp} />
              <p style={{ fontSize: "0.8rem" }}>Bandcamp</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
