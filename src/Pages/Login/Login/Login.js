import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate("");
  const location = useLocation();

  let errorElement;

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(error) {
    errorElement = <p className="text-danger">Error: {error?.message} </p>;
  }

  if(user) {
    navigate(from, {replace:true})
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="container w-50">
      <h2 className="text-primary text-center mt-3">Please Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  
          ref={emailRef}
          type="email" 
          placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {errorElement}
        <Button
          className="btn w-50 mx-auto d-block mb-3"
          variant="primary"
          type="submit"
        >
          Log In
        </Button>
        <p>
          New to Fit Tuber ?
          <Link
            to="/register"
            className="text-primary text-decoration-none"
            
          >
            Register Here
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;