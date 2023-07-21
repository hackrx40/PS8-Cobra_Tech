import React, { useState } from "react";
import './Radio.css'
const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
  <>
     <div
          className={`flex items-center pl-4 border rounded dark:border-gray-700 radioBox w-[50%] ${
            selectedOption === "option1" ? "bg-[#0072BC]" : ""
          }`}
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value="option1"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-grey-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleOptionChange}
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 ml-2 text-sm font-medium "
          >
            Male
          </label>
        </div>
        <div
          className={`flex items-center pl-4 border rounded dark:border-gray-700 radioBox  w-[50%] ${
            selectedOption === "option2" ? "bg-[#0072BC]" : ""
          }`}
        >
          <input
            id="bordered-radio-2"
            type="radio"
            value="option2"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleOptionChange}
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ml-2 text-sm font-medium "
          >
            Female
          </label>
        </div>
  </>
  );
};

export default HomePage;
