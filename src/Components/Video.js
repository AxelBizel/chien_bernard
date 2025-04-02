import React from "react";
import { Container } from "reactstrap";

const Video = ({ isMobile }) => {
  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles">VIDEO</h2>
      </div>
      <div className="videoWrapper" data-aos="fade-up">
        <iframe
          width="100%"
          height={isMobile ? "240" : "500"}
          src="https://www.youtube.com/embed/0KvVHwsWh8A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameborder="none"
        />
      </div>
      </div>
      <div className="videoWrapper" data-aos="fade-up">
        <iframe
          width="100%"
          height={isMobile ? "240" : "500"}
          src="https://www.youtube.com/embed/JR7UnsysDck"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameborder="none"
        />
      </div>
    </Container>
  );
};

export default Video;
