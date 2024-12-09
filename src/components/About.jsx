import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className='text'>
        <div className="top">
          <h1 className='About'>About</h1>
          <h5>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio <br />
            voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </h5>
          <button>Available for Hire</button>
        </div>
      </div>
      <div className="chiziq"><h4>Home</h4> / <h4>About</h4></div>
      <div className="about-container">
        <div className="about-info-row">
          <div data-aos="fade-up" className="about-image-column">
            <img src='https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/profile-img.jpg' alt="Profile" className="about-image" />
          </div>
          <div data-aos="fade-up" className="about-text-column">
            <h2 className="about-title">
              UI/UX Designer, Professional Photographer va Web Developer.
            </h2>
            <p className="about-description fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="about-info-row">
              <div className="about-info-column">
                <ul className="about-info-list">
                  <li>
                    <RiArrowRightSLine />
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>Website:</strong>
                    <span>
                      <a href="#">www.example.com</a>
                    </span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>City:</strong> <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="about-info-column">
                <ul className="about-info-list">
                  <li>
                    <RiArrowRightSLine />
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <RiArrowRightSLine />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="about-text py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            <br />
            <p className="about-text m-0">
              Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
            </p>
          </div>
        </div>
      </div>
      <div className="Testimonials">
        <div className='Befor'>
          <h3>Testimonials</h3> <div className='befoore'></div>
        </div>
        <div>
          <h1>What they are saying</h1>
        </div>
      </div>
      <div className="karusel">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='SwiperSlide'>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Opa" />
            <h3>Lorem, ipsum.</h3>
            <p>Lorem, ipsum.</p>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Opa" />
            <h3>Lorem, ipsum.</h3>
            <p>Lorem, ipsum.</p>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Opa" />
            <h3>Lorem, ipsum.</h3>
            <p>Lorem, ipsum.</p>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Opa" />
            <h3>Lorem, ipsum.</h3>
            <p>Lorem, ipsum.</p>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Opa" />
            <h3>Lorem, ipsum.</h3>
            <p>Lorem, ipsum.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default About;
