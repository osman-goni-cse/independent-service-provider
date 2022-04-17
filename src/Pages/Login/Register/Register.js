import React from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import './Register.css'

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleRegister = () => {

  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center text-primary mt-3">Please Register</h2>
      <form onSubmit={handleRegister} className="">
        <input 
        type="text" 
        placeholder="Enter your name" 
        name="name" id="" 
        className="form-control mb-3"
        />
        <input 
        type="email" 
        placeholder="Enter your email" 
        name="email" id="" 
        className="form-control mb-3"
        required />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          id=""
          className="form-control mb-3"
          required
        />

        <input
          
          className="btn btn-primary w-50 mx-auto d-block mb-3"
          type="submit"
          value="Register"
        />

        <p>
          Already Have an account ?
          <Link to="/login" className="text-primary text-decoration-none">
            Log In Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
