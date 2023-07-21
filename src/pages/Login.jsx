import React from 'react'
import { Link } from 'react-router-dom';
import { SheildIcon } from '../assets';
import Layout from '../components/Layout'
const Login = () => {
  return (
    <Layout>
      <div className="sm:flex sm:flex-row flex-col w-full sm:h-[52rem] sm:pt-[5.812rem] pt-[2rem] sm:pl-[7.69rem] px-16">
        <div className="sm:w-[50%]">
          <div className="flex pt-[1.25rem] px-[7rem] justify-center max-w-2xl content-start text-[#171A21] bg-slate-50">
            <div className="block max-w-md rounded-lg bg-white p-6 stepper">
              <p className="pb-[1.5rem] text-[#171A21] font-poppins text-xl font-bold">
                Login
              </p>
              <form>
                {/*Mobile number*/}
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="tel"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Mobile number"
                  />
                </div>
                {/*Password input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Password"
                  />
                </div>

                {/*Continue button*/}
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center content-center bg-[#68BFA8] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-emerald-500"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Continue
                </button>
                <div className='flex h-[0.125rem] min-w-[13rem] border border-[#E2E8F0] border-solid mt-[2rem] mb-[1.5rem]'>
                  
                </div>
                {/* Policy no button */}
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center items-center content-center mt-[1rem] bg-[#FFF] pt-[0.5rem] pb-[0.5rem] font-poppins font-medium  leading-normal text-[#6D7585] sm:text-base text-sm border border-[#C2C7D1] border-solid hover:bg-slate-500 hover:text-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login With Policy Number
                </button>
                {/* Login with email */}
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center content-center mt-[1rem] bg-[#FFF] pt-[0.5rem] pb-[0.5rem] font-poppins font-medium sm:text-base text-sm leading-normal text-[#6D7585] border border-[#C2C7D1] border-solid hover:bg-slate-500 hover:text-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login With Email
                </button>
                <div className='sm:flex justify-center w-full flex text-center flex-col mt-[2rem]'>
                    <p className=' text-center font-poppins font-semibold text-sm'>Trouble signing in?</p>
                    <Link className='ml-[1rem] font-poppins font-semibold text-sm' to="">Click Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='sm:w-[50%] flex flex-col lg:pr-[9rem]'>
          <img src={SheildIcon} alt="SheildIcon"/>
          <div className='flex font-poppins font-bold justify-center sm:text-[2rem] pb-[2rem] text-center'>
            <p>Shielding What Matters
                  <br/>Most to You.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login