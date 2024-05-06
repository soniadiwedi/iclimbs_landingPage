import React from "react";
import "./footer.scss";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-start">
        <div className="about">
          <div className="title">
          <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
          <h4>Iclibms</h4>
          </div>
          <p>At iCLIMBS, we are your one-stop destination for comprehensive IT
          services and cutting-edge manpower solutions. With a commitment to
          excellence and innovation, we empower businesses to thrive in today's
          digital landscape.</p>
        </div>
        <div className="explore">
          <div className="title">
            <h4>EXPLORE</h4>
          </div>
          <div className="content">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact</a>
          </div>  
        </div>
        <div className="contact">
          <div className="title">
            <h4>CONTACT</h4>
          </div>
          <div className="content">
          <div className="pin">
          <MdOutlinePersonPinCircle style={{color:"#b82424",fontSize:"20px"}}/>
          <p>Plot-269, Udyog Vihar Phase-4, Gurgaon, Haryana-122015</p>
          </div>
          <div className="email">
          <MdOutlineEmail style={{color:"#b82424",fontSize:"20px"}}/>
          <p>contact@iclimbs.com</p>
          </div>
          <div className="phone">
          <MdOutlineLocalPhone style={{color:"#b82424",fontSize:"20px"}}/>
          <p>(0124) 4376471</p>
          </div>
          </div>
        
        </div>
      </div>
      <hr />
      <p className="copyright">©2022, iCLIMBS Pvt. Ltd.</p>
    </footer>
  );
};

export default Footer;
