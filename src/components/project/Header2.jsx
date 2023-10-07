import React from 'react';
import Logo from '../../assets/logo.svg'
import {useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className='py-8 '>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a className='text-gradient h-[70px] flex flex-col justify-center text-[32px]' href="#">
            {/* <img className='h-[70px]' src={Logo} alt="" /> */}
            My Project
          </a>
          <a href="">
            <button className="btn btn-sm" onClick={()=> navigate('/')}>Home</button>
          </a>
        </div>

      </div>
    </header>
  ) ;
};

export default Header;
