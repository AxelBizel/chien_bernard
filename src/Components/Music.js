import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

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
      <div>
        <iframe
          title="Bandcamp"
          style={{ border: 0, width: "560px", height: "560px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2078108374/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://chienbernard.bandcamp.com/album/felindra">
            Felindra by Chien Bernard
          </a>
        </iframe>
      </div>
    </Container>
  );
};

export default Music;
