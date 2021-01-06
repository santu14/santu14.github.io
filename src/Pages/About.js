import React from "react";
import Selfie from "../Images/Selfie.jpg";
import Linkedin from "../Images/linkedin-logo.png";
import Github from "../Images/github-sign.png";

function About() {
  return (
    <div>
      <div className="card justify-content-center">
        <div className="row no-gutters">
          <div className="col-md-12">
            <h4 className="card-title">About Me</h4>
            <hr />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="resize"
              src={Selfie}
              alt="Santiago Solana"
              width="300"
              height="auto"
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <p className="card-text">
                Web developer educated in Georgia Tech’s Full-Stack Development
                Bootcamp, becoming proficient in technologies like JavaScript,
                jQuery, CSS, Node.js, MySQL, MongoDB, and React. With a strong
                background in Audio engineering design and Customer support, you
                could say I have a passion for learning new technologies and
                have developed excellent problem solving, research, teamwork,
                and communication skills over the years. The key factors that
                drive my decisions when approaching a new project are
                creativity, responsiveness, and functionality. I am dedicated to
                creating robust interactive user experiences.
              </p>

              <div className="text-center">
                <a href="https://www.linkedin.com/in/santiago-solana-5a615b5b/"  target="_blank">
                  <img className="link-img" src={Linkedin} alt="linkedin" height="auto" />
                </a>
                <a href="https://github.com/santu14" target="_blank">
                  <img className="link-img" src={Github} alt="Github" height="auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;