import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faSpotify,
  faDeezer,
  faApple,
  faAmazon,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
      <Row style={{ marginTop: "2vh" }}>
        <Col xs="12" lg="6">
          <div style={{ marginRight: "10px" }}>
            <p>
              <b>Tracklist</b>
            </p>
            <ul style={{ listStyle: "none" }} title="Tracklist">
              <li>1.Baballen</li>
              <li>2.Piston</li>
              <li>3.Felindra</li>
              <li>4.Uretrite</li>
              <li>5.Come to Aldi</li>
              <li>6.La Famille Leroy</li>
              <li>7.Du lard</li>
              <li>8.Jean-Vincent Placé</li>
              <li>9.Flamenclek part.1</li>
              <li>10.Flamenclek part.2</li>
            </ul>

            <p>
              Enregistré live, mixé et masterisé par Cédric Lerges au Studio
              Laforge. Sortie le 10 mars 2022.
            </p>
          </div>
          <div
            id="streaming"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: "2vh",
            }}
          >
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Bandcamp"
            >
              <FontAwesomeIcon className="brand-logo" icon={faBandcamp} />
            </a>

            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Spotify"
            >
              <FontAwesomeIcon className="brand-logo" icon={faSpotify} />
            </a>
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Deezer"
            >
              <FontAwesomeIcon className="brand-logo" icon={faDeezer} />
            </a>
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Youtube"
            >
              <FontAwesomeIcon className="brand-logo" icon={faYoutube} />
            </a>
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Apple"
            >
              <FontAwesomeIcon className="brand-logo" icon={faApple} />
            </a>
            <a
              href="https://drive.google.com/file/d/1OuOgL5KrWRYz6cnjxi-4mJ33jrf9BYZ4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Amazon"
            >
              <FontAwesomeIcon className="brand-logo" icon={faAmazon} />
            </a>
          </div>
        </Col>

        <Col xs="12" lg="6">
          <div>
            <iframe
              title="Bandcamp"
              style={{
                width: isMobile ? "350px" : "450px",
                height: isMobile ? "350px" : "450px",
                border: 0,
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2078108374/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
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
