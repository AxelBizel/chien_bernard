import React from "react";
import { Row, Col, Container } from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import EJDG from "../Images/ejdg-logo.jpg";
import UGA from "../Images/UGA.jpg";
import Bac from "../Images/bac-es.png";

const Formation = () => {
  return (
    <Container>
        <br></br>
        <div data-aos="zoom-in">

        <h2 className="section-titles">Formation</h2>
        </div>
        <br></br>

        <Row className="justify-content-between">
          <Col
            sm="12"
            lg="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="formation-item" >
              <div className="formation-header">
                <img
                  src={WCSlogo}
                  alt="WCS logo"
                  height="100px"
                  className="formation-logo"
                />
                <div className="formation-title">
                  <h3>Wild Code School </h3>
                  <h5>
                    <em>(2019-2020)</em>
                  </h5>
                </div>
              </div>
              <div className="formation-details">
                <p>
                  Titre RNCP niveau III “Développeur web et web mobile”,
                  spécialité React - Node.js
                </p>
              </div>
            </div>
          </Col>

          <Col
            sm="12"
            lg="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="formation-item">
              <div className="formation-header">
                <img
                  src={EJDG}
                  alt="WCS logo"
                  height="100px"
                  className="formation-logo"
                />
                <div className="formation-title">
                  <h3>École de Journalisme de Grenoble</h3>
                  <h5>
                    <em>(2011-2013)</em>
                  </h5>
                </div>
              </div>
              <div className="formation-details">
                <p>
                  Master Pro reconnu par la CPNEJ, spécialité web, mention B
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            sm="12"
            lg="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="formation-item">
              <div className="formation-header">
                <img
                  src={UGA}
                  alt="UGA logo"
                  height="100px"
                  className="formation-logo"
                />
                <div className="formation-title">
                  <h3>Master Histoire</h3>
                  <h5>
                    <em>(2005-2010)</em>
                  </h5>
                </div>
              </div>
              <div className="formation-details">
                <p>Master de recherche en histoire contemporaine, mention TB</p>
              </div>
            </div>
          </Col>

          <Col
            sm="12"
            lg="6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="formation-item">
              <div className="formation-header">
                <img
                  src={Bac}
                  alt="Bac logo"
                  height="100px"
                  className="formation-logo"
                />
                <div className="formation-title">
                  <h3>Bac ES</h3>
                  <h5>
                    <em>(2004)</em>
                  </h5>
                </div>
              </div>
              <div className="formation-details">
                <p>Spécialité Maths. Mention B, 2 ans d’avance.</p>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
  );
};

export default Formation;
