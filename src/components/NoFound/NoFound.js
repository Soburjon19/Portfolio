import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Error from "../../Assets/Error.PNG";
import Button from "react-bootstrap/Button";
function NoFound() {
    return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
        <Row style={{ justifyContent: "center"}}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
            }}
          >
            <h1 className="project-heading">
                No <strong className="purple">Found 404 </strong>
            </h1>
            <p style={{ textAlign: "justify", padding: "10px", fontSize: "1.2em"}}>
              We searched everywhere for this page.<br/>
              Are you sure the website URL is correct?<br/> 
              Contact the site owner
            </p>
            <div className="fork-btn">
            <Button style={{ fontSize: "1.1em" }}
                href="/"
                // target="_blank"
                className="fork-btn-inner"
              >Go Home
              </Button>
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Error} alt="Error" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      </Container>
    );
  }
  
  export default NoFound;
  