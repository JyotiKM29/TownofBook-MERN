import React from 'react'
import './Stories.css'
import person1 from '../../images/surajj.jpg'
import person2 from '../../images/jyoti.jpg'
import person3 from '../../images/aakash.jpg'

import vedio from '../../images/readingbook.mp4'

import Book from '../Book/Book'

const Stories = () => {
  return (
    <>
    <div className="section-stories">
                <div className="bg-video">
                    <video autoplay loop className="bg-video__content" >
                        <source src={vedio} type="video/mp4" />
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary--green">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person1} alt="Person on a tour" className="story__img" />
                            <figcaption className="story__caption">Suraj Bhardwaj</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Premium Book at this Cost , Can't believe</h3>
                            <p>
                              I love reading Book , but Only promblem I face is can't physical book at effortable price . 
                              I can return them back when I used. yes , these do consumed space So , it best choice for me.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person2} alt="Person on a tour" className="story__img" />
                            <figcaption className="story__caption">Jyoti Km</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! I got my all favourite Books , at this price and quality</h3>
                            <p>
                              I reactly got this website , and I am amazed that my all favourite Books which I can't buy as there so Coastly ,I got all though Books there.
                              This is like treasure for me .
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={person3} alt="Person on a tour" className="story__img" />
                            <figcaption className="story__caption">Aakash Verma</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Yup, I can Earn Recurring Money from my books</h3>
                            <p>
                               I don't believe that I can earn recurring money from my old book , which I readed once and never use them again.
                               Shopkeeper don't even gave half of money for new buyed book which I readed once.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a useHref="#" className="btn-text">See all Books &rarr;</a>
                </div>
            </div>
            <Book />
            </>
  )
}

export default Stories
