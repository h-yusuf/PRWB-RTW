import React from 'react';
import Image from '../assets/avatar.png';

import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='section lg:pt-0' id='banner'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left lg:items-center">
            <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[70px] mb-4'>Muhammad yusuf</motion.h1>
            <motion.div
             variants={fadeIn('up', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
             className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
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
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0 text-xl'>
            I am a Design student and frond end developer with a passion and interest in creating design solutions that make users' lives easier.
            </motion.p>
            <motion.div 
             variants={fadeIn('up', 0.6)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className="flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contact me</button>
            <a className='text-gradient btn-link' href="#">My Portofolio</a>
            </motion.div>
            <motion.div 
             variants={fadeIn('up', 0.7)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className="flex gap-8 items-center justify-center lg:justify-start">
              <FaYoutube/>
              <FaGithub/>
              <FaDribbble/>
            </motion.div>
          </div>
            {/* image */}
            <motion.div 
             variants={fadeIn('down', 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='flex-1 hidden lg:flex msx-w-[320px] lg:max-w-[452px] -mt-5'>
              <img src={Image} alt="" />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
