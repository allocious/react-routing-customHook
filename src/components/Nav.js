import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navStyle = { color: 'white', textDecoration: 'none' };
  return (
    <div>
      <nav>
        <Link to='/' style={navStyle}>
          <h3>Logo</h3>
        </Link>
        <ul className='nav-links'>
          <Link to='/about' style={navStyle}>
            <li>About</li>
          </Link>
          <Link to='/shop' style={navStyle}>
            <li>Shop</li>
          </Link>
          <Link to='/child' style={navStyle}>
            <li>Parent Component</li>
          </Link>
          <Link to='/customhook' style={navStyle}>
            <li>Custom Hook</li>
          </Link>
          <Link to='/axios' style={navStyle}>
            <li>Axios</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
