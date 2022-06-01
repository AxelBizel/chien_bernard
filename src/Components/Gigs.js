import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { Carousel } from "react-responsive-carousel";

const Gigs = ({ isMobile }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.songkick.com/10189571/widget.js";
    script.async = true;
    const widgetDiv = document.getElementById("widgetDiv");
    widgetDiv.appendChild(script);
  }, []);

  const pics = [
    {
      url: require("../Images/Gigs/JJ3.jpg"),
      legend: "Jack Jack (Bron) - 20211217",
    },
    {
      url: require("../Images/Gigs/JJ1.jpg"),
      legend: "Jack Jack (Bron) - 20211217",
    },
    {
      url: require("../Images/Gigs/JJ4.jpg"),
      legend: "Jack Jack (Bron) - 20211217",
    },
    {
      url: require("../Images/Gigs/JJ5.jpg"),
      legend: "Jack Jack (Bron) - 20211217",
    },
    {
      url: require("../Images/Gigs/trokson.jpg"),
      legend: "Trokson (Lyon) - 20220226",
    },
  ];

  return (
    <Container>
      <div data-aos="fade-up">
        <h2 className="section-titles">Concerts</h2>
      </div>

      <div id="widgetDiv" data-aos="fade-up">
        <a
          href="https://www.songkick.com/artists/10189571"
          className="songkick-widget"
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

      <div style={{ margin: 20 }}>
        <p>
          <b>Past gigs</b>
          <br />
          2022-03-12 - Le Farmer (Lyon) w/ Nevraska & Disordense <br />
          2022-02-26 - Le Trokson (lyon) <br />
          2021-12-17 - Jack Jack (Bron) <br />
        </p>
      </div>

      <Carousel>
        {pics.map((p, i) => {
          return (
            <div key={i}>
              <img src={p.url} alt={p.legend} />
              <p className="legend">{p.legend}</p>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Gigs;
