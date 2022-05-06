import React from "react";
import { Row, Col, Container, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center footerRow">
          <Col xs="12" md="6" className="footer-logo-container">
            <a href="mailto:chienbernardband@gmail.com" alt="Envoyez un e-mail">
              <FontAwesomeIcon className="footer-logo" icon={faEnvelope} />
              <p>chienbernardband[AT]gmail[DOT]com</p>
            </a>
          </Col>
          <Col xs="12" md="6" className="footer-logo-container">
            <a href="mailto:chienbernardband@gmail.com" alt="Envoyez un e-mail">
              <FontAwesomeIcon className="footer-logo" icon={faPhone} />
              <p>+33(0)6-65-78-22-60 (Axel)</p>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://github.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
              alt="Facebook"
            >
              <FontAwesomeIcon className="footer-logo" icon={faFacebook} />
              <p>Facebook</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://www.linkedin.com/in/axel-bizel/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Instagram"
            >
              <FontAwesomeIcon className="footer-logo" icon={faInstagram} />
              <p>Instagram</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://twitter.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
              alt="Youtube"
            >
              <FontAwesomeIcon className="footer-logo" icon={faYoutube} />
              <p>Youtube</p>
            </a>
          </Col>
          <Col xs="6" lg="3" className="footer-logo-container">
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Bandcamp"
            >
              <FontAwesomeIcon className="footer-logo" icon={faBandcamp} />
              <p>Bandcamp</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
