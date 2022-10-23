import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { Blog02, Blog03, Blog04, Blog05 } from './imports';

function Blog() {
  return (
    <div className='sls1__blog section__padding'>
      <div className='sls1__blog-heading'>
        <h1 className='blog-text'>SLS Blogs - Find more information</h1>
      </div>
      <div className='sls1__blog-container'>
        <Article
          imgUrl={Blog02}
          date='April 30, 2022'
          title='How human brains learn'
        />
        <Article
          imgUrl={Blog03}
          date='May 19, 2022'
          title='Audio signals and the human brain'
        />
        <Article
          imgUrl={Blog04}
          date='June 10, 2022'
          title='Brain Activity and Hidden Processes'
        />
        <Article
          imgUrl={Blog05}
          date='June 21, 2022'
          title='Brain Impulses and Waves'
        />
      </div>
    </div>
  );
}

export default Blog;
