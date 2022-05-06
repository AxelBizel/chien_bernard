import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from "reactstrap";
import BootstrapLogo from "../Images/Stack/BootstrapLogo.svg";
import CSS3Logo from "../Images/Stack/CSS3Logo.svg";
import GitLogo from "../Images/Stack/GitLogo.svg";
import HTML5Logo from "../Images/Stack/HTML5Logo.svg";
import JSLogo from "../Images/Stack/JavascriptLogo.svg";
import MySQLLogo from "../Images/Stack/MysqlLogo.svg";
import NodeLogo from "../Images/Stack/NodeLogo.svg";
import AdobeCreativeLogo from "../Images/Stack/AdobeCreative.png";
import ScrumLogo from "../Images/Stack/ScrumLogo.svg";
import GoogleDriveLogo from "../Images/Stack/GoogleDriveLogo.svg";
import ReactLogo from "../Images/Stack/ReactLogo.svg";
import ReduxLogo from "../Images/Stack/ReduxLogo.svg";
import ChartJSLogo from "../Images/Stack/chartjsLogo.svg";
import SassLogo from "../Images/Stack/SassLogo.svg";
import SequelizeLogo from "../Images/Stack/SequelizeLogo.svg";
import SvelteLogo from "../Images/Stack/SvelteLogo.svg";

const Stack = () => {
const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
  
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);


  const stackElements = [
    {
      name: "HTML5",
      img: `${HTML5Logo}`,
      id: 1
    },
    {
      name: "CSS3",
      img: `${CSS3Logo}`,
      id: 2
    },
    {
      name: "Javascript",
      img: `${JSLogo}`,
      id: 3
    },
    {
      name: "React",
      img: `${ReactLogo}`,
      id: 4
    },
    {
      name: "Redux",
      img: `${ReduxLogo}`,
      id: 5
    },
    {
      name: "Node",
      img: `${NodeLogo}`,
      id: 6
    },
    {
      name: "Svelte",
      img: `${SvelteLogo}`,
      id: 7
    },
    {
      name: "ChartJS",
      img: `${ChartJSLogo}`,
      id: 8
    },
    {
      name: "Bootstrap",
      img: `${BootstrapLogo}`,
      id: 9
    },
    {
      name: "SASS",
      img: `${SassLogo}`,
      id: 10
    },
    {
      name: "MySQL",
      img: `${MySQLLogo}`,
      id: 11
    },
    {
      name: "Sequelize",
      img: `${SequelizeLogo}`,
      id: 12
    },

    {
      name: "Git Workflow",
      img: `${GitLogo}`,
      id: 13
    },
    {
      name: "Scrum/Agile",
      img: `${ScrumLogo}`,
      id: 14
    },
    {
      name: "Adobe Suite",
      img: `${AdobeCreativeLogo}`,
      id: 15
    },
    {
      name: "Google Tools",
      img: `${GoogleDriveLogo}`,
      id: 16
    }
  ];

  return (
    <Container>
     
      <div data-aos="zoom-in">
        <h2 className="section-titles">Stack</h2>
      </div>
      
  
        <Row className="justify-content-center">
          {stackElements.map((e,i) => (
            <Col
              xs="6"
              sm="4"
              md="3"
              xl="2"
              className="my-2"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={isMobile ? (200*(i % 2)): ((i % 6) * 100)}
            >
              <Card
                body
                inverse
                style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
              >
                <CardImg top width="100%" src={e.img} alt={e.name} />
                <CardBody className="p-0">
                  <CardTitle
                    style={{
                      margin: "0",
                      paddingTop: "3vh",
                      textAlign: "center",
                      fontFamily: "Roboto Mono"
                    }}
                  >
                    {e.name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
    
    </Container>
  );
};

export default Stack;
