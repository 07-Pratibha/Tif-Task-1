import React from "react";
import bottomFoodTruck from "../images/bottomFoodTruck.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer-image" src={bottomFoodTruck} />
      <div className="footer-contact-us">
        <h2>Contact Us</h2>
        <div>
          <p>
            Lorem Ispansum Pvt Ltd.5/1, Magalton Road, 
            Phartoash gate near YTM
            Market, XYZ-343434
          </p>
        </div>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div className="footer-more">
        <h2>More</h2>
        <p>About Us</p>
        <p>Products</p>
        <p>Careers</p>
        <p>Contact Us</p>
      </div>
      <div className="footer-social">
        <h2>Social Links</h2>
        <div className="footer-social__icons">
          <img src={instagram} />
          <img src={twitter} />
          <img src={facebook} />
        </div>
      </div>
    </div>
  );
}
