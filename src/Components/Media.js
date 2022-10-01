import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import { fetchData } from "../utils/fetchData";

const Media = ({ isMobile }) => {
  const [mediaItems, setMediaItems] = useState(null);

  useEffect(() => {
    getMediaItems();
  }, []);

  const getMediaItems = async () => {
    const mediaData = await fetchData("MEDIA");
    setMediaItems(mediaData);
  };

  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles">Media</h2>
      </div>

      <Row className="justify-content-center">
        {mediaItems &&
          mediaItems.map((e, i) => (
            <Col
              xs="6"
              md="4"
              lg="3"
              key={i}
              className="my-2"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={(isMobile ? 0 : i % 4) * 100}
            >
              <a href={e[1]} target="_blank" rel="noopener noreferrer">
                <Card
                  body
                  inverse
                  className="projectCard"
                  style={{ margin: "0" }}
                >
                  <CardImg top width="100%" src={e[2]} alt={e[0]} />

                  <CardBody className="p-0">
                    <CardTitle
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <h6>{e[0]}</h6>
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
