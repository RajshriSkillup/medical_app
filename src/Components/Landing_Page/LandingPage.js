import React from 'react';
 // Update the path to your Navbar component
import './LandingPage.css';
import Navbar from '../Nav_bar/Navbar';

export const LandingPage = () => {
  return (
    <div>
      <Navbar/> {/* Render the Navbar component */}
      <div>
        <div data-aos="fade-up" className="flex-hero">
          <h1>
            Your Health<br />
            <span className="text-gradient">
              Our Responsibility
            </span>
          </h1>
          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>
          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>
          <a href="#services">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};
