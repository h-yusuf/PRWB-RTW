import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyProject from './pages/MyProject';
import UIUXskils from './pages/UIUXskills';
import MyExperience from './pages/MyExperience';
import WebDev from './pages/WebDev';
import AnimatedCursor from "react-animated-cursor"
// import { gsap } from "gsap";
// import CircleType from "circletype";
import ContactUs from './pages/ContactUS';
import Example from './animation/example';
import Progres from './nearyou/progres';

// components

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<ContactUs/>}/>
          <Route path='/MyExperience' element={<MyExperience />} />
          <Route path='/MyProject' element={<MyProject />} />
          <Route path='/UiUX' element={<UIUXskils />} />
          <Route path='/WebDev' element={<WebDev />} />
          <Route path='/example' element={<Example />} />
          <Route path='/progres' element={<Progres />} />
        </Routes>
      </Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        data-cursor-text="GO HERE!"
        data-cursor-text-repeat="4"
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
    </>
  );
};

export default App;
