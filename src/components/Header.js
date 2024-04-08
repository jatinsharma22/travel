import React, { useEffect, useState } from "react";
import { Offcanvas, Container, Button, Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Header Add Class Active
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <div
        className={`header ${
          scrolled
            ? "header_nav position-fixed top-0 start-0 end-0 w-full scrolled"
            : "header_nav position-fixed top-0 start-0 end-0 w-full z-2"
        }`}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={3} className="col-4">
              <div className="logo">
                <Link to="/">
                  <h1 className="mb-0">Logo</h1>
                </Link>
              </div>
            </Col>
            <Col
              md={9}
              className="d-flex align-items-center justify-content-end col-8"
            >
              <button
                className="d-lg-none btn py-2 px-3 fs-4"
                onClick={handleShow}
              >
                <HiMenuAlt3 />
              </button>
              <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div className="logo">
                      <Link to="/">
                        <h1 className="mb-0">Logo</h1>
                      </Link>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-unstyled m-0 header_menu d-lg-flex align-items-center gap-5">
                    <li>
                      <NavLink to="/" className="d-block p-lg-0 p-2">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className="d-block p-lg-0 p-2">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/offers" className="d-block p-lg-0 p-2">
                        Offers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className="d-block p-lg-0 p-2">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>

                  <div className="callNow flex-column d-flex d-sm-none gap-2 position-absolute bottom-0 pb-5">
                    <NavLink
                      to="booking.example@gmail.com"
                      className="text-dark text-decoration-none"
                    >
                      <IoIosMail className="me-2 fs-4" />
                      info.booking@gmail.com
                    </NavLink>
                    <NavLink
                      to="tel:+91 987654321"
                      className="text-dark text-decoration-none"
                    >
                      <IoCallSharp className="me-2 fs-4" />
                      +91 987654321
                    </NavLink>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <div className="callNow ms-lg-5 ms-4 flex-column d-sm-flex d-none gap-2">
                <NavLink
                  to="booking.example@gmail.com"
                  className="text-dark text-decoration-none"
                >
                  <IoIosMail className="me-2 fs-4" />
                  info.booking@gmail.com
                </NavLink>
                <NavLink
                  to="tel:+91 987654321"
                  className="text-dark text-decoration-none"
                >
                  <IoCallSharp className="me-2 fs-4" />
                  +91 987654321
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
