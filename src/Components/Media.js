// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardImg,
//   CardTitle,
//   CardBody,
// } from "reactstrap";
// import AWS from "../Images/Media/absoluteworstshow.jpg";
// import BTC from "../Images/Media/broke_the_casbah.jpg";
// import CAC from "../Images/Media/coreandco.png";
// import KF from "../Images/Media/kfuel.jpg";
// import KS from "../Images/Media/koolstrings.jpg";
// import NRU from "../Images/Media/noiserus.jpeg";
// import PRL from "../Images/Media/prl.jpg";

// const Media = () => {
//   const [isMobile, setIsMobile] = useState(null);
//   useEffect(() => {
//     if (window.matchMedia("(max-width: 600px)").matches) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//     }
//   }, [isMobile]);

//   const mediaElements = [
//     {
//       name: "Kool Strings",
//       img: `${KS}`,
//       id: 1,
//     },
//     {
//       name: "Absolute Worst Show",
//       img: `${AWS}`,
//       id: 2,
//     },
//     {
//       name: "Broke The Casbah",
//       img: `${BTC}`,
//       id: 3,
//     },
//     {
//       name: "Pass Rock Lyon",
//       img: `${PRL}`,
//       id: 4,
//     },
//     {
//       name: "Noise'R'Us",
//       img: `${NRU}`,
//       id: 5,
//     },
//     {
//       name: "KFuel - Kerosene",
//       img: `${KF}`,
//       id: 6,
//     },
//     {
//       name: "Core And Co",
//       img: `${CAC}`,
//       id: 7,
//     },
//   ];

//   return (
//     <Container>
//       <div data-aos="zoom-in">
//         <h2 className="section-titles">Media</h2>
//       </div>

//       <Row className="justify-content-center">
//         {mediaElements.map((e, i) => (
//           <Col
//             xs="6"
//             sm="4"
//             md="3"
//             xl="2"
//             className="my-2"
//             data-aos="flip-left"
//             data-aos-duration="500"
//             data-aos-delay={isMobile ? 200 * (i % 2) : (i % 6) * 100}
//           >
//             <Card
//               body
//               inverse
//               style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
//               onClick={() => {
//                 console.log(e.link);
//               }}
//             >
//               <CardImg top width="100%" src={e.img} alt={e.name} />
//               <CardBody className="p-0">
//                 <CardTitle
//                   style={{
//                     margin: "0",
//                     paddingTop: "3vh",
//                     textAlign: "center",
//                     fontFamily: "Roboto Mono",
//                   }}
//                 >
//                   {e.name}
//                 </CardTitle>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Media;


import React, { useState, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import AWS from "../Images/Media/absoluteworstshow.jpg";
import BTC from "../Images/Media/broke_the_casbah.jpg";
import CAC from "../Images/Media/coreandco.png";
import KF from "../Images/Media/kfuel.jpg";
import KS from "../Images/Media/koolstrings.jpg";
import NRU from "../Images/Media/noiserus.jpeg";
import PRL from "../Images/Media/prl.jpg";

const Projets = () => {
  const [isMobile, setIsMobile] = useState(null);
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
      img: `${AWS}`,
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
      img: `${BTC}`,
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
      img: `${CAC}`,
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
      img: `${KF}`,
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
      img: `${KS}`,
      links: [
        "https://wildcodeschool.github.io/lyon-0919-react-p2-strangler-things/#/game",
        "https://github.com/AxelBizel/simpsons-strangler-things",
      ],
      linksDescriptions: ["Jouer (sur mobile uniquement)", "Voir sur Github"],
      description: "Jeu mobile réalisé dans le cadre de la Wild Code School",
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
      img: `${NRU}`,
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
      img: `${PRL}`,
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
  ];

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Media</h2>
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
