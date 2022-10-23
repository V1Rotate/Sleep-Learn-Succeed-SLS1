import React from 'react';
import './universities.css';
import {
  harvard,
  uobritish,
  uocalgary,
  uotoronto,
  uomanitoba,
} from './imports';

function Universities() {
  return (
    <div className='sls1__universities section__padding'>
      <div>
        <img src={harvard} alt='Harvard University' />
      </div>
      <div>
        <img src={uobritish} alt='University of BC' />
      </div>
      <div>
        <img src={uocalgary} alt='University of Calgary' />
      </div>
      <div>
        <img src={uotoronto} alt='University of Toronto' />
      </div>
      <div>
        <img src={uomanitoba} alt='University of Manitoba' />
      </div>
    </div>
  );
}

export default Universities;
