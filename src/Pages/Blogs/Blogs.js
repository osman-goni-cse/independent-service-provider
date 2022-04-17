import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-3">
      <p>
        <b>Question-1: &nbsp;</b>
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
        <b>Question-2: &nbsp;</b>
        Why are you using firebase? What other options do you have to implement authentication?
      </p>

      <p>
        <b>Answer: &nbsp;</b>
        Firebase is a application development platform which is useful for creating iOS, Android and Web Apps.I am using Firebase because it provides built-in third party authentication providers, including Google, Microsoft, Apple, Facebook, Github and so on.Firebase is also useful for storage and hosting.We have other options except firebase authentication which are &nbsp;
        <strong>Auth0, Passport, Okta, Amazon Cognito,..., etc.</strong>
        These tool can helps us to user management and authentication.
      </p>

      <p>
        <b>Question-3:</b>&nbsp;
        What other services does firebase provide other than authentication ?
      </p>

      <p>
        <b>Answer:</b>
        &nbsp; Services provided by Firebase is given below:
        <ul>
          <li>Google Analytics</li>
          <li>Real time Database</li>
          <li>Cloud Messaging</li>
          <li>Hosting</li>
          <li>Storage</li>
          <li>Notifications</li>
          <li>Dynamic Links</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
