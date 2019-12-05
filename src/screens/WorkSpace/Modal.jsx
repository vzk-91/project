import React, { useState } from 'react';
import { post } from '../../api/index';
import Storage from '../../services/storage'
import { Button, Modal, Form } from 'react-bootstrap';

const ModalWindow = ({ show, handleClose, name }) => {

    const example = {
        description: '',
        title: '',   
    }
    const [data, setData] = useState(example);
    const { description, title, } = data;
    data.author = name;
    data.personId = Storage.get('user').id;

    const onSubmitForm = () => {
        post(data)
        setData(example)

    }

    const hendleFormChange = (event) => {
        const { target: { name, value } } = event;
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Create New Post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group controlId="formBasicTitle">
                    <Form.Control name="title" type="email" placeholder="Title" onChange={hendleFormChange} value={title} />
                </Form.Group>
                <Form.Group controlId="formBasic.ControlTextarea">
                    <Form.Control name="description" as="textarea" rows="3" placeholder="Description" onChange={hendleFormChange} value={description} />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
        </Button>

                <Button variant="primary" onClick={() => { handleClose(); onSubmitForm() }}>
                    Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;