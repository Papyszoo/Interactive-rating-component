import React, {useState} from 'react';
import Card from './components/Card';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';
import './app.css';

function App() {
  const [ratingSelected, setRatingSelected] = useState(null);
  return (
    <div className="app">
      <Card>
        {ratingSelected === null ? <Rating setRatingSelected={setRatingSelected} /> : <ThankYou ratingSelected={ratingSelected} />}
      </Card>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by Papyszoo.
      </div>
    </div>
  );
}

export default App;
