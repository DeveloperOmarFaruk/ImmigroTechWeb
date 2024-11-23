import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import GetProposal from "../GetProposal/GetProposal";
import Consultation from "../Consultation/Consultation";
import Chooseus from "../Chooseus/Chooseus";
import Process from "../Process/Process";
import GoogleMap from "../GoogleMap/GoogleMap";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "4rem" }}>
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="choose-thrive">
        <Chooseus />
      </div>

      <div>
        <Process />
      </div>

      <div>
        <Consultation />
      </div>

      <div>
        <Review />
      </div>

      <div id="contact">
        <GetProposal />
      </div>

      <div>
        <GoogleMap />
      </div>
    </>
  );
};

export default Home;
