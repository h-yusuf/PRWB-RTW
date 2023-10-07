import img1 from "../../assets/portfolio-img1.png";
import React from "react";
import { FaFigma, FaGlobe } from "react-icons/fa";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Sertif = () => {
  return (
    <div className="container mx-auto grid gap-12 mb-24">
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Personal Portfolio</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Portfolio With Modern Typography
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                a portfolio website design built using figma with modern
                typography and color grading that has been adjusted.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack Katalog</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catalog Website Featuring Monetrack Application
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              website to advertise the monetrack application which is a money
              income and expenditure tracking application
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Katalog Allodock app</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Allodock Catalog Wireframe And Typography
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              typography of an allodock application design in the form of
              wireframes, color grading, and user experience flow
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* image */}
      </div>
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Personal Portfolio</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Portfolio With Modern Typography
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                a portfolio website design built using figma with modern
                typography and color grading that has been adjusted.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack Katalog</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catalog Website Featuring Monetrack Application
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              website to advertise the monetrack application which is a money
              income and expenditure tracking application
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Katalog Allodock app</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Allodock Catalog Wireframe And Typography
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              typography of an allodock application design in the form of
              wireframes, color grading, and user experience flow
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* image */}
      </div>
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Personal Portfolio</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Portfolio With Modern Typography
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                a portfolio website design built using figma with modern
                typography and color grading that has been adjusted.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack Katalog</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catalog Website Featuring Monetrack Application
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              website to advertise the monetrack application which is a money
              income and expenditure tracking application
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Katalog Allodock app</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Allodock Catalog Wireframe And Typography
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              typography of an allodock application design in the form of
              wireframes, color grading, and user experience flow
            </p>
            <div className="w-full flex gap-2">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* image */}
      </div>
    </div>
  );
};

export default Sertif;
