import React from 'react'
import './Popup.css'
import img9 from '../../images/single-book.jpeg'
import img8 from '../../images/townbook.jpeg'


const Popup = () => {
  return (
    <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={img8} alt="Tour photo" className="popup__img" />
                    <img src={img9} alt="Tour photo" className="popup__img" />
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Policy</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before buy or Rent</h3>
                    <p className="popup__text">
                        If you are<span><strong> RENTING BOOK </strong></span>on our website
                        You can earn recurring income from your used Books.
                        Price on which you rent depend on Quality and Useablity of Book.
                        You can rent Books whose price is more than ₹1000 of Original Book.
                        If Book Good Quality you can Charge Rent upto 3/5 of Original Price of Book.
                        <br></br>
                        If you are <span><strong> BUYING BOOK </strong></span>on our website.
                        You are Buying book i.e Taking Book on Rent.
                        Book you Buy must maintain it's quality and useablity.
                        No highlight on Books you taken rent from our website.
                        if you then even hightlight it Charge ₹15 for each page.
                        If any Page will tear then ₹100 charge as fine for each page.
                        If Don't Return book on time ₹500 charge 5 days late and fine Increase with days.
                        If Book is Lost ₹1000 will fine to you .


                    </p>
                    <a useHref="#" className="btn btn--green">Buy Now</a>
                </div>
            </div>
    </div>
  )
}

export default Popup
