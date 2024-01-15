import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="py-8 z-header relative">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <a
              className="text-gradient h-[70px] flex flex-col justify-center text-[32px]"
              href="#"
            >
              {/* <img className='h-[70px]' src={Logo} alt="" /> */}
              { props.name }
            </a>
            <a href="">
              <button className="btn btn-sm" onClick={() => navigate("/")}>
                Home
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
