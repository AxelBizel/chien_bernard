import React, { useState, useEffect } from "react";
import NavbarComponent from "./Components/NavbarComponent";
import Header from "./Components/Header";
import Media from "./Components/Media";
import Footer from "./Components/Footer";
import Bio from "./Components/Bio";
import Music from "./Components/Music";
import Video from "./Components/Video";
import Gigs from "./Components/Gigs";
import AOS from "aos";
import "./Stylesheets/main.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  AOS.init();
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  return (
    <div className="App">
      {isMobile !== null && (
        <>
          <section id="header">
            <Header isMobile={isMobile} />
          </section>
          <NavbarComponent isMobile={isMobile} />
          <section id="bio" className="section">
            <Bio isMobile={isMobile} />
          </section>
          <section id="music" className="section">
            <Music isMobile={isMobile} />
          </section>
          <section id="concerts" className="section">
            <Gigs isMobile={isMobile} />
          </section>
          <section id="video" className="section">
            <Video isMobile={isMobile} />
          </section>
          <section id="media" className="section">
            <Media isMobile={isMobile} />
          </section>
          <section id="contact">
            <Footer isMobile={isMobile} />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
