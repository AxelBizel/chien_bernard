import React from "react";
import { Row, Col, Container, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div className="footer">
      <Container>
        {/* <h2 className="section-titles">Contact</h2>

        <Form
          className="form-container"
          action="mailto:axel.bizel@gmail.com"
          method="post"
          name="contact"
          enctype="text/plain"
        >
          <Row form>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="vous@example.com"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
            </Col>
          </Row>
          <button className="form-button" type="submit">
            Envoyer !
          </button>
        </Form> */}

        <Row className="justify-content-center">
          <Col xs="4" lg="2" className="footer-logo-container">
            <a href="mailto:axel.bizel@gmail.com" alt="Envoyez un e-mail">
              <FontAwesomeIcon className="footer-logo" icon={faEnvelope} />
              <p>E-mail</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://github.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil Github"
            >
              <FontAwesomeIcon className="footer-logo" icon={faGithub} />
              <p>Github</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://www.linkedin.com/in/axel-bizel/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil LinkedIn"
            >
              <FontAwesomeIcon className="footer-logo" icon={faLinkedin} />
              <p>LinkedIn</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://twitter.com/AxelBizel"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon profil Twitter"
            >
              <FontAwesomeIcon className="footer-logo" icon={faTwitter} />
              <p>Twitter</p>
            </a>
          </Col>
          <Col xs="4" lg="2" className="footer-logo-container">
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon CV au format PDF"
            >
              <FontAwesomeIcon className="footer-logo" icon={faFileDownload} />
              <p>CV</p>
            </a>
          </Col>
        </Row>
        <Row>
          <p className="copyright-mention">&#9400; Axel Bizel - avril 2020</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
