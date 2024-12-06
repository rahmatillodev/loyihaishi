import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Gallerey from './components/Gallerey'
import Services from './components/Services'
import Contact from './components/Contact'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Gallerey' element={<Gallerey />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
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
      </BrowserRouter>
    </>
  );
}

export default App;
