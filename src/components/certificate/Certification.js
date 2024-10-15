import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import internshala from "../../images/internshala.png";
import innovate from "../../images/innnovate.png";
import learn from "../../images/learnsmasher.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                {/* First Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://drive.google.com/file/d/1UPtORcraXroFPWvnehgcV9AUDS7GbWi6/view?usp=drive_link"
                            
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src={internshala} alt="Internshala Logo" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          Web Development
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - Internshala
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                
                {/* Second Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://drive.google.com/file/d/1UYUYFx8qxDic21xPOUQtyWqI91s5QYW5/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src={innovate} alt="Innovate Logo" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          Full Stack Web Development
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - Innovate
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
                
                {/* Third Certificate */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://drive.google.com/file/d/1UX2DdgsUGZd8egefQixTXtcvs5YGteKR/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src={learn} alt="Innovate Logo" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          Java Programming
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - LearnSmasher EduTech LLP
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
