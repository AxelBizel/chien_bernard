import React from "react";
import { Row, Col, Container } from "reactstrap";
import MAANS from "../../Images/MAANS-Picto.png";
import IDIX from "../../Images/idix.png";
import LaCroix from "../../Images/lacroix.png";
import Mind from "../../Images/mind-logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
 
  return (
    <Container>
      <br></br>
      <div data-aos="zoom-in">
        <h2 className="section-titles"> Expérience</h2>
      </div>
      <br></br>
      <Row className="justify-content-center">
        <Col
          sm="12"
          lg="6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={MAANS}
                alt="WCS logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Développeur full-stack Javascript</h3>
                <h4>
                  <strong>MAANS </strong>
                </h4>
                <p>
                  <em>Depuis février 2020</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                <em>
                  MAANS (Music as a new sense) est une start-up développant un
                  fauteuil d'immersion acoustique destiné à améliorer la qualité
                  de vie au travail et l'expérience client.
                </em>
              </p>
              <ul>
                <li>
                  Refonte totale du site vitrine et mise en place d'un
                  back-office sur mesure
                </li>
                <li>
                  Création d’un dashboard client de gestion et personnalisation
                  d’un parc de fauteuils et de visualisation des données
                  d’utilisation
                </li>
                <li>
                  Stack : React /Svelte.js / Chart.js/ SASS / Node.js /
                  Sequelize
                </li>
              </ul>
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
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={IDIX}
                alt="IDIX logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Datajournaliste / Infographiste</h3>
                <h4>
                  <strong>IDIX</strong>
                </h4>
                <p>
                  <em>2015-2018</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                <em>
                  IDIX (ex-Agence Idé) est une agence de presse spécialisée dans
                  la production d'infographies et la fourniture de données pour
                  la presse et l'audiovisuel.
                </em>
              </p>
              <ul>
                <li>
                  Conception et réalisation d'infographies et datavisualisations
                  pour la presse -
                  {/* <a
                    href="https://static.idix.fr/widget/prix-nobel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;Prix Nobel 2015 -
                  </a>
                  <a
                    href="https://static.idix.fr/infographie/galaxie-djihadiste/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;La galaxie djihadiste
                  </a> */}
                </li>
                <li>
                  Pilotage de projets web (dispositifs électoraux, événements
                  spéciaux, etc…) -{" "}
                  {/* <a
                    href="https://static.idix.fr/elections/us/pr2016/us-resultats/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faLink} />
                    &nbsp;Élection américaine 2016
                  </a> */}
                </li>
                <li>Utilisation, analyse et nettoyage de bases de données</li>
                <li>Suivi de commandes clients</li>
              </ul>
              {/* <CarouselIDIX /> */}
            </div>
          </div>
        </Col>

        <Col
          sm="12"
          lg="6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={Mind}
                alt="Mind Logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Journaliste spécialisé</h3>
                <h4>
                  <strong>Mind Média </strong>
                </h4>
                <p>
                  <em>2014-2015</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                <em>
                  Mind Média (ex-Satellinet) est une newsletter hebdomadaire
                  professionnelle dédiée à l'économie des médias et de la publicité en ligne.
                </em>
              </p>
              <ul>
                <li>
                  Suivi du secteur économique des médias et de la communication
                  en ligne
                </li>
                <li>Rédaction d'aricles d'actualité et d'analyse</li>
                <li>PAO et gestion de la newsletter</li>
              </ul>
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
          <div className="experience-item">
            <div className="experience-header">
              <img
                src={LaCroix}
                alt="La Croix Logo"
                height="100px"
                className="experience-logo"
              />
              <div className="experience-title">
                <h3>Journaliste Web</h3>
                <h4>
                  <strong>LaCroix.com </strong>
                </h4>
                <p>
                  <em>2013-2014</em>
                </p>
              </div>
            </div>
            <div className="experience-details">
            <p>
                <em>
                  LaCroix.com (groupe Bayard) est un des principaux sites d'actualité généraliste français.
                </em>
              </p>
              <ul>
                <li>Rédaction d'articles d'actualité générale </li>
                <li>
                  Enrichissement multimédia et data des articles print en vue de
                  leur publication sur le site
                </li>
                <li>Frontpage editing, gestion du site en CMS, community management</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
