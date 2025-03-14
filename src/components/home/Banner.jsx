import React from 'react';
import Image from '../../assets/avatar.png';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../../variants';
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../../animation/settings";
import useMeasure from "react-use-measure";


const Banner = () => {

  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className='section lg:pt-0' id='banner'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left lg:items-center">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[70px] mb-4'>Hafidh Muhammad yusuf</motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[32px] lg:text-[32px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'UI Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-xl">
              I am a UI Designer and Web Developer who creates intuitive, aesthetic, and functional digital solutions for user-friendly and impactful experiences.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0">
              <a href="/Contact">
                {/* <button className="btn btn-lg">Contact me</button> */}
                <MotionConfig transition={transition}>
                  <motion.button
                    ref={ref}
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    whileTap="press"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.02 },
                      press: { scale: 1 }
                    }}
                    onHoverStart={() => {
                      resetMousePosition();
                      setIsHover(true);
                    }}
                    onHoverEnd={() => {
                      resetMousePosition();
                      setIsHover(false);
                    }}
                    onTapStart={() => setIsPress(true)}
                    onTap={() => setIsPress(false)}
                    onTapCancel={() => setIsPress(false)}
                    onPointerMove={(e) => {
                      mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                      mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                  >
                    <motion.div
                      className="shapes "
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                    >
                      <div className="blue blush" />
                      <div className="btn btn-sm blush" />
                      <div className="container">
                      </div>
                    </motion.div>
                    <motion.div
                      variants={{ hover: { scale: 0.98 }, press: { scale: 1 } }}
                      className="label"
                    >
                      Contact me
                    </motion.div>
                  </motion.button>
                </MotionConfig>
              </a>
              <a className='text-gradient btn-link' href="#">My Portofolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-8 items-center justify-center lg:justify-start">
              <a href="https://www.youtube.com/@sacyus_f" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='w-6 h-6' />
              </a>
              <a href="https://github.com/h-yusuf" target="_blank" rel="noopener noreferrer">
                <FaGithub className='w-6 h-6' />
              </a>
              <a href="https://www.linkedin.com/in/h-yusuf313/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-6 h-6' />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 hidden lg:flex msx-w-[320px] lg:max-w-[452px] -mt-5'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
