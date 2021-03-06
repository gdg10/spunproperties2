import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledBanner = styled.div`
  padding: 12px 24px 12px 24px;
  margin: 0;
  display: block;
  width: 100%;
  background-color: green;
  font-size: 16px;
  text-align: center;

  svg {
    display: none;
  }

  span {
    margin: 0;
    padding: 16px 0 0 0;
    font-weight: normal;
    text-align: center;
    color: white;
    font: 16px / 25px SofiaProRegular, Arial, sans-serif;
  }
`;

const CovidBanner = () => {
  const [show, setShow] = useState(true);
  const paragraph =
    "We're still open! Spunproperties is taking all available precautionary health measures to ensure safety in light of COVID-19.";
  return (
    <>
      {show && (
        <StyledBanner data-test="landing.covid-banner">
          <span data-test="landing.covid-banner.paragraph">{paragraph}</span>{" "}
          <Button
            size="sm"
            onClick={() => setShow(false)}
            variant="light"
            style={{ borderRadius: "20px" }}
          >
            Close
          </Button>
        </StyledBanner>
      )}
    </>
  );
};

export default CovidBanner;
