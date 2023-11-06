import React from 'react';
// components
import Banner from '../components/home/Banner';
import Header from '../components/home/Header';
import Nav from '../components/home/Nav';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Work from '../components/home/Work';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default Home;
