import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Banner = ({ bannerHeading, bannerParagraph }) => {
  return (
    <section className="banner_main">
      {/* <div
        className="bg_holder"
        style={{ backgroundImage: "url(../images/hero-bg.svg)" }}
      ></div> */}
      <Container className="">
        
          {/* <Col md={5} lg={6} className="order-0 order-md-1 text-end">
            <img src="../images/hero-img.png" className="pt-7 pt-md-0 hero-img" alt="Hero Image" />
          </Col> */}
          <div className="banner_main_caption">
            <h1 className="hero-title">{bannerHeading}</h1>
            <p className="mb-4">{bannerParagraph}</p>
            <Link className="btn" to="/offers">Find out more</Link>
          </div>
      
      </Container>
    </section>
  );
};

export default Banner;
