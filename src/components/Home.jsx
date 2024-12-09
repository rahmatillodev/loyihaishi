import React, { useEffect } from 'react'; // useEffect import qilingan
import ImagesCards from "./ImagesCards";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className='text'>
        <div className="top">
          <h1>I'm Jenny Wilson a Professional <br />
            Photographer from New York City
          </h1>
          <h5>
            Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni <br />
            est deserunt sed qui libero. Qui voluptas amet.
          </h5>
          <button>Available for Hire</button>
        </div>
      </div>
      <ImagesCards />
    </div>
  );
};

export default Home;