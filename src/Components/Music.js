import React from "react";
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

const Music = ({ isMobile }) => {
  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles">Écouter</h2>
      </div>
      <Row style={{ marginVertical: "2vh" }}>
        <Col xs="12" lg="6" data-aos={isMobile ? "fade-up" : "fade-right"}>
          <div
            style={{
              width: "100%",
              margin: "15px",
            }}
          >
            <p>
              <b>Félindra</b>
              <br />
              <br />
              Premier album, sortie le 10 mars 2022.
              <br />
              Enregistré live, mixé et masterisé <br />
              par Cédric Lerges au Studio Laforge.
              <br />
              Artwork by Aurélien Bartolucci
              <br />
              Music by Chien Bernard
              <br />
            </p>
            <p>
              <b>Tracklist</b>
            </p>
            <ul style={{ listStyle: "decimal" }} title="Tracklist">
              <li>Baballen</li>
              <li>Piston</li>
              <li>Felindra</li>
              <li>Uretrite</li>
              <li>Come to Aldi</li>
              <li>La Famille Leroy</li>
              <li>Du lard</li>
              <li>Jean-Vincent Placé</li>
              <li>Flamenclek part.1</li>
              <li>Flamenclek part.2</li>
            </ul>
          </div>
        </Col>

        <Col xs="12" lg="6" data-aos={isMobile ? "fade-up" : "fade-left"}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <iframe
              title="Bandcamp"
              style={{
                width: isMobile ? "90vw" : "400px",
                height: isMobile ? "90vw" : "400px",
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
          <p style={{ textAlign: "center" }}>
            <b>Stream now on</b>
          </p>
          <div
            id="streaming"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2vh",
              width: isMobile ? "90vw" : "390px",
              margin: "auto",
            }}
          >
            <a
              href="https://chienbernard.bandcamp.com/releases"
              target="_blank"
              rel="noopener noreferrer"
              alt="Bandcamp"
            >
              <FontAwesomeIcon className="brand-logo" icon={faBandcamp} />
            </a>
            <a
              href="https://open.spotify.com/album/4AlKAkdIRUEBr1IAPPdSMe"
              target="_blank"
              rel="noopener noreferrer"
              alt="Spotify"
            >
              <FontAwesomeIcon className="brand-logo" icon={faSpotify} />
            </a>
            <a
              href="https://www.deezer.com/album/301614027"
              target="_blank"
              rel="noopener noreferrer"
              alt="Deezer"
            >
              <FontAwesomeIcon className="brand-logo" icon={faDeezer} />
            </a>
            <a
              href="https://www.youtube.com/playlist?list=OLAK5uy_koVXXa8DANuIkiD6DX2ds2gNNHa37WZWI"
              target="_blank"
              rel="noopener noreferrer"
              alt="Youtube"
            >
              <FontAwesomeIcon className="brand-logo" icon={faYoutube} />
            </a>
            <a
              href="https://music.apple.com/us/album/felindra/1613247957?uo=4&app=music"
              target="_blank"
              rel="noopener noreferrer"
              alt="Apple"
            >
              <FontAwesomeIcon className="brand-logo" icon={faApple} />
            </a>
            <a
              href="https://www.amazon.fr/music/player/albums/B09V2MHVQN"
              target="_blank"
              rel="noopener noreferrer"
              alt="Amazon"
            >
              <FontAwesomeIcon className="brand-logo" icon={faAmazon} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Music;
