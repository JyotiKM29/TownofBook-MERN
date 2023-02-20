import React from 'react'
import './Footer.css'
import Logo from '../../img/logo-green-2x.png'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer__logo-box">
        <img src={Logo} alt="Full logo" className="footer__logo"/>
    </div>
    <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Service</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Help</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Socials</a></li>
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
                Built with ❤️  by <a useHref="#" className="footer__link">Jyoti KM</a> and <a href="#" className="footer__link">Suraj Bhardwaj</a>.
                Copyright &copy;2023 website is not live for services.
            </p>
        </div>
    </div>
</div>
  )
}

export default Footer
