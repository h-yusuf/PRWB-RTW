import React from 'react';

const Nav = () => {
  return (
    <nav className=' flex fixed justify-center w-full bottom-4'>
      <div className="bg-slate-500 w-1/4 bg-opacity-50 rounded-full flex gap-4 justify-between">
        <div className="p-4">
          <h1 className="text-xl font-bold">
            Home
          </h1>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold">
            Home
          </h1>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold">
            Home
          </h1>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold">
            Experience
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
