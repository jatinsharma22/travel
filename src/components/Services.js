import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div className="services">
        <Container>
          <div className="section_heading">
            <h2 className="fw-bold text-capitalize">
              Services We Offer 
            </h2>
          </div>
          <Row className="gy-3 gy-md-5 gx-sm-5">
            <Col xl={3} md={6}>
              <div className="service-card shadow-hover text-center items-center">
                  <img src="../images/weather.svg" alt="" className="mb-2 max-w-16" />
                  <h3 className="mb-3 fs-5">Customised Itineraries</h3>
                  <p className="mb-0">
                  We have personalised travel itineraries that cater to clients’ unique preferences, budgets and travel styles.
                  </p>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="service-card shadow-hover text-center items-center">
                  <img src="../images/flight.svg" alt="" className="mb-2  max-w-16"/>
                  <h3 className="mb-3 fs-5">Adventure Travel</h3>
                  <p className="mb-0">
                  For outdoor enthusiasts, we offer a wide range of adventure travel packages that include hiking and wildlife safaris with trusted safety and quality. 
                  </p>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="service-card shadow-hover text-center items-center">
                  <img src="../images/event.svg" alt="" className="mb-2 max-w-16"/>
                  <h3 className="mb-3 fs-5">Luxury Experiences</h3>
                  <p className="mb-0">
                  Exclusive luxury travel experiences like private chartered yachts, resorts, wellness retreats and culinary adventures deliver the ultimate luxury and pampering.
                  </p>
              </div>
            </Col>
            <Col xl={3} md={6}>
              <div className="service-card shadow-hover text-center items-center">
                  <img src="../images/customize.svg" alt="" className="mb-3 max-w-16"/>
                  <h3 className="mb-3 fs-5">Group Packages</h3>
                  <p className="mb-0">
                  We excel in planning seamless group travel experiences that offer exclusive perks & group discounts that include group transportation, accommodation to specifically curated activities and entertainment. 
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
