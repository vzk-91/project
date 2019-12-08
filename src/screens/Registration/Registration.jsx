import React, {  useContext } from "react";
import context from '../../context/context'
import { registration } from '../../api/index';
import { Button, Form } from 'react-bootstrap';
import './registration.css';


const Registration = (props) => {
  const { state, dispatch } = useContext(context)
  const { registrationData } = state;
  const { lastname, username, password, email } = registrationData;

  const onSubmitForm = () => {
    registration(registrationData)
      .then(response => {
        if (response.status === 200) {
          props.history.push('/login')
          return response.json()
        }
      });

  }

  const hendleFormChange = (event) => {
    const { target: { name, value } } = event;
    dispatch({ type: 'Registration', payload: { ...registrationData, [name]: value } })
  }

  return (
    <div className="logForm">
      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastname" type="email" placeholder="Last Name" onChange={hendleFormChange} value={lastname} />
      </Form.Group>

      <Form.Group controlId="formBasicUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control name="username" type="email" placeholder="User Name" onChange={hendleFormChange} value={username} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={hendleFormChange} value={email} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={hendleFormChange} value={password} />
      </Form.Group>

      <Button variant="primary" onClick={onSubmitForm}>Ok</Button>
    </div>
  )
}

export default React.memo(Registration);;