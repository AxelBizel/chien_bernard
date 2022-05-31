import React from "react";
import { Container, Row, Col } from "reactstrap";
import Band from "../Images/band.jpg";

const Bio = () => {
  return (
    <Container>
      <div data-aos="fade-in">
        <h2 className="section-titles"> Bio</h2>
      </div>
      <Row>
        <Col xs="12" lg="6" data-aos="fade-right">
          <img src={Band} alt="band" width="100%" style={{ padding: "10px" }} />
        </Col>
        <Col xs="12" lg="6" data-aos="fade-left">
          <p style={{ margin: "15px", textAlign: "justify" }}>
            Chien Bernard est un trio formé en 2018 à Lyon par d'ex-membres
            d'Innerty et d'OK FDP. Le groupe pratique un rock noisy et
            aventureux mais toujours accessible et spontané, nourris aux rythmes
            casse gueule et aux gros riffs pleins de fuzz. <br />
            <br /> Le parti pris de l'absence de basse ajoute une dose
            supplémentaire de nervosité. Celui de l'absence de chant laisse
            toute leur place à des samples d'une stupidité saisissante. <br />
            <br /> Après 2 ans sous cloche, Chien Bernard sort en mars 2022 son
            premier album "Félindra" et a maintenant la ferme intention de jouer
            partout où les chiens sont admis.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Bio;
