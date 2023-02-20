import React, { useState, useEffect } from 'react';
import './Carousel.css';
import gif1 from '../../images/gif1.svg';
import gif2 from '../../images/gif2.svg';
import gif3 from '../../images/gif3.svg';

const items = [
  {
    id: 1,
    image: gif1,
    title: 'Item 1',
    description: 'Buy Premium Books',
  },
  {
    id: 2,
    image: gif2,
    title: 'Item 2',
    description: 'Get Books on Subscription',
  },
  {
    id: 3,
    image: gif3,
    title: 'Item 3',
    description: 'Earn from Renting Books',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <>
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === currentIndex ? 'current' : ''}`}
        >
          <img src={item.image} alt={item.title} style={{height:'200px', width:'500px'}}/>
          {/* <h2>{item.title}</h2> */}
          <p>{item.description}</p>
        </div>
      ))}
      {/* <button onClick={handlePrevClick}>Prev</button> */}
      {/* <button onClick={handleNextClick}>Next</button> */}
    </div>
    
    </>
  );
};

export default Carousel;
