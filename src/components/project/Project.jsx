import React from "react";
import { FaFigma, FaGlobe } from "react-icons/fa";
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";
import img4 from "../../assets/portfolio-img4.png";
import img5 from "../../assets/portfolio-img5.png";
import img6 from "../../assets/portfolio-img6.png";
import img7 from "../../assets/portfolio-img7.png";
import img8 from "../../assets/portfolio-img8.png";
import img9 from "../../assets/portfolio-img9.png";
import img10 from "../../assets/portfolio-img10.png";
import img11 from "../../assets/portfolio-img11.png";
import img12 from "../../assets/portfolio-img12.png";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Project = () => {
  const WebnonData = () => {
    return alert('No website version yet')
  };
  return (
    <div className="container mx-auto grid gap-12 mb-24">
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
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
                href="https://www.figma.com/proto/Hx8ENDaC475TTltvYBgZY1/PTTDSG?type=design&node-id=1-2&t=HQr7gmksjyZq4maZ-0&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                onClick={() => WebnonData()}
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
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
                href="https://www.figma.com/proto/REcQQ9kKQKrqN55zH2tfzl/Landing-page?type=design&node-id=1-2&t=HQr7gmksjyZq4maZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://katalog-moneytrack-web.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
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
                href="https://www.figma.com/proto/joBeRjXVggbfH00dR3sNE8/Katalog?type=design&node-id=4-8&t=HQr7gmksjyZq4maZ-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A8"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://orchid-department-594606.framer.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>

        {/* image */}
      </div>
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img4}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Wonderfull Yogyakarta</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yogyakarta Tourism And Travel Website
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                a portfolio website design built using figma with modern
                typography and color grading that has been adjusted.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/mHCoojNhVdQPiSPUlN6dAX/wonderfull-jogjakarta?type=design&node-id=118-30&t=yvCiRLCVwXqQq5Du-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=118%3A30"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://wonderfull-jogjakarta.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img5}
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
                Website Chartsy Traking From Funders
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              chartsy website for tracking income and expenditure from funders and visualized in the form of charts
            </p>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/EEt5OdRutjAYQkyms3gnez/UIUX-KAMPUS?type=design&node-id=1-2&t=yvCiRLCVwXqQq5Du-0&scaling=scale-down-width&page-id=0%3A1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://h-yusuf.github.io/responsive/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img6}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Website AdaJasa</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AdaJasa Website Provides a wide range of services
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              AdaJasa Aims to gather service providers as well as bring together service providers and service seekers.
            </p>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/YfitXb0uDbBx4IXgNEa6kr/Web-UTS?type=design&node-id=474-930&t=5dgzA7fJIWitSdBL-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=163%3A215&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://adajasabeta.netlify.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>

        {/* image */}
      </div>
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img7}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Allodock App</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Allodock App To Confirm With Doctor
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                application to make it easier for patients to confirm their health with doctors, can also control health in the application
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/1FfEg1yFnaHFbgW2QlkhKY/AllodockApp?type=design&node-id=193-805&t=86fIhZMKPQT6y7Il-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=172%3A1193&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                onClick={() => WebnonData()}
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img8}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack WebApp</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Application To Control The Entry And Exit Of Money
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              application website with the aim of processing expenses and income both used by individuals and a company.
            </p>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/Bv5ULXFA9KNAhD58jYjeRv/lUTiS?type=design&node-id=44-479&t=86fIhZMKPQT6y7Il-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=44%3A500&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://alodock-app-fvfd7dbfh-h-yusuf.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img9}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">AdaJasa App</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AdaJasa app Provides a wide range of services
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              AdaJasa App Aims to gather service providers as well as bring together service providers and service seekers.
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
        </motion.div>

        {/* image */}
      </div>
      <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
        {/* image */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img10}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Wheater.sh</span>
              </div>
            </div>
          </a>
          <div class="p-5 flex flex-col  justify-between">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rest API Website For Weather Tracking
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                application to make it easier for patients to confirm their health with doctors, can also control health in the application
              </p>
            </div>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/1FfEg1yFnaHFbgW2QlkhKY/AllodockApp?type=design&node-id=193-805&t=86fIhZMKPQT6y7Il-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=172%3A1193&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                onClick={() => WebnonData()}
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img11}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack WebApp</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Application To Control The Entry And Exit Of Money
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              application website with the aim of processing expenses and income both used by individuals and a company.
            </p>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/Bv5ULXFA9KNAhD58jYjeRv/lUTiS?type=design&node-id=44-479&t=86fIhZMKPQT6y7Il-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=44%3A500&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                href="https://alodock-app-fvfd7dbfh-h-yusuf.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
          <a href="#">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img12}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">ShopApp</span>
              </div>
            </div>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                website app builder with European look style
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              a website application builder with the freedom of users to access and customize their own website.
            </p>
            <div className="w-full flex gap-2">
              <a
                href="https://www.figma.com/proto/twK4OWFyAutcPKzyKDYBxM/Web-Shop?type=design&node-id=1-2&t=G7DEOeFMzZPU3kYj-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Figma
                <FaFigma />
              </a>
              <a
                onClick={() => WebnonData()}
                class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>

        {/* image */}
      </div>

    </div>
  );
};

export default Project;

