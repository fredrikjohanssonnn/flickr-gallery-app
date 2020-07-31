import React from 'react';
import Search from './Search';
import Navbar from './Navbar';

const Header = () => {
  return (
    <React.Fragment>
      <Search />
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
