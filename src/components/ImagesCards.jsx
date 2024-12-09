import React, { useEffect } from 'react'; // useEffect import qilindi
import image1 from '../img/gallery-1.jpg';
import image2 from '../img/gallery-2.jpg';
import image3 from '../img/gallery-3.jpg';
import image4 from '../img/gallery-4.jpg';
import image5 from '../img/gallery-5.jpg';
import image6 from '../img/gallery-6.jpg';
import image7 from '../img/gallery-7.jpg';
import image8 from '../img/gallery-8-2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImagesCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="galleryn">
      <div>
        <img src={image1} alt="Gallery 1" />
      </div>
      <div>
        <img src={image2} alt="Gallery 2" />
      </div>
      <div>
        <img src={image3} alt="Gallery 3" />
      </div>
      <div>
        <img src={image4} alt="Gallery 4" />
      </div>
      <div>
        <img src={image5} alt="Gallery 5" />
      </div>
      <div>
        <img src={image6} alt="Gallery 6" />
      </div>
      <div>
        <img src={image7} alt="Gallery 7" />
      </div>
      <div>
        <img src={image8} alt="Gallery 8" />
      </div>
    </div>
  );
};

export default ImagesCards;
  