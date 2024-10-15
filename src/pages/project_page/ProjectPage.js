import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png"; // New Year Countdown image
import im from "../../images/myimg.png"; // Personal Portfolio image
import age from "../../images/agecal.png"; // Age Calculator image
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Particle from "../../Particle"; // Assuming you have a Particle component

export default function ResumeProjects() {
  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>PROJECTS</h1>
              </Zoom>
            </div>

            <Row className="mt-4">
              {/* New Year Countdown Project */}
              <Col md={4}>
                <Fade bottom>
                  <div
                    className="singleProject"
                    style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>Anniversary Reminders
                      </h5>
                      <img src={nyc} alt="New Year Countdown" />
                      <div className="project--showcaseBtn">
                        <a
                          href="https://github.com/Srinivas981"
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                        >
                          <FaCode className="icon" aria-label="Code" />
                        </a>
                      </div>
                    </div>
                    <h6>
                      <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                        CelebrateMate - A Web Application for Automated Birthday and Anniversary Reminders.

                      </p>
                    </h6>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      HTML, CSS, JavaScript
                    </div>
                  </div>
                </Fade>
              </Col>

              {/* Age Calculator Project */}
              <Col md={4}>
                <Fade bottom>
                  <div
                    className="singleProject"
                    style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>Age Calculator</h5>
                      <img src={age} alt="Age Calculator" />
                      <div className="project--showcaseBtn">
                        <a
                          href="https://github.com/Srinivas981" // Update with your actual link
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                        >
                          <FaCode className="icon" aria-label="Code" />
                        </a>
                      </div>
                    </div>
                    <h6>
                      <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                        An Age Calculator that computes the age based on the user's input of birth date.
                      </p>
                    </h6>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      HTML, CSS, JavaScript
                    </div>
                  </div>
                </Fade>
              </Col>

              {/* Personal Portfolio Project */}
              <Col md={4}>
                <Fade bottom>
                  <div
                    className="singleProject"
                    style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>Personal Portfolio</h5>
                      <img src={im} alt="Personal Portfolio" />
                      <div className="project--showcaseBtn">
                        <a
                          href="https://github.com/Srinivas981/Personal-Portfolio-main.git1"
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                        >
                          <FaCode className="icon" aria-label="Code" />
                        </a>
                      </div>
                    </div>
                    <h6>
                      <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                        Welcome to my personal portfolio. Explore my work, skills, and achievements in a visually appealing format.
                      </p>
                    </h6>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      HTML, CSS, SCSS, React, JavaScript
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>

            <div className="blog--viewAll mt-4">
              <Link to="/projectspage">
                <button className="btn btn-primary">
                  View All
                  <HiArrowRight className="viewArr" />
                </button>
              </Link>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}
