import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Research />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
