import React, { useState } from "react";
import Layout from "../components/Layout";
import Faqa from "../components/Faq/faq";
import PreLoader from "../components/Preloader";
import Top from "./Top";
import "./PolicyForm.css";
import ReCAPTCHA from "react-google-recaptcha"
const HomePage = () => {
  return (
    <div>
      <PreLoader />
      <Top />
      <Layout>
        <div className="flex justify-center items-center">
          <div className="premiumMainBox w-[80%]">
            <h1 className="formTitle">Policyholder Details</h1>
            <form>
              <div className="flex justify-center items-center">
                <div className="m-10 mb-1 w-1/3">
                
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l    rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    placeholder="Enter your name "
                    required=""
                  />
                </div>
                <div className="m-10 mb-1 w-1/3">
            
                  <input
                    placeholder="Enter Password"
                    type="password"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
                <div className="m-10 mb-1 w-1/3">
               
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    id="repeatpassword"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="m-10 mb-1 w-1/3">
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l    rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    placeholder="Enter your name "
                    required=""
                  />
                </div>
                <div className="m-10 mb-1 w-1/3">
                  <label className="labelTitle"> Do you smoke</label>
                <div className="flex">

                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 m-3 w-1/2">
                      <input
                        id="bordered-radio-1"
                        type="radio"
                        defaultValue=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="bordered-radio-1"
                        className="w-full py-4 ml-2 text-sm font-medium text-black-900 dark:text-black-300"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 m-3 w-1/2">
                      <input
                        defaultChecked=""
                        id="bordered-radio-2"
                        type="radio"
                        defaultValue=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="bordered-radio-2"
                        className="w-full py-4 ml-2 text-sm font-medium text-black-900 dark:text-black-300"
                      >
                        No
                      </label>
                    </div>
                </div>
                
                </div>
                <div className="m-10 mb-1 w-1/3">
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l    rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    placeholder="Enter your name "
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="m-10 mb-1 w-1/3">
                  <input
                    type="text"
                    id=""
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l  rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    placeholder="City "
                    required=""
                  />
                </div>
                <div className="m-10 mb-1 w-1/3">
                  <input
                    placeholder="Education"
                    type="text"
                    id=""
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
                <div className="m-10 mb-1 w-1/3">
                  <input
                    placeholder="Occupation"
                    type="text"
                    id=""
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="m-10  w-1/3">
                  <input
                    type="number"
                    id=""
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l  rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    placeholder="Pay till age "
                    required=""
                  />
                </div>
                <div className="m-10  w-1/3">
                  <input
                    placeholder="Premium Payment Options"
                    type="text"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
                <div className="m-10  w-1/3">
                  <input
                    placeholder="Premium Payment Frequency"
                    type="text"
                    id="repeatpassword"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg border-black focus:ring-blue-500 focus:border-blue-500 block w-full h-[3rem] p-2.5 "
                    required=""
                  />
                </div>
              </div>
              <div className="flex m-1 justify-center  items-center">
                <div className="m-25 flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="m-25 ml-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="m-25 text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              <ReCAPTCHA
        sitekey="6LcwAEInAAAAADvQGWwFZOKqXOD0Kf2HcQIkPyZ0"
  
      />
              </div>
              <div className="flex justify-center items-center btnBoxPolicy">
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center content-center bg-[#f89c30] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#DF8E2F] m-12"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  id="calBtn"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="inline-flex w-full rounded-full justify-center content-center bg-[#0072BC] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[blue] m-12"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  id="calBtn"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Faqa />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
