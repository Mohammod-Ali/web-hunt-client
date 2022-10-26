import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const {providerLogin, signIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/')
      })
      .catch(error => console.error(error))
    }


// login with email and password
    const handleLogin = event => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset()
        navigate('/')
      })
      .catch(error => console.error(error))

  }

  return (
    <div className="w-50 mx-auto mt-5 ">
                <h1>Login Here:</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />

        {/* Google signin */}
        <Button onClick={handleGoogleSignIn} className="mt-3" variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>

        {/* GitHub Login */}
        <Button className="mt-3 ms-3" variant="outline-primary"><FaGithub></FaGithub> Login with GitHub</Button>

        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
      <br />
      <p>You have no account, Please <Link to='/register'>Create Account</Link></p>
    </div>
  );
};

export default Login;
