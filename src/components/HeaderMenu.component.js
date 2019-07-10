import React from 'react';
import { Link } from '@reach/router';

export default () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/marketing-tools'>Marketing tools</Link>
      <Link to='/blog'>*Blog</Link>
      <Link to='/dynamic'>*Dynamic</Link>
    </nav>
  );
};
