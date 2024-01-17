import React, { useEffect } from 'react';
import "./main.css"
import "./fonts.css"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Scene } from "./Scane";

export default function Progres() {


  return (
    <>
     {/* <Canvas
      camera={{
        fov: 100,
        near: 0.1,
        far: 200
      }}
    >
      <OrbitControls />
      <Scene />
    </Canvas> */}
      <body className="eart h-screen">

        <div>
          <h1 className="eart text-3xl">Thanks for visiting this site</h1>
        </div>
        <div>
          <h2 className="eart text-xl">Sorry for the site this section is in process </h2>
        </div>
        <div className="earth hover:scale-150 transition-all duration-300"></div>
        <div>
          <button id="change" className="button rounded-lg eart grid items-center" type="button">
            Continue
          </button>
        </div>
        <div className="text" id="result"></div>
      </body>
    </>
  )
}
