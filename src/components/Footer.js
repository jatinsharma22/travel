import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
    <Newsletter />
      <div className="footer">
        <Container>
          <Row className="gy-4">
            <Col lg={3} md={12} sm={12}>
              <Link to="/">
                <img src="../images/logoBlack.svg" alt="" width="150px" />
              </Link>
              <div className="callNow flex-column d-flex gap-2 mt-4">
                <NavLink
                  to="booking.example@gmail.com"
                  className="text-dark text-decoration-none flex items-center"
                >
                  <IoIosMail className="me-2 fs-4" />
                  info.booking@gmail.com
                </NavLink>
                <NavLink
                  to="tel:+91 987654321"
                  className="text-dark text-decoration-none flex items-center"
                >
                  <IoCallSharp className="me-2 fs-4" />
                  +91 987654321
                </NavLink>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="col-6">
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">Company</h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    Offers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={4} sm={6} className="col-6">
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">More</h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    Galery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    Testimonial
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">Follow us on:</h4>
              <div className="d-flex align-items-center gap-3 social_media mb-3">
                <Link
                  to="/"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://www.instagram.com/uniquetravelcrafters?igsh=MW82dnFlNGhrczZxaQ%3D%3D&utm_source=qr"
                  target="_blank"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="/"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                >
                  <FaTwitter />
                </Link>
              </div>
            </Col>
          </Row>
          <div className="text-center pt-5">
            <p className="mb-0">All rights reserved@travel.co</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
