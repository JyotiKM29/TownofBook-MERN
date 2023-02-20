import React from 'react'
import './Home.css'
import Logo from '../../img/logo-white.png';
import Carousel from './Carousel';

import About from '../About/About';

const Home = () => {
  return (
   <>
    <div>
      <header className="header">
    <div className="header__logo-box">
        <img src={Logo} alt="Logo" className="header__logo" />
    </div>

    <div className="row">
       <div className="col-1-of-2">
           <div className="header__text-box">
                  <h1 className="heading-primary">
                       <span className="heading-primary--sup" >Town of</span>
                       <span className="heading-primary--main"> Books</span>
                       <span className="heading-primary--sub">Books without hustle in your town </span>
                  </h1>
       
                <a useHref="#section-tours" className="btn btn--green btn--animated">Buy Now</a>
            </div>
        </div>
        <div className="col-1-of-2">
            <Carousel />
        </div>
    </div>
    
     </header>
     
    </div>
    <About />
    </>
  )
}

export default Home
