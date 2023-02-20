import React from 'react'
import './About.css'
import photo1 from '../../images/book-4.png'
import photo2 from '../../images/book-5.png'
import photo3 from '../../images/book-6.png'
import photo4 from '../../images/book7.png'

import Features from '../Features/Features'

const About = () => {
  return (
    <>
    <div className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Popular Books
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a useHref="#" className="btn-text">See more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={photo1} alt="Photo 1" className="composition__photo composition__photo--p1" />
                            <img src={photo2} alt="Photo 2" className="composition__photo composition__photo--p2" />
                            <img src={photo3} alt="Photo 3" className="composition__photo composition__photo--p3" />
                            <img src={photo4} alt="Photo 4" className="composition__photo composition__photo--p4" />
                        
                        </div>
                    </div>
                </div>
            </div>
            <Features />
            </>
    
  )
}

export default About
