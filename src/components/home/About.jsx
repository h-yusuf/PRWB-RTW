import React from "react";
import CountUp from "react-countup";
import {FaReact,FaBootstrap,FaFigma} from 'react-icons/fa'
import { BiLogoTailwindCss} from "react-icons/bi";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section mt-4" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 h-screen">

          {/* img */}

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat mix-blend-lighten bg-top h-[640px]  brightness-75 contrast-125 rounded-full"
          ></motion.div>

          {/* text */}
          
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
            I am a UI design and Frond-end Developer with more than 1 year experience.
            </h3>
            <p className="mb-6">
              My portfolio shows the results of my work and experience while
              studying and participating in several small projects. I am
              confident that the quality of my work will continue to grow and
              satisfy my clients in the future.
            </p>

            {/* stats */}
            <div className="flex gap-6 lg:gap-x-10 mb-12">
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2 py-2">
                  {inView ? <CountUp start={-2} end={1} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2 py-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project<br />
                  Complate
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2 py-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satidfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              {/* <a className="text-gradient btn-link" href="#">
                My Skill :
              </a> */}
              <FaReact className='w-10 h-10 fill-blue-500 hover:fill-blue-400'/>
              <FaBootstrap className='w-10 h-10 fill-purple-700 hover:fill-purple-600'/>
              <FaFigma className='w-10 h-10 fill-pink-500 hover:fill-pink-400'/>
              <BiLogoTailwindCss className='w-10 h-10 fill-blue-600 hover:fill-blue-500 '/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
