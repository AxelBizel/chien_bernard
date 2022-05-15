import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const Music = () => {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Music</h2>
      </div>
      <Row>
        <Col xs="12" lg="6">
          <div style={{ marginRight: "10px" }}>
            <p>
              Enregistré live, mixé et masterisé par Cédric Lerges au Studio
              Laforge.
            </p>
            <p>
              <p>Sortie le 10 mars 2022</p>
            </p>
          </div>
        </Col>

        <Col xs="12" lg="6">
          <div>
            <iframe
              title="Bandcamp"
              style={{ border: 0, width: "100%", height: "475px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2078108374/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://chienbernard.bandcamp.com/album/felindra">
                Felindra by Chien Bernard
              </a>
            </iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Music;
