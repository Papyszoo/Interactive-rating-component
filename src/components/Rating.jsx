import React, { useState } from 'react';
import './rating.css';
import starImage from '../assets/icon-star.svg';
import RoundedContainer from './RoundedContainer';

const Rating = ({ setRatingSelected }) => {
  const [rating, setRating] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    setRatingSelected(rating);
  }
  
  return (
    <section className="rating-section">
      <RoundedContainer>
        <img src={starImage} />
      </RoundedContainer>
      <h3 className="rating-header">
        How did we do?
      </h3>
      <p className="rating-text">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <div className="rating-buttons">
        {(() => {
          let buttons = [];
          for (let i = 1; i < 6; i++) {
            buttons.push(
              <RoundedContainer key={i} onClick={() => setRating(i)} className={`rounded-container-big btn ${rating === i ? 'btnSelected' : ''}`}>
                {i}
              </RoundedContainer>
            );
          }
          return buttons;
        })()}
      </div>
      <button className="submitButton" onClick={onSubmit}>
        Submit
      </button>
    </section>
  )
}

export default Rating