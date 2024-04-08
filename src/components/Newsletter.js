import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <Container>
          <div className="newsletter_box position-relative text-center">
            <div className="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3">
              <img src="../images/send.png" alt="" />
            </div>
            <Row className="justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2 className="text-secondary lh-1-7 mb-7">
                  Subscribe to our newsletter to get information, latest news
                </h2>
                <form className="row g-3 align-items-center w-75 mx-auto mt-4 mt-lg-5">
                  <div className="col-sm">
                    <div className="input-group-icon position-relative">
                      <input
                        type="email"
                        className="form-control form-little-squirrel-control"
                        placeholder="Enter email "
                      />
                      <MdOutlineEmail className="input-box-icon" />
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <button className="btn fs--1">Subscribe</button>
                  </div>
                </form>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Newsletter;
