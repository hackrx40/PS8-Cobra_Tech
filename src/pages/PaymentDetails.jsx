import React from 'react'
import Layout from '../components/Layout'
import StepsDemo from "../components/Faq/faq"

const PaymentDetails = () => {
  return (
    <Layout>
        <div className='flex w-full'>
      <div className="flex justify-end items-center mr-16 mt-16 w-1/2">
        <div>
            <div className='bg-[#cce3f2] w-[30rem] p-4 mb-4 rounded-lg'>
            
          {/* Radio Button 1*/}
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel01"
              defaultChecked
            /> 
            <p className='font-poppins pl-4 text-2xl font-light'>UPI/Wallets</p>
          </div>
          </div>
          {/* Radio Button 2*/}
          <div className='bg-[#cce3f2] w-[30rem] p-4 rounded-lg mb-4'>
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel02" 
            />
            <p className='font-poppins pl-4 text-2xl font-light'>Cards</p>
          </div>
          </div>

          <div className='bg-[#cce3f2] w-[30rem]  p-4 rounded-lg mb-4'>
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel02" 
            />
            <p className='font-poppins pl-4 text-2xl font-light'>NetBanking</p>
          </div>
          </div>
        </div>
         </div>

        <div className='w-1/2  my-20 mx-20 flex flex-col'>
            <div className='my-1 font-poppins text-2xl font-medium'>
                Hi User,
            </div>
            <div className=' font-poppins text-2xl font-medium'>
                Review your Insurance Summary
            </div>
            <div className='flex w-full mt-8'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Policy Number</p>
                </div>
                <div className='flex ml-[9rem] font-poppins'>
                    12394234
                </div>
            </div>
            <div className='flex w-full mt-2'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Policy Name</p>
                </div>
                <div className='flex ml-[9rem] font-poppins'>
                    Kawach Life Plus
                </div>
            </div>
            <div className='flex w-full mt-2'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Life cover</p>
                </div>
                <div className='flex ml-[9rem] font-poppins'>
                    Rs 50 lakh
                </div>
            </div>
            <div className='flex w-full mt-2'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Cover till age</p>
                </div>
                <div className='flex ml-[9rem] font-poppins'>
                    60 years
                </div>
            </div>
            <div className='flex w-full mt-2'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Pay till age</p>
                </div>
                <div className='flex ml-[9rem] font-poppins'>
                    60 years
                </div>
            </div>

            <div className='flex bg-[#0072bc] h-[0.325rem] max-w-[32rem] border border-[#E2E8F0] border-solid rounded-lg mt-[2rem] mb-[1.5rem]'>   
             </div>

             <div className='flex w-full mt-2'>
                <div className='font-poppins w-[12rem] text-xl '>
                    <p>Total Amount</p>
                </div>
                <div className='flex ml-[9rem] font-semibold font-poppins'>
                    ₹ 1980.00
                </div>
            </div> 

        </div>
    </div>

      <div className="flex flex-col justify-center items-center">
        <StepsDemo />
      </div>
    </Layout>
  );
}

export default PaymentDetails