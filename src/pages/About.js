import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { LuCalendarClock, LuCalendarCheck  } from "react-icons/lu";
import { FaHeart, FaLeaf, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import Banner from "../components/Banner";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const pageHead = "Get in touch with us and start planning your next vacation.";
  return (
    <>
      <Banner pageHead={pageHead} />

      <div className="xl:py-20 lg:py-11 py-7">
        <Container>
          <Row className="items-center gap-5 lg:gap-0">
            <Col lg={6}>
              <div className="section_heading">
                <h2 className="fw-bold text-capitalize text-start">About Us</h2>
              </div>
              <p>
                Unique Travel Crafters is a Finland-based travel company that
                was nurtured with the idea of crafting special & immersive
                travel packages that cater to travel enthusiasts to plan their
                travel with comfort.
              </p>
              <p>
                Unique Travel Crafters LLC, operates as an online platform
                catering to B2B customers, offering competition pricing on
                tickets and hotel reservations worldwide.{" "}
              </p>
              <p>
                Our travel packages are designed diligently to showcase the
                distinctive features of Finnish culture, nature, and
                hospitality. By encouraging the visitors to explore the hidden
                gems and engage with local communities.{" "}
              </p>
              <p>
                At UTC, we also prioritise sustainable tourism practices and
                promote eco-friendly accommodations, responsible travel
                activities and initiatives to preserve to protect Finland's
                natural and cultural heritage.{" "}
              </p>
            </Col>
            <Col lg={6}>
              <img src="../images/hero-img.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="booking">
        <Container>
          <Row className="align-items-center gy-lg-0 gy-sm-5 gy-4">
            <Col lg={6}>
              <div className="section_heading mb-4 mb-sm-5 text-start">
                <h2 className="fw-bold text-capitalize mb-3">
                  Book your dream holiday in 3 simple steps
                </h2>
                <p>Don’t stress! This is fun! Now iis the time to plan the vacation of your dreams. Leave the planning to us. </p>
              </div>
              <div className="d-flex align-items-start mb-xl-5 mb-3">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#F1A501" }}
                >
                  <IoLocationOutline className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                  Choose your destination
                  </h5>
                  <p>
                  Settled on a destination, or maybe even two? <br/>  We will get you closer to your planned holiday. 
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-xl-5 mb-3">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#DF6951" }}
                >
                  <LuCalendarClock   className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                  Schedule a meeting
                  </h5>
                  <p>
                    CConnect with our travel specialist to discuss your holiday in depth.<br/> We create a tailor-made journey as that is unique as you are. 
                    
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#006380" }}
                >
                  <LuCalendarCheck  className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                  Book your holiday
                  </h5>
                  <p>
                  After the meeting, you’ll receive a special travel itinerary <br/>to show your day-to-day journey like flights, car rentals etc. <br/>Sign up with Unique Travel Crafters and we will begin taking care of every detail.
                     
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-start"
            >
              <div className="position-relative">
                <div
                  className="position-absolute z-index--1 me-10 me-xxl-0"
                  style={{ right: "-160px", top: "-210px" }}
                >
                  <img
                    src="../images/booking_bg.png"
                    style={{ maxWidth: "550px" }}
                    alt="shape"
                  />
                </div>
                <div className="p-3 bg-white booking_card shadow">
                  <img src="../images/place1.jpg" className="mb-4 mt-2 w-100" alt="" style={{maxHeight:"160px"}} />
                  <div>
                    <h5 className="mb-2 text-xl">Trip To Greece</h5>
                    <p className="fs--1 mb-3 fw-medium">14-29 June | by Robbin joseph</p>
                    <div className="d-flex gap-3 mb-4"> 
                      <span className="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><FaLeaf /></span>
                      <span className="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><FaMapMarkedAlt /></span>
                      <span className="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><MdOutlinePayment /></span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex items-center">
                        <IoPeopleSharp className="me-2"/>
                        <span className="fs--1 fw-medium">24 people going</span>
                      </div>
                      <FaHeart className="text-danger fs-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
