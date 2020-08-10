import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <NavLink to='/tags/foxes'>Foxes</NavLink>
        </li>
        <li>
          <NavLink to='/tags/dogs'>Dogs</NavLink>
        </li>
        <li>
          <NavLink to='/tags/sunsets'>Sunset</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
