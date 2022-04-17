import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Service = ({service}) => {

  const {name, img, price, description} = service;
  // console.log(name);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            <b>Price: {price} </b>
            <Button variant="primary">Book Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;