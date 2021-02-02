import React, { useState, useEffect } from "react";
import Selfie from "../Images/Selfie.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AnimatePresence, motion } from "framer-motion";
import Form from "react-bootstrap/Form";
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
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div initial="hidden" animate="in" exit="out" variants={variants}>
      <div style={{ padding: "0px 0px 200px 0px" }}>
        <Card className="justify-content-center">
          <Card.Body>
            <Form>
              <Form.Group>
                <Card.Title>Contact</Card.Title>
                <hr></hr>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="Email" />
                </Form.Group>
                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form.Group>
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </motion.div>
  );
}

export default Contact;
