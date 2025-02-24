// we import router from react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./mystyle.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Students from "./Components/Students";



function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
