import React from 'react';
import { Row } from 'react-bootstrap';

import success1 from '../../../images/success/success-1.jpeg'
import success2 from '../../../images/success/success-2.jpg'
import success3 from '../../../images/success/success-3.jpeg'

import SuccessStory from '../SuccessStory/SuccessStory';

const all_success = [
  {id: 1, name: 'Ariana Larry', weight: '15 lbs', desc: 'Has more energy and strength and Signed Up for Regional Marathon' , img: success1},
  {id: 2, name: 'Donald Jake', weight: '7 lbs',desc: 'Blood Pressure Reduces from 150 to 120 and Heart Bit is normal' , img: success2},
  {id: 3, name: 'Johnson and Karry Page', weight: '12 lbs',desc: 'They both have sleep problem now they are happy' , img: success3},
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