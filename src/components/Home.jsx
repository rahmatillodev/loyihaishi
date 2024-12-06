import React from 'react'
import ImagesCards from './ImagesCards'


import image1 from '../img/gallery-1.jpg'
import image2 from '../img/gallery-2.jpg'
import image3 from '../img/gallery-3.jpg'
import image4 from '../img/gallery-4.jpg'
import image5 from '../img/gallery-5.jpg'
import image6 from '../img/gallery-6.jpg'
import image7 from '../img/gallery-7.jpg'
import image8 from '../img/gallery-8-2.jpg'

const Home = () => {
  return (
    <div>
      <ImagesCards />
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
    </div>
  )
}

export default Home