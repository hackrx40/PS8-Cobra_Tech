import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import PolicyForm from "./pages/PolicyForm";
import Test from "./pages/Top";

import Radio from "./components/Radio/Radio";


import pageNotFound from "./pages/pageNotFound";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/PolicyForm" element={<PolicyForm/>}/>
        <Route path="/Radio" element={<Radio/>}/>


        <Route path="/Test" element={<Test/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<pageNotFound />} />
      </Routes>
    </> 
  )
}

export default App
