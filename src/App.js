import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer/Footer"
import ScrollButton from "./Component/ScrollButton/ScrollButton";
import "./Assets/CSS/animate.css"
import "./Assets/CSS/blog.css"
import "./Assets/CSS/color.css"
import "./Assets/CSS/elpath.css"
import "./Assets/CSS/flaticon.css"
import "./Assets/CSS/global.css"
import "./Assets/CSS/owl.css"
import "./Assets/CSS/responsive.css"
import "./Assets/CSS/rtl.css"
import "./Assets/CSS/service.css"
import "./Assets/CSS/style.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollButton/>
      <Footer />
    </Router>
  );
}
export default App;
