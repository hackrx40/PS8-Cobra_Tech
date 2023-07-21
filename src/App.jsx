import { Routes, Route } from "react-router-dom";
import { Partner } from "./components";
import LandingPage from "./pages/LandingPage";
import Features from "./pages/Features";
import Client from "./pages/Client";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/clients" element={<Client/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Partner" element={<Partner/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>



      </Routes>

    </>
)
};

export default App;
