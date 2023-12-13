import React, { useState } from 'react';
import staricon from './icon-star.svg';
import thankyou from './illustration-thank-you.svg';
import './App.css';
import './Mobile.css';


function Mobile() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submissionMade, setSubmissionMade] = useState(false);

  const handleChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null)
    setSubmissionMade(true);
  };

  return (
    <div className="App">
      {submissionMade ? (
        <div className="container-onClick-mobile">
          <img className="img-mobile" src={thankyou} alt="illustration-thank-you" />
          <p
            style={{
              backgroundColor: 'gray',
              borderRadius: '30px',
              padding: '5px 20px',
              color: 'orange',
              marginTop:'30px'
            }}
          >
            You selected {selectedRating} out of 5
          </p>
          <h1>Thank you!</h1>
          <p style={{ textAlign: 'center',color:'gray' }}>
            We appreciate you taking the time to give a<br/> rating., If you
            ever need more support, don’t<br/> hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="container-mobile">
          <img className="star" src={staricon} alt="src" />
          <h1 className="heading">How did we do?</h1>
          <p className="paragraph-mobile">
            Please let us know how we did with your<br/> support request. All
            feedback is appreciated<br/>to help us improve our offering!
          </p>
          <div className="ratings">
            <p
              onClick={() => handleChange(1)}
              style={{ backgroundColor: selectedRating === 1 ? 'orange' : 'gray',}}
              className="one"> 1</p>
            <p onClick={() => handleChange(2)}
              style={{ backgroundColor: selectedRating === 2 ? 'orange' : 'gray',}}
              className="two"> 2 </p>
            <p onClick={() => handleChange(3)}
              style={{backgroundColor: selectedRating === 3 ? 'orange' : 'gray', }}
              className="three" > 3</p>
            <p onClick={() => handleChange(4)}
              style={{ backgroundColor: selectedRating === 4 ? 'orange' : 'gray',  }}
              className="four">4</p>
            <p onClick={() => handleChange(5)}
              style={{ backgroundColor: selectedRating === 5 ? 'orange' : 'gray', }}
              className="five" >5 </p>
        
          </div>
          <div className="btn-div-mobile">
            <button onClick={handleSubmit} className="btn-mobile">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;
