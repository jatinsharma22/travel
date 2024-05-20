import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <div className="footer">
        <Container>
          <Row className="gy-4">
            <Col lg={3} md={6} sm={6}>
              <Link to="/">
                <img src="../images/logoBlack.svg" alt="" width="150px" />
              </Link>
              <h5 className="mb-2 fw-semibold text-xl mt-3">Follow us on:</h5>
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
            <Col lg={3} md={6} sm={6} className="order-sm-4">
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">Contacts</h4>
              <div className="callNow flex-column d-flex gap-2 mt-4">
                <NavLink
                  to="tel:+13478717951"
                  className="text-dark text-decoration-none flex items-center"
                >
                  <IoCallSharp className="me-2 fs-4" />
                  +13478717951
                </NavLink>
                <NavLink
                  to="mailto:support@uniquetravelcrafters.com"
                  className="text-dark text-decoration-none flex items-center "
                >
                  <span className="w-8"><IoIosMail className="me-2 fs-4" /></span>
                  <span className="flex-1 break-all text-sm">support@uniquetravelcrafters.com</span>
                </NavLink>
                <p className="text-dark text-decoration-none flex items-center">
                  <BiSupport className="me-2 fs-4" />
                  24X7 Support
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className="col-6">
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">More</h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link className="fw-medium text-decoration-none" to="/">
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="fw-medium text-decoration-none" to="/">
                    Testimonial
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="fw-medium text-decoration-none" to="/">
                    FAQ
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6} className="col-6 order-sm-2">
              <h4 className="mb-4 fw-semibold md:text-2xl text-xl">Company</h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link className="fw-medium text-decoration-none" to="/about">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="fw-medium text-decoration-none" to="/package">
                    Package
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="fw-medium text-decoration-none"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="text-center pt-5">
            <p className="mb-0">All rights reserved @uniquetravelcrafters</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
