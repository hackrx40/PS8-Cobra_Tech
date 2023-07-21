import React from 'react';
import './Steps.css'
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';


import prog from '../../assets/prog.png';
const Steps = () => {
  return (
   <div className='flex flex-col justify-center items-center ' id='stepBox'>
    <h1 className='titleMan'>Steps to buy a Plan</h1>
    <div className="circleImg">
      <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" />
      <img src={four} alt="" />


    </div>
    <div className="people">
      <span>
        <h2>Calculate term</h2>
        <h2>insurance premium</h2>

      </span>
      <span>
        <h2>Add on covers for</h2>
        <h2>extra safety</h2>

      </span>  <span>
        <h2>Make Payment</h2>

      </span>
      <span>
        <h2>Policy Issued</h2>

      </span>



    </div>
<img src={prog} alt="" id='progImg' />

   </div>
  );
};

export default Steps;
