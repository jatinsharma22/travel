import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Col, Row, Container } from "react-bootstrap";
import TourPlans from "../components/TourPlans";
import { API } from "../data/API";

const Package = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const pageHead = "Contact us today to start planning your next extraordinary trip"
  return (
    <>
      <Banner pageHead={pageHead} />
      <div className="xl:py-20 lg:py-11 py-7">
        <Container>
          <div className="section_heading">
            <h2 className="fw-bold text-capitalize text-start">Our Packages</h2>
          </div>
          <Row className="gy-4">
            {API.map((element, key) => {
              return (
                <Col xl={4} lg={4} md={6} key={key}>
                  <TourPlans element={element} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Package;
