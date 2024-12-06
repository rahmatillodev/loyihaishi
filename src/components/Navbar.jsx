import React from 'react'

import { IoCameraReverseOutline } from 'react-icons/io5'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='Nav'>
        <div className='div1'>
          <IoCameraReverseOutline />
          <h1>PhotoFolio</h1>
        </div>
        <div className='div2'>
          <Link to='/'>Home</Link>
          <Link to="/About">About</Link>
          <Link to='/Gallery'>Gallery</Link>
          <Link to='/Services'>Services</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
        <div className='div3'>
          <BsTwitterX />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
     

    </>
  );
}

export default Navbar;
