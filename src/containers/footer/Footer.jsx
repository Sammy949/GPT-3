import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <a href="#">Request Early Access</a>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3 Logo" />
          <p>The Future is Now!!!<br/>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Overons</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Counters</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <ul>
            <li><a href="#">T & C</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="#">Lorem ipsum faveir scacev hjaciu</a></li>
            <li><a href="#">123-456-789</a></li>
            <li><a href="#">info@gpt3.net</a></li>
          </ul>

        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <hr />
        <p>@ 2023 GPT-3. All Rights Reserved</p>
        <p>Created by <a href="http://samy01.netlify.app">SamY</a></p>
      </div>
    </div>
  )
}

export default Footer
