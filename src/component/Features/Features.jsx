import React from 'react'
import './Features.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons'

import Tours from '../Tours/Tours'


const Features = () => {
  return (
    <>
    <div className="section-features">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary--green">
                        Benefits Renting and Read used book 
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <FontAwesomeIcon icon={faMoneyBill} size="4x" className="feature-box__icon" />
                            <h3 className="heading-tertiary u-margin-bottom-small">Side Income</h3>
                            <p className="feature-box__text">
                               You can recurring Money , by Renting your Books .
                               After all we don't use once we read and aquire Knowledge .
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <FontAwesomeIcon icon={faSackDollar} size="4x" className="feature-box__icon"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">Save Money</h3>
                            <p className="feature-box__text">
                               You can Save your money on buying Physical New Books.
                                You take Books on rent and return them after read.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <FontAwesomeIcon icon={faPersonBiking} size="4x" className="feature-box__icon"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">Fast Delivary</h3>
                             <p className="feature-box__text">
                              As we delivary Books from vender to consumer in same City So, delivary 
                              is fast and delivary charges are low.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <FontAwesomeIcon icon={faTree} size="4x" className="feature-box__icon"/>
                            <h3 className="heading-tertiary u-margin-bottom-small">Eco friendly</h3>
                            <p className="feature-box__text">
                             physical books are made of paper,Paper made from tree. 
                             So, If you read Second Books you indirectly help nature.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Tours />
            </>
  )
}

export default Features
