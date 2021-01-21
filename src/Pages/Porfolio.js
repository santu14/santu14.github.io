import React, { useState } from "react";
import Contact from "../Images/contact-tracker.png";
import ContactGif from "../Images/content-tracker.gif";
import Testing from "../Images/testing-center-locator.gif";
import TestingGif from "../Images/testing-center-animated.gif";
import DailyPlanner from "../Images/daily-planner.jpg";
import DailyPlannerGif from "../Images/daily-planner-animated.gif";
import NoteTaker from "../Images/Note-Taker.png";
import NoteTakerGif from "../Images/Note-Taker-Animated.gif";
import Weather from "../Images/Weather-Dashboard.gif";
import WeatherGif from "../Images/Weather-dashboard-animated.gif";
import Quiz from "../Images/Always Sunny Trivia.jpg";
import QuizGif from "../Images/Always Sunny Trivia.gif";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { motion } from "framer-motion";

function Porfolio() {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showSix, setShowSix] = useState(false);

  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);

  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);

  const handleCloseThree = () => setShowThree(false);
  const handleShowThree = () => setShowThree(true);

  const handleCloseFour = () => setShowFour(false);
  const handleShowFour = () => setShowFour(true);

  const handleCloseFive = () => setShowFive(false);
  const handleShowFive = () => setShowFive(true);

  const handleCloseSix = () => setShowSix(false);
  const handleShowSix = () => setShowSix(true);

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
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="in" exit="out" variants={variants}>
      <div style={{ padding: "0px 0px 200px 0px" }}>
        <CardDeck className="justify-content-center">
          <motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project">
                <a onClick={handleShowOne}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Client Contact Tracker
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={Contact}
                    alt="Client Contact Tracker"
                  />
                </a>

                <Modal show={showOne} onHide={handleCloseOne} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Client Contact Tracker</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={ContactGif}
                      alt="Client Contact Tracker"
                    />
                    <hr></hr>

                    <p>
                      An application that tracks the contact points made by
                      employees of an orginization. It allows the user to create
                      new contacts, keep track of existing contacts, and stale
                      inactive contacts. Additionally, the application keeps
                      track of sent messages between contacts, and allows the
                      user to add notes detailing conversations. The objective
                      of this application is to create a cohesive space where
                      the user can maintain record of contacts and conversations
                      to avoid overlap, and allow collaboration.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://blooming-eyrie-04708.herokuapp.com/"
                        target="_blank"
                        type="button"
                        className="btn btn-primary "
                      >
                        <i className="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/Client-Contact-Tracker"
                        target="_blank"
                        type="button"
                        className="btn btn-secondary"
                      >
                        <i className="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project varient">
                <a onClick={handleShowTwo}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Testing Center Locator
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={Testing}
                    alt="Testing-Center-Locator"
                  />
                </a>

                <Modal show={showTwo} onHide={handleCloseTwo} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>COVID-19 Testing Center Locator</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={TestingGif}
                      alt="Testing-Center-Locator"
                    />
                    <hr></hr>

                    <p>
                      The COVID-19 Testing Center Locator is an interactive
                      application where users can find nearby COVID-19 testing
                      centers and receive the latest relevant news articles, CDC
                      updates, as well as state and national statistics.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://easyacres.github.io/TestingCenterLocator/"
                        target="_blank"
                        type="button"
                        className="btn btn-primary "
                      >
                        <i className="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/TestingCenterLocator"
                        target="_blank"
                        type="button"
                        className="btn btn-secondary"
                      >
                        <i className="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>
        </CardDeck>
        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        <CardDeck className="justify-content-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project2">
                <a onClick={handleShowThree}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Note Taker
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={NoteTaker}
                    alt="Note Taker"
                  />
                </a>

                <Modal show={showThree} onHide={handleCloseThree} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Note Taker</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={NoteTakerGif}
                      alt="Note Taker"
                    />
                    <hr></hr>

                    <p>
                      This application allows the user to create, save and
                      delete notes. Note taker was created using HTML/CSS,
                      JavaScript, jQuery, Node.js, Express npm, and inquirer
                      npm.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://nameless-mountain-35631.herokuapp.com/"
                        target="_blank"
                        type="button"
                        class="btn btn-primary "
                      >
                        <i class="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/Note-taker"
                        target="_blank"
                        type="button"
                        class="btn btn-secondary"
                      >
                        <i class="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project2">
                <a onClick={handleShowFour}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Weather Dashboard
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={Weather}
                    alt="Weather Dashboard"
                  />
                </a>

                <Modal show={showFour} onHide={handleCloseFour} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Weather Dashboard</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={WeatherGif}
                      alt="Weather Dashboard"
                    />
                    <hr></hr>

                    <p>
                      The COVID-19 Testing Center Locator is an interactive
                      application where users can find nearby COVID-19 testing
                      centers and receive the latest relevant news articles, CDC
                      updates, as well as state and national statistics.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://santu14.github.io/Weather-Dashboard/"
                        target="_blank"
                        type="button"
                        class="btn btn-primary "
                      >
                        <i class="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/Weather-Dashboard"
                        target="_blank"
                        type="button"
                        class="btn btn-secondary"
                      >
                        <i class="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>
        </CardDeck>

        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        <CardDeck className="justify-content-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project2">
                <a onClick={handleShowFive}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Daily Planner
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={DailyPlanner}
                    alt="Daily Planner"
                  />
                </a>

                <Modal show={showFive} onHide={handleCloseFive} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Daily Planner</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={DailyPlannerGif}
                      alt="Daily Planner"
                    />
                    <hr></hr>

                    <p>
                      This is application allows the user to save different
                      tasks and events by the hour of the day.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://santu14.github.io/Daily-Planner-App/"
                        target="_blank"
                        type="button"
                        class="btn btn-primary "
                      >
                        <i class="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/Daily-Planner-App"
                        target="_blank"
                        type="button"
                        class="btn btn-secondary"
                      >
                        <i class="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Card className="project2">
                <a onClick={handleShowSix}>
                  <h5
                    className="modal-title text-center"
                    id="staticBackdropLabel"
                  >
                    Always Sunny Trivia
                  </h5>
                  <hr></hr>
                  <img
                    className="project-img"
                    src={Quiz}
                    alt="Always Sunny Trivia"
                  />
                </a>

                <Modal show={showSix} onHide={handleCloseSix} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Always Sunny Trivia</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      className="project-gif"
                      src={QuizGif}
                      alt="Always Sunny Trivia"
                    />
                    <hr></hr>

                    <p>
                      Always Sunny in Philadelphia trivia game! this trivia game
                      was created with JavaScript, jQuery, HTML, and CSS using
                      local storage to keep high scores.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <hr></hr>
                    <div className="project-buttons">
                      <a
                        href="https://santu14.github.io/Always-Sunny-Trivia-Quiz/"
                        target="_blank"
                        type="button"
                        class="btn btn-primary "
                      >
                        <i class="fas fa-globe-americas"></i>
                        Live site
                      </a>

                      <a
                        href="https://github.com/santu14/Always-Sunny-Trivia-Quiz"
                        target="_blank"
                        type="button"
                        class="btn btn-secondary"
                      >
                        <i class="far fa-eye"></i>
                        View source code
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </Card>
            </motion.div>
          </motion.div>
        </CardDeck>
      </div>
    </motion.div>
  );
}

export default Porfolio;
