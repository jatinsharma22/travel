import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div className="services">
        <Container>
          <div className="section_heading">
            <h2 class="fw-bold text-capitalize">
              We Offer Best Services
            </h2>
          </div>
          <Row className="gy-3 gy-md-5 gx-sm-5">
            <Col lg={3} sm={6}>
              <div className="service-card shadow-hover text-center align-items-center">
                  <img src="../images/weather.svg" alt="" className="mb-2" height="75" />
                  <h3 class="mb-3 fs-5">Calculated Weather</h3>
                  <p class="mb-0 fw-medium">
                    Built Wicket longer admire do barton vanity itself do in it.
                  </p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="service-card shadow-hover text-center align-items-center">
                  <img src="../images/flight.svg" alt="" className="mb-2" height="75" />
                  <h3 class="mb-3 fs-5">Best Flights</h3>
                  <p class="mb-0 fw-medium">
                    Built Wicket longer admire do barton vanity itself do in it.
                  </p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="service-card shadow-hover text-center align-items-center">
                  <img src="../images/event.svg" alt="" className="mb-2" height="75"  />
                  <h3 class="mb-3 fs-5">Local Events</h3>
                  <p class="mb-0 fw-medium">
                    Built Wicket longer admire do barton vanity itself do in it.
                  </p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="service-card shadow-hover text-center align-items-center">
                  <img src="../images/customize.svg" alt="" className="mb-3" height="65" />
                  <h3 class="mb-3 fs-5">Customization</h3>
                  <p class="mb-0 fw-medium">
                    Built Wicket longer admire do barton vanity itself do in it.
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
