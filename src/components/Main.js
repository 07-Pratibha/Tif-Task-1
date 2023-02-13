import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import foodTruck from "../images/foodTruck.png";
import pizza from "../images/pizza.png";
import redColour from "../images/redColour.png";

export default function Main() {
  return (
    <header className="main">
      <div className="main-div">
        <img src={foodTruck} className="logo" />
        <h1 className="main-heading">
          Discover the <span>Best</span> Food and Drinks{" "}
        </h1>
        <p className="main-text">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="main--button_left">Explore Now!</button>
      </div>
      <div className="main--right">
        <img className="main-right_red" src={redColour}/>
        <img className="main-right_pizza" src={pizza}/>
        {/* <button></button> */}
      </div>
    </header>
  );
}
