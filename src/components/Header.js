import React, { useEffect, useState } from "react";
import {
  Offcanvas,
  Container,
  Form,
  Col,
  Row,
  Tabs,
  Tab,
  Modal,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail, IoMdCheckmark } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [login, setLogin] = useState(false);

  const handleCloseLogin = () => setLogin(false);
  const handleShowLogin = () => setLogin(true);

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
            <Col md={9} className="flex items-center justify-end col-8">
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
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/"
                        className="d-block px-2 pt-2 pb-2.5 hover:text-teal-600 border-b-2 border-transparent"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/about"
                        className="d-block px-2 pt-2 pb-2.5 hover:text-teal-600 border-b-2 border-transparent"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/package"
                        className="d-block px-2 pt-2 pb-2.5 hover:text-teal-600 border-b-2 border-transparent"
                      >
                        Packages
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/contact"
                        className="d-block px-2 pt-2 pb-2.5 hover:text-teal-600 border-b-2 border-transparent"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>

                  <Form.Select
                    aria-label="Default select example"
                    className="bg-transparent border-0"
                    style={{ width: "80px" }}
                  >
                    <option value="1">EN</option>
                    <option value="2">FR</option>
                    <option value="3">CH</option>
                  </Form.Select>
                </Offcanvas.Body>
              </Offcanvas>
              <div className="ms-3">
                <Button variant="primary" onClick={handleShowLogin}>
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={login} onHide={handleCloseLogin} centered size="xl">
        <Modal.Header
          closeButton
          className="p-0 border-0 absolute right-4 top-4 z-50"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <Row className="gx-0">
            <Col md={6}>
              <img src="../images/login_banner.jpeg" alt="" />
            </Col>
            <Col md={6}>
              <Tabs defaultActiveKey="login" id="loginSignup" className="">
                <Tab eventKey="login" title="Login">
                  <form className="space-y-4 p-4 " action="#" method="POST">
                    <div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        autoComplete="email"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>

                    <div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>
                    <div className="flex items-center my-4">
                      <div className="flex items-center">
                        <input
                          id="t-c"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0 ring-0"
                        />
                        <label
                          for="t-c"
                          className="ms-2 text-sm font-medium text-gray-500"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link to="" className="text-red-600 text-sm ml-auto">
                        Forgot Password?
                      </Link>
                    </div>
                    <div>
                      <button type="submit" className="btn w-full">
                        Sign In
                      </button>
                    </div>
                  </form>
                </Tab>
                <Tab eventKey="signup" title="Signup">
                  <form className="space-y-4 p-4 " action="#" method="POST">
                    <div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your Name"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>
                    <div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        autoComplete="email"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="h-full rounded-md bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                      </div>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-1 px-3.5 py-3 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>
                    <div>
                      <input
                        id="confirmpassword"
                        name="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="t-c"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0 ring-0"
                      />
                      <label
                        for="t-c"
                        className="ms-2 text-sm font-medium text-gray-500"
                      >
                        I agree to the Terms and Privacy Policy.
                      </label>
                    </div>

                    <div>
                      <button type="submit" className="btn w-full">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
