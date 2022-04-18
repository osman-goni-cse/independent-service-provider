import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  // console.log(name);
  return (
    <Col>
      <Card>
        <Card.Img style={{ height: "180px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <h3>Price: ${price} </h3>
          </Card.Text>
          <Link to="/checkout">
            <Button className="w-100" variant="primary">Book Now</Button>
          </Link>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
