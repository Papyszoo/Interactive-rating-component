import React from 'react';
import './thankYou.css';

const ThankYou = ( {ratingSelected} ) => {
    console.log('anything');
  return (
    <div> You selected {ratingSelected} out of 5

    Thank you!
  
    We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</div>
  )
}

export default ThankYou