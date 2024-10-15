import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalskill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      
      <div className="mt-5">
        <Container>
          {/* Frontend Skills */}
          <h2 className="text-center mb-4">Frontend Development</h2>
          <Row className="g-5">
            {/* HTML */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#fe3e57", fontWeight: 700 }}>85%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%", backgroundColor: "#fe3e57" }}
                  ></div>
                </div>
                <h2 style={{ color: "#fe3e57", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>HTML</h2>
              </div>
            </Col>
            {/* CSS */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#54faae", fontWeight: 700 }}>80%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%", backgroundColor: "#54faae" }}
                  ></div>
                </div>
                <h2 style={{ color: "#54faae", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>CSS</h2>
              </div>
            </Col>
            {/* JavaScript */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#39c4ff", fontWeight: 700 }}>75%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%", backgroundColor: "#39c4ff" }}
                  ></div>
                </div>
                <h2 style={{ color: "#39c4ff", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>JavaScript</h2>
              </div>
            </Col>
            {/* ReactJS */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#f1f965", fontWeight: 700 }}>70%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%", backgroundColor: "#f1f965" }}
                  ></div>
                </div>
                <h2 style={{ color: "#f1f965", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>ReactJS</h2>
              </div>
            </Col>
          </Row>

          {/* Backend Skills */}
          <h2 className="text-center mb-4 mt-5">Backend Development</h2>
          <Row className="g-5">
            {/* Node.js */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#ff0173", fontWeight: 700 }}>75%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%", backgroundColor: "#ff0173" }}
                  ></div>
                </div>
                <h2 style={{ color: "#ff0173", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>Node.js</h2>
              </div>
            </Col>
            {/* MySQL */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#ff8c2f", fontWeight: 700 }}>70%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%", backgroundColor: "#ff8c2f" }}
                  ></div>
                </div>
                <h2 style={{ color: "#ff8c2f", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>MySQL</h2>
              </div>
            </Col>
          </Row>

          {/* Programming Languages */}
          <h2 className="text-center mb-4 mt-5">Programming Languages</h2>
          <Row className="g-5">
            {/* Python */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#41f2ff", fontWeight: 700 }}>80%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%", backgroundColor: "#41f2ff" }}
                  ></div>
                </div>
                <h2 style={{ color: "#41f2ff", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>Python</h2>
              </div>
            </Col>
            {/* Java */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#54faae", fontWeight: 700 }}>70%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%", backgroundColor: "#54faae" }}
                  ></div>
                </div>
                <h2 style={{ color: "#54faae", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>Java</h2>
              </div>
            </Col>
            {/* C */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#fe3e57", fontWeight: 700 }}>75%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%", backgroundColor: "#fe3e57" }}
                  ></div>
                </div>
                <h2 style={{ color: "#fe3e57", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>C</h2>
              </div>
            </Col>
            {/* JavaScript */}
            <Col md={4}>
              <h1 style={{ fontSize: "100px", color: "#39c4ff", fontWeight: 700 }}>75%</h1>
              <div style={{ padding: "0 50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%", backgroundColor: "#39c4ff" }}
                  ></div>
                </div>
                <h2 style={{ color: "#39c4ff", fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>JavaScript</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
