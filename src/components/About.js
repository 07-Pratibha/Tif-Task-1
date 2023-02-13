import React from "react";
import ReactDOM from "react-dom/client";
import about from "../images/about.png";

export default function About() {
  return (
    <div className="about">
      <img src={about}/>
      <div className="about-right">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button></button>
      </div>
    </div>
  );
}
