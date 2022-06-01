import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import AWS from "../Images/Media/absoluteworstshow.jpg";
import BTC from "../Images/Media/broke_the_casbah.jpg";
import CAC from "../Images/Media/coreandco.png";
import KF from "../Images/Media/kfuel.jpg";
import KS from "../Images/Media/koolstrings.jpg";
import NRU from "../Images/Media/noiserus.jpeg";
import PRL from "../Images/Media/prl.jpg";

const Media = ({ isMobile }) => {
  const mediaItems = [
    {
      name: "🇧🇪 Kool Strings",
      date: "Avril 2O22",
      img: `${KS}`,
      link: "https://www.mixcloud.com/Kool_strings/kool-strings-17-04-2022",
      linkDescription: "Écouter",
    },
    {
      name: "🇺🇸 Absolute Worst Show",
      date: "Mars 2022",
      img: `${AWS}`,
      link: "https://www.mixcloud.com/TheAbsoluteWorstShow/the-absolute-worst-show-episode-064",
      linkDescription: "Écouter",
    },
    {
      name: "🇫🇷 Noise R' Us",
      date: "Mars 2022",
      img: `${NRU}`,
      link: "https://www.mixcloud.com/Noiserusradio/noise-rus-169-mars-2022/",
      linkDescription: "Écouter",
    },
    {
      name: "🇫🇷 Core And Co",
      date: "Mars 2022",
      img: `${CAC}`,
      link: "https://www.coreandco.fr/chroniques/chien-bernard-felindra-8811.html",
      linkDescription: "Lire",
      description:
        "“Chez Chien Bernard, on fait dans le bâtard affectueux, intelligent, qui ne traîne aucune maladie congénitale et nous rappelle que la nature aime le métissage. Et comme dans la nature, c'est du métissage que naissent les plus belles choses [...] Si vous êtes perdus dans l'avalanche des groupes de math/rock/punk instrumental, Chien Bernard est là pour vous en sauver et vous réchauffer avec son petit tonneau d'eau (pleine) de vie.”",
    },
    {
      name: "🇫🇷 Pass Rock Lyon",
      date: "Avril 2022",
      img: `${PRL}`,
      link: "https://www.instagram.com/p/CcqnuNaIEPm/?utm_source=ig_web_copy_link",
      linkDescription: "Lire",
      description:
        "Chien Bernard balance un math-rock bien noise, bien speed, qui saute de break en break en jappant. La guitare lead est là pour nous rappeler que les compères ont aussi un goût pour l’écriture indie et slacker. Le parti pris de l’absence de basse, quant à lui, rajoute à l’urgence et la nervosité.",
    },
    {
      name: "🇫🇷 Broke the Casbah",
      date: "Février 2022",
      img: `${BTC}`,
      link: "https://www.mixcloud.com/Broke_The_Casbah/broke-the-casbah-101-3-f%C3%A9vrier-2022-invit%C3%A9-pierre-scaners-distroville",
      linkDescription: "Ecouter",
    },
    {
      name: "🇫🇷 KFUEL",
      date: "Décembre 2021",
      img: `${KF}`,
      link: "https://kfuel.org/radio/playlist-23-12-2021-on-ne-va-pas-basse-batt",
      linkDescription: "Ecouter",
    },
  ];

  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles">Media</h2>
      </div>

      <Row className="justify-content-center">
        {mediaItems.map((e, i) => (
          <Col
            xs="6"
            md="4"
            lg="3"
            key={i}
            className="my-2"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={(isMobile ? 0 : i % 3) * 100}
          >
            <a href={e.link} target="_blank" rel="noopener noreferrer">
              <Card
                body
                inverse
                className="projectCard"
                style={{ margin: "0" }}
              >
                <CardImg top width="100%" src={e.img} alt={e.name} />

                <CardBody className="p-0">
                  <CardTitle
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <h6>{e.name}</h6>
                  </CardTitle>
                </CardBody>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Media;
