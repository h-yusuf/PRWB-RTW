import React from "react";
// import {Link} from 'react-router-dom'
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";
import {useNavigate} from 'react-router-dom'

import { motion } from "framer-motion";

import {fadeIn} from '../../variants'

const Work = () => {
  const navigate = useNavigate();
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1 flex flex-col gap-y-12  mb-10 lg:mb"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent font-semibold">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-12 text-xl">
                My portfolio shows the results of my work and experience while
                studying and participating in several small projects. I am
                confident that the quality of my work will continue to grow and
                satisfy my clients in the future.
              </p>
              <button className="btn btn-sm" onClick={() => navigate('/MyProject')}>View all project</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
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
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="flex-1 gap-12 mt-2 flex flex-col">

            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
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
            
            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
