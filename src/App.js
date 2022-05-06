import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import Header from "./Components/Header";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";
import ExperienceTimeline from "./Components/ExperienceTimeline";
import Projets from "./Components/Projets";
import FormationTimeline from "./Components/FormationTimeline";
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
      <section id="experience" className="section">
        <ExperienceTimeline />
      </section>
      <section id="projets" className="section">
        <Projets />
      </section>
      <section id="formation" className="section">
        <FormationTimeline />
      </section>
      <section id="stack" className="section">
        <Stack />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
