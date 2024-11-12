import { Navbar } from "./components/Navbar"
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Addproduct from "./components/addproducts/Addproduct"


const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App