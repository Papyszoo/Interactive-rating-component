import React from 'react';
import './thankYou.css';
import thankYouImage from '../assets/illustration-thank-you.svg';

const ThankYou = ( {ratingSelected} ) => {
  return (
    <div className="thank-you-section">
      <img src={thankYouImage} alt="phone" className="thank-you-image" />
      <div className="thank-you-selected-rating">
        You selected {ratingSelected} out of 5
      </div>
      <h3 className="thank-you-header">
        Thank you!
      </h3>
      <div className="thank-you-paragraph">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </div>
    </div>
  )
}

export default ThankYou