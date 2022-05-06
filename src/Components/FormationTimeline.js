import React from "react";
import { Container } from "reactstrap";
import WCSlogo from "../Images/WCS.jpg";
import EJDG from "../Images/ejdg-logo.jpg";
import UGA from "../Images/UGA.jpg";
import MASS from "../Images/UnivSavoie.jpg";
import Bac from "../Images/bac-es.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const FormationTimeline = () => {
  const formationItems = [
    {
      title: "Wild Code School",
      date: "2019-2020",
      description: `Titre RNCP niveau III “Développeur web et web mobile”,
    spécialité React - Node.js`,
      img: `${WCSlogo}`,
    },
    {
      title: "École de Journalisme de Grenoble",
      date: "2011-2013",
      description: "Master Pro reconnu par la CPNEJ, spécialité web, mention B",
      img: `${EJDG}`,
    },
    {
      title: "Master Histoire",
      date: "2005-2010",
      description: "Master de recherche en histoire contemporaine, mention TB",
      img: `${UGA}`,
    },
    {
      title: "MASS",
      date: "2005",
      description:
        "L1 Mathématiques et informatique appliquées aux sciences sociales, mention B.",
      img: `${MASS}`,
    },
    {
      title: "Bac ES spécialité Maths",
      date: "2004",
      description: "Spécialité Maths. Mention B, 2 ans d’avance.",
      img: `${Bac}`,
    },
  ];

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Formation</h2>
      </div>

      <VerticalTimeline>
        {formationItems.map((e) => (
          <VerticalTimelineElement
            date={e.date}
            iconStyle={{
              backgroundImage: `url(${e.img})`,
              backgroundColor: "#fff",
              color: "#666666",
              backgroundSize: "cover",
            }}
          >
            <h3>{e.title}</h3>
            <p>
              <em>{e.description}</em>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default FormationTimeline;
