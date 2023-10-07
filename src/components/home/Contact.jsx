import React from 'react';

import { motion } from "framer-motion";

import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <section className='lg:section py-16 ' id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="flex-1">
            <div>
              <h4 className="text-3xl upercase text-accent font-medium mb-2 tracking-">
                Get in Touch
              </h4>
              <h2 className="leading-none mb-12 lg:text-[90px] text-[45px]">
                Let's Work <br /> Togheder!
              </h2>
            </div>
          </motion.div>
          <motion.form 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 lg:items-start' action="">
            <input type="text" className="bg-transparent border-b placeholder:text-white py-3 outline-none w-full focus:border-accent transition-all" placeholder='Your name' />
            <input type="text" className="bg-transparent border-b placeholder:text-white py-3 outline-none w-full focus:border-accent transition-all" placeholder='Your email' />
            <textarea type="text" className="bg-transparent resize-none border-b placeholder:text-white py-12 outline-none w-full focus:border-accent transition-all mb-12" placeholder='Your message'>
            </textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  ) ;
};

export default Contact;
