import React from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import "../text.css";
import { AccentPoint, SpacerImage } from "./About";
import { SpunProperties } from "../assets/properties";
import { Link } from "react-router-dom";
import { Loading } from "./PropertyImages";
import Fade from "react-bootstrap/Fade";
import { motion } from "framer-motion";

const LOAD_THRES = SpunProperties.filter((p) => {
  return p.active === true;
}).length;

const renderCard = (curProp, loadCounter, setLoadCounter) => {
  if (curProp.active === false) {
    return null;
  }

  return (
    <Col lg={4} md={6} sm={12} key={curProp.route + curProp.price}>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          textAlign: "left",
          marginBottom: "2rem",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.1)",
          borderRadius: "20px",
        }}
      >
        {loadCounter < LOAD_THRES && Loading}
        <Fade in={loadCounter >= LOAD_THRES}>
          <Link to={"/" + curProp.route}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Card.Img
                variant="top"
                height="175px"
                src={curProp.cardImage}
                onLoad={() => {
                  setLoadCounter(loadCounter + 1);
                }}
              ></Card.Img>
            </motion.div>
          </Link>
        </Fade>
        <Card.Body>
          <Card.Text style={{ fontSize: ".9em" }}>
            <Badge
              style={{
                visibility: curProp.underAgreement ? "visible" : "hidden",
              }}
              variant="success"
            >
              Under Agreement
            </Badge>
          </Card.Text>
          <Card.Title>{curProp.address}</Card.Title>
          <Card.Text style={{ fontSize: ".9em" }}>
            {curProp.price} {curProp.details}
          </Card.Text>
          <Link to={"/" + curProp.route}>
            {" "}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                variant="primary"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "indigo",
                  borderColor: "indigo",
                  boxShadow: "0px 3px 15px rgba(0,0,0,0.1)",
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const sectionTitle = (
  <Col lg={12} md={12} sm={12}>
    <AccentPoint id="active">Active Listings</AccentPoint>
    <SpacerImage>■■■</SpacerImage>
  </Col>
);

const Active = () => {
  // const [loadCounter, setLoadCounter] = React.useState(2);
  return (
    <>
      <Row style={{ textAlign: "center" }}>
        {sectionTitle}
        <p style={{ margin: "auto" }}>
          See{" "}
          <a
            href="https://www.instagram.com/spunproperties/"
            target="_blank"
            rel="noopener noreferrer"
          >
            our Instagram
          </a>{" "}
          for our newest properties!
        </p>
        {/* {SpunProperties.map((spunProp) => {
        return renderCard(spunProp, loadCounter, setLoadCounter);
      })} */}
      </Row>
      <Row>
        <Button
          color="indigo"
          size="lg"
          style={{
            borderRadius: "20px",
            margin: "24px auto",
          }}
          onClick={() => {
            window.open("https://www.instagram.com/spunproperties/");
          }}
        >
          Go to Instagram
        </Button>
      </Row>
    </>
  );
};

export default Active;
