import React from "react";
import Avatar from "../Images/Avatar-AxelBizel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenFancy,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import {Container, Row, Col} from "reactstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header-contents" data-aos="zoom-in">
          <Row className="justify-content-between">
            <Col xs="12" md="5">
            <div className="header-img">
              <img src={Avatar} alt="Axel Bizel's Avatar" />
              </div>
            </Col>
            <Col  xs="12" md="7">
              <div className="header-text">
                <h1 className="header-title">Axel Bizel</h1>
                <p>
                  <br />
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;Développeur React - Node.js
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faChartArea}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;Datavisualisation et infographie
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faPenFancy}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;Journalisme web et rédaction
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
