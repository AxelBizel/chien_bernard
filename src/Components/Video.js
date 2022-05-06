import React from "react";
import { Container } from "reactstrap";

const Video = () => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">VIDEO</h2>
      </div>
      <div className="videoWrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0KvVHwsWh8A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Video;
