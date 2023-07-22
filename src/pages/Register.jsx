import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { SheildIcon } from '../assets';
import Layout from '../components/Layout'
import Top from './Top'

const Register = () => {
  const navigate = useNavigate();
 
  const [credentials, setCredentials] = useState({
    
    email: "",
    phone :"",
    pan : "",
    password: "",
    dob :"",
    
  });
  const host = "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    

      //   console.log(userName, email, password, authority, flatNo);
      const response = await fetch(`${host}/api/v1/bajaj/user/register`, {
        method: "POST",
        // crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          email: credentials.email,
          phone: credentials.phone,
          pan: credentials.pan,
          password: credentials.password,
          dob : credentials.dob,
        }),
      });
      const json = await response.json();
      console.log(json, "hi");
      console.log(localStorage.getItem("token"));
      if (json.success ) {
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    }
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <Layout>
      <Top />
      <div className="sm:flex sm:flex-row flex-col w-full sm:h-[52rem] sm:pt-[5.812rem] pt-[2rem] sm:pl-[7.69rem] px-16">
        <div className="sm:w-[50%]">
          <div className="flex pt-[1.25rem] px-[7rem] justify-center  content-start text-[#171A21] bg-slate-50">
            <div className="w-[100%] block max-w-md rounded-lg bg-white p-6 stepper">
              <p className="pb-[1.5rem] text-[#171A21] font-poppins text-xl font-bold">
                Register 
              </p>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Email ID"
                    name='email'
                    value ={credentials.email}
                    onChange={onChange}
                  />
                </div>
                 {/*Mobile number*/}
                 <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="tel"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Mobile number"
                    name='phone'
                    value ={credentials.phone}
                    onChange={onChange}
                  />
                </div>
                {/*Pan input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Pan"
                    name='pan'
                    value ={credentials.pan}
                    onChange={onChange}
                  />
                </div>
                {/*Password input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="Password"
                    name='password'
                    value ={credentials.password}
                    onChange={onChange}
                  />
                </div>
               
               
                {/*DOB*/}
                <div className="relative mb-6 " data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] h-[2.505rem] w-full rounded border border-[#C2C7D1] border-solid bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:text-[#6D7585]"
                    placeholder="DD-MM-YYYY"
                    name='dob'
                    value ={credentials.dob}
                    onChange={onChange}
                  />
                </div>

                {/*Continue button*/}
                <button
                  type="submit"
                  className="inline-flex w-full rounded-full justify-center content-center bg-[#f89c30] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#DF8E2F]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Continue
                </button>
                <div className='flex h-[0.125rem] min-w-[13rem] border border-[#E2E8F0] border-solid mt-[2rem] mb-[1.5rem]'>
                  
                </div>
                
                
                <div className='sm:flex justify-center w-full flex text-center flex-col mt-[2rem]'>
                    <p className=' text-center font-poppins font-semibold text-sm'>Trouble signing in?</p>
                    <Link className='ml-[1rem] font-poppins font-semibold text-sm' to="">Click Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='sm:w-[50%] flex flex-col p-20 '>
          <img src={SheildIcon} alt="SheildIcon" className='loginImg' />
          <div className='flex font-poppins font-bold justify-center sm:text-[1.6rem]  text-center'>
            <p>Life a tension free life with 

                  <br/>Bajaj Allianz!.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register
