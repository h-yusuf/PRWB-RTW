import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import MyProject from './pages/MyProject';
import UIUXskils from './pages/UIUXskills';

// components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MyProject' element={<MyProject/>}/>
        <Route path='/UiUX' element={<UIUXskils/>}/>
      </Routes>
    </Router>
  );
};

export default App;
