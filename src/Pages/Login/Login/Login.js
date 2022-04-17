import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleSubmit = () => {

  }

  return (
    <div className="container w-50">
      <h2 className="text-primary text-center mt-3">Please Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  
          type="email" 
          placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            
            type="password"
            placeholder="Password"
          />
        </Form.Group>

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