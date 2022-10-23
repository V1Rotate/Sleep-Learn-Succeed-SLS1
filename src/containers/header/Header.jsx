import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import sls from '../../assets/sls.png';

function Header() {
  return (
    <div className='sls1__header section__padding' id='home'>
      <div className='sls1__header-content'>
        <h1 className='gradient__text'>Sleep. Learn. Succeed.</h1>
        <h2 className='gradient__text2'>
          New Era of the Innovative Solutions for Learning.
        </h2>
        <p>
          A new and unique solution that will help you learn more every 24
          hours, save time, reach your learning goals faster, and succeed in any
          education. Want to boost your learning effectiveness? Sign up!
        </p>
        <div className='sls1__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>
            <a href='#order'>Get Started</a>
          </button>
        </div>
        <div className='sls1__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600+ people are interested to know more about SLS-1</p>
        </div>
      </div>
      <div className='sls1__header-image'>
        <img src={sls} alt='sls1' />
      </div>
    </div>
  );
}

export default Header;
