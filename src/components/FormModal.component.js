import React from 'react';
import { useState } from 'react';
import { Row, Col, Container, Form, Modal, Button } from 'react-bootstrap';


import styled from 'styled-components';


const ModalWrapper = styled.section`
    background: #ccc;
`;


export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <ModalWrapper>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form action="https://formspree.io/borntojesus@gmail.com" method="POST">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Write your phone"/>
              </Form.Group>

              <Button variant="primary" type="submit" value="Send">
                Submit
              </Button>
            </Form>
          </Modal.Body>

        </Modal>


      </ModalWrapper>
    </div>

  );
};



