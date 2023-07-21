import React from 'react';
import twoper from '../../assets/twoper.png';
import threeper from '../../assets/threeper.png';
import fiveper from '../../assets/fiveper.png';
import Radio from '../Radio/Radio';
import Tobaco from '../Radio/Tobaco';

import './Premium.css';
const Steps = () => {
  return (
    <>
    <h1 className='formPremiumTitle'>
    Up to 11% discount on your first premium
    </h1>
   <div className='w-[]' id='preUniqueBox'>
    <div className="flex flex-col ">
    <div className="flex">
      <input type="text" placeholder='Name' className='fieldPlace' />
      <input type="text" placeholder='Date of Birth' className='fieldPlace' />
    </div>
    <h1 className='labelTitle'>Gender</h1>
    <div className="flex">

      <Radio />
    </div>
    <h1 className='labelTitle'>Do you smoke / consume tobacco ?</h1>
    <div className="flex">

      <Tobaco />
    </div>
    <div className="flex">
    <input type="text" placeholder='Premium Payment Options' className='fieldPlace' />
      <input type="text" placeholder='Premium Payment Frequency' className='fieldPlace' />
    </div>
    <div className="preimumBtn">
    <button
              type="submit"
              className="inline-flex w-full rounded-full justify-center content-center bg-[#f89c30] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#DF8E2F]"
              data-te-ripple-init
              data-te-ripple-color="light"
              id="calBtn"
            >
              Recommend Plans
            </button>
    </div>
    </div>
    <div className="flex flex-col preImageBox">
      <img src={twoper} alt="" />
      <img src={threeper} alt="" />
      <img src={fiveper} alt="" />


    </div>

   </div>
   </>

  );
};

export default Steps;
