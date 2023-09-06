import './assets/App.css'
import Testim from './components/testime'
import Testimo from './components/tesimo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'
import Aos from './components/aos'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

// function-biasa
// function App() { 
    // Arrow function
 const App = () => {
  const navin = "Profile";
  const popX = () => {
    return alert("Button alert props Sucsesfuly");
  }
  const naving = () => {
    return alert("ini penambahan props pada profile ")
  }
  const paragraf = () =>{
    return (
      <ul className='flex'>
        <li>sikok</li>
        <li>duo</li>
        <li>tigo</li>
      </ul>
    )
  }
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings go here (optional)
      once : true,
    });
  }, []);
  
  return (
    <div className='App-header'>
      <Navbar navText={navin} navAlt={naving}/>
      <h1 data-aos="zoom-in" data-aos-duration="800" className='App'>Hello NamaKu Yusuf</h1>
      <Testim paragraf={paragraf}/>
      {/* <TypeTxt/> */}
      <Button clicked={popX}/>
      <Aos/>
      {/* <Testimo/> */}
      <Footer/>
    </div>
  );
}

export default App;
