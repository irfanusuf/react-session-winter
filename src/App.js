import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Section from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";



function App() {



  const [lightMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!lightMode)
  };

  return (

    <div>
      <BrowserRouter>
        <Navbar
          function={toggleDarkMode}
          buttonName={lightMode ? "DarkMode" : "lightMode"}
          divLi={lightMode ? "nav-li" : "nav-li-dark"}
          divName={lightMode ? "light-nav" : "dark-nav"}
        />

        <Routes>
          <Route path="/" element={<Section user="Hazik" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>


        <Footer
          divName={lightMode ? "footer-light" : "footer-dark"}

        />

      </BrowserRouter>
    </div>
  );
}

export default App;
