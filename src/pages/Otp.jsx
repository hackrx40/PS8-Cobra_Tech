import React, { useState } from "react";
import Layout from "../components/Layout";
import OtpInput from 'react-otp-input';
import "./Otp.css";

const OtpPage = () => {
    const [otp, setOtp] = useState('');
  return (
    <Layout>
        <div className="body">

     <OtpInput className="optBox"
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
        </div>
    </Layout>
  );
};

export default OtpPage;
