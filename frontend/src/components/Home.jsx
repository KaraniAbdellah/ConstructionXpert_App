import React from 'react';
import Hero from "./Home_Com/Hero";
import Features from "./Home_Com/Features";
import Works from "./Home_Com/Works";
import CallAction from "./Home_Com/CallAction";
import Footer from './Home_Com/Footer';
import Header from './Home_Com/Header';
import "../css_styles/btns.css";
import "../css_styles/links.css";


const Home = () => {
  return (
    <div className="min-h-screen  bg-gray-50">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Works></Works>
      <CallAction></CallAction>
      <Footer></Footer>
    </div>
  );
};

export default Home;