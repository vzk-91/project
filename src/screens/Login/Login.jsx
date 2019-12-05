import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { login } from '../../api/index';
import Storage from '../../services/storage'

import './login.css'


const Login = (props) => {
  const example = { password: '', email: "" }

  const [data, setData] = useState(example);
  const { password, email } = data;

  const onSubmitForm = () => {
    login(data)
      .then(response => {
        if (response.status === 200) {
          props.history.push('/workspace')
          return response.json()
        }
      })
      .then(data => {
        const info = ({ token: data.id, id: data.userId })
        Storage.set('user', info)})
        .catch(error => {
        throw new Error(error)
      })
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
    <div className="logForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={hendleFormChange} value={email} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={hendleFormChange} value={password} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" onClick={onSubmitForm}>Log In</Button>
    </div>
  )
}

export default React.memo(Login);;


