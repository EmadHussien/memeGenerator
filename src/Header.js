import React from "react";
import logo from "./images/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="logo-title">
        <img src={logo} alt="meme" />
        <h2 className="title">Meme Generator</h2>
      </div>
      <p className="course">React Course - Project 3</p>
    </header>
  );
}
