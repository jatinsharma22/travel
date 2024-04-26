import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="relative bg-[url('../images/aboutBanner.jpg')] bg-cover bg-no-repeat px-5 text-center py-72 after:absolute after:w-full after:content-[''] after:h-full after:bg-black after:left-0 after:top-0 after:right-0 after:bottom-0 after:opacity-40">
        <p className="text-2xl font-light text-white tracking-wider z-50 relative">
          UNLOCKING THE WORLD
        </p>
        <h1 className="text-[50px] font-bold text-white z-50 relative">
          Contact us today to start planning <br /> your next extraordinary trip
        </h1>
      </div>

      <div className="booking">
        <Container>
          <Row className="align-items-center gy-lg-0 gy-sm-5 gy-4">
            <Col lg={6}>
              <div className="section_heading mb-4 mb-sm-5 text-start">
                <h2 className="fw-bold text-capitalize">Contact Us</h2>
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
                    Address
                  </h5>
                  <p className="m-0">
                    13th Street, 47 W 13th St,
                    <br className="d-none d-sm-block" /> New York, NY 10011, USA
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
                    Phone
                  </h5>
                  <Link to="tel:+91 987654321">+91 987654321</Link>
                  <br />
                  <Link to="tel:+91 987654321">+91 987654321</Link>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="bg-yellow me-sm-4 me-3 p-3 rounded-4"
                  style={{ backgroundColor: "#006380" }}
                >
                  <IoIosMail className="fs-2 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-secondary fw-bold fs-0 text-dark">
                    Email
                  </h5>
                  <p className="m-0">info.booking@gmail.com</p>
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
                  style={{ left: "-260px", top: "-110px" }}
                >
                  <img
                    src="../images/booking_bg.png"
                    style={{ maxWidth: "550px" }}
                    alt="shape"
                  />
                </div>
                <div className="p-12 bg-white booking_card shadow w-full">
                  <form className="row gap-y-4" action="#" method="POST">
                    <div className="col-sm-6">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your Name"
                        required
                        className="px-3 block w-full rounded-md py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none border-1"
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        autoComplete="email"
                        required
                        className="px-3 block w-full rounded-md border-1 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>

                    <div className="col-sm-6">
                      <div className="relative border-1 rounded-md">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                          className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          placeholder="Select Date"
                          required
                          className="px-3 block w-full rounded-md border-1 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        id="count"
                        name="count"
                        type="number"
                        min="1"
                        placeholder="Travel Count"
                        required
                        className="px-3 block w-full rounded-md border-1 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        id="message"
                        rows={4}
                        className="px-3 block w-full rounded-md border-1 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ring-0 focus:ring-0 focus:border-0 focus:shadow-none"
                        defaultValue={""}
                      />
                    </div>

                    <p className="flex">
                      <IoMdCheckmark className="text-teal-600 w-5 mt-1 mr-2" />
                      <span className="flex-1">
                        We assure the privacy of your contact data.
                      </span>
                    </p>
                    <p className="flex">
                      <IoMdCheckmark className="text-teal-600 w-5 mt-1 mr-2" />{" "}
                      <span className="flex-1">
                        This data will only be used by our team to contact you
                        and no other purposes.
                      </span>
                    </p>

                    <div>
                      <button type="submit" className="btn w-full">
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
