import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <p>
        <b>Question-1:</b>
        Difference between Authorization and Authentication
      </p>
      <p><b>Answer:</b></p>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th className="text-center">Authentication</th>
            <th className="text-center">Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Authentication Verifies the user's identity.</td>
            <td>Authorization gives permissions to the user do something.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>It is visible by the user.</td>
            <td>It is not visible by the user.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>First Step of a security access control.</td>
            <td>Usually comes after Authentication.</td>
          </tr>

          <tr>
            <td>4</td>
            <td>It is changeable by the user.</td>
            <td>Cannot be changed by the user.</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Example: A student can authenticate himself before accessing the Learning Management System of a University.</td>
            <td>Example: He can access lecture slides and other learning material of the courses based on the permissions given to him.</td>
          </tr>
          
        </tbody>
      </Table>

      <p>
        <b>Question-2:</b>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </p>

      <p>
        <b>Answer:</b>

      </p>

      <p>
        <b>Question-3:</b>
        What other services does firebase provide other than authentication
      </p>

      <p>
        <b>Answer:</b>
        
      </p>
    </div>
  );
};

export default Blogs;
