import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./../text.css";

export const InfoPoint = styled.p`
  margin: 0% 8% 0% 8%;
  //color: dimgray;
  text-align: justify;
  padding: 0px 0px 20px 0px;
  font-family: "GeosansLight", sans-serif;
  font-size: 1.25em;
`;

export const AccentPoint = styled.h2`
  margin: 0px;
  text-align: center;
  padding: 50px 0px 0px 0px;
  color: indigo;
  font-family: "GeosansLight", sans-serif;
  font-weight: bold;
`;


export const AccentPoint2 = styled.h2`
  margin: 0px;
  text-align: center;
  padding: 0px 0px 25px 0px;
  font-family: "GeosansLight", sans-serif;
  vertical-align: middle;
`;

export const SpacerImage = styled.p`
  text-align: center;
  margin: 20px 0px 20px 0px;
  padding: 0px;
  color: #fc7303;
`;

const About = () => {
  return (
      <Row>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint id="about">Fast Sales</AccentPoint>
          <SpacerImage>■■■</SpacerImage>
          <InfoPoint>
            We work with Real Estate agents & home owners to make houses ready
            for quick sale. Our Spun team can paint, change fixtures, faucets,
            flooring or any quick remodeling needed and home-stage it with
            Spundesign for a quick high value sell.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint>Free Marketing</AccentPoint>
          <SpacerImage>■■■</SpacerImage>
          <InfoPoint>
            When an agent uses Spundesign to make the house sell ready, we put
            pictures and the link to the agent on Spunproperties for free.
            That's double the marketing for agents.
          </InfoPoint>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <AccentPoint>Dependable Name</AccentPoint>
          <SpacerImage>■■■</SpacerImage>
          <InfoPoint>
            You’ll know a Spun Property when you see our signature sign next the
            Real Estate lawn sign. When buyers drive by, they'll know the house
            will be beautiful inside.
          </InfoPoint>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <AccentPoint id="properties">Featured Home</AccentPoint>
          <SpacerImage>■■■</SpacerImage>
          {/* <AccentPoint2>
            A Spunproperty with a gorgeous kitchen...
          </AccentPoint2> */}
        </Col>
      </Row>
  );
};

export default About;
