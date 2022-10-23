import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.PNG';

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#whatsls1'>What is SLS-1?</a>
    </p>
    <p>
      <a href='#try'>Try SLS-1</a>
    </p>
    <p>
      <a href='#order'>Pre-Order</a>
    </p>
    <p>
      <a href='#contacts'>Contacts</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='sls1__navbar'>
      <div className='sls1__navbar-links'>
        <div className='sls1__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='sls1__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='sls1__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>
          <a href='#order'>Sign Up</a>
        </button>
      </div>
      <div className='sls1__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#065285'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#065285'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='sls1__navbar-menu_container scale-up-center'>
            <div className='sls1__navbar-menu_container-links'>
              <Menu />
              <div className='sls1__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
