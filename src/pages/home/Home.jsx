/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './Home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I`m Stivin M James.</span> Web Developer/Business Analyst
          </h1>

          <p className="home__description">
            As a dedicated business analyst with a BSc in Business Analytics from the University of Southampton. I specialize in business analysis, data analytics, and programming. I have cross-cultural communication skills and thrive in collaborative environments. I am passionate about continuous learning and personal growth, and am currently enrolled in the Front-end Web Development Bootcamp on EDx. My goal is to drive operational efficiency through data-driven insights. Please connect with me if you are looking for a dynamic and dedicated business analyst with an analytical mindset.
          </p>

          <Link to='/about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
