import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

const Video = () => {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  return (
    <Container>
      <div data-aos="fade-in">
        <h2 className="section-titles">VIDEO</h2>
      </div>
      <div className="videoWrapper" data-aos="fade-in">
        <iframe
          width={isMobile ? 350 : "100%"}
          height={isMobile ? 250 : 500}
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
