import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Rooms from "./components/Rooms.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Bloccks from "./components/Bloccks.jsx";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Offers />
     <Plan />
     <Rooms/>
     <ImageSlider />
     <Bloccks />
    </>
  );
}

export default App;
