import React, { useContext } from 'react';
import context from '../../context/context'
import { Button, Form } from 'react-bootstrap';
import { login } from '../../api/index';
import Storage from '../../services/storage'

import './login.css'


const Login = (props) => {
  const {state,dispatch} = useContext(context)
    const {loginData} = state;

  const onSubmitForm = () => {
    login(loginData)
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
        console.log(error)
      })
  }

  const hendleFormChange = (event) => {
    const { target: { name, value } } = event;
    dispatch({type : 'Login' , payload : {...loginData,[name] : value}})
  }

  return (
    <div className="logForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={hendleFormChange} value={state.email} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={hendleFormChange} value={state.password} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" onClick={onSubmitForm}>Log In</Button>
    </div>
  )
}

export default React.memo(Login);;


