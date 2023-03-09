import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import youtobe from "../../Assets/Projects/youtobe.PNG";
import basecamp from "../../Assets/Projects/basecamp.PNG";
import dropbox from "../../Assets/Projects/dropbox.jpg";
import instagram from "../../Assets/Projects/instagram.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dropbox}
              isBlog={false}
              title="Drop box"
              description="Dropbox is a personal cloud storage. a program that allows you to install music, files, folders, videos and images from another device and download them from another device. Discovered by Drew Houston and Arash Firdausi on October 3, 2016."
              ghLink="https://github.com/Soburjon19/drop_box"
              demoLink="https://my-dropbox-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram"
              description="Instagram is an app that lets you upload photos, videos, and find media you like quickly and easily. You can click the heart icon on any photo on Instagram or leave a comment on it. Discovered by Kevin Systrom and Mike Krieger on October 6, 2010"
              ghLink="https://github.com/Soburjon19/my_instagram"
              demoLink="https://my-first-instagram.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basecamp}
              isBlog={false}
              title="Base camp"
              description="Basecamp is a program that helps the team to do some project together. Through it, you can find out what projects others are working on, leave comments and help them. Discovered on February 1, 2004 by a small campaign"
              ghLink="https://github.com/Soburjon19/my-basecamp-2"
              demoLink="https://basecamp-2.up.railway.app/"              
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtobe}
              isBlog={false}
              title="You tobe"
              description="Youtobe is a personal cloud storage. a program that allows you to install music, files, folders, videos and images from another device and download them from another device. Discovered by Drew Houston and Arash Firdausi on October 3, 2016."
              ghLink="https://github.com/Soburjon19/drop_box"
              demoLink="https://my-dropbox-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram"
              description="Instagram is an app that lets you upload photos, videos, and find media you like quickly and easily. You can click the heart icon on any photo on Instagram or leave a comment on it. Discovered by Kevin Systrom and Mike Krieger on October 6, 2010"
              ghLink="https://github.com/Soburjon19/my_instagram"
              demoLink="https://my-first-instagram.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basecamp}
              isBlog={false}
              title="Base camp"
              description="Basecamp is a program that helps the team to do some project together. Through it, you can find out what projects others are working on, leave comments and help them. Discovered on February 1, 2004 by a small campaign"
              ghLink="https://github.com/Soburjon19/my-basecamp-2"
              demoLink="https://basecamp-2.up.railway.app/"              
            />
          </Col>
           */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
