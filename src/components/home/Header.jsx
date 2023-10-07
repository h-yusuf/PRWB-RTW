import React from 'react';
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-8 lg:pb-0'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className='h-[70px]' src={Logo} alt="" />
          </a>
          <a href="">
            <button className="btn btn-sm">Work With me</button>
          </a>
        </div>

      </div>
    </header>
  ) ;
};

export default Header;
