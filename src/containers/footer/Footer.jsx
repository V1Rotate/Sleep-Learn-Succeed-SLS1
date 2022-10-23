import React from 'react';
import './footer.css';
import sls1logo from '../../assets/logo.PNG';

function Footer() {
  return (
    <div className='sls1__footer section__padding' id='contacts'>
      <div className='sls1__footer-links'>
        <div className='sls1__footer-links_logo'>
          <img src={sls1logo} alt='logo' />
        </div>
        <div className='sls1__footer-links_div'>
          <h4>Links</h4>
          <p>SLS in Social Media</p>
          <p>Researches and Studies</p>
          <p>Related Technologies</p>
          <p>Contact</p>
        </div>
        <div className='sls1__footer-links_div'>
          <h4>Company</h4>
          <p>About</p>
          <p>News</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className='sls1__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Unit 1 - 10 Kenaston Blvd., Winnipeg MB, Canada</p>
          <p>+1-800-000-SLS</p>
          <p>info@sls.com</p>
        </div>
      </div>
      <div className='sls1__footer-copyright'>
        <p>© 2022 SLS technology Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
