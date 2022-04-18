import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SuccessStory = ({success}) => {
  const {name, img, weight, desc} = success;
  // console.log(success);
  return (
    <div>
      <Col>
      <Card>
        <Card.Img style={{height: '300px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <ul>
             <li>
               Lost {weight}
             </li>
             <li>
              {desc}
             </li>
           </ul>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
};

export default SuccessStory;