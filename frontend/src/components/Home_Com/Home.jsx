import React from 'react';
import Hero from "./Hero";
import Features from "./Features";
import Works from "./Works";
import CallAction from "./CallAction";
import Footer from './Footer';
import Header from './Header';
import "../../css_styles/btns.css";
import "../../css_styles/links.css";


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