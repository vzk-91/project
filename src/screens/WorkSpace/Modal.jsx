import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ModalWindow = ({show, handleClose}) =>{
    return (
        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group controlId="formBasicTitle">
                <Form.Control name="title" type="email" placeholder="Title" />
            </Form.Group>
            <Form.Group controlId="formBasic.ControlTextarea">
                <Form.Control as="textarea" rows="3" placeholder="Description" />
            </Form.Group>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
        </Button>

            <Button variant="primary" onClick={handleClose}>
                Save
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalWindow;