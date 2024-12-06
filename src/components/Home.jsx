import React from 'react'
<<<<<<< Updated upstream
import ImagesCards from './ImagesCards'

const Home = () => {
  return (
    <div>
      <div className='text'>
=======
import image1 from '../img/gallery-1.jpg'
import image2 from '../img/gallery-2.jpg'
import image3 from '../img/gallery-3.jpg'
import image4 from '../img/gallery-4.jpg'
import image5 from '../img/gallery-5.jpg'
import image6 from '../img/gallery-6.jpg'
import image7 from '../img/gallery-7.jpg'
import image8 from '../img/gallery-8-2.jpg'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Home = () => {
  return (
    <div>
       <div className='text'>
>>>>>>> Stashed changes
        <div className="top">
          <h1>I'm Jenny Wilson a Professional <br />
            Photographer from New York City</h1>
          <h5>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni <br />
            est deserunt sed qui libero. Qui voluptas amet.</h5>
          <button>Available for Hire</button>
        </div>
      </div>
<<<<<<< Updated upstream
      <ImagesCards />
      
=======
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
>>>>>>> Stashed changes
    </div>
  )
}

export default Home