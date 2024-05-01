import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeSlider = ({ bannerHeading, bannerParagraph }) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    nav: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <div className="position-relative homeBannerWrap">
        <Slider {...settings}>
          <div>
            <img src="../images/banner1.jpg" alt="" />
          </div>
          <div>
            <img src="../images/banner2.jpg" alt="" />
          </div>
          <div>
            <img src="../images/banner3.jpg" alt="" />
          </div>
          <div>
            <img src="../images/banner4.jpg" alt="" />
          </div>
          <div>
            <img src="../images/banner5.jpg" alt="" />
          </div>
          <div>
            <img src="../images/banner6.jpg" alt="" />
          </div>
        </Slider>

        <section className="banner_main absolute w-full top-[50%] -translate-y-1/2">
          <Container className="">
            <div className="banner_main_caption">
              <h1 className="hero-title">{bannerHeading}</h1>
              <p className="mb-4">{bannerParagraph}</p>
              <Link className="btn" to="/package">
                Find out more
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default HomeSlider;
