import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import MyProject from './pages/MyProject';
import UIUXskils from './pages/UIUXskills';
import MyExperience from './pages/MyExperience';
import WebDev from './pages/WebDev';

// components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MyExperience' element={<MyExperience/>}/>
        <Route path='/MyProject' element={<MyProject/>}/>
        <Route path='/UiUX' element={<UIUXskils/>}/>
        <Route path='/WebDev' element={<WebDev/>}/>
      </Routes>
    </Router>
  );
};

export default App;
