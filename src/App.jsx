import { useState } from 'react';
import './App.css';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import VideoSection from './components/sections/VideoSection';
import ProvenExpertise from './components/sections/ProvenExpertise';
import BlogSection from './components/sections/Blogs';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <ProvenExpertise />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
