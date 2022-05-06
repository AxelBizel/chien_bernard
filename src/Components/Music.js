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
      <Row>
        <div data-aos="zoom-in">
          <h2 className="section-titles">Music</h2>
        </div>
      </Row>
      <Row>
        <Col xs="12" lg="6">
          <div>
            <iframe
              title="Bandcamp"
              style={{ border: 0, width: "475px", height: "475px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2078108374/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://chienbernard.bandcamp.com/album/felindra">
                Felindra by Chien Bernard
              </a>
            </iframe>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div>
            <p>Bla</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Music;
