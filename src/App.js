import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Property } from "./Property";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Active from "./Property/Active";
import { Container, Row, Col } from "react-bootstrap";
import { SpunProperties } from "./Property";
import ArchivedTable from "./Property/ArchivedTable";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Archived from "./Property/Archived";

const MasterWrapper = styled.div`
  background-color: white;
`;

const conSty = {
  backgroundColor: "white"
};

const CreateFeaturedPropertyComponent = (sps) => {
  const isFeatured = (sp) => {
    return sp.featured === true;
  };
  const ftProp = sps.filter(isFeatured)[0];
  return CreatePropertyComponent(ftProp);
};

const CreatePropertyComponent = (sp) => {
  console.log("called");
  return (
    <Property
      price={sp.price}
      details={sp.details}
      address={sp.address}
      listingAgent={sp.listingAgent}
      description={sp.description}
      propImages={sp.imageGallery}
      listingAgentsPhone={sp.listingAgentsPhone}
    />
  );
};

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      {CreateFeaturedPropertyComponent(SpunProperties)}
      <Active />
      <ArchivedTable />
      {/* <Archived /> */}
      <Contact />
    </React.Fragment>
  );
};
const goBackCopy = "< Home";

const backToActiveProps = () => {
  return (
    <Row>
      <Col style={{ height: "22px", marginBottom: "25px"}} lg={12} md={12} sm={12}>
        <Link to="/#active">{goBackCopy}</Link>
      </Col>
    </Row>
  );
};

const App = () => {
  return (
    <Router>
      <MasterWrapper>
        <NavBar />
        <Container style={conSty}>
          <Switch>
            <Route path={"/" + SpunProperties[0].route} key="0_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[0].price}
                details={SpunProperties[0].details}
                address={SpunProperties[0].address}
                listingAgent={SpunProperties[0].listingAgent}
                description={SpunProperties[0].description}
                propImages={SpunProperties[0].imageGallery}
                listingAgentsPhone={SpunProperties[0].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[1].route} key="1_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[1].price}
                details={SpunProperties[1].details}
                address={SpunProperties[1].address}
                listingAgent={SpunProperties[1].listingAgent}
                description={SpunProperties[1].description}
                propImages={SpunProperties[1].imageGallery}
                listingAgentsPhone={SpunProperties[1].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[2].route} key="2_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[2].price}
                details={SpunProperties[2].details}
                address={SpunProperties[2].address}
                listingAgent={SpunProperties[2].listingAgent}
                description={SpunProperties[2].description}
                propImages={SpunProperties[2].imageGallery}
                listingAgentsPhone={SpunProperties[2].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[3].route} key="3_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[3].price}
                details={SpunProperties[3].details}
                address={SpunProperties[3].address}
                listingAgent={SpunProperties[3].listingAgent}
                description={SpunProperties[3].description}
                propImages={SpunProperties[3].imageGallery}
                listingAgentsPhone={SpunProperties[3].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[4].route} key="4_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[4].price}
                details={SpunProperties[4].details}
                address={SpunProperties[4].address}
                listingAgent={SpunProperties[4].listingAgent}
                description={SpunProperties[4].description}
                propImages={SpunProperties[4].imageGallery}
                listingAgentsPhone={SpunProperties[4].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[5].route} key="5_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[5].price}
                details={SpunProperties[5].details}
                address={SpunProperties[5].address}
                listingAgent={SpunProperties[5].listingAgent}
                description={SpunProperties[5].description}
                propImages={SpunProperties[5].imageGallery}
                listingAgentsPhone={SpunProperties[5].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[6].route} key="6_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[6].price}
                details={SpunProperties[6].details}
                address={SpunProperties[6].address}
                listingAgent={SpunProperties[6].listingAgent}
                description={SpunProperties[6].description}
                propImages={SpunProperties[6].imageGallery}
                listingAgentsPhone={SpunProperties[6].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[7].route} key="7_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[7].price}
                details={SpunProperties[7].details}
                address={SpunProperties[7].address}
                listingAgent={SpunProperties[7].listingAgent}
                description={SpunProperties[7].description}
                propImages={SpunProperties[7].imageGallery}
                listingAgentsPhone={SpunProperties[7].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[8].route} key="8_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[8].price}
                details={SpunProperties[8].details}
                address={SpunProperties[8].address}
                listingAgent={SpunProperties[8].listingAgent}
                description={SpunProperties[8].description}
                propImages={SpunProperties[8].imageGallery}
                listingAgentsPhone={SpunProperties[8].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[9].route} key="9_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[9].price}
                details={SpunProperties[9].details}
                address={SpunProperties[9].address}
                listingAgent={SpunProperties[9].listingAgent}
                description={SpunProperties[9].description}
                propImages={SpunProperties[9].imageGallery}
                listingAgentsPhone={SpunProperties[9].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[10].route} key="10_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[10].price}
                details={SpunProperties[10].details}
                address={SpunProperties[10].address}
                listingAgent={SpunProperties[10].listingAgent}
                description={SpunProperties[10].description}
                propImages={SpunProperties[10].imageGallery}
                listingAgentsPhone={SpunProperties[10].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[11].route} key="11_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[11].price}
                details={SpunProperties[11].details}
                address={SpunProperties[11].address}
                listingAgent={SpunProperties[11].listingAgent}
                description={SpunProperties[11].description}
                propImages={SpunProperties[11].imageGallery}
                listingAgentsPhone={SpunProperties[11].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[12].route} key="12_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[12].price}
                details={SpunProperties[12].details}
                address={SpunProperties[12].address}
                listingAgent={SpunProperties[12].listingAgent}
                description={SpunProperties[12].description}
                propImages={SpunProperties[12].imageGallery}
                listingAgentsPhone={SpunProperties[12].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path="/" key="0_uni">
              <HomePage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </MasterWrapper>
    </Router>
  );
};

export default App;
