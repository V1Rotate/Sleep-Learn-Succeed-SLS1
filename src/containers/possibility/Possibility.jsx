import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.jpg';

function Possibility() {
  return (
    <div className='sls1__possibility section__padding' id='possib'>
      <div className='sls1__possibility-content'>
        <h1 className='sls1__possibility-text'>
          You learn while having a rest
        </h1>
        <p>
          Going to sleep? Have you chosen a lecture you would like to get
          learned when you wake up? Or maybe you did choose an audiobook that
          you would like to tell about your friends tomorrow?
        </p>
        <h4>Request for more information to Get Started</h4>
      </div>
      <div className='sls1__possibility-image'>
        <img src={possibilityImage} alt='SLS-1 Usage' />
      </div>
    </div>
  );
}

export default Possibility;
