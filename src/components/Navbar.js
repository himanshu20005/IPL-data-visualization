import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Card.css";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <LinkContainer exact to="/">
        <a>
          <span>Dashboard</span>
        </a>
      </LinkContainer>{" "}
      &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      &nbsp;
      <span className="vertical-line"></span>
      <LinkContainer exact to="/Dashboard">
        <a>
          <span>View yearly result</span>
        </a>
      </LinkContainer>
    </div>
  );
}
