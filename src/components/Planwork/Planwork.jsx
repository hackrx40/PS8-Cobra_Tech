import React from 'react';
import './Planwork.css'
import man1 from '../../assets/man1.png';
import man2 from '../../assets/man2.png';
import women1 from '../../assets/woman1.png';

import progress from '../../assets/progress.png';
const Planwork = () => {
  return (
   <div className='flex flex-col justify-center items-center' id='planBox'>
    <h1 className='titleMan'>How the Plan works ?</h1>
    <div className="people">
      <img src={man1} alt="" />
      <img src={man2} alt="" />
      <img src={women1} alt="" />

    </div>
<img src={progress} alt="" />
<div className="textPeople">
     <h2>
      <h3>

      Ravi chooses a Life Cover 
      </h3>
      <h3>

      of ₹1 crore for 30 years.
      </h3>
      </h2>
      <h2>
      <h3>

      Ravi makes regular
      </h3>
      <h3>
      premium payment.
      </h3>
      </h2>
      <h2>
      <h3>
      After his unfortunate death at 58  
      </h3>
      <h3>

      Ravi’s daughter  gets  ₹83,333 
      </h3>
      <h3>
      as monthly income for 10 years.
      </h3>
      </h2>


    </div>
   </div>
  );
};

export default Planwork;
