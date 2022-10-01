import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../utils/fetchData";

const Bio = ({ isMobile }) => {
  const [bio, setBio] = useState(null);
  const [bandPic, setBandPic] = useState(null);
  useEffect(() => {
    getBio();
  }, []);

  const getBio = async () => {
    const bioData = await fetchData("BIO");
    setBandPic(bioData[0][0]);
    bioData.shift();
    setBio(bioData);
  };
  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles"> Bio</h2>
      </div>
      <Row>
        {bandPic && (
          <Col xs="12" lg="6" data-aos={isMobile ? "fade-up" : "fade-right"}>
            <img
              src={bandPic}
              alt="band"
              width="100%"
              style={{ padding: "10px" }}
            />
          </Col>
        )}
        {bio && (
          <Col xs="12" lg="6" data-aos={isMobile ? "fade-up" : "fade-left"}>
            {bio.map((s) => {
              return (
                <p style={{ margin: "15px", textAlign: "justify" }}>{s}</p>
              );
            })}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Bio;
