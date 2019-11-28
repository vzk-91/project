import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import './workspace.css'


const WorkSpace = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div className="main">

        <div className="main-header">

           <div className="info">
            <div className="photo">
                <img src="" alt="" />
            </div>
            <p className="name">Vahe Karapetyan</p>
           </div>

           <Button variant="dark" onClick={handleShow}>
              New Post
            </Button>
        </div>

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group controlId="formBasicTitle">
              <Form.Control  name="title" type="email" placeholder="Title"  />
            </Form.Group>
            <Form.Group controlId="formBasic.ControlTextarea">
                <Form.Control as="textarea" rows="3" placeholder="Description"/>
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

        <div className="section">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>

    </div >
    )
}

export default WorkSpace;