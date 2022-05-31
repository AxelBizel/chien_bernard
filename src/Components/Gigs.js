import React, { useEffect } from "react";
import { Container } from "reactstrap";

const Gigs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.songkick.com/10189571/widget.js";
    script.async = true;
    const widgetDiv = document.getElementById("widgetDiv");
    widgetDiv.appendChild(script);
  }, []);

  return (
    <Container>
      <div data-aos="fade-in">
        <h2 className="section-titles">Concerts</h2>
      </div>
      <div id="widgetDiv" data-aos="fade-in">
        <a
          href="https://www.songkick.com/artists/10189571"
          class="songkick-widget"
          data-theme="light"
          data-track-button="on"
          data-detect-style="true"
          data-font-color="#000000"
          data-background-color="transparent"
          data-locale="fr"
        >
          Chien Bernard tour dates
        </a>
      </div>
    </Container>
  );
};

export default Gigs;
