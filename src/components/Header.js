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
import { IoEye, IoEyeOff } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  // Mobile Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Login
  const [login, setLogin] = useState(false);
  const handleCloseLogin = () => setLogin(false);
  const handleShowLogin = () => {
    setLogin(true);
    setForgotPwd(false);
  };

  // Forgot Password
  const [forgotPwd, setForgotPwd] = useState(false);
  const handleCloseForgotPwd = () => setForgotPwd(false);
  const handleShowForgotPwd = () => {
    setForgotPwd(true);
    setLogin(false);
  };

  // Forgot Password
  const [resetPwd, setResetPwd] = useState(false);
  const handleCloseResetPwd = () => setResetPwd(false);
  const handleShowResetPwd = () => {
    setForgotPwd(false);
    setResetPwd(true);
  };

  // Show Password
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(true);
  // };

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
                className="lg:hidden btn !p-0 fs-4 w-14 h-12 flex justify-center items-center"
                onClick={handleShow}
              >
                <HiMenuAlt3 />
              </button>
              <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div className="logo">
                      <Link to="/">
                        <img
                          src="../images/logoBlack.svg"
                          alt=""
                          width="150px"
                        />
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

      {/* Login Signup */}

      <Modal
        show={login}
        onHide={handleCloseLogin}
        centered
        size="xl"
        className="!pl-0"
      >
        <Modal.Header
          closeButton
          className="p-0 border-0 absolute right-4 top-4 z-50"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <Row className="gx-0">
            <Col lg={6} className="hidden lg:block">
              <img src="../images/login_banner.jpeg" alt="" />
            </Col>
            <Col lg={6}>
              <Tabs defaultActiveKey="signin" id="loginSignup" className="">
                <Tab eventKey="signin" title="Sign In">
                  <form
                    className="space-y-4 xs:p-10 p-4"
                    action="#"
                    method="POST"
                  >
                    <div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        autoComplete="email"
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        // type={showPassword ? "text" : "password"}
                        required
                        className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                      {/* <button
                        onClick={togglePasswordVisibility}
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "17px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "18px"
                        }}
                      >
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                      </button> */}
                    </div>
                    <div className="flex items-center !my-8">
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
                      <button
                        onClick={handleShowForgotPwd}
                        className="text-red-600 text-sm ml-auto"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div>
                      <button type="submit" className="btn w-full">
                        Sign In
                      </button>
                    </div>
                    <div className="max-w-96 mx-auto  !my-10 text-center after:w-full after:h-[1px] relative after:bg-slate-300 after:content-[''] after:absolute after:top-3 after:left-0">
                        <span className="bg-white font-semibold z-30 inline-block relative px-4">OR</span>
                    </div>
                    <div className="flex gap-6 justify-center mb-6">
                      <Link to="">
                        <img src="../images/fb.svg" alt="" width={40} height={40} />
                      </Link>
                      <Link to="">
                        <img src="../images/instagram.svg" alt="" width={40} height={40} />
                      </Link>
                      <Link to="">
                        <img src="../images/google.svg" alt="" width={40} height={40} />
                      </Link>
                    </div>
                  </form>
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                  <form
                    className="space-y-4 xs:p-10 p-4"
                    action="#"
                    method="POST"
                  >
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
                          <option>FI</option>
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

      {/* Forgot Password */}

      <Modal
        show={forgotPwd}
        onHide={handleCloseForgotPwd}
        centered
        size="md"
        className="!pl-0"
      >
        <Modal.Header
          closeButton
          className="p-0 border-0 absolute right-4 top-4 z-50"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <form className="space-y-4 xs:p-10 p-4" action="#" method="POST">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Enter Email Address
            </h2>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
              />
            </div>
            <div className="text-center !my-8">
              <button
                type="button"
                onClick={handleShowLogin}
                className="text-red-600 text-sm text-center block bg-transparent p-0 w-auto m-auto"
              >
                Back to sign in
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="btn w-full"
                onClick={handleShowResetPwd}
              >
                Send
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Reset Password */}
      <Modal
        show={resetPwd}
        onHide={handleCloseResetPwd}
        centered
        size="md"
        className="!pl-0"
      >
        <Modal.Header
          closeButton
          className="p-0 border-0 absolute right-4 top-4 z-50"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <form className="space-y-4 xs:p-10 p-4" action="#" method="POST">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Reset Your Password
            </h2>
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
                id="resetpassword"
                name="resetpassword"
                type="password"
                placeholder="Reset Password"
                required
                className="px-3 block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
              />
            </div>
            <div>
              <button type="submit" className="btn w-full">
                Send
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
