import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import MaansSite from "../Images/MaansSite.jpg";
import Discogs from "../Images/Discogs.jpg";
import SouthParkMemory from "../Images/SouthParkMemory.jpg";
import StranglerThings from "../Images/stranglerthings.jpg";
import Kiddo from "../Images/Kiddo.jpg";
import IDIX_US_Elections from "../Images/IDIX_US_Elections.jpg";
import IDIX_Galaxie from "../Images/IDIX_Galaxie.jpg";
import IDIX_Nobel from "../Images/IDIX_Nobel.jpg";
import AmeriqueRing from "../Images/AmeriqueRing.jpg";
import Cerebrolese from "../Images/Cerebrolese.jpg";
import PiqueurDeRue from "../Images/PiqueurDeRue.jpg";
import OpenData from "../Images/OpenData.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projets = () => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {

    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);




  const projectsElements = [
    {
      name: "Maans",
      date: "Février - Juillet 2020",
      img: `${MaansSite}`,
      links: ["https://maans.eu/", "https://app.maans.eu/"],
      linksDescriptions: ["Voir le site", "Voir l'application"],
      description:
        "Refonte du site et de l'application de MAANS, start-up développant un fauteuil d'immersion acoustique",
      details: [
        "Développement front-end et intégration",
        "Mise en place d'une base de données",
        "Refonte de l'application embarquée du fauteuil",
        "Création d'une interface admin avec authentification JWT",
        "Stack : React - Node.js - Svelte - Sequelize - Chart.js - SASS",
      ],
    },
    {
      name: "Discogs App",
      date: "Janvier - Février 2020",
      img: `${Discogs}`,
      links: ["https://github.com/AxelBizel/discogs-app"],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Application web permettant aux utilisateurs de Discogs d'explorer leur collection via un dashboard personnalisé",
      details: [
        "Conception, scénarisation, réalisation wireframes",
        "Récupération des données via l'API de Discogs et le client Node.js disconnect",
        "Développement front-end et intégration",
        "Création de dataviz à partir des données (genre, styles, date de sortie, etc.)",
        "Stack : React - Node.js - Chart.js - OAuth API - Bootstrap ",
      ],
    },
    {
      name: "Piqueur de rue",
      date: "Décembre 2019 - Janvier 2020",
      img: `${PiqueurDeRue}`,
      links: [
        "https://piqueurderue.greenterroir.com/",
        "https://github.com/AxelBizel/piqueur-de-rue",
      ],
      linksDescriptions: ["Voir le site", "Voir sur Github"],
      description: "Refonte du site de l'agence de tatouage Piqueur de rue",
      details: [
        "Réalisation des wireframes et maquettes",
        "Développement front-end et intégration",
        "Mise en place d'une base de données",
        "Création d'une interface admin avec authentification JWT",
        "Stack : React - Node.js - MySQL - JWT - Nodemailer - HTML5 - CSS3 - Adobe XD",
      ],
    },
    {
      name: "Kiddo",
      date: "Décembre 2019",
      img: `${Kiddo}`,
      links: [
        "https://hackathon-noel.netlify.com/#/",
        "https://github.com/AxelBizel/kiddo",
      ],
      linksDescriptions: ["Voir le site", "Voir sur Github"],
      description:
        "Plateforme collaborative fictive de vente d'ateliers pour enfants réalisée dans le cadre d'un Hackathon de 48h",
      details: [
        "Conception et scénarisation",
        "Réalisation des wireframes et maquettes",
        "Développement et intégration web",
        "Stack : React - Redux - Bootstrap - Google Maps API - HTML5 - CSS3 - Adobe XD",
      ],
    },
    {
      name: "Strangler Things",
      date: "Octobre - Novembre 2019",
      img: `${StranglerThings}`,
      links: [
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
        "https://github.com/AxelBizel/simpsons-strangler-things",
      ],
      linksDescriptions: ["Jouer (sur mobile uniquement)", "Voir sur Github"],
      description:
        "Jeu mobile réalisé dans le cadre de la Wild Code School",
      details: [
        "Conception et scénarisation",
        "Réalisation des wireframes et maquettes",
        "Développement et intégration web",
        "Stack : React - Vanilla JS - HTML5 - CSS3 - Adobe XD - Adobe Photoshop",
      ],
    },
    {
      name: "South Park Memory",
      date: "Octobre 2019",
      img: `${SouthParkMemory}`,
      links: [
        "https://axelbizel.github.io/memory-south-park/",
        "https://github.com/AxelBizel/memory-south-park",
      ],
      linksDescriptions: ["Jouer", "Voir sur Github"],
      description:
        "Jeu de Memory sur le thême de South Park réalisé dans le cadre de la Wild Code School",
      details: [
        "Conception et scénarisation ",
        "Réalisation des wireframes et maquettes",
        "Développement et intégration web",
        "Stack : Vanilla JS - HTML5 - CSS3 - MockFlow - Adobe Photoshop",
      ],
    },
    {
      name: "Élections américaines 2016",
      date: "Octobre - Novembre 2016",
      img: `${IDIX_US_Elections}`,
      links: [
        "https://static.idix.fr/elections/us/pr2016/us-resultats/index.html",
        "http://www.bfmtv.com/international/resultats-presidentielle-americaine-1055823.html",
      ],
      linksDescriptions: ["Voir le widget", "Voir sur BFMTV.com"],
      description:
        "Cartogramme interactif représentant les résultats de l'élection ",
      details: [
        "Conception et scénarisation",
        "Conception d'un back-office permettant d'injecter les résultats",
        "Saisie en temps réel des résultats le soir de l'élection",
      ],
    },
    {
      name: "La galaxie djihadiste",
      date: "Novembre 2016",
      img: `${IDIX_Galaxie}`,
      links: [
        "https://static.idix.fr/infographie/galaxie-djihadiste/index.html",
        "https://www.marianne.net/societe/infographie-six-mois-apres-les-attentats-du-vendredi-13-novembre-ou-en-est-lenquete",
      ],
      linksDescriptions: ["Voir le widget", "Voir sur Marianne.net"],
      description:
        "Infographie interactive représentant les connexions entre les protagonistes des attentats de Paris et de Bruxelles",
      details: [
        "Conception et scénarisation de l'infographie interactive",
        "Collecte et traitement des données, recherche documentaire",
        "Réalisation de l'infographie statique avec Adobe Illustrator",
        "Animation avec Adobe Muse",
      ],
    },
    {
      name: "Prix Nobel 2015",
      date: "Décembre 2015",
      img: `${IDIX_Nobel}`,
      links: ["https://static.idix.fr/widget/prix-nobel/"],
      linksDescriptions: ["Voir le widget"],
      description:
        "Infographie interactive représentant la répartition des prix Nobel par pays et par disciplines",
      details: [
        "Conception et scénarisation ",
        "Collecte et traitement des données en vue de leur utilisation dans D3.js",
        "Réalisation de l'infographie print avec Adobe Illustrator"
      ],
    },

    {
      name: "Cérébrolésé :  ni tout à fait le même, ni tout à fait un autre",
      date: "Janvier - Avril 2013",
      img: `${Cerebrolese}`,
      links: [
        "https://www.la-croix.com/Solidarite/Actualite/Un-hobby-club-pour-les-handicapes-invisibles-2013-05-14-959784",
      ],
      linksDescriptions: ["Voir sur LaCroix.com"],
      description:
        "Webdocumentaire sur les victimes de lésions cérébrales, lauréat du Prix Santé et Citoyenneté 2013",
      details: [
        "Conception et scénarisation",
        "Reportage vidéo et montage avec Abode Premiere",
        "Rédaction et production de contenus multimédia",
        "Intégration avec la plateforme web Djehouti",
      ],
    },
    {
      name: "L'Amérique sur le ring",
      date: "Octobre - Novembre 2012",
      img: `${AmeriqueRing}`,
      links: [
        "https://www.lesinrocks.com/2012/10/27/web/actualite/amerique-sur-le-ring-webdoc-presidentielle-us/",
      ],
      linksDescriptions: ["Voir sur LesInrocks.com"],
      description:
        "Webdocumentaire pédagogique sur les élections américaines de 2012, réalisé dans le cadre de l'École de journalisme de Grenoble",
      details: [
        "Conception et scénarisation",
        "Rédaction et production de contenus multimédia",
        "Intégration avec la plateforme web Djehouti",
      ],
    },
    {
      name: "Open data et datajournalisme",
      date: "Octobre 2011 - Avril 2013",
      img: `${OpenData}`,
      links: [
        " http://owni.fr/2011/12/14/donnees-liberation-opendata-etalab/index.html",
        " https://drive.google.com/file/d/1pEW1Kqdz7SUPJJM7EgnDuyuoHcdzR8J2/view?usp=sharing",
      ],
      linksDescriptions: ["Voir sur Owni.fr", "Consulter le mémoire"],
      description:
        "Travaux de recherche sur le mouvement open data en France et ses enjeux pour le journalisme",
      details: [
        "Recherche documentaire et bibliographique",
        "Entretien avec des développeurs, sociologues, journalistes et militants",
        "Rédaction d'un mémoire universitaire et de plusieurs articles de presse",
      ],
    },
  ];


 
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Projets</h2>
      </div>

      <Row className="justify-content-center">
        {projectsElements.map((e, i) => (
          <Col
            xs="12"
            md="6"
            xl="4"
            className="my-2"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={(isMobile ? 0 : i % 3) * 100}
          >
            <Card body inverse className="projectCard">
              <a href={e.links[0]} target="_blank" rel="noopener noreferrer">
                <CardImg top width="100%" src={e.img} alt={e.name} />
              </a>
              <CardBody className="p-0">
                <CardTitle
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h5>{e.name}</h5>
                  <h6>{e.date}</h6>
                </CardTitle>
                <CardText>
                  <p>
                    <em>{e.description}</em>
                  </p>
                  <ul>
                    {e.details.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                  <p>
                    {e.links.map((l, i) => (
                      <div className="linkSection">
                        <a href={l} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLink} />
                          &nbsp; &nbsp; &nbsp;{e.linksDescriptions[i]}
                        </a>
                        <br />
                      </div>
                    ))}
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projets;
