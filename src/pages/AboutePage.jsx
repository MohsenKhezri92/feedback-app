import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutePage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutePage
