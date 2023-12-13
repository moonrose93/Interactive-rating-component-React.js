import React, { useState } from 'react';
import staricon from './icon-star.svg';
import thankyou from './illustration-thank-you.svg';
import './App.css';
import Mobile from './Mobile';


function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submissionMade, setSubmissionMade] = useState(false);



  const isMobile=window.innerWidth <= 420;

  /*Creating universial function with passed parameter raiting and then we will target the actual ratin on the p element (we must pass argumentin the JSX)
  -For each p element we pass this handlechange function on click and change the argument for that parameter */
  const handleChange = (rating) => {
    setSelectedRating(rating);
  };


  /*Creating handlesubmit function we going to pass to the button where we check if the the selectedrating is not null then we set SubmissionMade to true.
  Later in our JSX we set if submissionMade (true) then show container-onClick else show container
  -   */
  const handleSubmit = () => {
    if (selectedRating !== null)
    setSubmissionMade(true);
  };

  return (
    <div className="App">
      {isMobile ? (
        <Mobile/>
      ):(
        <>
         {submissionMade ? (
        <div className="container-onClick">
          <img className="img" src={thankyou} alt="illustration-thank-you" />
          <p
            style={{
              backgroundColor: 'gray',
              borderRadius: '30px',
              padding: '5px 20px',
              color: 'orange',
            }}
          >
            You selected {selectedRating} out of 5
          </p>
          <h1>Thank you!</h1>
          <p style={{ textAlign: 'center' }}>
            We appreciate you taking the time to give a rating.,<br /> If you
            ever need more support, don’t hesitate to<br /> get in touch!
          </p>
        </div>
      ) : (
        <div className="container">
          <img className="star" src={staricon} alt="src" />
          <h1 className="heading">How did we do?</h1>
          <p className="paragraph">
            Please let us know how we did with your support<br /> request. All
            feedback is appreciated to help us<br /> improve our offering!
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
          <div className="btn-div">
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          </div>
        </div>
      )}
        
        </>
      )}
    </div>
  );
}

export default App;
