import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Itinerary from "../components/Itinerary";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHeart, FaLeaf, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineConnectingAirports, MdOutlinePayment } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import Newsletter from "../components/Newsletter";



const Home = () => {
  const bannerHeading = "Travel, enjoy and live a new life";
  const bannerParagraph =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

  return (
    <>
      <Banner
        bannerHeading={bannerHeading}
        bannerParagraph={bannerParagraph}
      />
      <Services />
      <Itinerary />

      <div className="booking">
        <Container>
          <Row className="align-items-center gy-lg-0 gy-sm-5 gy-4">
            <Col lg={6}>
              <div className="section_heading mb-4 mb-sm-5 text-start">
                <h2 className="fw-bold text-capitalize">
                  Book Your Next Trip In 3 Easy Steps
                </h2>
              </div>
              <div className="d-flex align-items-start mb-lg-5 mb-3">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#F1A501" }}
                >
                  <IoLocationOutline className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                    Choose Destination
                  </h5>
                  <p>
                    Choose your favourite place. No matter{" "}
                    <br className="d-none d-sm-block" /> where you travel inside
                    the World.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-lg-5 mb-3">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#DF6951" }}
                >
                  <RiSecurePaymentLine className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                  Make Payment
                  </h5>
                  <p>
                    Choose your favourite place. No matter{" "}
                    <br className="d-none d-sm-block" /> where you travel inside
                    the World.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#006380" }}
                >
                  <MdOutlineConnectingAirports className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                  Reach Airport on Selected Date
                  </h5>
                  <p>
                    Choose your favourite place. No matter{" "}
                    <br className="d-none d-sm-block" /> where you travel inside
                    the World.
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
                  class="position-absolute z-index--1 me-10 me-xxl-0"
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
                    <h5 class="mb-2 text-xl">Trip To Greece</h5>
                    <p class="fs--1 mb-3 fw-medium">14-29 June | by Robbin joseph</p>
                    <div class="d-flex gap-3 mb-4"> 
                      <span class="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><FaLeaf /></span>
                      <span class="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><FaMapMarkedAlt /></span>
                      <span class="d-flex align-items-center justify-content-center icon-item text-black-50 fs-6"><MdOutlinePayment /></span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex items-center">
                        <IoPeopleSharp className="me-2"/>
                        <span class="fs--1 fw-medium">24 people going</span>
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

export default Home;
