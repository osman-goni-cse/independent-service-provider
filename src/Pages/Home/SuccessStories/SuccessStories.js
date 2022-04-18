import React from 'react';
import { Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

import SuccessStory from '../SuccessStory/SuccessStory';

const all_success = [
  {id: 1, name: 'Abul Mia', img: expert1},
  {id: 2, name: 'Abul Mia', img: expert2},
  {id: 3, name: 'Abul Mia', img: expert3},
  {id: 4, name: 'Abul Mia', img: expert4},
  {id: 5, name: 'Abul Mia', img: expert5},
  {id: 6, name: 'Abul Mia', img: expert6}
]

const SuccessStories = () => {
  // console.log(all_success.length);
  return (
    <div id='success' className='container'>
      <h1 className="text-center fw-bold text-primary my-5">SUCCESS STORY</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {
          all_success.map(success => <SuccessStory
          key={success.id}
          success={success}
          ></SuccessStory>)
        }
      </Row>
    </div>
  );
};

export default SuccessStories;