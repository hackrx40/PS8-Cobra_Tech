import React from 'react'
import Button from './Button'
import { useState } from "react";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';


const Insurence = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex ml-8 cursor-pointer'>
        <div className='font-poppins text-white mr-8'
        onClick={() => setToggle(!toggle)} >
            Insurence
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            
              <li
                className={`font-poppins font-medium text-white cursor-pointer text-[16px] `}
              >
                <Link to="/Partner">Bajaj Life Insurence</Link>
              </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Insurence