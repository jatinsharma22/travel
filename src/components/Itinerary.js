import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import TourPlans from "./TourPlans";
import { API } from "../data/API";

const Destination = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="destination">
        <Container>
          <div className="section_heading mb-10">
            <h2 className="fw-bold text-capitalize">Top Destinations</h2>
          </div>

          <Slider {...settings}>
            {API.map((element, key) => {
              return <TourPlans element={element} key={key} />
            })}
          </Slider>
          <div className="text-center mt-8">
            <Link className="btn fs-5" to="/package">
              Explore More
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Destination;
