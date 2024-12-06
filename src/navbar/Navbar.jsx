import React from 'react'
import Home from './Home'
import About from './About'
import Gallerey from './Gallerey'
import Services from './Services'
import Contact from './Contact'
import { IoCameraReverseOutline } from 'react-icons/io5'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import image1 from '../img/gallery-1.jpg'
import image2 from '../img/gallery-2.jpg'
import image3 from '../img/gallery-3.jpg'
import image4 from '../img/gallery-4.jpg'
import image5 from '../img/gallery-5.jpg'
import image6 from '../img/gallery-6.jpg'
import image7 from '../img/gallery-7.jpg'
import image8 from '../img/gallery-8-2.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='Nav'>
        <div className='div1'>
          <IoCameraReverseOutline />
          <h1>PhotoFolio</h1>
        </div>
        <div className='div2'>
          <BrowserRouter>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Gallerey' element={<Gallerey />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/Contact' element={<Contact />} />
              <Contact />
            </Routes>
          </BrowserRouter>
        </div>
        <div className='div3'>
          <BsTwitterX />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className='text'>
        <div className="top">
          <h1>I'm Jenny Wilson a Professional <br />
            Photographer from New York City</h1>
          <h5>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni <br />
            est deserunt sed qui libero. Qui voluptas amet.</h5>
          <button>Available for Hire</button>
        </div>
      </div>
      <div className="galleryn">
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
        <div>
          <img src={image7} alt="" />
        </div>
        <div>
          <img src={image8} alt="" />
        </div>
      </div>
      <div className="pas">
        <p>© Copyright PhotoFolio All Rights Reserved</p>
        <div className="pas-icons">
          <BsTwitterX />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <p>
          Designed by <span>BootstrapMade</span>
        </p>
      </div>

    </>
  );
}

export default Navbar;
