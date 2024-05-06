import React from "react";
import "./home.scss";
import Services from "../services/Services";
import Footer from "../footer/Footer";
import Clients from "../clients/Clients";
import Connect from "../connect/Connect";
import Banner from "../../components/banner/Banner";
const Home = () => {

  return (
    <>
    <div className="image-section">
      <img
        src="https://www.iclimbs.com/img/home-bg.jpg"
        alt="Banner"
        />
      <div className="content">
        <h6>DON’T LOOK FURTHER, HERE IS THE KEY</h6>
        <h1>We’re Industrial solution</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim. sed do eiusmod tempor incididunt.
        </p>
        <button>Get Started</button>
      </div>
    </div>
    
        <Services/>
        <Clients/>
        <Connect/>
        <Footer/>
    </>
  );
};

export default Home;
