import React from 'react'
import './Tours.css'

import Stories from '../Stories/Stories'

const Tours = () => {
  return (
    <>
    <div className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Subscriptions
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                       <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Basic</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 books</li>
                                        <li>Up to 30 days</li>
                                        <li>Books under ₹300</li>
                                        <li>Delivary Charge ₹100</li>
                                        <li>Pack: Basic</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">₹399</p>
                                    </div>
                                    <a useHref="#popup" className="btn btn--white">Buy now!</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Premium</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5 Books</li>
                                        <li>Up to 55 days</li>
                                        <li>Books under ₹500</li>
                                        <li>delivary Charge ₹100</li>
                                        <li>Pack: Premium</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">₹699</p>
                                    </div>
                                    <a useHref="#popup" className="btn btn--white">Buy now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Pro</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 Books</li>
                                        <li>Up to 75 days</li>
                                        <li>Books under ₹1000</li>
                                        <li>delivary charge Free</li>
                                        <li>Pack: Pro</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">₹999</p>
                                    </div>
                                    <a useHref="#popup" className="btn btn--white">Buy now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a useHref="#" className="btn btn--black">Discover all books</a>
                </div>
            </div>
            <Stories />
            </>
  )
}

export default Tours
