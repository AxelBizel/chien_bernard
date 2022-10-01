import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { fetchData } from "../utils/fetchData";
const Gigs = ({ isMobile }) => {
  const [pastGigs, setPastGigs] = useState(null);
  const [pics, setPics] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.songkick.com/10189571/widget.js";
    script.async = true;
    const widgetDiv = document.getElementById("widgetDiv");
    widgetDiv.appendChild(script);
    getPastGigs();
    getPics();
  }, []);

  const getPastGigs = async () => {
    const pastGigsRes = await fetchData("PAST_GIGS");
    setPastGigs(pastGigsRes);
  };

  const getPics = async () => {
    const picsData = await fetchData("CAROUSEL");
    setPics(picsData);
  };

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
      <div data-aos="fade-up">
        {pics && (
          <Carousel>
            {pics.map((p, i) => {
              return (
                <div key={`gigpic${i}`}>
                  <img src={p[0]} alt={p[1]} />
                  <p className="legend">{p[1]}</p>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      {pastGigs && (
        <div style={{ margin: 10 }} data-aos="fade-up">
          <h5>
            <b>Concerts passés</b>
          </h5>
          <ul style={{ listStyle: "none", padding: 0, listStyleTtype: "none" }}>
            {pastGigs.map((g, i) => (
              <li key={i}>
                <em>{g[0]}</em> - <b>{g[1]}</b> {isMobile && <br />}
                {g[2]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Gigs;
