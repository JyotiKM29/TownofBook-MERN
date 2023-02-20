import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <div className="navigation__nav">
                <ul className="navigation__list">
                <li className="navigation__item" ><a href="#" className="navigation__link"><span>01</span>Home</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>02</span>popular Books</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>03</span>Buy Now</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>04</span>Rent Now</a></li>
                    <li className="navigation__item" ><a href="#" className="navigation__link"><span>05</span>Reviews</a></li>

                    {/* <li className="navigation__item navigation__link"><Link to="/"><span>01</span>Home</Link></li>
                    <li className="navigation__item navigation__link"><Link to="/popularbooks"><span>02</span>popular Books</Link></li>
                    <li className="navigation__item navigation__link"><Link to="/buybook"><span>03</span>Buy Now</Link></li>
                    <li className="navigation__item navigation__link"><Link to="/rentbook"><span>04</span>Rent Now</Link></li>
                    <li className="navigation__item navigation__link"><Link to="/review"><span>05</span>Reviews</Link></li> */}
                    </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
