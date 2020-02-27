import React from "react";
import "../text.css";
import { AccentPoint, SpacerImage } from "../About";
import { Row, Col, Table } from "react-bootstrap";
import { SpunProperties } from ".";
import { Link } from "react-router-dom";

const renderRow = (curProp, i) => {
  return (
    <tr>
      <td>{i}</td>
      <td>
        <Link style={{ color: "indigo" }} to={"/" + curProp.route}>
          {curProp.address}{" "}
        </Link>
      </td>
      <td>{curProp.price}</td>
      <td>{curProp.listingAgent}</td>
    </tr>
  );
};

const sectionTitle = (
  <Col lg={12} md={12} sm={12}>
    <AccentPoint id="archivedTable">Archived Listings</AccentPoint>
    <SpacerImage>■■■</SpacerImage>
  </Col>
);

const ArchivedTable = () => {
  const Arch = SpunProperties.filter(p => {
    return p.archived === true;
  });
  return (
    <>
      {sectionTitle}
      <Row style={{ textAlign: "left", padding: "0px 8px" }}>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Price</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            {Arch.map((spunProp, i) => {
              return renderRow(spunProp, i);
            })}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ArchivedTable;
