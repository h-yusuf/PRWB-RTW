import React from 'react';
// components
import Work from '../components/home/Work';
import Sertif from '../components/project/Sertif';
import Header2 from '../components/project/Header2';

const MyProject = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Work /> */}
      <Header2/>
      <Sertif/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default MyProject;
