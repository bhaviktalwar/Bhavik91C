import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './Routes/NavBar';
import HeroSection from "./herosection";
import FeaturedArticles from "./featuredarticles";
import Tutorials from "./tutorial";
import Subscribe from "./subscribe";
import Footer from "./footer";
import Login from './Routes/Login';
import SignUp from './Routes/Sign-up';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <HeroSection />
            <FeaturedArticles />
            <Tutorials />
            <Subscribe />
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
