import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom';
import {robot} from "../assets"

const Register = () => {
  return (
    <Layout>
        <div className="sm:flex bg-primary sm:flex-row flex-col w-full sm:h-[52rem] sm:pt-[5.812rem] pt-[2rem] sm:pl-[7.69rem] px-16">
        <div className="sm:w-[50%] ">
          <div className="flex pt-[1.25rem] px-[7rem] justify-center max-w-2xl content-start text-[#171A21] bg-primary">
            <div className="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-[28.375rem]">
              <p className="pb-[1.5rem] text-[#171A21] font-poppins text-xl font-bold">
                Register
              </p>
              <form>
                {/* Name */}
              <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Full Name"
                  />
                </div>

                {/*Mobile number*/}
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="tel"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Mobile number"
                  />
                </div>

                {/*Email ID*/}
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Email ID "
                  />
                </div>

                {/*Date of birth*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="date"
                    className="peer block min-h-[auto] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Date of Birth"
                  />
                </div>

                {/* Gender */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Gender"
                  />
                </div>


                {/*Continue button*/}
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center content-center bg-black-gradient px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-emerald-500"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register
                </button>
                <div className='flex h-[0.125rem] min-w-[13rem] border border-[#E2E8F0] border-solid mt-[2rem] mb-[1.5rem]'>
                  
                </div>
                
                <div className='sm:flex justify-center w-full flex text-center flex-col mt-[2rem]'>
                    <p className=' text-center font-poppins font-semibold text-sm'>Trouble Registering?</p>
                    <Link className='ml-[1rem] font-poppins font-semibold text-sm' to="">Click Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='sm:w-[50%] flex flex-col lg:pr-[9rem]'>
          <img src={robot} alt="SheildIcon"/>
          <div className='flex text-white font-poppins font-bold justify-center sm:text-[2rem] pb-[2rem] text-center'>
        
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register