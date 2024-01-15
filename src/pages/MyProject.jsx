import React from 'react';
// components
import Navbar from '../components/partials/navbar';
import Project from '../components/project/Project';

const MyProject = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Work /> */}
      <Navbar
      name="My Project"
      />
      <Project/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default MyProject;
