import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";





const App = () => {
  return (
    <>
      <Routes>
   
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<pageNotFound/>}/>
      </Routes>
    </> 
  )
}

export default App
