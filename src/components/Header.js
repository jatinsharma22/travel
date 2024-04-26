import React, { useEffect, useState } from "react";
import { Offcanvas, Container, Form, Col, Row } from "react-bootstrap";
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
            ? "header_nav sticky top-0 left-0 right-0 w-full scrolled"
            : "header_nav top-0 left-0 right-0 w-full z-2"
        }`}
      >
        <Container>
          <Row className="items-center">
            <Col md={3} className="col-4">
              <div className="logo">
                <Link to="/">
                <img src="../images/logoBlack.svg" alt="" width="150px" />
                </Link>
              </div>
            </Col>
            <Col
              md={9}
              className="flex items-center justify-end col-8"
            >
              <button
                className="lg:hidden btn py-2 px-3 fs-4"
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
                  <ul className="list-unstyled mb-0 mt-0 ml-0 lg:mr-5 header_menu lg:flex items-center gap-5">
                    <li>
                      <NavLink to="/" className="d-block p-lg-0 p-2 hover:text-teal-600">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className="d-block p-lg-0 p-2 hover:text-teal-600">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/offers" className="d-block p-lg-0 p-2 hover:text-teal-600">
                        Offers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className="d-block p-lg-0 p-2 hover:text-teal-600">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>

                  <Form.Select aria-label="Default select example" className="bg-transparent border-0" style={{width:"80px"}}>
                    <option value="1">EN</option>
                    <option value="2">FR</option>
                    <option value="3">CH</option>
                  </Form.Select>

                  <div className="callNow flex-column flex sm:hidden gap-2 absolute bottom-0 pb-5">
                    <NavLink
                      to="booking.example@gmail.com"
                      className="text-dark text-decoration-none flex"
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
              <div className="callNow ms-3 flex-column d-sm-flex d-none gap-2">
                <NavLink
                  to="booking.example@gmail.com"
                  className="text-dark text-decoration-none flex"
                >
                  <IoIosMail className="me-2 fs-4" />
                  info.booking@gmail.com
                </NavLink>
                <NavLink
                  to="tel:+91 987654321"
                  className="text-dark text-decoration-none flex"
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
