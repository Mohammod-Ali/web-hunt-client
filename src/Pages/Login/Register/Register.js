import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegistration = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset()
      setError('')
      navigate('/')
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })

  }

    return (
        <div className="w-50 mx-auto mt-5 mb-5">
            <h2>Registration Here: </h2>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Text className="text-danger">
        {error}
        </Form.Text> <br />
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        
      </Form>
      <p>Already have an account. Please <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default Register;