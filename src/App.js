import React from "react";
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

function App() {
  AOS.init();
  return (
    <div className="App">
      <section id="header">
        <Header />
      </section>
      <NavbarComponent />
      <section id="bio" className="section">
        <Bio />
      </section>
      <section id="music" className="section">
        <Music />
      </section>
      <section id="concerts" className="section">
        <Gigs />
      </section>
      <section id="video" className="section">
        <Video />
      </section>
      <section id="media" className="section">
        <Media />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
