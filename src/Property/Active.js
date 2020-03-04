import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../text.css";
import { AccentPoint, SpacerImage } from "../About";
import { SpunProperties } from ".";
import { Link } from "react-router-dom";
import { Loading } from "./PropertyImages";
import Fade from "react-bootstrap/Fade";
import { motion } from "framer-motion";

const LOAD_THRES = SpunProperties.filter(p => {
  return p.active !== true;
}).length;
// console.log(LOAD_THRES);

const renderCard = (curProp, loadCounter, setLoadCounter) => {
  if (curProp.active === false) {
    return null;
  }

  return (
    <Col lg={4} md={6} sm={12}>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          textAlign: "left",
          marginBottom: "2rem",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.1)",
          borderRadius: "20px"
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
              />
            </motion.div>
          </Link>
        </Fade>
        <Card.Body>
          <Card.Title>{curProp.address}</Card.Title>
          <Card.Text style={{ fontSize: ".9em" }}>
            {curProp.price + " | " + curProp.details}
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
                  boxShadow: "0px 3px 15px rgba(0,0,0,0.1)"
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
  const [loadCounter, setLoadCounter] = React.useState(1);
  return (
    <Row style={{ textAlign: "center" }}>
      {sectionTitle}
      {SpunProperties.map(spunProp => {
        return renderCard(spunProp, loadCounter, setLoadCounter);
      })}
    </Row>
  );
};

export default Active;
