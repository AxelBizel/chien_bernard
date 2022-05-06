import React from "react";
import { Container } from "reactstrap";
import MAANS from "../Images/MAANS-Picto.png";
import IDIX from "../Images/idix.png";
import LaCroix from "../Images/lacroix.png";
import Mind from "../Images/mind-logo.jpg";
import News from "../Images/NewsPicto.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles"> Expérience</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          date="Fév. 2020 - Present"
          iconStyle={{
            backgroundImage: `url(${MAANS})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Développeur full-stack Javascript</h3>
          <p>
            <em>
              MAANS (Music as a new sense) est une start-up développant un
              fauteuil d'immersion acoustique destiné à améliorer la qualité de
              vie au travail et l'expérience client.
            </em>
          </p>
          <br />
          <ul>
            <li>
              Refonte totale du site vitrine et mise en place d'un back-office
              sur mesure.
            </li>
            <li>
              Création d’un dashboard client de gestion et personnalisation d’un
              parc de fauteuils et de visualisation des données d’utilisation
            </li>
            <li>
              Stack : React / Node.js / Svelte.js / Sequelize / Chart.js/ SASS
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-2018"
          iconStyle={{
            backgroundImage: `url(${IDIX})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Datajournaliste / Infographiste</h3>

          <p>
            <em>
              IDIX (ex-Agence Idé) est une agence de presse spécialisée dans la
              production d'infographies et la fourniture de données pour la
              presse et l'audiovisuel.
            </em>
          </p>
          <br />
          <ul>
            <li>
              Conception et réalisation d'infographies et datavisualisations
              pour la presse -
            </li>
            <li>
              Pilotage de projets web (dispositifs électoraux, événements
              spéciaux, etc…) -{" "}
            </li>
            <li>Utilisation, analyse et nettoyage de bases de données</li>
            <li>Suivi de commandes clients</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2014-2015"
          iconStyle={{
            backgroundImage: `url(${Mind})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Journaliste spécialisé</h3>
          <p>
            <em>
              Mind Média (ex-Satellinet) est une newsletter hebdomadaire
              professionnelle dédiée à l'économie des médias et de la publicité
              en ligne.
            </em>
          </p>
          <br />
          <ul>
            <li>
              Suivi du secteur économique des médias et de la communication en
              ligne
            </li>
            <li>Rédaction d'aricles d'actualité et d'analyse</li>
            <li>PAO et gestion de la newsletter</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2013-2014"
          iconStyle={{
            backgroundImage: `url(${LaCroix})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Journaliste Web</h3>

          <p>
            <em>
              LaCroix.com (groupe Bayard) est un des principaux sites
              d'actualité généraliste français.
            </em>
          </p>
          <br />
          <ul>
            <li>Rédaction d'articles d'actualité générale </li>
            <li>
              Enrichissement multimédia et data des articles print en vue de
              leur publication sur le site
            </li>
            <li>
              Frontpage editing, gestion du site en CMS, community management
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2009-2013"
          iconStyle={{
            backgroundImage: `url(${News})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Journaliste presse écrite et web</h3>

          <p>
            <em>
              Nombreux stages, CDD en rédaction ou travaux en freelance pour le
              compte de différents médias.
            </em>
          </p>
          <br />
          <ul>
            <li>
              Formation aux différents métiers de la presse écrite et web :
              rédaction, secrétariat de rédaction, PAO, reportage vidéo, etc.
            </li>

            <li>
              Références : L'Humanité, Les Inrocks, OWNI, Lyon Capitale,
              LibéLyon, Le Progrès, Le Dauphiné Libéré, Grenews, etc.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
