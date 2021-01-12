import React from "react";
import Selfie from "../Images/Selfie.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AnimatePresence, motion } from "framer-motion";
function Contact() {
  const variants = {
    hidden: {
      opacity: 0,
    },
    out: {
        opacity: 0,
       
      },
      in: {
        opacity: 1,
        transition: {
          delay: .2
        },
      },
  };
  return (
    <motion.div initial="hidden" animate="in" exit="out" variants={variants}>
      <div style={{ padding: "0px 0px 200px 0px" }} >
        <Card className="justify-content-center">
          <Card.Body>
            <form>
              <div className="form-group">
                {" "}
                <h5 className="card-title">Contact</h5>
                <hr></hr>
                <div className="form-group">
                  <label for="FormControlTextarea1">Name</label>
                  <textarea
                    className="form-control"
                    id="FormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <label for="InputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>

              <div className="form-group">
                <label for="FormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="FormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </motion.div>
  );
}

export default Contact;
