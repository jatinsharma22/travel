import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Banner = ({ bannerHeading, subHeading, bannerParagraph }) => {
  return (
    <section className="banner_main">
      <div
        className="bg_holder"
        style={{ backgroundImage: "url(../images/hero-bg.svg)" }}
      ></div>
      <Container>
        <Row className="align-items-center z-2 position-relative">
          <Col md={5} lg={6} className="order-0 order-md-1 text-end">
            <img src="../images/hero-img.png" className="pt-7 pt-md-0 hero-img" alt="Hero Image" />
          </Col>
          <Col md={7} lg={6} className="text-md-start text-center py-6">
            <h4 class="fw-bold text-danger mb-3">{subHeading}</h4>
            <h1 className="hero-title">{bannerHeading}</h1>
            <p className="mb-4 fw-medium">{bannerParagraph}</p>
            <Link className="btn" to="/offers">Find out more</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
