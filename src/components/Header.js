import React from 'react';
import Search from './Search';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <React.Fragment>
      <Search fetch={props.fetch} />
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
