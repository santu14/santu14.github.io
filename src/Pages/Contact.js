import React, { useState, useEffect } from "react";
import Selfie from "../Images/Selfie.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AnimatePresence, motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import axios from "axios"
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

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: formData,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  const resetForm = () => {
    setFormData(initialForm);
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
                  <Form.Control
                    type="name"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="message"
                    name="message"
                    as="textarea"
                    rows={3}
                    onChange={handleChange}
                  />
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
