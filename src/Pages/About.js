import React, { useState, useEffect } from "react";
import Selfie from "../Images/Selfie.jpg";
import Linkedin from "../Images/linkedin-logo.png";
import Card from "react-bootstrap/Card";
import Github from "../Images/github-sign.png";
import Download from "../Images/download.png";
import Resume from "../Images/Santiago-Solana-Resume.pdf";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function About(props) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3.5,
      },
    },
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  const [animState, setAnimState] = useState("visible");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setAnimState("visible");
    } else {
      setAnimState("in");
    }
  }, [location]);

  return (
    <motion.div
      initial="hidden"
      animate={animState}
      exit="out"
      variants={variants}
    >
      <div style={{ padding: "0px 0px 200px 0px" }}>
        <Card className="justify-content-center">
          <div className="row no-gutters">
            <div className="col-md-12">
              <Card.Title>
                <h4 className="card-title">About Me</h4>
              </Card.Title>
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
              <Card.Body>
                <p>
                  Full-Stack web developer and recent graduate from Georgia
                  Tech’s Full-Stack Flex Web Development Program. Proficient in
                  technologies like JavaScript, jQuery, CSS, MongoDB, MySQL,
                  React.js, and Node.js. Whenever I approach a new projects my goal is to combine creativity
                  and technology, to create robust and interactive applications.
                  I love learning new technologies and with my extensive
                  customer support experience have developed excellent problem
                  solving, research, teamwork, and communication skills over the
                  years.
                </p>

                <div className="row  ">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    // className="col-md-4 col-sm-4 col-xs-4 text-right"
                  >
                    <a
                      href="https://www.linkedin.com/in/santiago-solana-5a615b5b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="link-img "
                        src={Linkedin}
                        alt="linkedin"
                        height="auto"
                      />
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    // className="col-md-4 col-sm-4 text-center"
                  >
                    <a
                      href={"https://github.com/santu14"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="link-img"
                        src={Github}
                        alt="Github"
                        height="auto"
                      />
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    // className="col-md-4 col-sm-4 col-xs-4"
                  >
                    <a href={Resume} download target="_blank" rel="noreferrer">
                      <img
                        className="link-img"
                        src={Download}
                        alt="Resume"
                        height="auto"
                      />
                    </a>
                  </motion.div>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export default About;
