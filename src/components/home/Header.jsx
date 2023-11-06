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
          <a href="https://pf-yusuf.netlify.app">
            <button className="btn btn-sm">Other Site</button>
          </a>
        </div>

      </div>
    </header>
  ) ;
};

export default Header;
