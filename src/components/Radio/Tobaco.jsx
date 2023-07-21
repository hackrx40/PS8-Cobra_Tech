import React, { useState } from "react";
import './Radio.css'
const HomePage = () => {
  const [selectedOption1, setselectedOption11] = useState(null);

  const handleOptionChange1 = (event) => {
    setselectedOption11(event.target.value);
  };

  return (
  <>
     <div
          className={`flex items-center pl-4 border rounded dark:border-gray-700 radioBox w-[50%] ${
            selectedOption1 === "option1" ? "bg-[#68BFA8]" : ""
          }`}
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value="option1"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-grey-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleOptionChange1}
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ml-2 text-sm font-medium "
          >
            Yes
          </label>
        </div>
        <div
          className={`flex items-center pl-4 border rounded dark:border-gray-700 radioBox  w-[50%] ${
            selectedOption1 === "option2" ? "bg-[#68BFA8]" : ""
          }`}
        >
          <input
            id=""
            type="radio"
            value="option2"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleOptionChange1}
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ml-2 text-sm font-medium "
          >
            No
          </label>
        </div>
  </>
  );
};

export default HomePage;
