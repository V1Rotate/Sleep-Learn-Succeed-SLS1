import React from 'react';
import { Universities, Order, Navbar } from './components';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatSLS1,
  Header,
} from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Universities />
      <WhatSLS1 />
      <Features />
      <Possibility />
      <Blog />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
