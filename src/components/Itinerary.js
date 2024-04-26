import React from "react";
import { API } from "../data/API";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoNavigate } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

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
        breakpoint: 991,
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
          <div className="section_heading mb-3">
            <h2 class="fw-bold text-capitalize">Top Destinations</h2>
          </div>

          <Slider {...settings}>
            {API.map((element, key) => {
              return (
                <div className="py-sm-5 pb-4 px-3" key={key}>
                  <Link to={element.link} className="destination_card shadow_custom">
                    <div className="overflow-hidden relative">
                      <img src={element.image} alt="" className="w-full" />
                      {
                        element.discount && <div className="discound absolute">
                        {element.discount}
                      </div>     
                      }
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="mb-0 text-xl">{element.title}</h3>
                        <span class="text-sm bg-yellow flex items-center m-0">
                          <FaStar className="me-1 text-warning" />
                          {element.rating}
                        </span>
                      </div>
                      <div class="flex items-center justify-between ">
                        <span class="fw-medium text-dark text-xl">
                          {element.price}
                        </span>
                        <div class="flex items-center">
                          <IoNavigate className="text-dark me-2" />
                          <span class="fs-0 fw-medium">{element.days}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
          <div className="text-center">
            <Link className="btn fs-5" to="/">
              Explore More
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Destination;
