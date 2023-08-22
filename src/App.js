import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Plan from "./components/Plan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Booking />
      <Plan />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
