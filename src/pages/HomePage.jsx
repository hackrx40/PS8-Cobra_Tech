import React from "react";
import Layout from "../components/Layout";
import "./Homepage.css";
import cupwalk from "../assets/cupwalk.png";
import chair2 from "../assets/chair2.png";
import './Scroller.css'
import umbu from "../assets/umbu.png";
import lob from "../assets/lob.png";
import savings from "../assets/savings.png";
import kavachEng from "../assets/logo.jpg";
import invest from "../assets/invest.png";
import child from "../assets/child.png";
import tick from "../assets/tick.png";
import { Stepper } from "react-form-stepper";
import Card from '../components/Card/Card';
import Kavach from '../components/Kavach/Kavach';

import Planwork from '../components/Planwork/Planwork';
import Steps from '../components/Step/Steps';
import Together from '../components/Together/Together';
import Top from './Top';
import PreLoader from "../components/Preloader";
import Faqa from "../components/Faq/faq";
import Premium from "../components/Premium/Premium";
const HomePage = () => {
  return (
    <Layout>
      <PreLoader />
      <Top />
      <div className="sm:flex sm:flex-row flex-col w-full mb-[3rem] sm:pt-[5.812rem] pt-[2rem] sm:pl-[7.69rem] px-16">
        <div className="sm:w-[50%]">
          <div className="flex pt-[1.25rem] px-[7rem] justify-center max-w-2xl content-start text-[#171A21]">
            <div className="">
              <img className='vert-move' src={cupwalk} alt="" />
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] flex flex-col lg:pr-[9rem]">
          <div className="flex flex-col font-poppins font-bold justify-center sm:text-[2rem] pb-[2rem] text-left mainB">
            <img src={kavachEng} className="imgKavach" alt="" />
            <h1 className="title">
              Safeguard the future 
              </h1>
              <h1 className="title">
             of your loved ones.
              </h1>
            <div className="list">
              <h5> 99.89% Claims paid ratio</h5>
              <h5>5% Discount</h5>
              <h5>Zero Commission</h5>
            </div>
            <a href="#calcMainBox">
            <button
              type="submit"
              className="inline-flex w-full rounded-full justify-center content-center bg-[#f89c30] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#DF8E2F]"
              data-te-ripple-init
              data-te-ripple-color="light"
              id="calBtn"
            >
              Recommend Plan
            </button>
          </a>
          </div>
        </div>
      </div>
      <div className="insuranceBox flex-col flex justify-center items-center">
        <h1>Life Insurance Plans</h1>
        <div className="flex justify-center items-center mt-8">
          
        <Card image={lob} planName="Term Insurance" imageHeight="36px" imageWidth="40px" />
        <Card image={umbu} planName="ULIP Plans" imageHeight="40px" imageWidth="40px" />
        <Card image={chair2} planName="Retirement Plans" imageHeight="50px" imageWidth="70px" />


        
        </div>
        <div className="flex justify-center items-center mt-8">
          
        <Card image={savings} planName="Saving Plans" imageHeight="50px" imageWidth="56px" />
        <Card image={invest} planName="Invest Plans" imageHeight="40px" imageWidth="50px" />
        <Card image={child} planName="Child Plans" imageHeight="50px" imageWidth="40px" />

  
          
          </div>
      </div>
    
 
    <div className="flex flex-col justify-center items-center ">
      <div className="stepper">
         <Steps />
      </div>
      <div className="planMainBox"  id="calcMainBox">
         <Premium />
      </div>

      
      <div className="planMainBox">
    <Planwork />

      </div>
   <Faqa />
   <Together />
   <Kavach />
    </div>
    </Layout>
    
  );
};

export default HomePage;
