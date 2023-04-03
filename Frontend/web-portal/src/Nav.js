import React from 'react';
import './component.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
    <Link to='/site' >Home</Link>
        <Link to='/signin' >signin</Link>
      <Link to='/login'>Login</Link>
        <Link to='/edit-profile'>UpdateProfile</Link>

    </div>
  )
}

export default Nav;