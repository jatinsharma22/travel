import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <Container>
          <div className="newsletter_box position-relative text-center">
            <Row className="justify-content-center">
              <div className="col-xl-8 col-md-10">
                <h2 className="text-white lh-1-7 xl:mb-7 mb-4 xl:text-4xl lg:text-3xl text-xl">
                  Subscribe now for hand-picked holiday deals, inspiration, and
                  the latest travel tips straight to your inbox.
                </h2>
                <form className="row g-3 align-items-center w-75 mx-auto mt-4 mt-xl-5">
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
                    <Button className="btn fs--1">Subscribe</Button>
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
