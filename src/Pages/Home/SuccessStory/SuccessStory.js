import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SuccessStory = ({success}) => {
  const {name, img} = success;
  // console.log(success);
  return (
    <div>
      <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, natus.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default SuccessStory;