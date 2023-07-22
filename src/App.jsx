import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import PolicyForm from "./pages/PolicyForm";
import Test from "./pages/Top";
import Otp from "./pages/Otp";
import Register from "./pages/Register";



import Radio from "./components/Radio/Radio";


import pageNotFound from "./pages/pageNotFound";
import PaymentDetails from "./pages/PaymentDetails";
import Razorpay from "./components/Razorpay/Razorpay";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/PolicyForm" element={<PolicyForm/>}/>
        <Route path="/Payments" element={<PaymentDetails/>}/>
        <Route path="/Razorpay" element={<Razorpay/>}/>


        <Route path="/Radio" element={<Radio/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<pageNotFound />} />
      </Routes>
    </> 
  )
}

export default App
