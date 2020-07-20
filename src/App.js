import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Property } from "./assets/properties";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Active from "./components/Active";
import { Container, Row, Col } from "react-bootstrap";
import { SpunProperties } from "./assets/properties";
import ArchivedTable from "./components/ArchivedTable";
import CovidBanner from "./components/CovidBanner";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Archived from "./Property/Archived";

const MasterWrapper = styled.div`
  background-color: white;
`;

const conSty = {
  backgroundColor: "white",
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
      underAgreement={SpunProperties[0].underAgreement}
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
      <Col
        style={{ height: "22px", marginBottom: "25px" }}
        lg={12}
        md={12}
        sm={12}
      >
        <Link to="/#active">{goBackCopy}</Link>
      </Col>
    </Row>
  );
};

const App = () => {
  React.useEffect(() => {
    const splash = document.getElementById("quartet-splash");

    // eslint-disable-next-line no-unused-expressions
    splash?.parentNode?.removeChild(splash);
  }, []);

  return (
    <Router>
      <MasterWrapper>
        <CovidBanner />
        <NavBar />
        <Container style={conSty}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            <Route path={"/" + SpunProperties[15].route} key="15_uni">
                {backToActiveProps()}
                <Property
                  underAgreement={SpunProperties[15].underAgreement}
                  price={SpunProperties[15].price}
                  details={SpunProperties[15].details}
                  address={SpunProperties[15].address}
                  listingAgent={SpunProperties[15].listingAgent}
                  description={SpunProperties[15].description}
                  propImages={SpunProperties[15].imageGallery}
                  listingAgentsPhone={SpunProperties[15].listingAgentsPhone}
                />
                <Active />
              </Route>
              <Route path={"/" + SpunProperties[0].route} key="0_uni">
                {backToActiveProps()}
                <Property
                  underAgreement={SpunProperties[0].underAgreement}
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
                  underAgreement={SpunProperties[1].underAgreement}
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
                  underAgreement={SpunProperties[2].underAgreement}
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
                  underAgreement={SpunProperties[3].underAgreement}
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
                  underAgreement={SpunProperties[4].underAgreement}
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
                  underAgreement={SpunProperties[5].underAgreement}
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
                  underAgreement={SpunProperties[6].underAgreement}
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
                  underAgreement={SpunProperties[7].underAgreement}
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
                  underAgreement={SpunProperties[8].underAgreement}
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
                  underAgreement={SpunProperties[9].underAgreement}
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
                  underAgreement={SpunProperties[10].underAgreement}
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
                  underAgreement={SpunProperties[11].underAgreement}
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
                  underAgreement={SpunProperties[12].underAgreement}
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
              <Route path={"/" + SpunProperties[13].route} key="13_uni">
                {backToActiveProps()}
                <Property
                  underAgreement={SpunProperties[13].underAgreement}
                  price={SpunProperties[13].price}
                  details={SpunProperties[13].details}
                  address={SpunProperties[13].address}
                  listingAgent={SpunProperties[13].listingAgent}
                  description={SpunProperties[13].description}
                  propImages={SpunProperties[13].imageGallery}
                  listingAgentsPhone={SpunProperties[13].listingAgentsPhone}
                />
                <Active />
                </Route>
                <Route path={"/" + SpunProperties[14].route} key="14_uni">
                {backToActiveProps()}
                <Property
                  underAgreement={SpunProperties[14].underAgreement}
                  price={SpunProperties[14].price}
                  details={SpunProperties[14].details}
                  address={SpunProperties[14].address}
                  listingAgent={SpunProperties[14].listingAgent}
                  description={SpunProperties[14].description}
                  propImages={SpunProperties[14].imageGallery}
                  listingAgentsPhone={SpunProperties[14].listingAgentsPhone}
                />
                <Active />
              </Route>
              <Route path="/" key="0_uni">
                <HomePage />
              </Route>
            </Switch>
          </Suspense>
        </Container>
        <Footer />
      </MasterWrapper>
    </Router>
  );
};

export default App;
