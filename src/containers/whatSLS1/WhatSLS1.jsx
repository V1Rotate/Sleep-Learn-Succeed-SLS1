import React from 'react';
import { Feature } from '../../components/feature/Feature';
import './whatSLS1.css';
import whatslsImage from '../../assets/whatsls.PNG';

function WhatSLS1() {
  return (
    <div className='sls1__whatsls1 section__margin' id='whatsls1'>
      <div className='sls1__whatsls1-heading'>
        <h1 className='whatsls1-h1'>
          Unlock your brain for Limitless potential with a New Technology
        </h1>
      </div>
      <div className='sls1__whatsls1-section '>
        <div className='sls1__whatsls1-image whatImg'>
          <img src={whatslsImage} alt='sls device' />
        </div>
        <div className='sls1__whatsls1-container'>
          <Feature
            title='What is SLS-1 for?'
            text='Learning is one of the most powerful ability which gives tons of opportunities. Many people learn to grow professionally during the day time and willing to reach their goals faster. SLS Technology Inc. developed SLS-1 Device that helps to continue learning in the same 24 hours while you are sleeping - listen to the recorded audio lecture and a podcast while sleeping - Wake up with the learned information the next morning! Does it sound unbelievable? Try this revolutionary technology! '
          />
          <Feature
            title='Binaural sound & Brain waves and frequencies '
            text='SLS-1 is equipped with a unique sensor iSLS-s and Biaural audio signal generator iSLS-gen. iSLS-s detects the brain electrical activity, type of waves and their frequency every microsecond and triggers iSLS-gen to generate the Binaural audio signals through the deticated drivers, as well as the Microwaves and Electrical signals through 3 micro-contacts (ear area skin touch) with the specific parameters required to "open the door" to the brain limitless potential. That turns on the brain hidden "boost mode" which allows to hear, absorb, interprete and save any information a person is hearing while sleeping. At the time of the SLS-1 "connected" to the brain, SLS-1 Planar type Hi-End class drivers play audio files with learning material that needs to be learned by the morning. '
          />
          <Feature
            title='Clinical studies & SLS safe technology'
            text='SLS-1 device with Binaural audio technology is safe and has no side effects, as per 12+ studies made with Sleeping Foundation and Hospitals in North America. Also, SLS-1 has a limit of 80 decibels not to affect the hearing system over time. Preliminary research suggests that binaural beats even can help you sleep better. A study using binaural beats at a delta frequency of 3 Hz showed that these beats induced delta activity in the brain. As a result, the use of binaural beats lengthened stage three sleep. SLS-1 Microwaves and Electrical signals generator has been tested by the Medical institutes and organizations, as well as by the North American Universities. Additional studies have been planned. '
          />
          <Feature
            title='Technical features & components '
            text='SLS-1 lightweight (0.11 pound) construction is engineered for long hours of wearing with no discomfort. The headband is made of strong plastic (Polycarbonate) and medical-grade silicone which is allergy free and makes the headband flexible. Internal rail made of Aviation steel allows to adjust the headband to a head and fix the headband adjusted position. SLS-1 has 512 GB of storage onboard for your lectures or any information you are going to listen to and learn. All audio file formats are supported, including M4A, FLAC, MP3, MP4, WAV, WMA, AAC. Battery lifetime is up to 55 hours. '
          />
        </div>
      </div>
    </div>
  );
}

export default WhatSLS1;
