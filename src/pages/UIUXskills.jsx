import React from "react";
import SkilsComponent from "../components/experience/SkilsComponent";
import Navbar from "../components/partials/navbar";

const UIUXskils = () => {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Navbar />
        <SkilsComponent />
        {/* <div className="h-[4000px]"></div> */}
      </div>
    </>
  );
};

export default UIUXskils;
