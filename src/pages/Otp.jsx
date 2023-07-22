import React, { useState } from "react";
import Layout from "../components/Layout";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import { Button } from "@material-tailwind/react";

const OtpPage = () => {
  const navigate = useNavigate();
 
  const [credentials, setCredentials] = useState({
    
    otp:""
    
  });
  const host = "http://localhost:3000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    
     
      //   console.log(userName, email, password, authority, flatNo);
      const response = await fetch(`${host}/api/v1/bajaj/user/otpVerify`, {
        method: "POST",
        // crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          otp:parseInt(credentials.otp,10)
          
        }),
      });
      const json = await response.json();
     
      console.log(json, "hi");
      console.log(json.authToken)
      console.log(localStorage.setItem("token",json.authToken));
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
  <>
  <div className="flex justify-center items-center">
    <form onSubmit={handleSubmit}>
      <input
      type="tel"
      name="otp"
      value={credentials.otp}
      onChange={onChange}
      
      />
      <Button type="submit"
      className="flex bg-cyan-700 text-white w-full mt-18">
        submit
      </Button>
    </form>
  </div>
  
  
  </>
 

        
    </Layout>
  );
};

export default OtpPage;
