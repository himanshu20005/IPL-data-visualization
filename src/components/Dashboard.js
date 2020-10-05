import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Card.css";
export default function Dashboard() {
  return (
    <div className="year-navbar">
      <h6 style={{ marginBottom: "15px" }}>Choose an year</h6>
      <ButtonGroup size="mb-2">
        <LinkContainer exact to="/DisplayResult/2008">
          <Button className="btn-theme">2008</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2009">
          <Button className="btn-theme">2009</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2010">
          <Button className="btn-theme">2010</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2011">
          <Button className="btn-theme">2011</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2012">
          <Button className="btn-theme">2012</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2013">
          <Button className="btn-theme">2013</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2014">
          <Button className="btn-theme">2014</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2015">
          <Button className="btn-theme">2015</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2016">
          <Button className="btn-theme">2016</Button>
        </LinkContainer>
        <LinkContainer exact to="/DisplayResult/2017">
          <Button className="btn-theme">2017</Button>
        </LinkContainer>
      </ButtonGroup>
      <br />
      <br />
      <iframe
        src="https://widget.crictimes.org/"
        style={{ width: "80%", minHeight: "450px" }}
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
}
