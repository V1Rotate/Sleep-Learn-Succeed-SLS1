import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Promotion for students',
    text: 'If you are a student of the SLS Technology partner University, apply for the promotion of 7 days SLS-1 device use (free of charge).',
  },
  {
    title: 'Check the reviews',
    text: 'Check the reviews of those who already tried SLS-1 device and shared their impressions of how easy, comfortable and effective SLS-1 is for use every night.',
  },
  {
    title: 'Ready to get your SLS-1?',
    text: 'If you are ready to get your SLS-1 device, complete pre-order form. SLS technology Inc. is going to process pre-orders and ship SLS-1 devices in early September 2022. Do not wait, pre-order now - get your SLS-1 earlier!',
  },
];

function Features() {
  return (
    <div className='sls1__features section__padding' id='try'>
      <div className='sls1__features-heading'>
        <h1 className='featureh1-text'>Try SLS-1 today - Succeed tomorrow </h1>
        <p>Request for more information to Get Started</p>
      </div>
      <div className='sls1__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export default Features;
