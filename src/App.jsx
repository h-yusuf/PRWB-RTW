import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import MyProject from './pages/MyProject';

// components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MyProject' element={<MyProject/>}/>
      </Routes>
    </Router>
  );
};

export default App;
